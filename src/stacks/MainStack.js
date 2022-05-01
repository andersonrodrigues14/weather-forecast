import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListCityScreen from "../pages/ListCityScreen";
import AddCityScreen from "../pages/AddCityScreen";
import AddCityDetails from "../pages/AddCityDetails";
import ListTempDays from "../pages/ListTempDays";

const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#00aaf2'
        },
        headerTintColor: '#FFF',
        headerTitleStyle:{
            fontSize: 20,
        }
    }}>
        <MainStack.Screen name="ListCity" component={ListCityScreen} />
        <MainStack.Screen name="ListTempDays" component={ListTempDays} />
        <MainStack.Screen name="AddCity" component={AddCityScreen} />
        <MainStack.Screen name="AddCityDetails" component={AddCityDetails} />
    </MainStack.Navigator>
)