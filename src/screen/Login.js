import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../components/images/login.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                    <View style={styles.containerImage}>
                        <Image source={require('../components/images/logo.png')} style={styles.logoImage} />
                    </View>
                    <View style={styles.containerLogin}>
                        <View style={styles.containerInput}>
                            <View style={styles.containerIcon}>
                                <Icon name="user" size={30} color="#dcdcdc" />
                            </View>
                            <View style={styles.containerEmail}>
                                <TextInput placeholder='Email' />
                            </View>
                        </View>
                        <View style={styles.containerInput}>
                            <View style={styles.containerIcon}>
                                <Icon name="lock" size={30} color="#dcdcdc" />
                            </View>
                            <View style={styles.containerEmail}>
                                <TextInput placeholder='Password' />
                            </View>
                            
                        </View>
                        <View style={styles.containerBtn}>
                        <TouchableOpacity style={styles.btnLogin}>
                            <Text style={styles.btnText}>LOGIN</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.containerCreate}>
                            <View style={styles.containerForgot}>
                                <Text style={styles.textForgot}>Forgot Password?</Text>
                            </View>
                            <View style={styles.containerCreateAcount} >
                                <Text style={styles.textCreateAcount}>Don't have an account? <Text style={styles.textRegister}>Register</Text></Text>
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

                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    containerImage: {
        flex: 1.5,
    },
    containerLogin: {
        flex: 2.5,
    },
    containerInput: {
        flex: 0.15,
        flexDirection:'row',
        borderWidth: 1,
        backgroundColor: '#f0f8ff',
        borderRadius:50,
        marginHorizontal:10,
        paddingHorizontal:15,
        marginVertical:5
    },
    containerBtn: {
        flex: 0.15,
        borderWidth: 1,
        backgroundColor: "#20232a",
        borderRadius:50,
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:5
    },
    btnText: {
        color:'white',
        fontSize:20,
        fontWeight:'bold'
        
    },
    containerIcon: {
        flex: 1,
        marginTop:5
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
        marginHorizontal:10,
        paddingHorizontal:15,
        marginVertical:10,
        position:'relative'
    },
    
    containerForgot: {
        alignItems:'center',
    },
    containerCreateAcount: {
        alignItems:'center',
        marginTop:20
    },
    textCreateAcount: {
        color:'white',
        fontSize:16,
    },
    textForgot:{
        color:'white',
        fontSize:16,
        
    },
    containerMethodLogin: {
        flex: 0.1,
        flexDirection:'row',
        marginHorizontal:10,
        paddingHorizontal:15,
        marginTop:30
    },
    btnMethodLogin: {
        flex:1,
        borderWidth:1,
        borderColor:'white',
        borderRadius:50,
        marginHorizontal:15,
        alignItems:'center',
        paddingVertical:5
    },
    textRegister:{
        color:'#B086EF'
    }
});
