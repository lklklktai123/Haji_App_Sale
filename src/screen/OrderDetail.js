import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Free from 'react-native-vector-icons/FontAwesome5';
import dimensions from '../utils/dimensions';
export default class OrderDetail extends Component {
    constructor(probs) {
        super(probs)
        this.state = {
            input: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imageBackground}>
                    <ScrollView>
                        <View style={styles.containerOrder}>
                            <Text style={styles.textCodeOrder}><Icon name="code" size={25} color="#FFCB2C" /> Mã đơn hàng: 0001</Text>
                            <Text style={styles.dateOrder}>Ngày đặt hàng: 1-1-2020</Text>
                            <Text style={styles.statusOrder}>Trạng thái: giao hàng thành công</Text>
                        </View>
                        <View style={styles.inforOrder}>
                            <Text style={styles.textInforOrder}>Thông tin kiện hàng</Text>
                            <View style={styles.containerinforProduct}>
                                <View style={styles.product}>
                                    <Image source={require('../components/images/productHot2.webp')}
                                        style={{ width: '100%', height: '100%' }}></Image>
                                </View>
                                <View style={styles.detailProduct}>
                                    <Text style={styles.titleProdfuct}>Chuột Logitech G102 Lightsync RGB Black</Text>
                                    <Text style={styles.price}>450.000 đ</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.containerBtnBuy}>
                        <TouchableOpacity style={styles.btnBuy}>
                            <Text style={styles.textBtnBuy}>Hủy Đơn Hàng</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        color: 'white',
        width: '100%',
        height: '100%'
    },
    containerOrder: {
        height: dimensions.getHeight() / 15,
        marginVertical: 10,
        marginHorizontal: 10
    },
    textCodeOrder: {
        fontSize: dimensions.getWidth() / 25
    },
    dateOrder: {
        fontSize: dimensions.getWidth() / 30,
        color: 'gray',
        marginHorizontal: dimensions.getWidth() / 14
    },
    statusOrder: {
        fontSize: dimensions.getWidth() / 30,
        marginHorizontal: dimensions.getWidth() / 14,
        color: 'dimgray'
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
    containerBtnBuy: {
        width: '100%',
        height: dimensions.getHeight() / 10,
        borderTopColor: '#dcdcdc',
        borderWidth: 1
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
    }
});