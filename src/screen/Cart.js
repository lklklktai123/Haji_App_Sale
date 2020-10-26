import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import dimensions from '../utils/dimensions';
import NumericInput from 'react-native-numeric-input'

export default class Cart extends Component {
    constructor(probs) {
        super(probs)
        this.state = {
            value: 1
        }
    }
    checkValue(value) {
        if(value === 0) {
            Alert.alert(
                'Thông báo',
                'Số lượng không thể bằng 0',
                [
                    
                    { text: "OK"}
                    
                ],
                { cancelable: false }
            )
            this.setState({value:1})
            return this.state.value
            
        } else {
            return this.state.value
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../components/images/login.jpg')}
                    style={styles.imageBackground}>
                    <ScrollView>
                        <View style={styles.containerCart}>
                            <View style={styles.inforOrder}>
                                <Text style={styles.textInforOrder}>Thông tin kiện hàng</Text>
                                <View style={styles.containerinforProduct}>
                                    <View style={styles.product}>
                                        <Image source={require('../components/images/productHot2.webp')}
                                            style={{ width: '100%', height: '100%' }}></Image>
                                    </View>
                                    <View style={styles.detailProduct}>
                                        <Text style={styles.titleProdfuct}>Chuột Logitech G102 Lightsync RGB Black</Text>
                                        <Text style={styles.price}>
                                            {this.checkValue(this.state.value) * 450000} đ</Text>
                                        <NumericInput
                                        value={this.state.value} 
                                        onChange={value => this.setState({value})}/>
                                    </View>
                                    <View styles={styles.containerRemove}>
                                        <TouchableOpacity>
                                        <Icon name='trash' size={20} color="#FFCB2C" style={styles.trash}></Icon>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.containerBtnBuy}>
                        <TouchableOpacity style={styles.btnBuy}>
                            <Text style={styles.textBtnBuy}>Tiến Hành Đặt Hàng</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        width: '100%',
        height: '100%',

    },
    inforOrder: {
        marginVertical: 20
    },
    textInforOrder: {
        fontSize: dimensions.getWidth() / 22,
        marginHorizontal: 10
    },
    containerinforProduct: {
        flexDirection: 'row',
        height: dimensions.getHeight() / 5,
        marginVertical: 10,
        marginHorizontal: 10
    },
    product: {
        flex: 1
    },
    detailProduct: {
        flex: 3,
        marginHorizontal: 10,
        marginVertical: 10
    },
    titleProdfuct: {
        fontSize: dimensions.getWidth() / 24
    },
    price: {
        fontSize: dimensions.getWidth() / 24,
        color: 'red'
    },
    btnBuy: {
        height: dimensions.getHeight() / 15,
        backgroundColor: '#ED1F24',
        marginHorizontal: 10,
        marginVertical: 10

    },
    textBtnBuy: {
        textAlign: 'center',
        fontSize: dimensions.getWidth() / 20,
        color: 'white',
        fontWeight: 'bold',
        lineHeight: dimensions.getHeight() / 15,
    },
    containerRemove : {
        flex:1,

    },
    trash :{
        marginVertical: dimensions.getHeight() / 30
    }
});