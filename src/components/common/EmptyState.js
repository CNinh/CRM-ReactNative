import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import theme from '../../constants/theme';
import IcSearch from '../../assets/icons/search.svg';

const EmptyState = ({
    icon: IconComponent,
    title = 'Không tìm thấy dữ liệu',
    description = 'Vui lòng thử tìm kiếm bằng từ khóa hoặc bộ lọc khác.',
    buttonTitle,
    onButtonPress,
    style,
}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.iconCircle}>
                {IconComponent ? (
                    <IconComponent width={40} height={40} color={colors.primary} />
                ) : (
                    <IcSearch width={36} height={36} color={colors.primary} />
                )}
            </View>

            <Text style={styles.title}>{title}</Text>

            {description ? (
                <Text style={styles.description}>{description}</Text>
            ) : null}

            {buttonTitle && onButtonPress ? (
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={onButtonPress}
                    activeOpacity={0.8}
                >
                    <Text style={styles.actionButtonText}>{buttonTitle}</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 48,
        paddingHorizontal: 24,
    },

    iconCircle: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: colors.primarySubtle,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: colors.primaryBorder,
        ...theme.shadows.xs,
    },

    title: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.gray800,
        textAlign: 'center',
        marginBottom: 6,
    },

    description: {
        fontSize: 13,
        color: colors.gray500,
        textAlign: 'center',
        lineHeight: 18,
        maxWidth: 280,
    },

    actionButton: {
        marginTop: 18,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: theme.radius.md,
        ...theme.shadows.xs,
    },

    actionButtonText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: '600',
    },
});

export default EmptyState;
