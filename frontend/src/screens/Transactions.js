import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Searchbar, TextInput, Button } from 'react-native-paper';
import DatePicker from "../components/DatePicker";

export default function Transactions() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [textAmount, setAmount] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <PaperProvider>
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
                        onPress={() => console.log('Pressed')}
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
        backgroundColor: '#F0F7EE',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchbar: {
        marginTop: 100,
        marginLeft: 60,
        marginBottom: 20,
        marginHorizontal: 10,
        width: 320
    },
    amount: {
        marginVertical: 20,
        marginRight: 50,
        width: 100
    },
    button: {
        marginVertical: 20,
        marginHorizontal: 10,
        display: 'flex',
        width: 150
    },
    inlineView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});