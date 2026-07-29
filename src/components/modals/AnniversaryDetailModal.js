import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import IcClose from '../../assets/icons/close.svg';
import IcNotification from '../../assets/icons/notification.svg';

const AnniversaryDetailModal = ({ visible, onClose, item, customerInfo }) => {
    if (!item) return null;

    const customerName = customerInfo || item.name || '';

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContent}>
                            <View style={styles.header}>
                                <Text style={styles.headerTitle} numberOfLines={2}>
                                    {item.title} - {customerName}
                                </Text>
                                <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                                    <IcClose width={14} height={14} color="#FFFFFF" />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.body}>
                                <View style={styles.infoGroup}>
                                    <Text style={styles.label}>Khách hàng</Text>
                                    <Text style={styles.valueText}>{customerName}</Text>
                                </View>

                                <View style={styles.infoGroup}>
                                    <Text style={styles.label}>Loại kỷ niệm</Text>
                                    <Text style={styles.valueText}>{item.title}</Text>
                                </View>

                                <View style={styles.rowGroup}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.label}>Ngày kỷ niệm</Text>
                                        <Text style={styles.valueText}>{item.date}</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.label}>Loại lịch</Text>
                                        <Text style={styles.valueText}>{item.calendarType || 'Dương lịch'}</Text>
                                    </View>
                                </View>

                                <View style={styles.infoGroup}>
                                    <Text style={styles.label}>Nhắc nhớ</Text>
                                    <View style={styles.reminderRow}>
                                        <IcNotification width={15} height={15} color="#854F0B" />
                                        <Text style={styles.reminderText}>
                                            {item.hasReminder ? 'Đã bật nhắc nhớ' : 'Không bật'}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.divider} />

                                <View style={styles.infoGroup}>
                                    <Text style={styles.label}>Ghi chú</Text>
                                    <Text style={styles.noteText}>
                                        {item.note || 'Không có ghi chú nào.'}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    modalContent: {
        width: '100%',
        borderRadius: 14,
        overflow: 'hidden',
        backgroundColor: '#E4E6E9',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },

    header: {
        backgroundColor: '#4AA0DF',
        paddingVertical: 14,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerTitle: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        marginLeft: 4,
        marginRight: 6
    },

    closeBtn: {
        paddingHorizontal: 12
    },

    body: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 12,
        margin: 12,
        gap: 8,
    },

    infoGroup: {
        gap: 2,
    },

    rowGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    label: {
        fontSize: 12.5,
        color: '#000000',
        fontWeight: '300',
    },

    valueText: {
        fontSize: 14,
        color: '#000000',
        marginLeft: 8,
        lineHeight: 20
    },

    reminderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 2,
        marginLeft: 8
    },

    reminderText: {
        fontSize: 14,
        color: '#854F0B',
    },

    divider: {
        height: 1,
        backgroundColor: '#7E8387',
        marginVertical: 4,
    },

    noteText: {
        fontSize: 13,
        color: '#000000',
        lineHeight: 16,
        marginLeft: 8
    },
});

export default AnniversaryDetailModal;