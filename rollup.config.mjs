import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import url from '@rollup/plugin-url'
import postcss from 'rollup-plugin-postcss'
import dotenv from 'rollup-plugin-dotenv'
import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
      }),
      postcss({
        modules: true,
      }),
      alias({
        resolve: ['.js', '.jsx', '.ts', '.tsx'],
        entries: [{ find: 'src', replacement: './src' }],
      }),
      url({
        include: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.png'],
        limit: false,
        emitFiles: true,
      }),
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
      }),
      terser(),
      dotenv(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: ['styled-components'],
    plugins: [dts(), dotenv()],
  },
]
