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
        bottom: 125
    }
})

function Home(props){
    const balanceAmount = 2000; 

    const score = 400; 
    const owed = 300; 
    const owe = 200; 
    return(
        <SafeAreaView>
            <View style = {{backgroundColor: "rgb(240,247,238)"}}>
                <Appbar style = {{backgroundColor: "#299078"}}> 
                    <Appbar.Content title={`Balance : $${balanceAmount}`} titleStyle={{marginLeft: -30,marginRight: "auto",fontWeight: "bold"}}/>
                    <Appbar.Action icon="menu" onPress={() => console.log("Go to menu")}/>
                </Appbar>

                <View style={{flexDirection: 'row',justifyContent: 'space-evenly',alignItems: 'center',}}>
                    <Text style={{marginLeft: -15, fontSize: 30, fontWeight: "bold"}}>Score : {`${score}`}</Text>
                    <View style={{flexDirection: 'column',justifyContent: 'space-between',alignItems: 'center',}}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>Owed : {`${owed}`}</Text>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>Owe : {`${owe}`}</Text>
                    </View>
                </View>

                <ScrollView style={{marginBottom : 275}}>
                    <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: ""}}>
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
                <Button style = {{backgroundColor: "#299078"}} icon="cash" mode="contained" onPress={() => props.navigation.navigate('Transactions')}>
                    Pay/Request
                </Button>
                <Button style = {{backgroundColor: "#299078"}} icon="hand-heart" mode="contained" onPress={() => props.navigation.navigate('OweOwed')}>
                    Owe/Owed
                </Button>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default Home; 