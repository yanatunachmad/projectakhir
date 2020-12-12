import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { IconBack, IconQRPay, IconTopup } from '../../assets'

const Backbutton = () => {
    return (
        <View style={styles.Container}>
            <Image source={IconBack} style={styles.logo} />
            <Text style={styles.Text}>Back</Text>
        </View>
    )
}

export default Backbutton

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#FADC9C',
        height: 69,
        flexDirection: 'row'
    },
    Text: {
        fontSize: 20,
        paddingVertical: 25,
        paddingLeft: 40,
        color:'#F09E56'
    },
    logo: {
        height: 24,
        width: 15,
        left: 19,
        top: 22,
        
    },
})
