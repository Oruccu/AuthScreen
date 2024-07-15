import { View, Text } from 'react-native'
import React from 'react'
import styles from './Title.Styles'
const Title = ({Title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Title}</Text>
    </View>
  )
}

export default Title