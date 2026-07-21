import { View, Text, StyleSheet } from "react-native";
import { getInitials, getAvatarColorPair } from "./AvatarColor";

const AvatarGroup = ({ members = [], maxDisplay = 3 }) => {
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
                <View style={[styles.avatarCircle, { backgroundColor: '#F1EFE8', marginLeft: -10 }]}>
                    <Text style={[styles.avatarText, { color: '#185FA5' }]}>
                        +{others}
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    avatarGroup: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatarCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
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

export default AvatarGroup;