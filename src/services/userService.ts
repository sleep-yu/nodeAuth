import User from "../model/User";
import { IRegisterData, ISignInPayload } from "../interface";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

// 加密强度
const SALT_ROUNDS = 10;

export const registerUser = async (data: IRegisterData) => {
  try {
    // 加密密码
    const hashPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
    // 创建用户，使用加密后的密码
    const user = await User.create({
      ...data,
      password: hashPassword
    })

    const result = {
      success: true,
      message: '注册成功',
      data: {
        ...user.toJSON(),
      }
    }
    return result;
  } catch (error: any) {
    if (error.code === 11000) {
      return {
        success: false,
        message: '邮箱或用户名已存在'
      };
    }
    if (error.name === 'ValidationError') {
      return {
        success: false,
        message: error.message
      };
    }

    throw error;
  }
}

export const signInUser = async (data: ISignInPayload) => {
  const { login, password } = data;

  // 通过邮箱或用户名查找用户
  const user = await User.findOne({
    $or: [{ email: login }, { username: login }]
  }).select('+password');

  if (!user) {
    return { success: false, message: '用户不存在' };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { success: false, message: '密码错误' };
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' })

  return {
    success: true,
    message: '登录成功',
    data: { token, ...user.toJSON() }
  };
}