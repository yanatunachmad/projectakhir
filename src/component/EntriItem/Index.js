import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Telkomsel } from '../../assets'
import { SignInHunter } from '../../screen'
import { colors } from '../../utils'
import Gap from '../Gap'

const Item = ({ Company, email, Number,source, navigation }) => {
    return (
        <View style={styles.Item}>
            <View style={styles.Text1}>
                <Text style={styles.Text}>{Company}</Text>
                <Text style={styles.Text}>{email}</Text>
                <Text style={styles.Text2}>{Number}</Text>
            </View>
            <View style={styles.colom2}>
                <View>
                    <Image source={source} style={styles.logo} />

                </View>
                <Gap height={20}/>
                <TouchableOpacity  style={styles.view}>
                <View  onPress={() => navigation.replace(SignInHunter)}>
                    <Text>View</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Item
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.tertiary,
        paddingVertical: 5
    },
    Item: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingTop: 20,
        paddingBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius:20,
        borderWidth:0.24,
    },
    Text: {
        fontSize: 14,
        padding: 2,
    },
    Text2: {
        fontSize: 14,
        padding: 2,
        color: colors.tertiary
    },
    Text1: {
        justifyContent: 'flex-start',
    },
    logo: {
        backgroundColor: 'white',
        paddingHorizontal: 50,
        height:90,
        width:90,
        paddingBottom:20,

    },
    view: {
        backgroundColor: colors.tertiary,
        borderRadius:12,
        height:20,

        alignItems:'center'
        
    },
    colom2: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
});
