import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    centeredContainer: {
        backgroundColor: "#D7EBCD",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 75,
        paddingBottom: 200,
        backgroundColor: "white",
    },
    inputDescText: {
        color: "#48B77D",
        fontWeight: "bold",
        fontSize: 18,
        textTransform: "uppercase",
    },
    errorMsgText: {
        fontSize: 12,
        color: "red",
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: "center",
    },
});

