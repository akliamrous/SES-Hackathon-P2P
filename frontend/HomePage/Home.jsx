import React from 'react'
import {View,StyleSheet,SafeAreaView, ScrollView} from 'react-native'
import { Appbar, Button,Text } from 'react-native-paper'
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        left: 30,
        right: 30,
        bottom: 150,
    }
})

function Home(){
    const balanceAmount = 2000; 
    const score = 400; 
    const owed = 300; 
    const owe = 200; 
    return(
        <SafeAreaView>
            <View >
                <Appbar>
                    <Appbar.Content title={`Balance : $${balanceAmount}`} titleStyle={{marginLeft: -30,marginRight: "auto",fontWeight: "bold"}}/>
                    <Appbar.Action icon="menu" onPress={() => console.log("Go to menu")}/>
                </Appbar>

                <View style={{flexDirection: 'row',justifyContent: 'space-evenly',alignItems: 'center',}}>
                    <Text style={{fontSize: 40, fontWeight: "bold"}}>Score : {`${score}`}</Text>
                    <View style={{flexDirection: 'column',justifyContent: 'space-between',alignItems: 'center',}}>
                        <Text style={{fontSize: 30, fontWeight: "bold"}}>Owed : {`${owed}`}</Text>
                        <Text style={{fontSize: 30, fontWeight: "bold"}}>Owe : {`${owe}`}</Text>
                    </View>
                </View>

                <ScrollView style={{marginBottom : 300}}>
                    <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',}}>
                        <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
                        <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
                        <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
                        <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
                        <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
                        <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
                        <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
                        <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
                        <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
                        <TransactionCard name="John Doe" moneyAmount={3}  dateDue={moment('2021-01-20')}/>
                    </View>
                </ScrollView>
            </View>
            <SafeAreaView style={styles.bottom}>
                <Button icon="cash" mode="contained" onPress={() => console.log('Pressed')}>
                    Pay/Request
                </Button>
                <Button icon="hand-heart" mode="contained" onPress={() => console.log('Pressed')}>
                    Owe/Owed
                </Button>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default Home; 