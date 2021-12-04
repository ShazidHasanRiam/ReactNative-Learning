// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import homeScreen from "./src/homeScreen";
import explore from "./src/explore";
import profile from "./src/profile";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
              return <Feather name={iconName} size={24} color="white" />;
            } else if (route.name === "Explore") {
              iconName = focused ? "explore" : "explore";
              return <MaterialIcons name={iconName} size={24} color="white" />;
            } else if (route.name === "Profile") {
              iconName = focused ? "profile" : "profile";
              return <AntDesign name={iconName} size={24} color="white" />;
            }

            // You can return any component that you like here!
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={homeScreen} />
        <Tab.Screen name="Explore" component={explore} />
        <Tab.Screen name="Profile" component={profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={homeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default MyTabs;
