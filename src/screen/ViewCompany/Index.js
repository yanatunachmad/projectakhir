import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Telkomsel } from '../../assets'
import { Header } from '../../component'
import { colors } from '../../utils'

const ViewCompany = ({ Company, Contact }) => {
    return (
        <View style={styles.container}>
            <Header goBack title="Registrasi Akun" />
            <View style={styles.bg}>
                <View >
                    <Image source={Telkomsel} style={styles.header} />
                </View>
            </View>
            <View style={styles.bg1}>
                <Text style={styles.text}>Halo</Text>
            </View>
            <View style={styles.bg3}>
                <Text style={styles.text}>Halo</Text>
            </View>
            <View style={styles.bg4}>
                <Text style={styles.text}>Halo</Text>
            </View>
            <View style={styles.bg5}>
                <View style={styles.tulisan}>
                <Text style={styles.text}>Halooo</Text>
                
                <Text style={styles.text2}>Halooo</Text>
                <Text style={styles.text2}>Halooo</Text>
                </View>
            </View>
        </View>
    )
}

export default ViewCompany

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: 'white',
        width: 123,
        height: 123,
    },
    bg2: {
        paddingTop: 2,
        backgroundColor: 'blue',
        marginHorizontal: 50,
        height: 348,
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 20
    },

    bg: {
        paddingTop: 80,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bg1: {
        paddingTop: 2,
        backgroundColor: 'white',

        justifyContent: 'center',
        flexDirection: 'row'
    },
    bg3: {
        paddingTop: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bg4: {
        paddingTop: 2,
        backgroundColor: 'white',
        paddingBottom: 20,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bg5: {
        paddingTop: 2,
        backgroundColor: 'blue',
        marginHorizontal: 50,
        height: 348,
       
        flexDirection: 'row',
        borderRadius: 20
    },
    text: {
        fontSize: 20,
    },
    text2: {
        fontSize: 20,
        paddingTop:50,
    },
    tulisan: {
        flexDirection:'column',
        paddingLeft:6,
    },
})
