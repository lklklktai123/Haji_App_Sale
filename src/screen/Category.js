import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from "react-native-vector-icons/AntDesign";
import { ScrollView } from 'react-native-gesture-handler';
import dimensions from '../utils/dimensions';
import Entypo from "react-native-vector-icons/Entypo";
import { firebaseApp } from '../components/firebase/FirebaseConfig';

export default class Category extends Component {
    constructor(props) {
        super(props)
        
    }
   
    SetDataBase = () => {
        // firebaseApp.database().ref('users').push({
        //     username: 'tai',
        //     email: 'aa',
        //     profile_picture : 'imageUrl'
        //   });
        let item = []
          firebaseApp.database().ref('users').on('child_added',(dataSnapshot)=>{
              
        item.push({
                name:dataSnapshot.val(),
                key:dataSnapshot.key
            });
          });
          return item
        //   const newItem = item.map(function(value,index){
            
        //     return index;
        //   });
        //   console.log(newItem)
        // var userId = firebaseApp.auth().currentUser.uid;
        // firebaseApp.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        //     var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        //     console.log(username)
        // });
    }
    
    render() {
        console.log('category')
        const { navigate } = this.props.navigation;
        var b = this.SetDataBase();
        for (const iterator of b) {
            console.log(iterator.key);
            console.log(iterator.name.email)
            // for (const value of iterator.name) {
            //     console.log(value)
            // }
        }
        // console.log(b[0].key);
        // var c = b[0].name;
        // console.log(c.email);
        return (
            <View style={styles.container}>
                <View style={styles.containerCategory}>
                    <ScrollView>
                        <View style={styles.category}>
                            <TouchableOpacity>
                                <Icon name="laptop" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>Laptop</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.category}>
                            <TouchableOpacity>
                                <Entypo name="classic-computer" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>PC Gaming</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.category}>
                            <TouchableOpacity>
                                <Entypo name="classic-computer" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>PC Văn Phòng</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.category}>
                            <TouchableOpacity>
                                <Entypo name="cog" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>Linh kiện PC</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.category}>
                            <TouchableOpacity>
                                <Icon name="desktop" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>Màn hình</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.category}>
                            <TouchableOpacity>
                                <Entypo name="mouse" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>Chuột</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.category}>
                            <TouchableOpacity>
                                <Icon name="keyboard-o" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>Bàn phím</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.containerProduct}>
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
                        <View style={styles.productImage2}>
                            <TouchableOpacity>
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

                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    containerCategory: {
        flex: 1,
        backgroundColor: '#f0f8ff',
        alignItems: 'center'

    },
    containerProduct: {
        flex: 3,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    category: {
        marginVertical: 10,
        borderColor: '#f0f8ff',
        borderBottomColor: '#dcdcdc',
        borderWidth: 1,
        width: dimensions.getWidth() / 4,
        height: dimensions.getHeight() / 10,
        alignItems: 'center'
    },
    iconCategory: {
        textAlign: 'center',
    },
    productImage2: {
        marginHorizontal: 5,
        marginVertical: 5,
        height: dimensions.getHeight() /2,
    },
    productImage: {
        height:'60%',
        alignItems:'center'
    },
    contentProduct: {
        height:'40%',
        alignItems:'center'

    },
    nameProduct: {
        fontSize: dimensions.getWidth() / 23,
        textAlign:'center'
    },
    priceProduct: {
        color: 'red',
        fontSize: dimensions.getWidth() / 22,
        fontWeight: 'bold'
    },
});