import { StyleSheet, Text, View } from 'react-native';
import { StatusBar, NativeBaseProvider} from 'native-base'
import { TEMAS } from './src/estilos/temas';


import Rotas from './src/Rotas';
import Bemvindo from './src/Bemvindo';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      <Rotas/>
    </NativeBaseProvider>
    
  );
}
