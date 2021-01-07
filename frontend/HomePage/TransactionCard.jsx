import React from 'react'
import {StyleSheet} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 
import moment from 'moment'; 

const stylesheet = StyleSheet.create(
    {
        cardStyle: {
            width: "95%",
            marginTop: 10, 
            borderColor: "black", 
            borderWidth: 1,
        }, 
        contentStyle : {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }, 
        partStyle : {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    }
)

function TransactionCard(props){

    const today = moment(); 
    const timeLeft = moment.duration(props.dateDue.diff(today))
    return(
        <Card style={stylesheet.cardStyle}>
            <Card.Content style={stylesheet.contentStyle}>
                <Card.Content style={stylesheet.partStyle}>
                    <Avatar.Image size={50} source={require('./DefaultPic.png')} />
                    <Paragraph>{props.name}</Paragraph>
                </Card.Content>
                <MaterialIcons name="sync-alt" size={50} color="black" />
                <Card.Content style={stylesheet.partStyle}>
                    <Title>{`$${props.moneyAmount.toFixed(2)}`}</Title>
                    <Paragraph>Time Left : {`${timeLeft.days()} days`}</Paragraph>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default TransactionCard; 