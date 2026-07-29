import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import DefaultButton from "../buttons/DefaultButton";
import ImageButton from "../buttons/ImageButton";
import colors from "../../constants/colors";
import IcReload from "../../assets/icons/reload.svg";
import SideMenu from "../../navigation/SideMenu";
import { useNavigation } from "@react-navigation/native";

const DefaultHeader = ({ navigation, options, route }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const title = options.headerTitle !== undefined ? options.headerTitle : route.name;
    
    const isDetailScreen =
        route.name.startsWith('Detail') ||
        route.name.startsWith('Form') ||
        route.name.startsWith('Create') ||
        route.name.startsWith('Edit') ||
        route.name.startsWith('Select') ||
        route.name.startsWith('Anniversary');

    const handleGoBack = () => {
        if (navigation && navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    return (
        <>
            <View style={styles.headerContainer}>
                {/* Left header */}
                <View style={styles.leftGroup}>
                    {isDetailScreen ? (
                        <>
                            <TouchableOpacity onPress={() => handleGoBack()} style={styles.leftButton}>
                                <Icon name="arrow-back" size={24} color="#ffffff" />
                            </TouchableOpacity>
                            <Text style={[styles.titleText, styles.titleTextDetail]} numberOfLines={1}>
                                {title}
                            </Text>
                        </>
                    ) : (
                        <>
                            <TouchableOpacity onPress={() => setIsMenuOpen(true)} style={styles.leftButton}>
                                <Icon name="menu" size={26} color="#ffffff" />
                            </TouchableOpacity>
                            <Text style={[styles.titleText]} numberOfLines={1}>
                                {title}
                            </Text>
                        </>
                    )}
                </View>

                {/* Right header */}
                {isDetailScreen ? (
                    <View style={styles.rightContainerEmpty} />
                ) : (
                    <View style={styles.rightContainer}>
                        <TouchableOpacity style={{ marginRight: 18 }} onPress={() => console.log('Open Notification')}>
                            <Icon name="notifications-outline" size={24} color="#ffffff" />
                            {options.unreadNotification > 0 && (
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{options.unreadNotification}</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        {options.handleReload && (
                            <TouchableOpacity onPress={options.handleReload}>
                                <IcReload width={30} height={30} color="#ffffff" />
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </View>
            
            {!isDetailScreen && isMenuOpen && (
                <SideMenu
                    visible={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                    navigation={navigation}
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#4AA0DF',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3
    },

    leftGroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },

    leftButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    titleText: {
        fontSize: 18,
        fontWeight: 600,
        color: '#ffffff',
        flex: 1
    },

    titleTextDetail: {
        fontWeight: 700
    },

    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: '10'
    },

    rightContainerEmpty: {
        width: 0
    },

    badge: {
        position: 'absolute',
        right: -6,
        bottom: -3,
        backgroundColor: '#C62828',
        borderRadius: 9,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },

    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    }
});

export default DefaultHeader;