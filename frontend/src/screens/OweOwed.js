import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import OweCard from '../components/OweCard.js'
import { Appbar} from 'react-native-paper'
import moment from 'moment'; 

const styles = StyleSheet.create({
    horizontalRow : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
        color: "#D7EBCD"
    }, 
    verticalStack : {
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: "#D7EBCD"
    }
})

function OweOwed(){
    const dummyRowOwe = 
    <View style = {styles.horizontalRow}>
        <OweCard color = "red" name="John Doe" moneyAmount={Math.random(0,100) * 100}  dateDue={moment('2021-01-20')}/>
        <OweCard color = "red" name="Suzy Smith" moneyAmount={Math.random(0,100 * 100)}  dateDue={moment('2021-01-20')}/>
    </View>

    const dummyRowOwed = 
    <View style = {styles.horizontalRow}>
        <OweCard color = "green" name="Homer Simpson" moneyAmount={Math.random(0,100 * 100)}  dateDue={moment('2021-01-20')}/>
        <OweCard color = "green" name="Peter Griffin" moneyAmount={Math.random(0,100 * 100)}  dateDue={moment('2021-01-20')}/>
    </View>

    const dummyArrayOwe = []
    const dummyArrayOwed = []
    for (let i = 0; i < 5; i++){
        dummyArrayOwe.push(dummyRowOwe);
        dummyArrayOwed.push(dummyRowOwed)
    }
    return(
        <ScrollView>
            
            <View style = {{backgroundColor: "#ffe6e6"}}>
                <Appbar style = {{marginBottom: 30, backgroundColor: "red"}}>
                    <Appbar.Content title="People you owe"/>
                </Appbar>
                <View style = {styles.verticalStack}>
                    {dummyArrayOwe}
                </View>
            </View>

            <View style = {{backgroundColor: "rgb(240,247,238)"}}>
                <Appbar style = {{marginBotton: 30, backgroundColor: "green"}}>
                    <Appbar.Content title="People that owe you"/>
                </Appbar>
                <View style = {styles.verticalStack}>
                    {dummyArrayOwed}
                </View>
            </View>

        </ScrollView>
    )
}

export default OweOwed; 