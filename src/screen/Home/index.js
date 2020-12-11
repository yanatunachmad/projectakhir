import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Telkomsel, Indosat, XL } from "../../assets";
import { Gap, TransactionCard } from "../../component";
import { colors } from "../../utils";

function Home({navigation}) {

  const [height, setHeight] = useState(Dimensions.get('window').height * 0.07);

  const menuType = [
    {
      iconSource: Telkomsel,
      title: 'Telkomsel',
      navigasi : 'TopUp'
    },
    {
      iconSource: Indosat,
      title: 'Indosat',
      navigasi : 'QRPay'
    },
    {
      iconSource: XL,
      title: 'XL',
      navigasi : 'Transfer'
    }
  ];

  const transactionData = [
    {
      id: "1",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "2",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "3",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "4",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
    {
      id: "5",
      number: "Rp. 80.000",
      rekening: "081234567890",
      date : '20/08/2020'
    },
  ];

  return (
    <ScrollView>

       {/* ------- HEADER ---------- */}
      <View style={styles.headerContainer}>
        <Gap height={height}/>
        <Text style={styles.titleSaldo}>List Company</Text>
        <Text style={styles.numberSaldo}>Rp. 1.234.567.000</Text>
      </View>

      <Gap height={20}/>

       {/* ------- MENU GRID ---------- */}
      <View style={styles.menuGrid}>
        {menuType.map(menu => {
            return(
              <TouchableOpacity key={menu.title} onPress={() => navigation.navigate(menu.navigasi)}>
                <View style={styles.menu}>
                  <Image source={menu.iconSource} style={styles.image}/>
                </View>
                <Text style={styles.menuTitle}>{menu.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      
       {/* ------- TRANSACTION ---------- */}
      <View style={styles.transaction}>
        <Text style={styles.transactionTitle}>5 Transaksi Terakhir Anda</Text>
        <Gap height={10}/>
        {transactionData.slice(0, 5).map(transaction => {
            return(
              <TransactionCard
                key={transaction.id}
                nominal={transaction.number} 
                rekening={transaction.rekening} 
                date={transaction.date}
              />
            )
          })
        }
      </View>

      {/* <Gap height={10}/> */}

    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    padding: 20
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
    flexDirection: 'row',
    margin: 13,
    justifyContent: 'space-between',
    backgroundColor: colors.tertiary,
    borderRadius: 5
  },
  menu: {
    marginHorizontal: 23,
    marginTop: 13,
    marginBottom: 5,
    borderRadius: 20,
    padding: 17,
    backgroundColor: colors.white
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