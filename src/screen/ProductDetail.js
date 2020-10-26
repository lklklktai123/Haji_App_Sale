import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from "react-native-vector-icons/AntDesign";
import { ScrollView } from 'react-native-gesture-handler';
import dimensions from '../utils/dimensions';
import Entypo from "react-native-vector-icons/Entypo";
export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }
    render() {
        return (
            <View style={StyleSheet.container}>
                <ImageBackground
                    style={styles.imageBackground}>
                    <ScrollView>
                        <View style={styles.productImage2}>
                            <TouchableOpacity onPress={() => navigate('ProductDetail')}>
                                <View style={styles.product}>
                                    <View style={styles.productImage}>
                                        <Image source={require('../components/images/pchot1.webp')} style={{ width: '90%', height: '90%' }}></Image>
                                    </View>
                                    <View style={styles.contentProduct}>
                                        <Text style={styles.nameProduct}>Laptop gaming ASUS TUF FX505DT HN488T
                                    </Text>
                                        <Text style={styles.priceProduct}>17.990.000 đ</Text>
                                    </View>

                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.containerTextDetail}>
                            <Text style={styles.textDetail}>Mô tả sản phẩm</Text>
                        </View>
                        <View style={styles.detailProduct}>
                            <View style={styles.detailProductChild}>
                                <View style={styles.titleDetail}>
                                    <Text>CPU</Text>
                                </View>
                                <View style={styles.titleContent}>
                                    <Text>AMD Ryzen 5 3550H 2.1GHz up to 3.7GHz 4MB</Text>

                                </View>

                            </View>
                            <View style={styles.detailProductChild}>
                                <View style={styles.titleDetail}>
                                    <Text>RAM</Text>
                                </View>
                                <View style={styles.titleContent}>
                                    <Text>8GB DDR4 2400MHz (2x SO-DIMM socket, up to 32GB SDRAM)</Text>

                                </View>
                            </View>
                            <View style={styles.detailProductChild}>
                                <View style={styles.titleDetail}>
                                    <Text>RAM</Text>
                                </View>
                                <View style={styles.titleContent}>
                                    <Text>8GB DDR4 2400MHz (2x SO-DIMM socket, up to 32GB SDRAM)</Text>

                                </View>
                            </View>
                            <View style={styles.detailProductChild}>
                                <View style={styles.titleDetail}>
                                    <Text>RAM</Text>
                                </View>
                                <View style={styles.titleContent}>
                                    <Text>8GB DDR4 2400MHz (2x SO-DIMM socket, up to 32GB SDRAM)</Text>

                                </View>
                            </View>
                            <View style={styles.detailProductChild}>
                                <View style={styles.titleDetail}>
                                    <Text>RAM</Text>
                                </View>
                                <View style={styles.titleContent}>
                                    <Text>8GB DDR4 2400MHz (2x SO-DIMM socket, up to 32GB SDRAM)</Text>

                                </View>
                            </View>
                        </View>

                    </ScrollView>
                    <View style={styles.containerBtnBuy}>
                        <TouchableOpacity style={styles.btnBuy}>
                            <Text style={styles.textBtnBuy}>Chọn mua</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',


    },
    imageBackground: {
        width: '100%',
        height: '100%',

        backgroundColor: 'white'
    },
    productImage2: {
        marginHorizontal: 5,
        marginVertical: 5,
        height: dimensions.getHeight() / 2,
        backgroundColor: 'white',
    },
    productImage: {
        height: '60%',
        alignItems: 'center'
    },
    contentProduct: {
        height: '40%',
        alignItems: 'center'

    },
    nameProduct: {
        fontSize: dimensions.getWidth() / 23,
        textAlign: 'center'
    },
    priceProduct: {
        color: 'red',
        fontSize: dimensions.getWidth() / 22,
        fontWeight: 'bold'
    },
    detailProduct: {
        width: '100%',
        backgroundColor: 'white'
    },
    detailProductChild: {
        flexDirection: 'row'
    },
    titleContent: {
        flex: 3,
        height: dimensions.getHeight() / 15,
    },
    titleDetail: {
        flex: 1,
        marginHorizontal: 5
    },
    containerTextDetail: {
        backgroundColor: 'white',
        width: '100%',
        marginHorizontal: 5

    },
    textDetail: {
        fontSize: 20,
        fontWeight: 'bold'

    },
    containerBtnBuy: {
        width:'100%',
        height: dimensions.getHeight() / 10,
        borderTopColor:'#dcdcdc',
        borderWidth:1
    },
    btnBuy: {
        height: dimensions.getHeight() / 15,
        backgroundColor: '#ED1F24',
        marginHorizontal:10,
        marginVertical:10

    },
    textBtnBuy: {
        textAlign: 'center',
        fontSize: dimensions.getWidth() / 20,
        color: 'white',
        fontWeight: 'bold',
        lineHeight: dimensions.getHeight() / 15,
    }

});