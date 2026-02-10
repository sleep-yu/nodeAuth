import { RouteOptions } from '@hapi/hapi';
import Joi from 'joi';
import { signIn } from '../../controllers/authController';

const siginInPayloadSchema = Joi.object({
  login: Joi.string().required().description('邮箱/用户名'),
  password: Joi.string().min(6).max(15).required().description('密码'),
})

const signInResponseSchema = Joi.object({
  success: Joi.boolean().required().description('是否成功'),
  message: Joi.string().optional().allow('', null).description('消息提示'),
  data: Joi.object({
    id: Joi.any().optional().description('id'),
    email: Joi.string().optional().description('邮箱'),
    username: Joi.string().allow('', null).optional().description('用户名'),
    nickname: Joi.string().allow('', null).optional().description('昵称'),
    sex: Joi.number().optional().description('性别'),
    token: Joi.string().optional().description('jwt token')
  }).optional().description('数据层')
})

export const signInRecord: RouteOptions = {
  description: '用户登录',
  notes: '通过邮箱/用户名和密码登录',
  tags: ['api', 'auth'],
  validate: {
    payload: siginInPayloadSchema
  },
  response: {
    status: { 200: signInResponseSchema },
    options: { stripUnknown: true }
  },
  handler: signIn
};
