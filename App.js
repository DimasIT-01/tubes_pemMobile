import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeBaseProvider, StatusBar } from "native-base";
import face from "./screen/home";
import about from "./screen/info";
import quake from './screen/gempa';
import kota from "./screen/kota";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#b2e5ec",
        tabBarInactiveTintColor: "black",
        tabBarStyle: { height: 65 },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabelStyle: { 
          fontSize: 12,
          marginBottom: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Beranda"
        component={face}
        options={{
          tabBarLabel: "Beranda",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="home-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Gempa"
        component={quake}
        options={{
          tabBarLabel: "Info gempa",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="pulse" size={size} color={color}/>
            );
          },
        }}
       />
      <Tab.Screen
        name="About"
        component={about}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="information-circle" size={size} color={color}/>
            );
          },
        }}
      />
      
    </Tab.Navigator>
  );
};

const App =() => {
  return (
    <NativeBaseProvider>
       <NavigationContainer>
        <StatusBar backgroundColor="#b2e5ec" />
        <Stack.Navigator screenOptions={{ headerShown: "false" }}>
           <Stack.Screen
              name="BottomNavigator"
              component={BottomNavigator}
              options={{ headerShown: false }}
            />
          <Stack.Screen
            name="home"
            component={face}
            options={{ headershown: false }}
            cardStyle
          />
          <Stack.Screen
            name="Kota"
            component={kota}
            options={{ headershown: false }}
          />
       </Stack.Navigator>
     </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

