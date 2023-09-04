import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider , TextInput} from 'react-native-paper';

import { theme } from './App.style';
import AppNavigator from './app/app.navigator';


export default function App() {
  return (
    <PaperProvider   theme={theme} >
   <AppNavigator />
    </PaperProvider>
  );
}


