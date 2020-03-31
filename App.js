import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, BackHandler, ToastAndroid, AsyncStorage, Dimensions } from 'react-native';
import { Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Userinfor from './src/userinfor/Userinfor';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Publish from './src/userinfor/Publish';
import Register from './src/common/Register'

console.disableYellowBox = true;
const { width, scale } = Dimensions.get('window');
const s = width / 640;

const styles = StyleSheet.create({

});

const App = () => {
    let [isLogin, setLogin] = useState(false);
    let [isFirstInstall, setInstall] = useState(true);
    // 实现 Tabs
    let now = 0;
    useEffect(() => {
        AsyncStorage.getItem('isInstall')
            .then(res => {
                if (res) {
                    setInstall(false);
                }
            })
        AsyncStorage.getItem('user')
            .then(res => {
                let user = JSON.parse(res)
                console.log(user)
                if (!user) {
                    SplashScreen.hide();
                }
                if (user && user.token) {
                    setLogin(true);
                    SplashScreen.hide();
                }
                console.log(res);
            })
    }, [])
    let afterInstall = () => {
        console.log('after install!')
        setInstall(false)
    }
    if (isFirstInstall) {
        return <View style={{ flex: 1 }}>
            <SwiperPage afterInstall={afterInstall} />
        </View>
    }
    return (
        <Router
            backAndroidHandler={() => {
                if (Actions.currentScene != 'home') {
                    Actions.pop();
                    return true;
                } else {
                    if (new Date().getTime() - now < 2000) {
                        BackHandler.exitApp();
                    } else {
                        ToastAndroid.show('确定要退出吗', 100);
                        now = new Date().getTime();
                        return true;
                    }
                }

            }}
        >
            <Overlay>
                <Modal key="modal" hideNavBar>
                    <Lightbox key="lightbox">
                        <Drawer
                            key="drawer"
                            contentComponent={() => <Text>drawer</Text>}
                            drawerIcon={() => <Icon name="menu" />}
                            drawerWidth={400}
                        >
                            <Scene key="root">
                                <Tabs
                                    key='tabbar'
                                    hideNavBar
                                    activeTintColor='#f23030'
                                    inactiveTintColor='#666666'
                                    tabBarStyle={{ backgroundColor: '#ffffff', height: 75 * s }}
                                >
                                    {/* 首页 */}
                                    <Scene key='homePage'
                                        title='首页'
                                        hideNavBar
                                        icon={
                                            ({ focused }) => <Icon
                                                color={focused ? '#f23030' : '#666666'}
                                                name="home"
                                            />
                                        }
                                    >
                                        <Scene key='home'
                                            component={Home}
                                        />
                                    </Scene>
                                    {/* 商品分类 */}
                                    <Scene key='goodsPage'
                                        title='商品分类'
                                        hideNavBar
                                        icon={
                                            ({ focused }) => <Icon
                                                color={focused ? '#f23030' : '#666666'}
                                                name="block"
                                            />
                                        }

                                    >
                                        <Scene key="goods" component={Goods} />
                                    </Scene>
                                    {/* 用户中心 */}
                                    <Scene
                                        key='userPage'
                                        hideDrawerButton
                                        hideNavBar
                                        icon={
                                            ({ focused }) => <Icon
                                                color={focused ? '#f23030' : '#666666'}
                                                name="user"
                                            />
                                        }
                                        title="用户中心"
                                        component={Userinfor}
                                    />

                                </Tabs>
                            </Scene>
                        </Drawer>
                    </Lightbox>

                    <Scene initial={!isLogin} key="login" component={Login} />
                    <Scene key='register' component={Register}/>
                    <Scene
                        key='publish'
                        title='我的发布'
                        navigationBarStyle={{ backgroundColor: '#f23030' }}
                        titleStyle={{ flex: 1, color: '#ffffff', textAlign: 'center' }}
                        renderRightButton={<View>
                            <Text style={{
                                flex: 1, textAlign: 'center',
                                color: '#ffffff',
                                fontSize: 30,
                                fontWeight: 'bold',
                                marginRight: 25
                            }}>
                                ...
                        </Text>
                        </View>}
                        navBarButtonColor='#ffffff'
                        component={Publish}
                    />
                </Modal>
            </Overlay>
        </Router>
    );
};

export default App;