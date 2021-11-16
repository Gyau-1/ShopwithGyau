import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home'
import Login from './Screens/Login'
import Product from './Screens/Product'
import Cart from './Screens/Cart'
import Checkout from './Screens/Checkout'

import { createStackNavigator} from 'react-navigation';

const RootStack = createStackNavigator( {
  Home: Home,
  Login: Login,
  Product: Product,
  Cart: Cart,
  Checkout: Checkout,
})


export default class App extends React.Component {
  render() {
    return <RootStack/>;
    
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
