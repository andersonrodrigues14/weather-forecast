import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
        shadowColor: '#33000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        elevation: 1
    },
    boxColumn: {
        flexDirection:'row',
        flex: 1,
        padding: 15
    },
    boxLeft: {
        flex: 1
    },
    boxRight: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    boxImage: {
        width: 48,
        height: 48
    },
    title: {
        fontSize: 24
    },
    subtitle: {
        fontSize: 14,
        marginTop: 2,
        marginBottom: 13
    },
    orangeSubtitle: {
        color: '#f28200',
        fontSize: 14
    },
    rangTemp: {
        marginTop: 2,
        fontSize: 12
    },
    temperature: {
        color: '#f28200',
        fontSize: 34,
        marginBottom: 11
    }
});