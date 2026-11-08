import type { FormErrors } from '@vorms/core';
import type { ZodSchema } from 'zod';

export function useZodValidator<T extends Record<string, unknown>>(
  schema: ZodSchema<T>
) {
  return async (values: T): Promise<FormErrors<T> | undefined> => {
    const result = schema.safeParse(values);
    if (!result.success) {
      const errors = {} as Record<keyof T, string>;
      for (const issue of result.error.issues) {
        const path = issue.path[0] as keyof T;
        if (path) {
          errors[path] = issue.message;
        }
      }
      return errors as FormErrors<T>;
    }
  };
}
