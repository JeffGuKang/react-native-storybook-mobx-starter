import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import { Image, View } from 'react-native'
import { TextButton, IconButton } from '.'
export const actions = {
  onTextButton: action('onTextButton'),
  onIconButton: action('onIconButton'),
}

const imgUri =
  'data:image/jpeg;base64,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'
const ImageIcon = () => (
  <Image
    source={{ uri: imgUri }}
    style={{ width: 30, height: 30, backgroundColor: 'blue' }}
  ></Image>
)

storiesOf('Components|Atoms|Buttons', module)
  .addDecorator((getStory: () => React.ReactNode) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {getStory()}
      </View>
    )
  })
  .addDecorator(withKnobs)
  .add(
    'Buttons',
    () => (
      <View>
        <TextButton
          onPress={actions.onTextButton}
          title={object('TextButton', 'TextButton')}
          containerStyle={{ marginBottom: 10 }}
        />
        <IconButton
          icon={<ImageIcon />}
          onPress={actions.onIconButton}
          title={object('IconButton', 'IconButton')}
        />
      </View>
    ),
    {
      notes: 'Buttons',
    }
  )
