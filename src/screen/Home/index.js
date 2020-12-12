import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Telkomsel, Indosat, XL } from "../../assets";
import { Gap, Input, Item, TransactionCard } from "../../component";
import { colors } from "../../utils";

function Home({navigation}) {

  const [height, setHeight] = useState(Dimensions.get('window').height * 0.07);

  const menuType = [
    {
      
    },
   
  ];

  const transactionData = [
<Item/>
  ];

  return (
    <ScrollView>

       {/* ------- HEADER ---------- */}
      <View style={styles.headerContainer}>
        <Gap height={height}/>
        <View style={styles.menuGrid}>
        {menuType.map(menu => {
            return(
              <TouchableOpacity key={menu.title} onPress={() => navigation.navigate(menu.navigasi)}>
                <View style={styles.menu}>
                  <TextInput placeholder="Search Company" />
                </View>
                <Text style={styles.menuTitle}>{menu.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>  
      </View>

      <Gap height={20}/>

       {/* ------- MENU GRID ---------- */}
      
      
       {/* ------- TRANSACTION ---------- */}
      <View style={styles.transaction}>
        <Text style={styles.transactionTitle}>5 Transaksi Terakhir Anda</Text>
        <Gap height={10}/>
        
            
         <Item Company="Telkomsel" email="xxx@gmail.com" Number="08292018273"/>
         <Gap height={10}/>
         <Item Company="Telkomsel" email="xxx@gmail.com" Number="08292018273"/>
         <Gap height={10}/>
         <Item Company="Telkomsel" email="xxx@gmail.com" Number="08292018273"/>
         
            
        
      </View>

      {/* <Gap height={10}/> */}

    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.tertiary,
    paddingVertical: 5
  },
  titleSaldo: {
    fontSize: 14
  },
  numberSaldo: {
    fontSize: 36,
    fontWeight: '500',
    color: "#575757"
  },
  //------------- MENU GRID
  menuGrid: {
    
    
    borderRadius: 5,
    position:'relative'
    
  },
  menu: {
    marginHorizontal: 23,
    marginTop: 13,
    marginBottom: 5,
    borderRadius: 20,
    paddingHorizontal: 12,
    height:50,
    backgroundColor: colors.white,
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