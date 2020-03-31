import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Alert, ActivityIndicator } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      isloading: false
    }
  }

  userhandle = (text) => {
    this.setState({ username: text })
  }
  pwdhandle = (text) => {
    this.setState({ pwd: text })
  }

  register = () => {
    if (this.state.username === '' || this.state.pwd === '') {
      Alert.alert('输入项不能为空！');
    } else {
      myFetch.post('/register', {
        username: this.state.username,
        pwd: this.state.pwd
      })
        .then(res => {
          if (res.data.state === '0') {
            Alert.alert('账户已存在！');
          } else if (res.data.state === '1') {
            Alert.alert('请求失败!');
          } else {
            AsyncStorage.setItem('user', JSON.stringify(res.data))
              .then(() => {
                Alert.alert('注册成功！');
                Actions.login();
              })
          }
        })
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{ alignItems: 'center' }}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#f23030',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="#f23030" />
            <TextInput placeholder="用户名"
              onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#f23030',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="exception" color="#f23030" />
            <TextInput
              onChangeText={this.pwdhandle}
              placeholder="密码"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 40,
              borderRadius: 10,
              backgroundColor: '#f23030',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={this.register}>
            <Text style={{ fontSize: 16, color: '#ffffff' }}>注册</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 40,
              borderRadius: 10,
              backgroundColor: '#f23030',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => { Actions.login() }}>
            <Text style={{ fontSize: 16, color: '#ffffff' }}>已有账号，去登录</Text>
          </TouchableOpacity>
        </View>
        {
          this.state.isloading
            ? <View>
              <ActivityIndicator size="large" color="#f23030" />
              <Text>正在登录。。。</Text>
            </View>
            : null
        }
      </View>
    );
  }
}