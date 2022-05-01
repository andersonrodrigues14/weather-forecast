import React, { useState, useEffect } from "react";
import { 
    TouchableHighlight, 
    Text,
    View,
    TouchableOpacity,
    Image
} from "react-native";

import { styles } from "./styles";

export default ({data, index, onPress}) => {
    const[dataTemperature, setDataTemperature] = useState([]);
    const[descTemperature, setDescTemperature] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        const requestTemperature = async () => {
            setLoading(true);

            const lat = data.lat;
            const lon = data.lon;
            
            const req  = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=b06172b4344c0db6da82782c66767504&units=metric`)
                .catch(error => {
                    if (error.response) {
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                    } else if (error.request) {
                    console.log(error.request)
                    } else {
                    console.log('Error: ', error)
                    }
                    console.log(error.config)
                })

            //console.log(req)
            
            const jsonTemperature = await req.json()
                .catch(err => {
                     console.log(err);
                     setLoading(false);
                   });

            if(jsonTemperature) {
                setDataTemperature(jsonTemperature.main);
                setDescTemperature(jsonTemperature.weather)
            }
          
            setLoading(false);
        }
        requestTemperature();
    },[]);

    return(
        <>
        {!loading &&
        <>
        <TouchableHighlight underlayColor="transparent" onPress={()=>onPress(index)} style={styles.box}>
            <View style={styles.boxColumn}>
                <View style={styles.boxLeft}> 
                    <Text style={styles.title}>{data.city}</Text>
                    <Text style={styles.subtitle}>{data.country}</Text>
                    <Text style={styles.orangeSubtitle}>{descTemperature[0]?.description}</Text>
                    <Text style={styles.rangTemp}>{dataTemperature.temp_min}° - {dataTemperature.temp_max}°</Text>
                </View>
                <View style={styles.boxRight}>
                    <Text style={styles.temperature}>{dataTemperature.temp}°</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Image
                            style={styles.boxImage} 
                            source={{uri: `https://openweathermap.org/img/wn/${descTemperature[0]?.icon}@2x.png`}}
                        />  
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableHighlight>
        </>
        }
        </>
    );
}