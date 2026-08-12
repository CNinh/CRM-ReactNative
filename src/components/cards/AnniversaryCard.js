import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import IcBirthday from '../../assets/icons/birthday.svg';
import IcContract from '../../assets/icons/certificate.svg';
import IcCompany from '../../assets/icons/company.svg';
import IcNotification from '../../assets/icons/notification.svg'
import IcCalendar from '../../assets/icons/anni_calendar.svg';
import IcNote from '../../assets/icons/note.svg';
import IcEye from '../../assets/icons/eye.svg';
import IcEdit from '../../assets/icons/edit.svg';
import IcDelete from '../../assets/icons/delete.svg';

const AnniversaryCard = ({ item, onView, onEdit, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false)

    const renderIcon = (type) => {
        switch (type) {
            case 'birthday':
                return <IcBirthday width={22} height={22} color="#000000" />
            case 'contract':
                return <IcContract width={22} height={22} color="#000000" />
            case 'company':
            default:
                return <IcCompany width={22} height={22} color="#000000" />
        }
    };

    const renderRightActions = () => {
        return (
            <View style={styles.rightActionsContainer}>
                <TouchableOpacity style={[styles.actionBtn, styles.btnView]} onPress={() => onView(item)}>
                    <IcEye width={18} height={18} color="#FFFFFF" />
                    <Text style={styles.actionText}>Xem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionBtn, styles.btnEdit]} onPress={() => onEdit(item)}>
                    <IcEdit width={18} height={18} color="#FFFFFF" />
                    <Text style={styles.actionText}>Sửa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionBtn, styles.btnDelete]} onPress={() => onDelete(item.id)}>
                    <IcDelete width={18} height={18} color="#FFFFFF" />
                    <Text style={styles.actionText}>Xóa</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <Swipeable
            renderRightActions={renderRightActions}
            containerStyle={styles.swipeableContainer}
            onSwipeableWillOpen={() => setIsOpen(true)}
            onSwipeableWillClose={() => setIsOpen(false)}
        >
            <View style={[styles.cardContainer, isOpen && styles.cardContainerOpen]}>
                <View style={styles.headerRow}>
                    <View style={styles.titleGroup}>
                        <View style={styles.iconBox}>{renderIcon(item.icon)}</View>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                    </View>

                    {item.hasReminder && (
                        <View style={styles.reminderBadge}>
                            <IcNotification width={14} height={14} color="#854F0B" />
                            <Text style={styles.reminderText}>Nhắc</Text>
                        </View>
                    )}
                </View>

                <View style={styles.infoRow}>
                    <IcCalendar width={15} height={15} color="#000000" />
                    <Text style={styles.dateText}>{item.date}</Text>
                    <Text style={styles.calendarTypeText}>{item.calendarType}</Text>
                </View>

                {item.note ? (
                    <View style={styles.noteRow}>
                        <IcNote width={15} height={15} color="#000000" style={{ marginTop: 2 }} />
                        <Text style={styles.noteText} numberOfLines={2}>
                            {item.note}
                        </Text>
                    </View>
                ) : null}
            </View>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    swipeableContainer: {
        marginTop: 12,
        borderRadius: 10,
        overflow: 'hidden'
    },

    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2
    },

    cardContainerOpen: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    titleGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },

    iconBox: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        marginBottom: 10
    },

    reminderBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },

    reminderText: {
        fontSize: 13,
        color: '#854F0B'
    },

    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    dateText: {
        fontSize: 11.5,
        color: '#000000'
    },

    calendarTypeText: {
        fontSize: 13,
        color: '#000000',
        marginLeft: 12
    },

    noteRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
        marginTop: 4
    },

    noteText: {
        flex: 1,
        fontSize: 11.5,
        fontWeight: '300',
        color: '#000000',
        lineHeight: 16
    },

    rightActionsContainer: {
        flexDirection: 'row',
        width: 190,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden'
    },

    actionBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        width: 60
    },

    btnView: {
        backgroundColor: '#008BB2'
    },

    btnEdit: {
        backgroundColor: '#2971BF'
    },

    btnDelete: {
        backgroundColor: '#E24B4A'
    },

    actionText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500'
    },
});

export default AnniversaryCard;