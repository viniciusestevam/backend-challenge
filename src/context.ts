import { Context } from './types/graphql';
import { PrismaClient } from '@prisma/client';

export const context: Partial<Context> = {
  prisma: new PrismaClient(),
};
