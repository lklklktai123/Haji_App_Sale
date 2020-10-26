import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome5Free from 'react-native-vector-icons/FontAwesome5';
import dimensions from '../utils/dimensions';
import { Rating } from 'react-native-ratings';
import ViewMoreText from 'react-native-view-more-text';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../components/images/slider1.jpg'),
                require('../components/images/slider2.jpg'),
                require('../components/images/slider3.jpg')          // Local image
            ],
        };
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        console.log('Home')
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../components/images/login.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                    <ScrollView>
                        <View style={styles.containerCart}>
                            <TouchableOpacity onPress={() => navigate('Cart')}>
                                <Icon name="cart-plus" size={30} color="#dcdcdc" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerSearch}>
                            <View style={styles.iconSearch}>
                                <Icon name="search" size={30} color="#dcdcdc" />
                            </View>
                            <View style={styles.inputSearch}>
                                <TextInput placeholder='Bạn muốn mua gì hôm nay' />
                            </View>

                        </View>
                        <SliderBox
                            images={this.state.images}
                            sliderBoxHeight={200}
                            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                            dotColor="#FFEE58"
                            inactiveDotColor="#90A4AE"
                            paginationBoxVerticalPadding={20}
                            autoplay
                            circleLoop
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            paginationBoxStyle={{
                                position: "absolute",
                                bottom: 0,
                                padding: 0,
                                alignItems: "center",
                                alignSelf: "center",
                                justifyContent: "center",
                                paddingVertical: 10
                            }}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 0,
                                padding: 0,
                                margin: 0,
                                backgroundColor: "rgba(128, 128, 128, 0.92)"
                            }}
                            ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
                            imageLoadingColor="#2196F3"
                        />
                        <View style={styles.containerTitle}>
                            <Text style={styles.textTitle}>
                                <FontAwesome5Free name="hotjar" size={20} color="#FFCB2C" /> Hôm Nay Có Gì Hot
                        </Text>
                        </View>
                        <View style={styles.containerProductImage2}>
                            <View style={styles.productImage2}>
                                <View style={styles.product}>
                                    <Image source={require('../components/images/productHot2.webp')} style={{ width: '100%', height: '100%' }}></Image>
                                </View>
                                <View style={styles.contentProduct}>
                                    <ViewMoreText
                                        numberOfLines={1}
                                    >
                                        <Text style={styles.nameProduct}>Chuột Logitech G102 Lightsync RGB Black
                                    </Text>
                                    </ViewMoreText>

                                    <View style={styles.containerRating}>
                                        <Rating
                                            onFinishRating={this.ratingCompleted}
                                            imageSize={15}
                                            style={{ position: 'absolute', }}
                                            ratingCount={5}
                                            startingValue={5}
                                        />
                                    </View>
                                    <Text style={styles.priceProduct}>450.000 đ</Text>
                                </View>
                            </View>
                            <View style={styles.productImage2}>
                                <View style={styles.product}>
                                    <Image source={require('../components/images/productHot3.webp')} style={{ width: '100%', height: '100%' }}></Image>
                                </View>
                                <View style={styles.contentProduct}>
                                    <ViewMoreText
                                        numberOfLines={1}
                                    >
                                        <Text style={styles.nameProduct}>Tai nghe Cooler Master MH710
                                    </Text>
                                    </ViewMoreText>

                                    <View style={styles.containerRating}>
                                        <Rating
                                            onFinishRating={this.ratingCompleted}
                                            imageSize={15}
                                            style={{ position: 'absolute', }}
                                            ratingCount={5}
                                            startingValue={5}
                                        />
                                    </View>
                                    <Text style={styles.priceProduct}>1.190.000 đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.textTitle}>
                                <FontAwesome5Free name="hotjar" size={20} color="#FFCB2C" /> Top Labtop bán chạy
                        </Text>
                        </View>
                        <View style={styles.containerProductImage2}>
                            <View style={styles.productImage2}>
                                <View style={styles.product}>
                                    <Image source={require('../components/images/pchot1.webp')} style={{ width: '100%', height: '100%' }}></Image>
                                </View>
                                <View style={styles.contentProduct}>
                                    <ViewMoreText
                                        numberOfLines={1}
                                    >
                                        <Text style={styles.nameProduct}>Laptop gaming ASUS TUF FX505DT HN478T
                                    </Text>
                                    </ViewMoreText>

                                    <View style={styles.containerRating}>
                                        <Rating
                                            onFinishRating={this.ratingCompleted}
                                            imageSize={15}
                                            style={{ position: 'absolute', }}
                                            ratingCount={5}
                                            startingValue={5}
                                        />
                                    </View>
                                    <Text style={styles.priceProduct}>16.990.000 đ</Text>
                                </View>
                            </View>
                            <View style={styles.productImage2}>
                                <View style={styles.product}>
                                    <Image source={require('../components/images/pchot2.webp')} style={{ width: '100%', height: '100%' }}></Image>
                                </View>
                                <View style={styles.contentProduct}>
                                    <ViewMoreText
                                        numberOfLines={1}
                                    >
                                        <Text style={styles.nameProduct}>Laptop gaming ASUS TUF FX505DT HN488T
                                    </Text>
                                    </ViewMoreText>

                                    <View style={styles.containerRating}>
                                        <Rating
                                            onFinishRating={this.ratingCompleted}
                                            imageSize={15}
                                            style={{ position: 'absolute', }}
                                            ratingCount={5}
                                            startingValue={5}
                                        />
                                    </View>
                                    <Text style={styles.priceProduct}>17.990.000 đ</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.containerTitle}>
                            <Text style={styles.textTitle}>
                                <FontAwesome5Free name="product-hunt" size={20} color="#FFCB2C" /> Sản Phẩm Nổi Bật
                        </Text>
                        </View>
                        <View style={styles.containerProductImage2}>
                            <View style={styles.productImage2}>
                                <View style={styles.product}>
                                    <Image source={require('../components/images/pchot1.webp')} style={{ width: '100%', height: '100%' }}></Image>
                                </View>
                                <View style={styles.contentProduct}>
                                    <ViewMoreText
                                        numberOfLines={1}
                                    >
                                        <Text style={styles.nameProduct}>Laptop gaming ASUS TUF FX505DT HN478T
                                    </Text>
                                    </ViewMoreText>

                                    <View style={styles.containerRating}>
                                        <Rating
                                            onFinishRating={this.ratingCompleted}
                                            imageSize={15}
                                            style={{ position: 'absolute', }}
                                            ratingCount={5}
                                            startingValue={5}
                                        />
                                    </View>
                                    <Text style={styles.priceProduct}>16.990.000 đ</Text>
                                </View>
                            </View>
                            <View style={styles.productImage2}>
                                <View style={styles.product}>
                                    <Image source={require('../components/images/pchot2.webp')} style={{ width: '100%', height: '100%' }}></Image>
                                </View>
                                <View style={styles.contentProduct}>
                                    <ViewMoreText
                                        numberOfLines={1}
                                    >
                                        <Text style={styles.nameProduct}>Laptop gaming ASUS TUF FX505DT HN488T
                                    </Text>
                                    </ViewMoreText>

                                    <View style={styles.containerRating}>
                                        <Rating
                                            onFinishRating={this.ratingCompleted}
                                            imageSize={15}
                                            style={{ position: 'absolute', }}
                                            ratingCount={5}
                                            startingValue={5}
                                        />
                                    </View>
                                    <Text style={styles.priceProduct}>17.990.000 đ</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.category}>
                        <View style={styles.categoryChild}>
                            <TouchableOpacity>
                                <FontAwesome5Free name="home" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>Trang chủ</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.categoryChild}>
                            <TouchableOpacity onPress={() => navigate('Category')}>
                                <Icon name="list" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>Danh mục</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.categoryChild}>
                            <TouchableOpacity>
                                <FontAwesome5Free name="search" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>Tìm kiếm</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.categoryChild}>
                            <TouchableOpacity>
                                <FontAwesome5Free name="bell" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>Thông báo</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.categoryChild}>
                            <TouchableOpacity onPress={() => navigate('User',{user:this.state.user})}>
                                <FontAwesome5Free name="user" size={20} color="#FFCB2C" style={styles.iconCategory} />
                                <Text>Cá nhân</Text>
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
    },
    containerSearch: {
        height: 60,
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: '#f0f8ff',
        marginHorizontal: 5,
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10

    },
    iconSearch: {
        flex: 1,
        marginVertical: 10
    },
    inputSearch: {
        flex: 9,
        marginVertical: 10
    },
    containerCart: {
        flex: 0.1,
        alignItems: 'flex-end',
        marginHorizontal: 5,
        marginVertical: 5

    },
    containerTitle: {
        height: 50,
        marginHorizontal: 5,
        marginVertical: 5,
        fontSize: 20,
        backgroundColor: '#f0f8ff',
    },
    textTitle: {
        lineHeight: 45,
        fontSize: dimensions.getWidth() / 25,
        paddingHorizontal: 5
    },
    containerProductImage: {
        height: 270,
        marginHorizontal: 5,
        marginVertical: 5,
        flex: 1
    },
    productImage: {
        flex: 1,
    },
    containerProductImage2: {
        flex: 1,
        flexDirection: 'row',
        height: 300


    },
    productImage2: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 5,
    },
    product: {
        flex: 2
    },
    contentProduct: {
        flex: 1,
    },
    nameProduct: {
        fontSize: dimensions.getWidth() / 23,
    },
    priceProduct: {
        color: 'red',
        fontSize: dimensions.getWidth() / 22,
        fontWeight: 'bold'
    },
    containerRating: {
        position: 'relative',
        height: dimensions.getHeight() / 55,
        marginVertical: 5
    },
    category: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    categoryChild: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 5
    },
    iconCategory: {
        textAlign: 'center'
    }
});
