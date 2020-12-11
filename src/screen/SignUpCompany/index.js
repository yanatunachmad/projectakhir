import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native';
import { Button, Input, Gap, Header } from "../../component";

function SignUpHunter({navigation}) {
  
  const [width, setWidth] = useState(Dimensions.get('window').height * 0.10);

  return (
    <>
      <Header goBack title="Registrasi Akun"/>
      <View style={styles.page}>
        <View style={styles.body(width)}>
          <Input placeholder="Company Name"/>
          <Gap height={31}/>
          <Input placeholder="Email"/>
          <Gap height={31}/>
          <Input placeholder="Phone Number"/>
          <Gap height={31}/>
          <Input placeholder="Username"/>
          <Gap height={31}/>
          <Input placeholder="Password" secureTextEntry/>
          <Gap height={31}/>
          <Button title="Register" onPress={() => navigation.replace('SignInCompany')}/>
        </View>
      </View>
    </>
  );
}

export default SignUpHunter;

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