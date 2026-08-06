import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getInitials, getAvatarColorPair } from "./AvatarColor";
import MemberListModal from "../modals/MemberListModal";

const AvatarGroup = ({ members = [], maxDisplay = 3 }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const displayMembers = members.slice(0, maxDisplay);
    const others = members.length - maxDisplay;

    return (
        <View style={styles.avatarGroup}>
            {displayMembers.map((member, index) => {
                const name = typeof member === 'string' ? member : member.name;
                const initials = getInitials(name);
                const colorPair = getAvatarColorPair(name);

                return (
                    <View
                        key={index}
                        style={[
                            styles.avatarCircle,
                            { backgroundColor: colorPair.bg },
                            index > 0 && { marginLeft: -10 }
                        ]}
                    >
                        <Text style={[styles.avatarText, { color: colorPair.text }]}>
                            {initials}
                        </Text>
                    </View>
                );
            })}

            {others > 0 && (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setModalVisible(true)}
                    style={[styles.avatarCircle, { backgroundColor: '#F1EFE8', marginLeft: -10 }]}
                >
                    <Text style={[styles.avatarText, { color: '#185FA5' }]}>
                        +{others}
                    </Text>
                </TouchableOpacity>
            )}

            <MemberListModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                members={members}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    avatarGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatarCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ffffff'
    },

    avatarText: {
        fontSize: 11,
        fontWeight: '500',
    }
});

const arePropsEqual = (prevProps, nextProps) => {
    if (prevProps.maxDisplay !== nextProps.maxDisplay) return false;
    if (prevProps.members.length !== nextProps.members.length) return false;

    return prevProps.members.every((member, index) => {
        const prevName = typeof member === 'string' ? member : member.name;
        const nextMember = nextProps.members[index];
        const nextName = typeof nextMember === 'string' ? nextMember : nextMember.name;
        return prevName === nextName;
    });
};

export default React.memo(AvatarGroup, arePropsEqual);