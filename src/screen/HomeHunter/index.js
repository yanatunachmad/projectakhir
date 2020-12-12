import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { HomeScreenHunter, ViewCompany } from '..';
import { Telkomsel, Indosat, XL } from "../../assets";
import { Gap, Input, Item, TransactionCard } from "../../component";
import { colors } from "../../utils";
import SignInHunter from '../SignInHunter';

function HomeHunter({ navigation }) {
  const [height, setHeight] = useState(Dimensions.get('window').height * 0.07);
  const menuType = [  {} ];

  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.menuGrid}>
          {menuType.map(menu => {
            return (
              <View style={styles.tengah}>
                <Gap height={50} />
                <TouchableOpacity key={menu.title} onPress={() => navigation.navigate(menu.navigasi)}>
                  <View style={styles.menu}>
                    <TextInput placeholder="Search Company" />
                  </View>
                </TouchableOpacity>
              </View>
            )})
          }
        </View>

        <View style={styles.transaction}>
          <Text style={styles.transactionTitle}>5 Transaksi Terakhir Anda</Text>
          <Gap height={10} />
          <TouchableOpacity  onPress={() => navigation.navigate(ViewCompany)}>
          <Item Company="Indosat" email="xxx@gmail.com" Number="08292018273" source={Indosat}/>
          </TouchableOpacity>
          <Gap height={10} />
          <Item Company="Telkomsel" email="xxx@gmail.com" Number="08292018273" source={Telkomsel} />
          <Gap height={10} />
          <Item Company="XL" email="xxx@gmail.com" Number="08292018273" source={XL} />
        </View>

        {/* <Gap height={10}/> */}
      </View>
    </ScrollView>
  );
}

export default HomeHunter;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.tertiary,

  },
  titleSaldo: {
    fontSize: 14
  },
  Container: {
    backgroundColor: 'white'
  },
  numberSaldo: {
    fontSize: 36,
    fontWeight: '500',
    color: "#575757"
  },
  //------------- MENU GRID
  menuGrid: {
    padding: 20,
    backgroundColor: colors.tertiary,
    borderRadius: 5,
    position: 'relative'

  },
  menu: {

    borderRadius: 20,

    height: 50,
    backgroundColor: 'white',
  },
  image: {
    height: 25,
    width: 25
  },
  menuTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: colors.white,
    marginBottom: 7
  },


  //------------- TRANSACTION
  transaction: {
    margin: 13
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: "#000"
  }
});