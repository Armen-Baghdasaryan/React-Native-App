import React from "react";
import Main from "./components/Main";
import Country from "./components/Country";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Main",
            headerStyle: {backgroundColor: '#ccc'},
            headerTitleStyle: {fontWeight: 700, fontStyle: 'italic', fontSize: 20},
          }}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={{
            title: "Country",
            headerStyle: {backgroundColor: '#ccc'},
            headerTitleStyle: {fontWeight: 700, fontStyle: 'italic', fontSize: 20},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
