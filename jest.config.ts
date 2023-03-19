import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/styleMock.js"
    }

};

export default config;

