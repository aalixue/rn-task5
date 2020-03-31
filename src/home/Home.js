import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';

const { width, scale } = Dimensions.get('window');
const s = width / 640;

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <StatusBar backgroundColor='#f23030' barStyle="light-content" />
                <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                    <View style={{ height: 349 * s, backgroundColor: '#fc2d6f' }}>
                        <Swiper
                            dot={<View style={styles.beforedot} />}
                            activeDot={<View style={styles.afterdot} />}
                            paginationStyle={{ bottom: 15 * s }}
                        >
                            <View style={{ height: 349 * s, width: '100%' }}>
                                <ImageBackground
                                    source={require('../../assets/task2/carousel1.png')}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <View style={styles.topbox}>
                                        <View style={styles.search}>
                                            <Icon name='search' size='lg' color='#ffffff' />
                                            <TextInput placeholder='请输入您要搜索的关键字' placeholderTextColor='#ffffff' />
                                        </View>
                                        <TouchableOpacity>
                                            <Icon name='shopping-cart' size='lg' color='#ffffff' />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={{ width: 205 * s, height: 103 * s, marginTop: 137 * s, marginLeft: 15 * s }} source={require('../../assets/task2/home.png')} />
                                        <View>
                                            <Image style={{ width: 49 * s, height: 51 * s, marginTop: 178 * s, marginLeft: 16 * s }} source={require('../../assets/task2/animal.png')} />
                                            <Image style={{ width: 67 * s, height: 24 * s, marginTop: -6, marginLeft: 8 }} source={require('../../assets/task2/serve.jpg')} />
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ height: 349 * s, width: '100%' }}>
                                <View style={styles.topbox}>
                                    <View style={styles.search}>
                                        <Icon name='search' size='lg' color='#ffffff' />
                                        <TextInput placeholder='请输入您要搜索的关键字' placeholderTextColor='#ffffff' />
                                    </View>
                                    <TouchableOpacity>
                                        <Icon name='shopping-cart' size='lg' color='#ffffff' />
                                    </TouchableOpacity>
                                </View>
                                <ImageBackground
                                    source={require('../../assets/task2/carousel2.png')}
                                    style={{ width: '100%', height: 273 * s }}
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={{ width: 205 * s, height: 103 * s, marginTop: 137 * s, marginLeft: 15 * s }} source={require('../../assets/task2/home.png')} />
                                        <View>
                                            <Image style={{ width: 49 * s, height: 51 * s, marginTop: 178 * s, marginLeft: 16 * s }} source={require('../../assets/task2/animal.png')} />
                                            <Image style={{ width: 67 * s, height: 24 * s, marginTop: -6, marginLeft: 8 }} source={require('../../assets/task2/serve.jpg')} />
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ height: 349 * s, width: '100%' }}>
                                <ImageBackground
                                    source={require('../../assets/task2/carousel1.png')}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <View style={styles.topbox}>
                                        <View style={styles.search}>
                                            <Icon name='search' size='lg' color='#ffffff' />
                                            <TextInput placeholder='请输入您要搜索的关键字' placeholderTextColor='#ffffff' />
                                        </View>
                                        <TouchableOpacity>
                                            <Icon name='shopping-cart' size='lg' color='#ffffff' />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={{ width: 205 * s, height: 103 * s, marginTop: 137 * s, marginLeft: 15 * s }} source={require('../../assets/task2/home.png')} />
                                        <View>
                                            <Image style={{ width: 49 * s, height: 51 * s, marginTop: 178 * s, marginLeft: 16 * s }} source={require('../../assets/task2/animal.png')} />
                                            <Image style={{ width: 67 * s, height: 24 * s, marginTop: -6, marginLeft: 8 }} source={require('../../assets/task2/serve.jpg')} />
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.lists}>
                        <View style={[styles.round, { backgroundColor: '#ffcccc' }]}>
                            <Image style={styles.pic1} source={require('../../assets/task2/list1.png')} />
                        </View>
                        <Text style={styles.word}>居家维修保养</Text>
                    </View>
                    <View style={styles.lists}>
                        <View style={[styles.round, { backgroundColor: '#ffe1b1' }]}>
                            <Image style={styles.pic2} source={require('../../assets/task2/list2.png')} />
                        </View>
                        <Text style={styles.word}>住宿优惠</Text>
                    </View>
                    <View style={styles.lists}>
                        <View style={[styles.round, { backgroundColor: '#bfe6a8' }]}>
                            <Image style={styles.pic3} source={require('../../assets/task2/list3.png')} />
                        </View>
                        <Text style={styles.word}>出行接送</Text>
                    </View>
                    <View style={styles.lists}>
                        <View style={[styles.round, { backgroundColor: '#c3ddf2' }]}>
                            <Image style={styles.pic4} source={require('../../assets/task2/list4.png')} />
                        </View>
                        <Text style={styles.word}>E族活动</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ fontSize: 22 * s, color: '#ffffff' }}>发布需求</Text>
                    </TouchableOpacity>
                    <View style={styles.bottombox}>
                        <Text style={{ fontSize: 16 * s, color: '#767676' }}>©E族之家 版权所有</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    topbox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 76 * s,
        backgroundColor: '#f23030'
    },
    search: {
        width: 530 * s,
        height: 50 * s,
        backgroundColor: '#fbb8b8',
        borderRadius: 25 * s,
        marginRight: 23 * s,
        alignItems: 'center',
        paddingLeft: 30 * s,
        flexDirection: 'row'
    },
    lists: {
        height: 120 * s,
        marginTop: 10 * s,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    round: {
        height: 100 * s,
        width: 100 * s,
        borderRadius: 50,
        marginLeft: 23 * s
    },
    pic1: {
        height: 55 * s,
        width: 55 * s,
        marginTop: 22.5 * s,
        marginLeft: 22.5 * s,
        resizeMode: 'cover'
    },
    pic2: {
        height: 50 * s,
        width: 46 * s,
        marginTop: 24 * s,
        marginLeft: 29 * s,
        resizeMode: 'cover'
    },
    pic3: {
        height: 49 * s,
        width: 49 * s,
        marginTop: 24.5 * s,
        marginLeft: 24.5 * s,
        resizeMode: 'cover'
    },
    pic4: {
        height: 42 * s,
        width: 44 * s,
        marginTop: 29 * s,
        marginLeft: 28 * s,
        resizeMode: 'cover'
    },
    word: {
        fontSize: 22 * s,
        color: '#333333',
        marginLeft: 42 * s
    },
    btn: {
        width: 545 * s,
        height: 68 * s,
        borderRadius: 6,
        backgroundColor: '#f23030',
        marginLeft: 50 * s,
        marginTop: 36 * s,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottombox: {
        height: 105 * s,
        alignItems: 'center',
        paddingTop: 60 * s
    },
    beforedot: {
        backgroundColor: '#ffffff',
        width: 14 * s,
        height: 14 * s,
        borderRadius: 7 * s,
        marginLeft: 11.5 * s,
        marginRight: 11.5 * s
    },
    afterdot: {
        backgroundColor: '#fd0304',
        width: 14 * s,
        height: 14 * s,
        borderRadius: 7 * s,
        marginLeft: 11.5 * s,
        marginRight: 11.5 * s
    }
})