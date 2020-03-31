import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwiperPage extends Component {
    start = ()=>{
        AsyncStorage.setItem('isInstall','true',()=>{//转成字符串才能存上，要不存不上
            console.log('store end');
        });
        this.props.afterInstall();//引入App.js函数
    };
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/launch_screen.png')} />
                </View>
                <View style={styles.slide1}>
                    <Image  style={styles.img} source={require('../../assets/launch_screen.png')} />
                </View>
                <View style={styles.slide1}>
                    <Image  style={styles.img} source={require('../../assets/launch_screen.png')} />
                    <TouchableOpacity onPress={this.start} style={styles.start}>
                        <Text style={{color:'#fff'}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    img:{
        height:'100%',
        width:'100%'
    },
    slide1: {
        flex:1,
        height:'100%',
        alignItems:'center'
    },
    start: {
        position:"absolute",
        bottom: 150,
        width: 120,
        height: 40,
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
        textAlignVertical:'center',
        backgroundColor: 'red',
        borderRadius: 20
    }
})
