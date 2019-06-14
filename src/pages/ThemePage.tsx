import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'

import ThemeStore from 'stores/ThemeStore'

interface ThemePageProps {
  themeStore: ThemeStore
}

@inject('themeStore')
@observer
export default class ThemePage extends Component<ThemePageProps> {
  render() {
    const { themeStore } = this.props
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: themeStore.colors.primary },
        ]}
      >
        <Text> Primary: {themeStore.colors.primary} </Text>
        <Text style={{ color: themeStore.colors.secondary }}>
          Secondary: {themeStore.colors.secondary}
        </Text>
        <Text>{themeStore.ColorText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
