import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight,Image } from 'react-native';
import { Button, Gap } from "../../component";

function ChooseSignUp({navigation}) {
  
  const [width, setWidth] = useState(Dimensions.get('window').height * 0.35);

  return (
    <>
      <View style={styles.page}>
        <View style={styles.body(width)}>
          <Text style={styles.title}>LOGIN BY :</Text>
          {/* <Gap height={19}/>
          <Button title="HUNTER" onPress={() => navigation.replace('SignInHunter')}/>
          <Gap height={30}/>
          <Button title="COMPANY" onPress={() => navigation.replace('SignInCompany')}/> */}
           <View style={styles.buttonbottom}>
              <Image style={styles.logo}source={require('../../assets/icon/logohunter.png')}/>
              <TouchableOpacity>
                <TouchableHighlight underlayColor="#FADC9C">
                    <Text onPress = {()=> navigation.replace('SignInHunter')} style={styles.submitButton}>HUNTER</Text>
                </TouchableHighlight>
              </TouchableOpacity>
            </View>
            <Text style={styles.or}>OR</Text>
            <View style={styles.buttonbottom}>
              <Image style={styles.logo}source={require('../../assets/icon/companylogo.png')}/>
              <TouchableOpacity>
                <TouchableHighlight underlayColor="#FADC9C">
                    <Text onPress = {()=> navigation.replace('SignInCompany')} style={styles.submitButton}>COMPANY</Text>
                </TouchableHighlight>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
}

export default ChooseSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "#FCF1D8"
  },
  buttonbottom: {
    flexDirection: 'row',
    backgroundColor:'#FADC9C',
    borderRadius:10,
    borderColor: '#fff',
    width: 300,
    height: 50,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
},
logo: {
marginLeft: 10,
 height: 40,
 width: 35,
},
or:{
  textAlign: 'center'
},
  submitButton:{
    color:'#000000',
    textAlign:'center',
    fontSize: 15,
    marginLeft: 20,
    justifyContent: 'center'
  },
  body:(width)=> ({
    paddingTop: width
  }),
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
    textAlign: "center"
  },
});