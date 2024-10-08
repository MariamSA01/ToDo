module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript', // Add TypeScript preset
  ],
  plugins: [
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }]
  ]
};