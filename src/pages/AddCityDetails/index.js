import React, { useState, useEffect, useLayoutEffect } from "react";
import { 
    TouchableHighlight, 
    Text,
    SafeAreaView,
    Button,
    View
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./styles";

export default () => {
    const[inList, setInList] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state => state.cities.list);

    const handleAddButton = () => {
        dispatch({
            type: 'ADD_CITY',
            payload: {
                place_id: route.params.adress.place_id,
                city: route.params.adress.city, 
                country: route.params.adress.country,
                lat: route.params.adress.lat,
                lon: route.params.adress.long,
            }
        });

        navigation.navigate('ListCity');
    }

    useEffect(()=>{
        if(list[0]?.place_id === route.params.adress.place_id){
            setInList(true)
        } else {
            setInList(false)
        }
        
    },[]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.adress.city,
        });
    },[]);


    return(
        <SafeAreaView style={styles.container}>
             <TouchableHighlight style={styles.box}>
                <View style={styles.boxMain}> 
                    <Text style={styles.title}>{route.params.adress.city}</Text>
                    <Text style={styles.subtitle}>{route.params.adress.country}</Text>
                    {inList ?
                        <Text style={styles.inList}>Cidade já cadastrada na sua Lista!</Text>
                    :
                        <Button style={styles.button} title="ADICIONAR" onPress={handleAddButton}/>
                    }
                </View>
            </TouchableHighlight>
        </SafeAreaView>
    );
}