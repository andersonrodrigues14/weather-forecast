import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa'
    },
    box: {
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
        shadowColor: '#33000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        elevation: 1
    },
    boxMain: {
        padding: 16
    },
    title: {
        fontSize: 24
    },
    subtitle: {
        fontSize: 14,
        marginTop: 2,
        marginBottom: 13
    },
    button: {
        backgroundColor: '#0078be',
        fontSize: 14
    },
    inList: {
        color: '#FF0000',
        textAlign: 'center'
    }
});