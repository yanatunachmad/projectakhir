import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native';
import { Button, Input, Gap, Header } from "../../component";

function SignUp({navigation}) {
  
  const [width, setWidth] = useState(Dimensions.get('window').height * 0.10);

  return (
    <>
      <Header goBack title="Registrasi Akun"/>
      <View style={styles.page}>
        <View style={styles.body(width)}>
          <Input placeholder="Email"/>
          <Input placeholder="Password" secureTextEntry/>
          <Input placeholder="Nama"/>
          <Input placeholder="No. Hnadphone"/>
          <Gap height={20}/>
          <Button title="SUBMIT" onPress={() => navigation.replace('MainPage')}/>
        </View>
      </View>
    </>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "white"
  },
  body:(width)=> ({
    paddingTop: width
  }),
  regist: {
    fontSize: 15,
    fontWeight: "600",
    color: "black",
    textAlign: "center"
  },
});