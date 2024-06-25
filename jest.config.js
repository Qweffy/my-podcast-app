import dotenv from 'dotenv'

dotenv.config({ path: '.env.test' })

export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
                babelConfig: true,
            },
        ],
        '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
}
