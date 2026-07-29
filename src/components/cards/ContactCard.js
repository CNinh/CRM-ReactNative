import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import IcEdit from '../../assets/icons/edit.svg';
import IcDelete from '../../assets/icons/delete.svg';
import IcPlus from '../../assets/icons/plus.svg';
import IcPhone from '../../assets/icons/telephone.svg';
import IcMobile from '../../assets/icons/mobile.svg';
import IcMessage from '../../assets/icons/message.svg';

const ContactCard = ({
    item,
    onEdit,
    onDelete,
    onSelect,
    isSelected = false,
    mode = 'edit'
}) => {
    const getInitials = (name) => {
        if (!name) return 'N/A';
        const words = name.trim().split(' ');
        if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
        return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    };

    return (
        <View style={styles.contactCard}>
            <View style={styles.contactCardHeader}>
                <View style={styles.avatarCircle}>
                    <Text style={styles.avatarText}>{getInitials(item.name)}</Text>
                </View>

                <View style={styles.contactMainInfo}>
                    <View style={styles.contactInfo}>
                        <Text style={styles.contactName}>{item.name}</Text>
                        {mode === 'edit' && item.position && (
                            <View style={styles.positionWrapper}>
                                <Text style={styles.dotSeparator}>•</Text>
                                <Text style={styles.contactPosition}>{item.position}</Text>
                            </View>
                        )}

                        {mode === 'select' && item.status && (
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>{item.status}</Text>
                            </View>
                        )}
                    </View>
                    <Text style={styles.contactEmail}>{item.email}</Text>
                </View>

                {mode === 'edit' ? (
                    <View style={styles.actionButtons}>
                        <TouchableOpacity
                            style={[styles.btnAction, styles.btnEdit]}
                            onPress={() => onEdit(item)}
                            activeOpacity={0.7}
                        >
                            <IcEdit width={14} height={14} color="#FFFFFF" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.btnAction, styles.btnDelete]}
                            onPress={() => onDelete(item.id)}
                            activeOpacity={0.7}
                        >
                            <IcDelete width={14} height={14} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity
                        style={[styles.btnSelect, isSelected && styles.btnSelectDisabled]}
                        onPress={() => onSelect && onSelect(item)}
                        disabled={isSelected}
                        activeOpacity={0.7}
                    >
                        <IcPlus width={20} height={20} color="#FFFFFF" style={{ translate: 0.9 }} />
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.contactDetailList}>
                {item.phone ? (
                    <View style={styles.contactDetailRow}>
                        <View style={styles.contactDetailLeft}>
                            <IcPhone width={16} height={16} color="#7E8387" />
                            <Text style={styles.contactDetailValue}>{item.phone}</Text>
                        </View>
                        <Text style={styles.contactDetailLabel}>Điện thoại</Text>
                    </View>
                ) : null}

                {item.mobile ? (
                    <View style={styles.contactDetailRow}>
                        <View style={styles.contactDetailLeft}>
                            <IcMobile width={16} height={16} color="#7E8387" />
                            <Text style={styles.contactDetailValue}>{item.mobile}</Text>
                        </View>
                        <Text style={styles.contactDetailLabel}>Di động</Text>
                    </View>
                ) : null}

                {item.message ? (
                    <View style={styles.contactDetailRow}>
                        <View style={styles.contactDetailLeft}>
                            <IcMessage width={16} height={16} color="#7E8387" />
                            <Text style={styles.contactDetailValue}>{item.message}</Text>
                        </View>
                        <Text style={styles.contactDetailLabel}>Zalo/Chat</Text>
                    </View>
                ) : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contactCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
        marginBottom: 12
    },

    contactCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#7E8387'
    },

    avatarCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#FFF3E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },

    avatarText: {
        fontSize: 14,
        color: '#854F0B'
    },

    contactMainInfo: {
        flex: 1,
        justifyContent: 'center'
    },

    contactInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    contactName: {
        fontSize: 13,
        fontWeight: '600',
        color: '#000000',
        lineHeight: 16
    },

    positionWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    dotSeparator: {
        fontSize: 13,
        fontWeight: '600',
        color: '#000000',
        marginHorizontal: 5,
        transform: [{ translateY: 1 }]
    },

    contactPosition: {
        fontSize: 11.5,
        fontWeight: '300',
        fontWeight: 'normal',
        color: '#000000'
    },

    statusBadge: {
        backgroundColor: '#D1FAE5',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        marginLeft: 10
    },

    statusText: {
        fontSize: 11,
        color: '#2E7D32'
    },

    contactEmail: {
        fontSize: 12,
        color: '#1A88C9'
    },

    actionButtons: {
        flexDirection: 'row',
        gap: 6
    },

    btnAction: {
        width: 32,
        height: 32,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnEdit: {
        backgroundColor: '#2C86D1'
    },

    btnDelete: {
        backgroundColor: '#E53935'
    },

    btnSelect: {
        width: 36,
        height: 32,
        borderRadius: 6,
        backgroundColor: '#2C86D1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    contactDetailList: {
        gap: 6,
        marginTop: 8,
        marginHorizontal: 10
    },

    contactDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5
    },

    contactDetailLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },

    contactDetailValue: {
        fontSize: 12.5,
        color: '#000000',
        marginVertical: 2
    },

    contactDetailLabel: {
        fontSize: 12.5,
        fontWeight: '300',
        color: '#000000'
    }
});

export default ContactCard;