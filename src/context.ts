import { Context } from './types/graphql';
import { PrismaClient } from '@prisma/client';

// podemos ter a garantia tipada que o retorno dessa função
// tenha com certeza Context(e outras propriedades)
// usando Omit<T, excl> ou
// Pick<T, incl>
export const context: Omit<Context, 'dataSources'> = {
  prisma: new PrismaClient()
};
