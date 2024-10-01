module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
    '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript files
    '^.+\\.js$': 'babel-jest', // Ensure JavaScript files are also transformed
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional setup file
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-redux|@react-native|@react-navigation|react-native-vector-icons/Ionicons)/)', // Allow specific node_modules to be transformed
  ],
};
