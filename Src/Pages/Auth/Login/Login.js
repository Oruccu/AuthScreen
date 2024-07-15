import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './Login.Styles';
import Input from './../../../Components/Input'
import Button from '../../../Components/Button/Button';
import Title from '../../../Components/Title';
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./../../../Assets/Rabbit.jpg')} style={styles.image} />
      </View>
      <View style={styles.innerContainer}>
        <View >
          <Title Title={'Login'} />
        </View>
        <Input placeHolder={'Name'} THEME={'Primary'} />
        <Input placeHolder={'Mail'} THEME={'Primary'} />
        <Input placeHolder={'Password'} THEME={'Primary'} />
        <Input placeHolder={'Password'} THEME={'Primary'} />
        <Button buttonName={'Register'} />
      </View>
    </SafeAreaView>
  )
}

export default Login

