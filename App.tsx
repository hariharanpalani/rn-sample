/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import { SGThemeProvider, Button, Text } from './src';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { myTheme } from "./src/constants";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const pressHandler = () => {
    console.log('handle click envent')
    Alert.prompt('Button Clicked');
  }

  return (
    <SGThemeProvider >
      <SafeAreaView style={{
        marginLeft: 10,
        flex: 1,
      }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Button onPress={() => console.log('clicked')}>
          Primary
        </Button>
        <Button type="secondary" size="md" disabled={true}>
          Secondary
        </Button>
        <Button type="success" size="sm">
          Success
        </Button>
        <Button type="warning" size="xs">
          Warning
        </Button>
        <View>
          <Text h1 italic>Heading 1</Text>
          <Text h2 bold>Heading 2</Text>
          <Text h3 center>Heading 3</Text>
          <Text h4>Heading 4</Text>
          <Text h5>Heading 5</Text>
          <Text p>Paragraph</Text>
          <Text muted>This is a muted paragraph.</Text>
        </View>
      </SafeAreaView>
    </SGThemeProvider>
  );
};

export default App;
