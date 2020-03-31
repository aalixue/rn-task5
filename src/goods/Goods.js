import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
const { width, scale } = Dimensions.get('window');
const s = width / 640;

export default class Goods extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={{
                        width: '80%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 50,
                        backgroundColor: '#eeeeee',
                        borderRadius: 5,
                        marginTop: 12,
                        marginLeft: '10%'
                    }}>
                        <TextInput placeholder='请输入商品名称' style={{ fontSize: 18 * s, marginLeft: 10 }} />
                        <TouchableOpacity style={{ width: 50, height: 50, marginRight: 10 }}>
                            <Image style={{ width: 50, height: 50 }} source={require("../../assets/task1/search.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        height: 85
                    }}>
                        <Text style={styles.top1}>综合</Text>
                        <Text style={styles.tops}>销量</Text>
                        <Text style={styles.tops}>新品</Text>
                        <Text style={styles.tops}>价格</Text>
                        <Text style={styles.tops}>信用</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{
                        height: '100%',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: "space-evenly",
                        flexWrap: 'wrap',
                        backgroundColor: '#f4f4f4'
                    }}>
                        <View style={styles.box}>
                            <Image style={styles.img1} source={require('../../assets/task1/shj.png')} />
                            <Text style={styles.word}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.price}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.img2} source={require('../../assets/task1/ls.png')} />
                            <Text style={styles.word}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.price}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.img1} source={require('../../assets/task1/shj.png')} />
                            <Text style={styles.word}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.price}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={styles.img2} source={require('../../assets/task1/ls.png')} />
                            <Text style={styles.word}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.price}>36.00</Text>
                        </View>
                        <View style={[styles.box, styles.box1]}>
                            <Image style={styles.img1} source={require('../../assets/task1/shj.png')} />
                            <Text style={styles.word}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.price}>36.00</Text>
                        </View>
                        <View style={[styles.box, styles.box1]}>
                            <Image style={styles.img2} source={require('../../assets/task1/ls.png')} />
                            <Text style={styles.word}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.price}>36.00</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tops: {
        fontSize: 20 * s,
        lineHeight: 80,
        color: '#333333'
    },
    top1: {
        fontSize: 20 * s,
        lineHeight: 80,
        color: '#f23030'
    },
    box: {
        height: 320,
        width: '45%',
        backgroundColor: '#fff',
        margin: 10
    },
    box1: {
        marginBottom: 80
    },
    img1: {
        width: 115,
        height: 150,
        marginLeft: '20%',
        marginTop: 45
    },
    img2: {
        width: 155,
        height: 150,
        marginLeft: '15%',
        marginTop: 45
    },
    word: {
        fontSize: 16 * s,
        marginTop: 30,
        marginLeft: 5,
        color: '#666666'
    },
    price: {
        fontSize: 16 * s,
        color: '#f23030',
        marginTop: 15,
        marginLeft: 5
    }
});

