import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.Styles'


export default function Button({handlePress, buttonName}) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.buttonName}>{buttonName}</Text>
      </View>
    </TouchableOpacity>
  )
}