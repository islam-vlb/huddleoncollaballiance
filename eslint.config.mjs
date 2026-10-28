import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  { ignores: ['next-env.d.ts', '.next/**', 'node_modules/**', 'scripts/**'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];
