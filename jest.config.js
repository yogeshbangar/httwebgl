process.env.TZ = 'UTC';

module.exports = {
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/setupTest.ts'],
  transform: {
    '\\.[jt]sx?$': 'ts-jest'
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  testTimeout: 10000,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  globals: {
    window: {},
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
      isolatedModules: true
    }
  }
};
