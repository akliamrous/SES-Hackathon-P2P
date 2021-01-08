import React from 'react'
import {View,StyleSheet,SafeAreaView, ScrollView} from 'react-native'
import { Appbar, Button, Text, Modal, Portal, Provider } from 'react-native-paper'
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
    },
    modal: {
        color: "black"
    },
    containerStyle: {
        backgroundColor: 'white', 
        padding: 20, 
        height: 100,
        width: 200,
        alignSelf: "center"
    }
})

function Home(props){
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20, height: 100};

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

                <Provider>
                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                            <Text style={styles.modal}>Example Modal.  Click outside this area to dismiss.</Text>
                        </Modal>
                    </Portal>
                    <Button style={{marginTop: 30}} onPress={showModal}>
                        Show
                    </Button>
                </Provider>

            </View>
            <SafeAreaView style={styles.bottom}>
                <Button icon="cash" mode="contained" onPress={() => props.navigation.navigate('Transactions')}>
                    Pay/Request
                </Button>
                <Button icon="hand-heart" mode="contained" onPress={() => props.navigation.navigate('OweOwed')}>
                    Owe/Owed
                </Button>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default Home; 