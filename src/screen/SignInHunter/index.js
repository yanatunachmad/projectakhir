import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native';
import { Button, Input, Gap, Header } from "../../component";

function SignInHunter({navigation}) {
  
  const [width, setWidth] = useState(Dimensions.get('window').height * 0.18);
  const [height, setHeight] = useState(Dimensions.get('window').height * 0.1);

  return (
    <>
    <View style={styles.headerContainer}>
        <Gap height={height}/>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.title}>Hunter</Text>
      </View>
      <View style={styles.page}>
        <View style={styles.body(width)}>
          <Input placeholder="Email"/>
          <Gap height={25}/>
          <Input placeholder="Password" secureTextEntry/>
          <Gap height={20}/>
          <Button title="LOGIN" onPress={() => navigation.replace('MainPage')}/>
          <Gap height={20}/>
          <Text style={styles.regist}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpHunter')}>
            <Text style={styles.register}>Registrasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default SignInHunter;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    padding: 20
  },
  page: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "white"
  },
  body:(width)=> ({
    paddingTop: width
  }),
  title: {
    fontSize: 29,
    fontWeight: "600",
    color: "#000000",
    textAlign: "left"
  },
  regist: {
    fontSize: 12,
    fontWeight: "600",
    color: "black",
    textAlign: "center"
  },
  register: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#F09E56",
    textAlign: "center"
    
  },
});