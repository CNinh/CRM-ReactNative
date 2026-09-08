import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import colors from '../../constants/colors';
import theme from '../../constants/theme';
import IcBack from '../../assets/icons/back.svg';

const GradientHeader = ({
    title,
    subtitle,
    onBackPress,
    rightComponent,
    style,
}) => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.primaryDark}
                translucent={false}
            />
            <View style={[styles.headerContainer, style]}>
                <View style={styles.leftRow}>
                    {onBackPress && (
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={onBackPress}
                            activeOpacity={0.7}
                            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                        >
                            <IcBack width={18} height={18} color={colors.white} />
                        </TouchableOpacity>
                    )}

                    <View style={styles.titleColumn}>
                        <Text style={styles.titleText} numberOfLines={1}>
                            {title}
                        </Text>
                        {subtitle ? (
                            <Text style={styles.subtitleText} numberOfLines={1}>
                                {subtitle}
                            </Text>
                        ) : null}
                    </View>
                </View>

                {rightComponent ? (
                    <View style={styles.rightContainer}>
                        {rightComponent}
                    </View>
                ) : null}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 56 : 58,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
        ...theme.shadows.sm,
    },

    leftRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    backButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleColumn: {
        flex: 1,
    },

    titleText: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.white,
        letterSpacing: 0.2,
    },

    subtitleText: {
        fontSize: 11,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 1,
    },

    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default GradientHeader;
