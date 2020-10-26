import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import dimensions from '../utils/dimensions';
import { firebaseApp } from '../components/firebase/FirebaseConfig';
export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: firebaseApp.auth().currentUser,
            editAble: false,
            titleBtn: 'Cập Nhật',
            status:true
        }
    }
    UpdateUser = () => {
        if(this.state.status === true) {
            this.setState({
                editAble: true,
            titleBtn: 'Xác nhận',
            status:false
            })
        } else {
            this.setState({
                editAble: true,
            titleBtn: 'Cập nhật',
            status:true
            })
        }
    }
    render() {
        console.log('User')
        const { navigate } = this.props.navigation;
        return (
            <View style={StyleSheet.container}>
                <ImageBackground source={require('../components/images/login.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                        <ScrollView>
                    <View style={styles.containerCover}>
                        <View style={styles.containerUser}>
                            <View style={styles.containerTitle}>
                                <Text style={styles.textTitle}>Họ và tên:</Text>
                            </View>
                            <View style={styles.containerInfor}>
                                <TextInput
                                    editable={this.state.editAble}
                                    value={this.state.user.displayName}
                                    style={styles.textInfor}
                                />
                            </View>
                        </View>
                        <View style={styles.containerUser}>
                            <View style={styles.containerTitle}>
                                <Text style={styles.textTitle}>Ngày sinh:</Text>
                            </View>
                            <View style={styles.containerInfor}>
                                <TextInput
                                    editable={this.state.editAble}
                                    value='19-01-1996'
                                    style={styles.textInfor}
                                />
                            </View>
                        </View>
                        <View style={styles.containerUser}>
                            <View style={styles.containerTitle}>
                                <Text style={styles.textTitle}>Email:</Text>
                            </View>
                            <View style={styles.containerInfor}>
                                <TextInput
                                    editable={this.state.editAble}
                                    value={this.state.user.email}
                                    style={styles.textInfor}
                                />
                            </View>
                        </View>
                        <View style={styles.containerUser}>
                            <View style={styles.containerTitle}>
                                <Text style={styles.textTitle}>Số điện thoại:</Text>
                            </View>
                            <View style={styles.containerInfor}>
                                <TextInput
                                    editable={this.state.editAble}
                                    value={this.state.user.phoneNumber}
                                    style={styles.textInfor}
                                />
                            </View>
                        </View>
                        <View style={styles.containerUser}>
                            <View style={styles.containerIconOrder}>
                                <Icon name="mortar-board" size={20} color='#FFCB2C'></Icon>
                            </View>
                            <View style={styles.containerOrder}>
                                <TouchableOpacity onPress={() => navigate('Order')}>
                                    <Text style={styles.textOrder}>Quản lý đơn hàng</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                    <View style={styles.containerBtnBuy}>
                        <TouchableOpacity
                        onPress={() => {this.UpdateUser()}} 
                        style={styles.btnBuy}>
                            <Text style={styles.textBtnBuy}>{this.state.titleBtn}</Text>
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
    containerCover: {
        flex: 1
    },
    containerUser: {
        flexDirection: 'row',
        height: dimensions.getHeight() / 10
    },
    containerTitle: {
        flex: 1,
        marginHorizontal: 10,
        flexDirection: 'row'

    },
    containerInfor: {
        flex: 2,
        marginVertical: 10
    },
    textTitle: {
        lineHeight: dimensions.getHeight() / 10,
        fontSize: dimensions.getWidth() / 22,
    },
    textOrder: {
        textDecorationLine: 'underline',
        lineHeight: dimensions.getHeight() / 10,
        fontSize: dimensions.getWidth() / 22,
    },
    textInfor: {
        fontSize: dimensions.getWidth() / 22,
        color: 'black',
    },

    containerIconOrder: {
        flex: 1,
        marginVertical: dimensions.getHeight() / 30,
        marginHorizontal: 10
    },
    containerOrder: {
        flex: 15,

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