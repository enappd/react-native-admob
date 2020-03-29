import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image, SafeAreaView, ScrollView, Alert } from 'react-native';
import { InterstitialAd, TestIds, BannerAd, BannerAdSize, RewardedAd, AdEventType, RewardedAdEventType } from '@react-native-firebase/admob';

const widthConst = Dimensions.get('screen').width;
const enappdIcon = require('./assets/enappd_blue.png');

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    showInterstitialAd = () => {
        // Create a new instance
        const interstitialAd = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

        // Add event handlers
        interstitialAd.onAdEvent((type, error) => {
            if (type === AdEventType.LOADED) {
                interstitialAd.show();
            }
        });

        // Load a new advert
        interstitialAd.load();
    }
    showRewardAd = () => {
        // Create a new instance
        const rewardAd = RewardedAd.createForAdRequest(TestIds.REWARDED);

        // Add event handlers
        rewardAd.onAdEvent((type, error) => {
            if (type === RewardedAdEventType.LOADED) {
                rewardAd.show();
            }

            if (type === RewardedAdEventType.EARNED_REWARD) {
                console.log('User earned reward of 5 lives');
                Alert.alert(
                    'Reward Ad',
                    'You just earned a reward of 5 lives',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: true }
                  )
            }
        });

        // Load a new advert
        rewardAd.load();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.fullHeight}>
                        <View style={styles.segmentTitle}>
                            <Text style={styles.segmentTitleText}>Banner Ads</Text>
                        </View>
                        <View style={styles.segment}>
                            <View style={styles.card}>
                                <Text>Banner Ads are usually shown by default on bottom of the page. You can select the position as you like.
      You can even display multiple banner ads per page.</Text>
                            </View>
                        </View>
                        <View style={styles.buttons}>
                            <Text>Banner Ads are generally shown on the page without any user action, like you see on the bottom</Text>
                        </View>

                        <View style={styles.segmentTitle}>
                            <Text style={styles.segmentTitleText}>Interstitial Ads</Text>
                        </View>
                        <View style={styles.segment}>
                            <View style={styles.card}>
                                <Text>Interstitial ads are full-screen ads that cover the interface of their host app. You should display them at
      natural transition points in the flow of an app.</Text>
                            </View>
                        </View>
                        <View style={styles.buttons}>
                            <View style={styles.btnWrapper}>
                                <Button
                                    title="Show Interstitial Ad"
                                    color="white"
                                    onPress={() => this.showInterstitialAd()}
                                    style={styles.btn}
                                />
                            </View>
                        </View>

                        <View style={styles.segmentTitle}>
                            <Text style={styles.segmentTitleText}>Reward Ads</Text>
                        </View>
                        <View style={styles.segment}>
                            <View style={styles.card}>
                                <Text>Rewarded ads are ads that users have the option of interacting with in exchange for in-app rewards.</Text>
                            </View>
                        </View>
                        <View style={styles.buttons}>
                            <View style={styles.btnWrapper}>
                                <Button
                                    title="Show Reward Ad"
                                    color="white"
                                    onPress={() => this.showRewardAd()}
                                    style={styles.btn}
                                />
                            </View>
                        </View>

                        <View style={styles.enappdWrapper}>
                            <Text>By </Text>
                            <Image source={enappdIcon} style={styles.enappdIcon} />
                        </View>

                    </View>

                </ScrollView>
                <View style={styles.bannerAdWrapper}>
                    <BannerAd
                        unitId={TestIds.BANNER}
                        size={BannerAdSize.SMART_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                        onAdLoaded={() => {
                            console.log('Advert loaded');
                        }}
                        onAdFailedToLoad={(error) => {
                            console.error('Advert failed to load: ', error);
                        }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    fullHeight: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        padding: 20,
        paddingBottom: 100
    },
    segmentTitle: {
        borderBottomColor: '#666666',
        borderBottomWidth: 1,
        width: widthConst
    },
    segmentTitleText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 15
    },
    segment: {
        paddingVertical: 20,
        width: widthConst - 40
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 15
    },
    buttons: {
        display: 'flex',
        width: widthConst - 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnWrapper: {
        width: widthConst - 80,
        marginVertical: 10,
        borderColor: '#26c640',
        borderWidth: 1,
        borderRadius: 25,
        height: 44,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26c640'
    },
    danger: {
        backgroundColor: '#f03434',
        borderColor: '#f03434',
    },
    enappdWrapper: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: widthConst
    },
    enappdIcon: {
        width: 100,
        height: 40
    },
    bannerAdWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: widthConst
    }
});
