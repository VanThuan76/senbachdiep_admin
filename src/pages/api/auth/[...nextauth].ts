import NextAuth from 'next-auth/next';
import { NextApiRequest, NextApiResponse } from 'next';
import nextAuthOptions from '@/src/shared/lib/auth/auth';
export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
