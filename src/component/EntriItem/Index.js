import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../utils'
import Gap from '../Gap'

const Item = ({ Company, email, Number }) => {
    return (
        <View style={styles.Item}>
            <View style={styles.Text1}>
                <Text style={styles.Text}>{Company}</Text>
                <Text style={styles.Text}>{email}</Text>
                <Text style={styles.Text}>{Number}</Text>
            </View>
            <View style={styles.colom2}>
                <View style={styles.logo}>

                </View>
                <Gap height={20}/>
                <View style={styles.view}>

                </View>
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
        backgroundColor: 'red',
        paddingHorizontal: 12,
        paddingTop: 20,
        paddingBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Text: {
        fontSize: 14,
        padding: 2,
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
        backgroundColor: 'blue',
        paddingHorizontal: 50,
        height:90,
        width:24,

        alignItems:'center'
        
    },
    colom2: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
});
