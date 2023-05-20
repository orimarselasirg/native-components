import 'react-native-gesture-handler';
import React from 'react';
// import {View} from 'react-native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { ThemeProvider } from './src/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
        <StackNavigation />
    </ThemeProvider>
  );
};

// const AppState = ({children}: any) => {
//   return (
//     <ThemeProvider>
//       {children}
//     </ThemeProvider>
//   );
// };

export default App;
