import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
    moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
