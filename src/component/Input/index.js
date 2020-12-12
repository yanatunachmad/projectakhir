
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { IconEmail } from '../../assets';
import { colors } from '../../utils';

const Input = ({ value, onChangeText, secureTextEntry, disable, placeholder, source, text }) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View onFocus={onFocusForm}
      onBlur={onBlurForm}
      style={styles.input(border)}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      editable={!disable}
      selectTextOnFocus={!disable}
       >
      <View style={styles.gambar}>
      <View style={styles.gam}>
      <Image source={source} size={10}/>
      </View>
      <View style={styles.test}>
      <Text style={styles.upper}> {text}</Text>
      <TextInput placeholder={placeholder} style={styles.isi}/>
      
       </View>
       </View>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 2,
    borderColor: border,
    borderRadius: 18,
    
  }),
  gambar: {    
    flexDirection: 'row', 
    paddingLeft:40,
          
  },
  gam: {    
    position:'absolute',
    paddingVertical:10,
    paddingLeft:5,
    flex:1,
    
    
  },
  test: {    
    flexDirection:'column',
    paddingLeft:40,
    
  },
  upper: {    
    paddingTop:20,
    fontSize:15,
  },
  isi: {    
    paddingBottom:20,
    fontSize:15,
    
  },
});