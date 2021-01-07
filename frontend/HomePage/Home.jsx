import React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'
import { Appbar } from 'react-native-paper'
import TransactionCard from './TransactionCard'
import moment from 'moment'; 

const styles = StyleSheet.create({
    content : {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }, 
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    }
})

function Home(){
    const balanceAmount = 2000; 
    return(
        <SafeAreaView>
            <View>
                <Appbar>
                    <Appbar.Content title={`Balance : $${balanceAmount}`} titleStyle={{marginLeft: -30,marginRight: "auto",fontWeight: "bold"}}/>
                    <Appbar.Action icon="menu" onPress={() => console.log("Go to menu")}/>
                </Appbar>
                <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
            </View>
        </SafeAreaView>
    )
}

export default Home; 