import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getInitials, getAvatarColorPair } from './AvatarColor';

const Avatar = ({
    name = '',
    uri = null,
    size = 50,
    style
}) => {

    // Avatar ảnh người dùng chọn
    if (uri) {
        return (
            <Image
                source={typeof uri === 'string' ? { uri } : uri}
                style={[
                    styles.avatarImage,
                    { width: size, height: size, borderRadius: size / 2 },
                    style
                ]}
            />
        );
    }

    const initials = getInitials(name);
    const colorPair = getAvatarColorPair(name);
    const fontSize = Math.round(size * 0.36);

    // Avatar default của hệ thống
    return (
        <View
            style={[
                styles.avatarContainer,
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor: colorPair.bg
                },
                style
            ]}
        >
            <Text
                style={[
                    styles.avatarText,
                    {
                        fontSize,
                        color: colorPair.text,
                    },
                ]}
                numberOfLines={1}
            >
                {initials}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    avatarText: {
        textAlign: 'center',
        includeFontPadding: false,
    },
    avatarImage: {
        resizeMode: 'cover',
    },
});

export default React.memo(Avatar);