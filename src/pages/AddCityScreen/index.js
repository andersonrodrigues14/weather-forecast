import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const maps = 'AIzaSyBnS1_oSCwodYrzd9LJWbbC_JWliRB9S-w';

export default () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Buscar Cidade',
        });
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Nome da Cidade'
                
                onPress={(data, details = null) => {   
                    //Long / Lat
                    const geometry = details.geometry;
                    const location = geometry.location
                   

                    //Dados cidade
                    const adressDetails = data.terms;
                    //ultimo objeto
                    const finalAdressDetails = adressDetails.length - 1

                    const adressCity = adressDetails[0].value
                    const adressCountry = adressDetails[finalAdressDetails].value

                    //Dados Formatados
                    const adress = {
                        'place_id': details.place_id,
                        'city': adressCity, 
                        'country':adressCountry,
                        'lat':location.lat,
                        'long':location.lng
                    };
                    
                    navigation.navigate('AddCityDetails',{
                        adress: adress
                    });
                }}
                query={{
                    key: maps,
                    language: 'pt-BR'
                }}
                enablePoweredByContainer={false}
                fetchDetails={true}
                styles={{
                    listView:{
                        height:100
                    },
                    textInputContainer : {
                        marginTop: 10,
                        padding : 10,
                        shadowColor: '#33000',
                        shadowOffset: {width: 0, height: 1},
                        shadowOpacity: 0.3,
                        elevation: 1
                    } ,
                    predefinedPlacesDescription : { 
                        color : '#1faadb'
                    } , 
                }}
            />
        </SafeAreaView>
    )
}