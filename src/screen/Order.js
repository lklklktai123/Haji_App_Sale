import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import dimensions from '../utils/dimensions';
export default class Order extends Component {
    constructor(probs) {
        super(probs)
        this.state = {
            input: ''
        }
    }
    render() {
        console.log('Order')
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imageBackground}>
                    <View style={styles.containerStatus}>
                        <Text style={styles.textStatus}>Trạng thái: Giao hàng thành công</Text>
                    </View>
                    <View style={styles.orderProduct}>
                        <View style={styles.product}>
                        <Image source={require('../components/images/productHot2.webp')} 
                        style={{ width: '100%', height: '100%' }}></Image>
                        </View>
                        <View style={styles.detailProduct}>
                            <Text style={styles.titleProdfuct}>Chuột Logitech G102 Lightsync RGB Black</Text>
                            <Text style={styles.price}>450.000 đ</Text>
                            <View style={styles.btnView}>
                                <TouchableOpacity onPress={() => navigate('OrderDetail')}>
                                    <Text style={styles.textbtnView}>Xem chi tiết</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
        width: '100%',
        height: '100%',
        color: 'white'
    },
    containerStatus: {
        height: dimensions.getHeight() / 20,
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#dcdcdc',
        paddingHorizontal:10,
        paddingVertical:10
    },
    textStatus:{
        fontSize:dimensions.getWidth() /27
    },
    orderProduct:{
        flexDirection:'row',
        height:dimensions.getHeight() / 5,

    },
    product:{
        flex:1
    },
    detailProduct: {
        flex:3,
        marginHorizontal:10,
        marginVertical:10
    },
    titleProdfuct:{
        fontSize: dimensions.getWidth() / 24 
    },
    price: {
        fontSize: dimensions.getWidth() / 24 ,
        color:'red'
    },
    btnView:{
        borderWidth:1,
        borderColor:'darkblue',
        width:'50%',
        height: dimensions.getHeight() / 20,
        alignItems:'center',
        borderRadius: 5,
        marginVertical: 10
    },
    textbtnView : {
        lineHeight:dimensions.getHeight() / 25,
        color:'darkblue'
    }

});