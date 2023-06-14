import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Calendario,
         Chatbot,
         Configurações,
         Estatistica,
         Remedios, 
} from "../Screens";

const Stack = createNativeStackNavigator() 

export function CalendarioNavigation() {
   return (
   <Stack.Navigator>
      <Stack.Screen name='Calendario' component={Calendario}/>
   </Stack.Navigator>
   )
}

export function ChatbotNavigation() {
   return(
   <Stack.Navigator>
      <Stack.Screen name='Chatbot' component={Chatbot}/>
   </Stack.Navigator>
   )
   }

export function ConfiguraçõesNavigation() {
   return(
   <Stack.Navigator>
      <Stack.Screen name='Configurações' component={Configurações}/>
   </Stack.Navigator>
   )
}
export function EstatisticaNavigation() {
   return(
   <Stack.Navigator>
      <Stack.Screen name='Estatistica' component={Estatistica}/>
   </Stack.Navigator>
   )
}
export function RemediosNavigation() {
return(
   <Stack.Navigator>
      <Stack.Screen name='Remedios' component={Remedios}/>
   </Stack.Navigator>
   )
}