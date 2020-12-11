import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native';
import { Button, Gap } from "../../component";

function ChooseSignUp({navigation}) {
  
  const [width, setWidth] = useState(Dimensions.get('window').height * 0.35);

  return (
    <>
      <View style={styles.page}>
        <View style={styles.body(width)}>
          <Text style={styles.title}>LOGIN BY :</Text>
          <Gap height={19}/>
          <Button title="HUNTER" onPress={() => navigation.replace('SignInHunter')}/>
          <Gap height={30}/>
          <Button title="COMPANY" onPress={() => navigation.replace('SignInCompany')}/>

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