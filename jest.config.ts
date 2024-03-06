// import type {Config} from 'jest';
import type { Config as Config_2 } from '@jest/types';

const config: Config_2.InitialOptions = {
  setupFilesAfterEnv: [
    '<rootDir>/src/config/setupTests.ts',
    '@testing-library/jest-dom/extend-expect',
  ],
};

export default config;
