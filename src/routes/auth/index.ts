import { registerRecord } from './register';

export const authRoutes = [
  {
    method: 'POST' as const,
    path: '/auth/register',
    options: registerRecord
  }
];
