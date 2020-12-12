import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { IconBack } from '../../assets';

const Header = ({goBack, title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.content}>
        { goBack &&
          <TouchableOpacity onPress={() => navigation.goBack()}>
           <Image source={IconBack} style={styles.logo} />
          </TouchableOpacity>
        }
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 17,
    paddingVertical: 18,
    backgroundColor: colors.tertiary
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    marginLeft: 12,
    color: colors.header,
    fontSize: 19,
    fontWeight: "600"
  },
});