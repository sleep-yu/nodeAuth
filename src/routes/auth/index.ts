import { registerRecord } from './register';
import { signInRecord } from './signIn'

export const authRoutes = [
  {
    method: 'POST' as const,
    path: '/auth/register',
    options: registerRecord
  },
  {
    method: 'POST' as const,
    path: '/auth/sign_in',
    options: signInRecord
  }
];
