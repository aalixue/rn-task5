import React, { Component } from 'react'
import { View, Text, StatusBar, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';//照相机

const { width, scale } = Dimensions.get('window');
const s = width / 640;
const options = {
    title: '相机',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择照片',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class My extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: require('../../assets/task2/my.png')
        },
            this.getPhoto();
    }

    storePhoto = (value) => {
        AsyncStorage.setItem('photo', JSON.stringify(value), err => {
            err && console.log(err.toString())
        })
    }

    getPhoto = () => {
        AsyncStorage.getItem('photo')
            .then(value => {
                this.setState({
                    imageUrl: JSON.parse(value)
                })
            })
            .catch(err => {
                err && console.log(err.toString());
            })
    }

    takephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {

                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source,
                });
                this.storePhoto(this.state.imageUrl);
            }
        });
    }

    eixtLogin = () => {
        AsyncStorage.clear();
        Actions.login();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'eeeeee' }}>
                <StatusBar backgroundColor='#f23030' barStyle="light-content" />
                <ScrollView style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={this.takephoto}>
                            <Image
                                style={{
                                    width: 156 * s,
                                    height: 156 * s,
                                    borderRadius: 78 * s,
                                    marginTop: 50 * s,
                                    borderColor: '#ffffff',
                                    borderWidth: 2
                                }}
                                source={this.state.imageUrl}
                            />
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 19.5,
                                marginTop: 25 * s,
                                color: '#ffffff'
                            }}
                        >
                            BINNU DHILLON
                        </Text>
                    </View>
                    <View style={styles.my}>
                        <Icon name="user" size='md' color='#aeaeae' />
                        <Text style={styles.word1}>我的个人中心</Text>
                    </View>
                    <View style={styles.box1}>
                        <View style={styles.mylist}>
                            <Icon name='setting' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>账户管理</Text>
                        </View>
                        <View style={styles.mylist}>
                            <Icon name='environment' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>收货地址</Text>
                        </View>
                        <View style={styles.mylist}>
                            <Icon name='audit' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>我的信息</Text>
                        </View>
                        <View style={[styles.mylist, { height: 116 * s }]}>
                            <Icon name='file-text' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>我的订单</Text>
                        </View>
                        <View style={[styles.mylist, { height: 116 * s }]}>
                            <Icon name='qrcode' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>我的二维码</Text>
                        </View>
                        <View style={[styles.mylist, { height: 116 * s }]}>
                            <Icon name='gold' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>我的积分</Text>
                        </View>
                        <View style={[styles.mylist, { height: 120 * s }]}>
                            <Icon name='star' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>我的收藏</Text>
                        </View>
                        <View style={[styles.mylist, { height: 120 * s }]}></View>
                        <View style={[styles.mylist, { height: 120 * s }]}></View>
                    </View>
                    <View style={[styles.my, { marginTop: 13 * s }]}>
                        <Icon name='tag' size='md' color='#aeaeae' />
                        <Text style={styles.word1}>E族活动</Text>
                    </View>
                    <View style={[styles.box1, { height: 280 * s }]}>
                        <View style={styles.mylist}>
                            <Icon name='tool' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>居家维修保养</Text>
                        </View>
                        <View style={styles.mylist}>
                            <Icon name='car' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>出行接送</Text>
                        </View>
                        <View style={styles.mylist}>
                            <Icon name='user' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>我的受赠人</Text>
                        </View>
                        <View style={[styles.mylist, { height: 116 * s }]}>
                            <Icon name='area-chart' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>我的住宿优惠</Text>
                        </View>
                        <View style={[styles.mylist, { height: 116 * s }]}>
                            <Icon name='notification' size='md' color='#aeaeae' />
                            <Text style={styles.myword1}>我的活动</Text>
                        </View>
                        <View style={[styles.mylist, { height: 116 * s }]}>
                            <Icon name='export' size='md' color='#aeaeae' onPress={() => Actions.publish()} />
                            <Text style={styles.myword1} onPress={() => Actions.publish()}>我的发布</Text>
                        </View>
                    </View>
                    <View style={styles.btbox}>
                        <Text style={styles.btword}>BINNU DHILLON  |  退出</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.eixtLogin} onPress={this.eixtLogin}>
                            <Text style={{ color: '#ffffff', fontSize: 16 }}>退出登录</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        height: 375 * s,
        backgroundColor: '#f23030',
        alignItems: 'center'
    },
    my: {
        height: 80 * s,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 18 * s
    },
    word1: {
        fontSize: 22 * s,
        marginLeft: 20 * s,
        color: '#4f4e4e'
    },
    box1: {
        height: 385 * s,
        marginTop: 2,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        flexWrap: 'wrap'
    },
    mylist: {
        width: 212 * s,
        height: 142 * s,
        alignItems: 'center',
        justifyContent: 'center'
    },
    myword1: {
        fontSize: 22 * s,
        color: '#4f4e4e',
        marginTop: 15 * s
    },
    btbox: {
        height: 95 * s,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btword: {
        fontSize: 16 * s,
        color: '#767676'
    },
    eixtLogin: {
        height: 50 * s,
        width: 240 * s,
        borderRadius: 25 * s,
        backgroundColor: '#f23030',
        alignItems: 'center',
        justifyContent: 'center'
    }
})