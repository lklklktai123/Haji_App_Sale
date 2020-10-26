//rnc : react native component
//imrc : import react , component

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Login from './src/screen/Login';
import Register from './src/screen/Register';
import Home from './src/screen/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './src/screen/Category';
import ProductDetail from './src/screen/ProductDetail';
import User from './src/screen/User';
import Order from './src/screen/Order';
import OrderDetail from './src/screen/OrderDetail'
import Cart from './src/screen/Cart'
import {Provider} from 'react-redux';
import store from './src/components/redux/store';
const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{
              headerShown: false,
            }} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home"
              component={Home}
              options={{ headerShown: false, }}
            />
            <Stack.Screen name="Category"
              component={Category}
            />
            <Stack.Screen name="User"
              component={User}
            />
            <Stack.Screen name="ProductDetail"
              component={ProductDetail}
            />
            <Stack.Screen name="Order"
              component={Order}
            />
            <Stack.Screen name="OrderDetail"
              component={OrderDetail}
            />
            <Stack.Screen name="Cart"
              component={Cart}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      </SafeAreaView>

    );
  }
}

