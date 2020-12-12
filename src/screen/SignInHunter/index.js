import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconBack, IconEmail, IconGembok } from '../../assets';
import { Button, Input, Gap, Header, Backbutton } from "../../component";
import colors from '../../utils/colors/index'

function SignInHunter({ navigation }) {

  const [width, setWidth] = useState(Dimensions.get('window').height * 0.18);
  const [height, setHeight] = useState(Dimensions.get('window').height * 0.1);

  return (
    <>
      <ScrollView>
      
      <Header goBack title="Registrasi Akun"/>
    <View style={styles.headerContainer}>
        <View style={styles.page}>
          <View style={styles.body(width)}>
          
          <Text style={styles.title}>Login</Text>
          <Gap height={100} />
            <View style={styles.halaman} >
              <Input source={IconEmail} placeholder="Email" text="Email or Username" />
            </View>
            <Gap height={20} />
            <View >
              <Input source={IconGembok} placeholder="Password" secureTextEntry text="Enter Password" />
            </View>
            <Gap height={80} />
            <Button title="LOGIN" onPress={() => navigation.replace('MainPage')} />
            <Gap height={40} />
            <Text style={styles.regist}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpHunter')}>
              <Text style={styles.register}>Registrasi</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ScrollView>
    </>
  );
}

export default SignInHunter;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    paddingBottom: 90,
    
  },
  page: {
    
    paddingHorizontal: 40,
    backgroundColor: "white",
    flex:1,
    
  },
  halaman: {
    paddingTop: 1,
  },
  gambar: {
    backgroundColor: "white",
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 18,
    padding: 5,
  },
  gam: {
    paddingTop: 20,
    padding: 20,
  },
  body: (width) => ({
    paddingTop: width
  }),
  title: {
    fontSize: 29,
    fontWeight: "700",
    color: "#000000",
    textAlign: "left"
  },
  input: {
    paddingLeft: 20,
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