import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from "react-native-vector-icons/AntDesign";
import { ScrollView } from 'react-native-gesture-handler';
import { firebaseApp } from '../components/firebase/FirebaseConfig';
// import actionCreatetor from '../components/redux/actions/actionCreatetor';
// import {connect} from 'react-redux';
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            first: '',
            last: ''
        }
    }
    Register = (navigation) => 
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(data => {
        const newUser = data.user
        newUser.updateProfile({
            displayName: this.state.first + " " + this.state.last,
          }).then(function() {
            Alert.alert(
                "Thành Công",
                'Đăng nhập thành công',
                [
                    
                    { text: "OK",onPress: () => navigation('Home', { user: newUser })  }
                ],
                { cancelable: false }
            )
          }).catch(function(error) {
            console.log(error)
          });
    })
    .catch(function (error) {
        Alert.alert(
            "Thất bại",
            'Có sự cố gì đã xảy ra',
            [
                
                { text: "OK",onPress: () => console.log("OK Pressed")  }
            ],
            { cancelable: false }
        )
    });
        
    
    render() {
        console.log('Register')
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../components/images/login.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                    <ScrollView style={{ height: 200 }} centerContent='true'>
                        {/* <TouchableOpacity>
                        <Icon name="angle-right" style={styles.iconAngle} size={40} color="#dcdcdc"/>
                    </TouchableOpacity> */}
                        <View style={styles.containerImage}>
                            <Image source={require('../components/images/logo.png')} style={styles.logoImage} />
                        </View>

                        <View style={styles.containerRegister}>
                            <View style={styles.containerInforUser}>
                                <View style={styles.containerFirstName}>
                                    <View style={styles.containerIconName}>
                                        <Icon name="user" size={30} color="#dcdcdc" />
                                    </View>
                                    <View style={styles.containerInputName}>
                                        <TextInput placeholder='Tên'
                                            onChangeText={(first) => this.setState({ first })}
                                            value={this.state.first}
                                        />
                                    </View>
                                </View>
                                <View style={styles.containerLastName}>
                                    <View style={styles.containerIconName}>
                                        <Icon name="user" size={30} color="#dcdcdc" />
                                    </View>
                                    <View style={styles.containerInputName}>
                                        <TextInput placeholder='Họ'
                                            onChangeText={(last) => this.setState({ last })}
                                            value={this.state.last}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.containerInput}>
                                <View style={styles.containerIcon}>
                                    <AntIcon name="mail" color="#dcdcdc" size={30} />
                                </View>
                                <View style={styles.containerEmail}>
                                    <TextInput placeholder='Email'
                                        onChangeText={(email) => this.setState({ email })}
                                        value={this.state.email}
                                    />
                                </View>
                            </View>
                            <View style={styles.containerInput}>
                                <View style={styles.containerIcon}>
                                    <Icon name="lock" size={30} color="#dcdcdc" />
                                </View>
                                <View style={styles.containerEmail}>
                                    <TextInput placeholder='Mật khẩu' secureTextEntry={true}
                                        onChangeText={(password) => this.setState({ password })}
                                        value={this.state.password}
                                    />
                                </View>

                            </View>
                            <View style={styles.containerInput}>
                                <View style={styles.containerIcon}>
                                    <Icon name="lock" size={30} color="#dcdcdc" />
                                </View>
                                <View style={styles.containerEmail}>
                                    <TextInput placeholder='Xác nhận mật khẩu' secureTextEntry={true} />
                                </View>

                            </View>
                            <View style={styles.containerBtn}>
                                <TouchableOpacity
                                onPress={() => {this.Register(navigate)}}
                                style={styles.btnLogin} >
                                    <Text style={styles.btnText}>ĐĂNG KÝ</Text>
                                </TouchableOpacity>
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
        flex: 1,
    },
    containerImage: {
        height: '35%',
    },
    containerRegister: {
        height: '65%'
    },
    containerInput: {
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: '#f0f8ff',
        borderRadius: 50,
        marginHorizontal: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
        height: '10%',
    },
    containerBtn: {
        height: '10%',
        borderWidth: 1,
        backgroundColor: "#20232a",
        borderRadius: 50,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'

    },
    containerIcon: {
        flex: 1,
        marginTop: 5
    },
    containerEmail: {
        flex: 9,
    },
    logoImage: {
        width: 400,
        height: 300,
    },
    containerMethodLogin: {
        height: '7%',
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
    textRegister: {
        color: '#B086EF'
    },
    containerFirstName: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: '#f0f8ff',
        borderRadius: 50,
        paddingHorizontal: 7
    },
    containerLastName: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: '#f0f8ff',
        borderRadius: 50,
        paddingHorizontal: 7,
        marginHorizontal: 5
    },
    containerIconName: {
        flex: 1.5,
        marginTop: 2
    },
    containerInputName: {
        flex: 8.5
    },
    containerInforUser: {
        height: '10%',
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 10
    },
    iconAngle: {
        marginHorizontal: 10,
        marginVertical: 10,
    }
});
// const mapStateToProps = (state) => {
//     return {user: state.user};
//   };
//   export default connect(mapStateToProps, actionCreatetor)(Register);
