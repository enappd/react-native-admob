import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Button, Linking } from 'react-native';
const widthConst = Dimensions.get('screen').width;
const heightConst = Dimensions.get('screen').height;
const firebaseIcon = require('./assets/firebase.png');
const enappdIcon = require('./assets/enappd.png');
const bgImage = require('./assets/bgImage.jpg');

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    more = () => {
        Linking.openURL('https://store.enappd.com').catch(err => console.error('An error occurred', err));
    }

    skip = () => {
        this.props.navigation.navigate('Home')
    }

    render() {

        return (
            <View style={styles.fullHeight}>
                <View style={styles.bgImageWrapper}>
                    <Image source={bgImage} style={styles.bgImage} />
                </View>
                <Image source={firebaseIcon} style={styles.icon} />
                <View style={styles.texts}>
                    <Text style={styles.rn}>React Native</Text>
                    <Text style={styles.bigTitle}>AdMob Implementation</Text>
                </View>
                <View>
                    <View style={styles.btnWrapper2}>
                        <Button
                            title="More React Native Templates"
                            color="white"
                            onPress={() => this.more()}
                            style={styles.btn}
                        />
                    </View>
                    <View style={styles.btnWrapper1}>
                        <Button
                            title="Skip to AdMob Example"
                            color="white"
                            onPress={() => this.skip()}
                            style={styles.btn}
                        />
                    </View>
                </View>
                <View style={styles.enappdWrapper}>
                    <Text>By </Text>
                    <Image source={enappdIcon} style={styles.enappdIcon} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fullHeight: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1
    },
    bgImageWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: heightConst,
        width: widthConst
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    icon: {
        width: 100,
        height: 100
    },
    bigTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    rn: {
        marginVertical: 5,
        fontSize: 18,
        color: 'white'
    },
    texts: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        alignSelf: 'stretch',
        height: 50
    },
    btnWrapper1: {
        width: widthConst - 100,
        marginVertical: 10,
        borderColor: '#f03434',
        borderWidth: 1,
        borderRadius: 25,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f03434'
    },
    btnWrapper2: {
        width: widthConst - 100,
        marginVertical: 10,
        borderColor: '#2c82c9',
        borderWidth: 1,
        borderRadius: 25,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c82c9'
    },
    more: {
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold'
    },
    enappdWrapper: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    enappdIcon: {
        width: 100,
        height: 40
    }
});
