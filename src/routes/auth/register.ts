import { RouteOptions } from '@hapi/hapi';
import Joi from 'joi';
import { register } from '../../controllers/authController';

const registerPayloadSchema = Joi.object({
  email: Joi.string().email().required().description('邮箱'),
  password: Joi.string().required().description('密码'),
  username: Joi.string().min(2).max(45).optional().description('用户名'),
  nickname: Joi.string().min(2).max(45).optional().description('昵称'),
  sex: Joi.number().valid(0, 1, 2).optional().description('性别: 0-男, 1-女, 2-未选择')
})

const registerResponseSchema = Joi.object({
  success: Joi.boolean().required(),
  message: Joi.string().required(),
  data: Joi.object({
    _id: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().allow(null).optional(),
    nickname: Joi.string().allow(null).optional(),
    sex: Joi.number().valid(0, 1, 2).required(),
    createdAt: Joi.date().required()
  }).required()
})

export const registerRecord: RouteOptions = {
  description: '用户注册',
  notes: '通过邮箱和密码注册新用户',
  tags: ['api', 'auth'],
  validate: {
    payload: registerPayloadSchema
  },
  response: {
    status: { 200: registerResponseSchema }
  },
  handler: register
};
