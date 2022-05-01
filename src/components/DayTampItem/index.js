import React from "react";
import { 
    TouchableHighlight, 
    Text,
    View,
    Image
} from "react-native";

import { styles } from "./styles";

export default ({data}) => {

    const dayAt = new Date().getDate();
    const icon = data.icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

    return(      
        <TouchableHighlight underlayColor="transparent" style={styles.box}>
            <View style={styles.boxColumn}>
                <View style={styles.boxLeft}>
                    { dayAt == data.dateAt ?
                        <Text style={styles.title}>Hoje</Text>
                    :
                        <Text style={styles.title}>{data.dayOfWeek}</Text>
                    } 
                    <Text style={styles.subtitle}>{data.date}</Text>
                    <Text style={styles.orangeSubtitle}>{data.description}</Text>
                    <Text style={styles.rangTemp}>{data.mimTemp}° - {data.maxTemp}°</Text>
                </View>
                <View style={styles.boxRight}>
                    <Text style={styles.temperature}>{data.tempAt}°</Text>
                    <Image
                        style={styles.boxImage} 
                        source={{uri: iconUrl}}
                    /> 
                </View>
            </View>
        </TouchableHighlight>
    );
}