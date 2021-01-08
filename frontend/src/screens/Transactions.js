import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Searchbar, TextInput, Button } from 'react-native-paper';
import DatePicker from "../components/DatePicker";
import * as firebase from "firebase";

export default function Transactions() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [textAmount, setAmount] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    handleMoneySent = () => {
        firebase
            .database()
            .ref('users/' + userId)
            .set({
                highscore: score,
            });
      };

    return (
        <PaperProvider style = {styles.container}>
                <Searchbar
                    style={styles.searchbar}
                    placeholder="Enter Name"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                <View style={styles.inlineView}>
                    <TextInput
                        style={styles.amount}
                        label="$ Amount"
                        value={textAmount}
                        onChangeText={textAmount => setAmount(textAmount)}
                        keyboardType={'numeric'}
                    />
                    <DatePicker />
                </View>
                <View style={styles.inlineView}>
                    <Button 
                        style={styles.button}
                        icon="send" 
                        mode="contained" 
                        onPress={() => handleMoneySent()}
                    >
                        Lend
                    </Button>
                    <Button 
                        style={styles.button}
                        icon="request" 
                        mode="contained" 
                        onPress={() => console.log('Pressed')}
                    >
                        Request
                    </Button>
                </View>
        </PaperProvider>
      );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D7EBCD"
    },
    searchbar: {
        marginTop: 100,
        marginBottom: 20,
        marginHorizontal: 30,
        width: 320
    },
    amount: {
        marginVertical: 20,
        marginRight: 50,
        width: 100,
        color: "#D7EBCD"
    },
    button: {
        marginVertical: 20,
        marginHorizontal: 10,
        display: 'flex',
        width: 150,
        backgroundColor: "#299078"
    },
    inlineView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});