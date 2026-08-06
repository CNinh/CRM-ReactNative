import {
    View,
    Text,
    Modal,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet
} from "react-native";
import Avatar from '../avatars/Avatar';

const renderRoleBadge = (roleName, index) => {
    let bgColor = '';
    let textColor = '';

    switch (roleName) {
        case 'AM':
            bgColor = '#E6F1FB';
            textColor = '#185FA5';
            break;
        case 'BA':
            bgColor = '#FAEEDA';
            textColor = '#854F0B';
            break;
        case 'Kiểm thử':
        case 'Tester':
            bgColor = '#E1F5EE';
            textColor = '#0F6E56';
            break;
        case 'PM':
            bgColor = '#EEEDFE';
            textColor = '#3C3489';
            break;
        case 'Quản lý':
            bgColor = '#F09595';
            textColor = '#A32D2D';
            break;
        default:
            bgColor = '#E6F1FB';
            textColor = '#185FA5';
            break;
    }

    return (
        <View key={index} style={[styles.roleBadge, { backgroundColor: bgColor }]}>
            <Text style={[styles.roleText, { color: textColor }]}>{roleName}</Text>
        </View>
    );
};

const MemberListModal = ({ visible, onClose, members = [] }) => {
    const renderMemberItem = ({ item }) => {
        const name = item.name;
        const username = item.username || item.userCode || '';
        const dept = item.dept ? ` — ${item.dept}` : '';
        const roles = item.roles || [];

        return (
            <View style={styles.memberItem}>
                <Avatar
                    name={name}
                    uri={typeof item === 'object' ? item.avatar : null}
                    size={46}
                    style={{ marginRight: 14 }}
                />

                <View style={styles.infoContainer}>
                    <Text style={styles.memberName}>{name}</Text>

                    {(username || dept) ? (
                        <Text style={styles.subInfoText} numberOfLines={1}>
                            {username}{dept}
                        </Text>
                    ) : null}

                    {roles.length > 0 && (
                        <View style={styles.roleRow}>
                            {roles.map((r, idx) => renderRoleBadge(r, idx))}
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalOverlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContent}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>{members.length} thành viên</Text>
                                <TouchableOpacity
                                    onPress={onClose}
                                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                >
                                    <Text style={styles.btnClose}>✕</Text>
                                </TouchableOpacity>
                            </View>

                            <FlatList
                                data={members}
                                keyExtractor={(item, index) => (typeof item === 'object' && item.id) ? item.id.toString() : index.toString()}
                                renderItem={renderMemberItem}
                                ItemSeparatorComponent={() => <View style={styles.separator} />}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingBottom: 20 }}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'flex-end'
    },

    modalContent: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '60%',
        paddingTop: 16,
        marginBottom: -16
    },

    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 16,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D5D7'
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000'
    },

    btnClose: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000000'
    },

    memberItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 10,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF'
    },
    
    infoContainer: {
        flex: 1,
        justifyContent: 'center'
    },

    memberName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
    },

    subInfoText: {
        fontSize: 11.5,
        color: '#555555',
        marginBottom: 2
    },

    roleRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4
    },

    roleBadge: {
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 12
    },

    roleText: {
        fontSize: 11,
        fontWeight: '500'
    },

    separator: {
        height: 1,
        backgroundColor: '#D3D5D7'
    }
});

export default MemberListModal;