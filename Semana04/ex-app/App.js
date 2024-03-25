import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Contador } from './src/components/Contador/Contador';
import Home from './src/pages/PageHome';
import { PAGES } from './src/utils/pages-labels';
import Login from './src/pages/PageLogin';
import Subscription from './src/pages/PageSubscription';

export default function App() {

  const [screen, setScreen] = useState(PAGES.HOME);
  // const [ estaLogado...]

  const navigate = (screenToNavigate) => {
    console.log("navegando para " + screenToNavigate);
    setScreen(screenToNavigate);
  }
  return (
    <>
      {screen == PAGES.HOME && <Home navigate={navigate} />}
      {screen == PAGES.LOGIN && <Login navigate={navigate} />}
      {screen == PAGES.SUBSCRIPTION && <Subscription navigate={navigate} />}
      
      {/* {
        estaLogado? && <>
          // renderiza um grupo de paginas para o usuario conseguir navegar
        </>
      } */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    borderWidth: 4,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    color: 'blue',
    fontSize: 20,
  }
});
