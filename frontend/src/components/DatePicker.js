import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from 'react-native-paper';

const DatePicker = () => {
    const [selectedDate, setDate] = useState({
        month: "",
        day: "",
        year: ""
    });

    const [pickerMode, setPickerMode] = useState(null);
  
    const showDatePicker = () => {
        setPickerMode("date");
    };
  
    const hidePicker = () => {
        setPickerMode(null);
    };
  
    const handleConfirm = (date) => {
        setDate({
            month: date.getMonth(),
            day: date.getDate(),
            year: date.getFullYear()
        })
        console.log(selectedDate);
        hidePicker();
    };
  
    return (
      <View style={style.root}>
        <Text style={style.label}>Repay by: </Text>
        <Button
            mode="contained" 
            onPress={showDatePicker}
        >
            Choose Date
        </Button>
        <DateTimePickerModal
          isVisible={pickerMode !== null}
          mode={pickerMode}
          onConfirm={handleConfirm}
          onCancel={hidePicker}
        />
        <Text>Selected date: {selectedDate.month} {selectedDate.day} {selectedDate.year}</Text>
      </View>
    );
  };
  
  const style = StyleSheet.create({
    root: {
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
        fontWeight: "bold"
    }
  });

  export default DatePicker;