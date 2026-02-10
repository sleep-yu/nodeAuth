import { registerUser, signInUser } from "../services/userService";
import { IRegisterData, ISignInPayload } from "../interface";

export const register = async (request: any, h: any) => {
  const payload = request.payload as IRegisterData;
  try {
    const result = await registerUser(payload);
    if (!result.success) {
      return h.response(result).code(400);
    } else {
      return h.response(result).code(200);
    }
  } catch (error) {
    return h.response({
      success: false,
      message: '注册失败'
    }).code(500);
  }
}

export const signIn = async (request: any, h: any) => {
  const payload = request.payload as ISignInPayload;
  try {
    const result = await signInUser(payload);
    if (!result.success) {
      return h.response(result).code(400);
    }
    return h.response(result).code(200);
  } catch (error) {
    return h.response({
      success: false,
      message: '登录失败'
    }).code(500);
  }
}