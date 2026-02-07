import { RouteOptions } from '@hapi/hapi';
import Joi from 'joi';
import { register } from '../../controllers/authController';

const registerPayloadSchema = Joi.object({
  email: Joi.string().email().required().description('邮箱'),
  password: Joi.string().min(6).max(15).required().description('密码'),
  username: Joi.string().min(2).max(45).optional().description('用户名'),
  nickname: Joi.string().min(2).max(45).optional().description('昵称'),
  sex: Joi.number().valid(0, 1, 2).optional().description('性别: 0-男, 1-女, 2-未选择')
})

export const registerRecord: RouteOptions = {
  description: '用户注册',
  notes: '通过邮箱和密码注册新用户',
  tags: ['api', 'auth'],
  validate: {
    payload: registerPayloadSchema
  },
  handler: register
};
