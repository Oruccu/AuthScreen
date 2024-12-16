import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './Login.Styles';
import Input from './../../../Components/Input'
import Button from '../../../Components/Button/Button';
import Title from '../../../Components/Title';
import * as Yup from 'yup';
const Login = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./../../../Assets/Rabbit.jpg')} style={styles.image} />
      </View>
      <View style={styles.innerContainer}>
        <View >
          <Title Title={'Kayıt Ol'} />
        </View>
        <Input placeHolder={'İsim'} THEME={'Primary'} />
        <Input placeHolder={'Mail'} THEME={'Primary'} />
        <Input placeHolder={'Şifre'} THEME={'Primary'} />
        <Input placeHolder={'Şifre'} THEME={'Primary'} />
        <Button buttonName={'Kayıt Ol'} />
      </View>
    </SafeAreaView>
  )
}

export default Login

