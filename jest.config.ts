import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { defaults as tsjPreset } from 'ts-jest/presets';

import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
  ...tsjPreset,
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: `<rootDir>${compilerOptions.baseUrl}`,
  }),
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/config/setupTest.ts'],
  testEnvironment: 'jsdom',
  testRegex: '.spec.t(sx)?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|sass|scss)$': 'jest-css-modules-transform',
  },
  verbose: true,
};

export default config;
