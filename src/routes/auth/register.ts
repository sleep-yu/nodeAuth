import { RouteOptions } from '@hapi/hapi';

export const registerRecord: RouteOptions = {
  description: '用户注册',
  tags: ['api', 'auth'],

  async handler(request, h) {
    const payload = request.payload as any;

    return {
      success: true,
      data: payload
    };
  }
};
