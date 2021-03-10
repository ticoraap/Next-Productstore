module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    // testPathIgnorePatterns: ['/.next/', '/node_modules/', '/lib/', '/tests/', '/coverage/'],
    modulePaths: ["<rootDir>/src"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/tests/unit/config/fileMock.ts",
        "\\.(css|less)$": "<rootDir>/tests/unit/config/styleMock.ts",
    },
    transform: {
        "\\.[jt]sx?$": "babel-jest",
    },
};
