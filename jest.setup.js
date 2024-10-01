import 'react-native-gesture-handler/jestSetup';
 
// Mock any necessary modules
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-vector-icons/Ionicons', () => {
  return {
    __esModule: true,
    default: () => null, // or any default mock you prefer
  };
});