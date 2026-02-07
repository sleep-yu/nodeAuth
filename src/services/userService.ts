import User from "../model/User";
import { IRegisterData } from "../interface";

export const registerUser = async (data: IRegisterData) => {
  try {
    const user = new User(data);
    await user.save();

    return {
      success: true,
      message: '注册成功',
      data: user
    }
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