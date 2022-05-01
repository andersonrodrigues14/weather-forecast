import React, { useEffect, useLayoutEffect, useState } from "react";
import { 
    SafeAreaView,
    Text,
    FlatList,
    View
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import DayTampItem from "../../components/DayTampItem";

export default () => {
    const[loading, setLoading] = useState(true);
    const[listTemp, setListTemp] = useState([]);
    const[qtdTemp, setQtdTemp] = useState();


    const navigation = useNavigation();
    const route = useRoute();
    const listCity = useSelector(state => state.cities.list);

    useEffect(()=>{
        if(route.params?.key != undefined && listCity[route.params.key]) {

            const requestDaysTemperature = async () => {
                setLoading(true);

                const lat = listCity[route.params.key].lat;
                const lon = listCity[route.params.key].lon;
                //const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=b06172b4344c0db6da82782c66767504&units=metric`)
                const req = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=pt_br&exclude=minutely,hourly,alerts&appid=b06172b4344c0db6da82782c66767504&units=metric`)
                const jsonTemperature = await req.text();
                parseTemperature(jsonTemperature);

            }

            const parseTemperature = function (jsonTemperature) {
                const temperatureJson = JSON.parse(jsonTemperature);
                const dailyTemperature = temperatureJson.daily;
                var tempFormat = [];
                setQtdTemp(dailyTemperature.length - 1);

                for (x = 0; x < dailyTemperature.length; x++) {

                    let day = dailyTemperature[x];
                    let today = new Date().getDay() + x;
                    let dayAtt = new Date().getDate() + x;
                    let monthNum = new Date().getMonth() + 1;
                    
                    if(today > 6) {
                        today = today - 7;
                    }

                    let dayOfWeek = getDayOfWeek(today);
                    let month = getMonth(monthNum);
                    let description = day.weather[0].description;
                    let maxTemp = day.temp.max;
                    let mimTemp = day.temp.min;
                    let tempAt = day.temp.day;
                    let icon = day.weather[0].icon;
                    

                    const temp = {
                        'dayOfWeek': dayOfWeek,
                        'dateAt': dayAtt,
                        'date': `${dayAtt} de ${month}`, 
                        'description':description,
                        'maxTemp':maxTemp,
                        'mimTemp':mimTemp,
                        'tempAt':tempAt,
                        'icon':icon
                        
                    };
                    
                    tempFormat = [...tempFormat, temp]

                }

                if(tempFormat) {
                     setListTemp(tempFormat);
                }
          
                setLoading(false);
            }

            const getDayOfWeek = function(dayNum) {
                let weekday = [];
                weekday[0] = 'Domingo';
                weekday[1] = 'Segunda Feira';
                weekday[2] = 'Terça Feira';
                weekday[3] = 'Quarta Feira';
                weekday[4] = 'Quinta Feira';
                weekday[5] = 'Sexta Feira';
                weekday[6] = 'Sábado';
        
                return (weekday[dayNum]);
            }

            const getMonth = function(monthNum) {
                let month = [];
                month[1] = 'Janeiro';
                month[2] = 'Fevereiro';
                month[3] = 'Março';
                month[4] = 'Abril';
                month[5] = 'Maio';
                month[6] = 'Junho';
                month[7] = 'Julho';
                month[8] = 'Agosto';
                month[9] = 'Setembro';
                month[10] = 'Outubro';
                month[11] = 'Novembro';
                month[12] = 'Dezembro';
        
                return (month[monthNum]);
            }
        
        

            requestDaysTemperature();
        }

    },[]);


    useLayoutEffect(() => {
        navigation.setOptions({
            title: listCity[route.params.key].city,
        });
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text styles={styles.description}>Previsão para os próximos {qtdTemp} dias</Text>
            </View>
            {!loading &&
                <FlatList 
                    style={styles.tempList}
                    data={listTemp}
                    renderItem={({item, index})=>(
                        <DayTampItem 
                            data={item}
                            index={index}
                        />
                    )}
                    keyExtractor={(item, index)=>index.toString()}
                />
            }
        </SafeAreaView>
    )
}