import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, Alert,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebaseApp } from '../components/firebase/FirebaseConfig';
import dimensions from '../utils/dimensions';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    
    Login(navigation) {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(data => {
                const newUser = data.user
                Alert.alert(
                    "Thành Công",
                    'Đăng nhập thành công',
                    [
                        
                        { text: "OK",onPress: () => navigation('Home')  }
                    ],
                    { cancelable: false }
                )
            })
            .catch(function (error) {
                Alert.alert(
                    "Thất bại",
                    'Sai tên tài khoản hoặc mật khẩu',
                    [
                        
                        { text: "OK",onPress: () => console.log("OK Pressed")  }
                    ],
                    { cancelable: false }
                )
            });
    }
    render() {
        console.log('Login')
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../components/images/login.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                    <ScrollView>
                        <View style={styles.containerImage}>
                            <Image source={require('../components/images/logo.png')} style={styles.logoImage} />
                        </View>
                        <View style={styles.containerLogin}>
                            <View style={styles.containerInput}>
                                <View style={styles.containerIcon}>
                                    <Icon name="user" size={30} color="#dcdcdc" />
                                </View>
                                <View style={styles.containerEmail}>
                                    <TextInput placeholder='Email'
                                        onChangeText={(email) => this.setState({ email })}
                                        value={this.state.email} />
                                </View>

                            </View>
                            <View style={styles.containerInput}>
                                <View style={styles.containerIcon}>
                                    <Icon name="lock" size={30} color="#dcdcdc" />
                                </View>
                                <View style={styles.containerEmail}>
                                    <TextInput placeholder='Mật khẩu'
                                        secureTextEntry={true}
                                        onChangeText={(password) => this.setState({ password })}
                                        value={this.state.password} />
                                </View>
                            </View>
                            <View style={styles.containerBtn}>
                                <TouchableOpacity style={styles.btnLogin} onPress={() => { this.Login(navigate) }}>
                                    <Text style={styles.btnText}>ĐĂNG NHẬP</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.containerCreate}>
                                <View style={styles.containerForgot}>
                                    <Text style={styles.textForgot}>Quên mật khẩu?</Text>
                                </View>
                                <View style={styles.containerCreateAcount} >
                                    <View style={styles.textAcount}>
                                        <Text style={styles.textCreateAcount}>Bạn không có tài khoản?</Text>
                                    </View>
                                    <View style={styles.btnRegister}>
                                        <TouchableOpacity onPress={() => navigate('Register', { name: 'Brent' })}>
                                            <Text style={styles.textRegister}>Đăng ký</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                            <View style={styles.containerMethodLogin}>
                                <TouchableOpacity style={styles.btnMethodLogin}>
                                    <Icon name="google" size={20} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnMethodLogin}>
                                    <Icon name="twitter" size={20} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnMethodLogin}>
                                    <Icon name="facebook" size={20} color="white" />
                                </TouchableOpacity>
                            </View>


                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
    containerImage: {
        flex: 1.5,
    },
    containerLogin: {
        flex: 2.5,
    },
    containerInput: {
        flex: 0.15,
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: '#f0f8ff',
        borderRadius: 50,
        marginHorizontal: 10,
        paddingHorizontal: 15,
        marginVertical: 5
    },
    containerBtn: {
        borderWidth: 1,
        backgroundColor: "#20232a",
        borderRadius: 50,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        height: 50
    },
    btnText: {
        color: 'white',
        fontSize: dimensions.getWidth() / 20,
        fontWeight: 'bold'

    },
    containerIcon: {
        flex: 1,
        marginTop: 5
    },
    containerEmail: {
        flex: 9
    },
    logoImage: {
        width: 400,
        height: 300,
    },
    containerCreate: {
        flex: 0.3,
        marginHorizontal: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
        position: 'relative'
    },

    containerForgot: {
        alignItems: 'center',
    },
    containerCreateAcount: {
        flex: 1,
        flexDirection: 'row',

        marginTop: 20
    },
    textAcount: {
        flex: 2,
        alignItems: 'flex-end',
    },
    btnRegister: {
        flex: 1,
        alignItems: 'flex-start',
        marginHorizontal: 5,
        marginVertical: 2
    },
    textCreateAcount: {
        color: 'white',
        fontSize: dimensions.getWidth() / 22,
    },
    textForgot: {
        color: 'white',
        fontSize: dimensions.getWidth() / 22,

    },
    containerMethodLogin: {
        flex: 0.1,
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingHorizontal: 15,
        marginTop: 30
    },
    btnMethodLogin: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
        marginHorizontal: 15,
        alignItems: 'center',
        paddingVertical: 5
    },
    scrollView: {
        flex: 1,
        width: '100%',
    },
    textRegister: {
        color: '#B086EF',
        fontSize: dimensions.getWidth() / 25,
    }
});
