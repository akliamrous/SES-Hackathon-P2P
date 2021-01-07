import React from 'react'
import {StyleSheet} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; 
import moment from 'moment'; 

const stylesheet = StyleSheet.create(
    {
        partStyle : {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    }
)

function OweCard(props){
    const balanceColor = props.color
    const today = moment(); 
    const timeLeft = moment.duration(props.dateDue.diff(today))
    return(
        <Card>
                <Card.Content style={stylesheet.partStyle}>
                    <Avatar.Image size={50} source={require('../assets/DefaultPic.png')} />
                    <Paragraph>{props.name}</Paragraph>
                    <Title style = {{color: balanceColor}}>{`$${props.moneyAmount.toFixed(2)}`}</Title>
                    <Paragraph>Time Left : {`${timeLeft.days()} days`}</Paragraph>
                </Card.Content>
        </Card>
    )
}

export default OweCard; 