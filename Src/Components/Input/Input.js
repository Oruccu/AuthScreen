import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.Styles'
import Color from '../../Styles/Color'

const Input = ({onChangeText, placeHolder,THEME}) => {
  return (
    <View style={styles[THEME].container}>
      <TextInput
      style={styles[THEME].input}
      onChange={onChangeText}
      placeholder={placeHolder}
      placeholderTextColor={Color.White}/>
    </View>
  )
}

export default Input