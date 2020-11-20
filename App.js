import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  HomeScreen, 
  ProfileScreen, 
  TransactionScreen, 
  SignInScreen, 
  SignUpScreen, 
  SplashScreen, 
  TopUpScreen,
  QRPayScreen,
  TransferScreen,
  TopUpSuccessScreen,
  TransferSuccessScreen,
  QRPayConfirmScreen,
  PaySuccessScreen
} from './src/screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from "./src/component";

//todo: UI FINAL PROJECT => https://www.figma.com/file/6cgC8dEezzeNF3NLOH7uLd/DTI-Telkom-University-2020-Final-Projects-E-Money-Apps?node-id=0%3A1
//todo: DUMMY API => https://reqres.in/

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props}/>}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
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
          name="SignIn" 
          component={SignInScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;