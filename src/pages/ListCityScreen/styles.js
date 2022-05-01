import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa'
    },
    addButton: {
        marginRight: 20
    },
    addButtonImage: {
        width: 18,
        height: 18
    },
    citiesList: {
        flex: 1,
        width: '100%'
    },
    empytBox: {
       justifyContent: 'center',
       alignItems: 'center',
       padding: 16
    },
    empytTitle:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 16
    },
    empytSubtitle: {
        fontSize: 16,
        textAlign: 'center'
    }
});

