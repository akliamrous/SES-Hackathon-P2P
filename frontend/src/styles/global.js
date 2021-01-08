import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    centeredContainer: {
        backgroundColor: "#D7EBCD",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    inputDescText: {
        fontWeight: "bold",
        fontSize: 22,
    },
    errorMsgText: {
        fontSize: 12,
        color: "red",
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: "center",
    },
});

