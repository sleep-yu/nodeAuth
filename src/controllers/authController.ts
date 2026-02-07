import { registerUser } from "../services/userService";
import { IRegisterData } from "../interface";

export const register = async (request: any, h: any) => {
  const payload = request.payload as IRegisterData;
  try {
    const result = await registerUser(payload);
    if (!result.success) {
      return h.response(result).code(400);
    }
  } catch (error) {
    return h.response({
      success: false,
      message: '注册失败'
    }).code(500);
  }
}