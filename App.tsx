/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Storybook from './storybook'

import stores from 'stores'
import { Provider } from 'mobx-react'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

interface Props {
  a?: 'a'
}
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Storybook MobX Starter
        </Text>
        <Text style={styles.instructions}>Try Storybook with </Text>
        <Text style={styles.commend}>$ yarn start:storybook --reset-cache</Text>
        <Text style={styles.instructions}>And reload.</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  commend: {
    textAlign: 'center',
    color: 'blue',
  },
})

const InjectedComponent = () => {
  const storybookRun = process.env.STORYBOOK
  console.log('StoryBook: ', storybookRun)
  const ChildrenComponent = storybookRun == 'true' ? Storybook : App
  return (
    <Provider {...stores}>
      <ChildrenComponent></ChildrenComponent>
    </Provider>
  )
}

export default InjectedComponent
