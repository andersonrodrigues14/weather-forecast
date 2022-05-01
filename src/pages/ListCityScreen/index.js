import React, { useLayoutEffect } from "react";
import { 
    SafeAreaView,
    View,
    TouchableHighlight, 
    Image,
    FlatList,
    Text 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import CityItem from "../../components/CityItem";

export default () => {

    const navigation = useNavigation();
    const listCity = useSelector(state => state.cities.list);
    
    const handleCityPress = (index) => {
        navigation.navigate('ListTempDays',{
            key: index
        });
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Cidades',
            headerRight: () => (
                <TouchableHighlight 
                    underlayColor="transparent"  
                    style={styles.addButton}
                    onPress={()=>navigation.navigate('AddCity')}
                >
                    <Image 
                        style={styles.addButtonImage}
                        source={require('../../assets/more.png')}
                    />
                </TouchableHighlight>
            )
        });
    },[]);

    return (
        
        <SafeAreaView style={styles.container}>
            {listCity.length !== 0 ? 
                <FlatList 
                    style={styles.citiesList}
                    data={listCity}
                    renderItem={({item, index})=>(
                        <CityItem 
                            data={item}
                            index={index}
                            onPress={handleCityPress}
                        />
                    )}
                    keyExtractor={(item, index)=>index.toString()}
                />
            :
                <View style={styles.empytBox}>
                    <Text style={styles.empytTitle}>Parece que você ainda não adicionou uma cidade</Text>
                    <Text style={styles.empytSubtitle}>Tente adicionar uma cidade usando o botão de mais</Text>
                </View>
            }
            
        </SafeAreaView>
    )
}