import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, Dimensions, TouchableOpacity, ToastAndroid } from 'react-native';

const { width, scale } = Dimensions.get('window');
const s = width / 400;

export default class Publish extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            page: 1
        }
    }
    componentDidMount = () => {
        fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=10')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    tits: res.data
                })
            })
    }

    lastPage = () => {
        this.setState({
            page: this.state.page - 1
        })
        fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=10')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    tits: res.data
                });
            })
        if (this.state.page <= 1) {
            ToastAndroid.show("页数不能再减少了", ToastAndroid.SHORT);
            this.setState({
                page: 1
            })
        }
    }

    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
        fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=10')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    tits: res.data
                });
            })
        console.log(this.state.tits);

    }

    render() {
        return (
            <View>
                {/* 状态栏 */}
                <StatusBar backgroundColor="#f23030" barStyle="light-content" />
                <ScrollView>
                    {
                        this.state.tits.map((item) => (
                            <View style={styles.box}>
                                <View style={{ marginLeft: 12 * s, marginRight: 26 * s, width: 230 * s }}>
                                    <Text style={{ fontSize: 12.5 * s }}>
                                        {item.title ? (item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginRight: 20 * s }}>
                                        <Text style={{ fontSize: 12.5 * s }}>{item.create_at.substr(0, 10)}</Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            fontSize: 12.5 * s
                                        }}>
                                            {(parseInt(Math.random() * 2) === 0) ? <Text>已回复</Text> : <Text style={{ color: '#f23030' }}>待回复</Text>}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                    <View style={styles.boxBottom}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.word} onPress={this.lastPage}>上一页</Text>
                        </TouchableOpacity>
                        <View>
                            <Text>第{this.state.page}页</Text>
                        </View>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.word} onPress={this.nextPage}>下一页</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        height: 40 * s,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomColor: '#fafafa',
        borderBottomWidth: 1 * s,
        borderStyle: "dashed"
    },
    boxBottom: {
        height: 80 * s,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btn: {
        width: 96 * s,
        height: 32 * s,
        backgroundColor: '#f23030',
        borderRadius: 16 * s,
        alignItems: 'center',
        justifyContent: 'center'
    },
    word: {
        fontSize: 12.5 * s,
        color: '#ffffff'
    }
});