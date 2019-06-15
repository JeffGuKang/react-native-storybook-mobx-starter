import React from 'react'
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native'

interface TextButtonProps {
  onPress: () => void
  title: string
  containerStyle?: ViewStyle
  titleStyle?: TextStyle
}

const TextButton: React.FC<TextButtonProps> = ({
  onPress,
  title,
  containerStyle,
  titleStyle,
}: TextButtonProps) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.buttonContainer, containerStyle]}>
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}

TextButton.defaultProps = {
  title: 'title',
}

interface IconButtonProps extends TextButtonProps {
  icon: React.ComponentType | JSX.Element
}

const IconButton = ({
  onPress,
  icon,
  title,
  containerStyle,
  titleStyle,
}: IconButtonProps) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.buttonContainer, containerStyle]}>
        {icon}
        {title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 50,
    backgroundColor: 'pink',
  },
  titleStyle: {
    color: 'white',
  },
})

export { TextButton, IconButton }
