import User from "../model/User";
import { IRegisterData } from "../interface";
import bcrypt from 'bcrypt';

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
        id: user._id
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