import { StatusBar, useColorScheme, View} from 'react-native';
import globalStyle from './assets/style/globalStyle';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './assets/navigation/MainNavigation';
import { Provider } from 'react-redux';
import { store } from './assets/database/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
          <NavigationContainer>
            <View style={globalStyle.flex}>
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <NavigationStack />
            </View>
          </NavigationContainer>
    </Provider>
  );
};

export default App;
