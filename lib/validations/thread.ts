import * as z from 'zod';

export const ThredValidation = z.object({
  thread: z.string().nonempty().min(3, { message: 'Minimum 3 charachters' }),
  accountId: z.string(),
})

export const CommentValidation = z.object({
  thread: z.string().nonempty().min(3, { message: 'Minimum 3 charachters' }),
})