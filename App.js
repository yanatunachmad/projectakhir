import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  HomeScreenHunter, 
  ProfileScreen, 
  TransactionScreen, 
  SignInHunter, 
  SignInCompany,
  SignUpHunter, 
  SignUpCompany,
  SplashScreen, 
  TopUpScreen,
  QRPayScreen,
  TransferScreen,
  TopUpSuccessScreen,
  TransferSuccessScreen,
  QRPayConfirmScreen,
  PaySuccessScreen,
  ChooseSignUp,
  ViewCompany,
} from './src/screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from "./src/component";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props}/>}
    >
      <Tab.Screen name="Home" component={HomeScreenHunter} />
      <Tab.Screen name="InOut" component={TransactionScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
      >
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="ViewCompany" 
          component={ViewCompany}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SignInHunter" 
          component={SignInHunter}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SignUpHunter" 
          component={SignUpHunter}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SignInCompany" 
          component={SignInCompany}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SignUpCompany" 
          component={SignUpCompany}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="MainPage" 
          component={BottomTabNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="TopUp" 
          component={TopUpScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="QRPay" 
          component={QRPayScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Transfer" 
          component={TransferScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="TopUpSuccess"
          component={TopUpSuccessScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="TransferSuccess"
          component={TransferSuccessScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="QRPayConfirm"
          component={QRPayConfirmScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="PaySuccess"
          component={PaySuccessScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
        name="ChooseSignUp"
        component={ChooseSignUp}
        options={{
          headerShown: false
        
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;