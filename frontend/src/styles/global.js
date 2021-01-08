import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    centeredContainer: {
        backgroundColor: "rgb(240,247,238)",
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

