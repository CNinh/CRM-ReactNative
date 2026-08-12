import { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import AvatarGroup from "../avatars/AvatarGroup";

import IcCelebrate from "../../assets/icons/celebrate.svg";
import IcOpportunity from "../../assets/icons/opportunity.svg";
import IcEdit from "../../assets/icons/edit.svg";
import IcDelete from "../../assets/icons/delete.svg";
import IcPhone from "../../assets/icons/phone.svg";
import IcMail from "../../assets/icons/mail.svg";

const CustomerCard = ({ item, onEdit, onDelete, onOpenOpportunity, onOpenAnniversary }) => {
    const swipeableRef = useRef(null);
    
    const [isOpen, setIsOpen] = useState(false);

    const renderRightActions = () => {
        return (
            <View style={styles.swipeActionContainer}>
                {/* 1. Kỷ niệm */}
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#FFC107' }]} onPress={onOpenAnniversary}>
                    <IcCelebrate width={16.5} height={16.5} color="#FFFFFF" />
                    <Text style={styles.actionText}>Kỷ niệm</Text>
                </TouchableOpacity>

                {/* 2. Cơ hội */}
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#1D9E75' }]} onPress={onOpenOpportunity}>
                    <IcOpportunity width={16.5} height={16.5} color="#FFFFFF" />
                    <Text style={styles.actionText}>Cơ hội</Text>
                </TouchableOpacity>

                {/* 3. Sửa */}
                <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#1E88E5' }]} onPress={onEdit}>
                    <IcEdit width={16.5} height={16.5} color="#FFFFFF" />
                    <Text style={styles.actionText}>Sửa</Text>
                </TouchableOpacity>

                {/* 4. Xóa */}
                <TouchableOpacity style={[styles.actionBtn, styles.lastActionBtn, { backgroundColor: '#E24B4A' }]} onPress={onDelete}>
                    <IcDelete width={16.5} height={16.5} color="#FFFFFF" />
                    <Text style={styles.actionText}>Xóa</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.swipeWrapper}>
            <Swipeable
                ref={swipeableRef}
                renderRightActions={renderRightActions}
                overshootRight={false}
                containerStyle={styles.swipeableContainer}
                onSwipeableWillOpen={() => setIsOpen(true)}
                onSwipeableOpen={() => setIsOpen(true)}
                onSwipeableWillClose={() => setIsOpen(false)}
                onSwipeableClose={() => setIsOpen(false)}
            >
                <View style={[
                    styles.cardContainer,
                    isOpen && styles.cardOpen
                ]}>
                    {/* Tên khách hàng */}
                    <Text style={styles.titleText} numberOfLines={2}>
                        <Text style={styles.codeText}>{item?.code}</Text> - {item?.name}
                    </Text>

                    {/* Tags phân loại khách hàng */}
                    <View style={styles.tagRow}>
                        <View style={styles.stateTag}>
                            <Text style={styles.stateText}>{item?.state || 'Tiềm năng'}</Text>
                        </View>
                        <Text style={styles.tocText}>{item?.toc || 'Doanh nghiệp'}</Text>
                    </View>

                    {/* Thông tin liên hệ */}
                    <View style={styles.contactRow}>
                        {/* Phone */}
                        {item?.contact && (
                            <TouchableOpacity
                                style={styles.contactButton}
                                onPress={() => Linking.openURL(`tel:${item.contact}`)}
                            >
                                <IcPhone width={13} height={13} color="#FFFFFF" />
                                <Text style={styles.contactText}>{item.contact}</Text>
                            </TouchableOpacity>
                        )}

                        {/* Mail */}
                        {item?.mail && (
                            <TouchableOpacity
                                style={styles.mailButton}
                                onPress={() => Linking.openURL(`mailto:${item.mail}`)}
                            >
                                <IcMail width={13} height={13} color="#000000" />
                                <Text style={styles.mailText} numberOfLines={1}>{item.mail}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </Swipeable>
        </View>
    );
};

const styles = StyleSheet.create({
    swipeWrapper: {
        marginHorizontal: 16,
        marginBottom: 10
    },

    swipeableContainer: {
        borderRadius: 12,
        overflow: 'hidden'
    },

    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2
    },

    cardOpen: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRightWidth: 0
    },

    titleText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#2971BF',
        lineHeight: 19,
        marginBottom: 4
    },

    codeText: {
        color: '#0284C7'
    },

    tagRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 10
    },

    stateTag: {
        backgroundColor: '#0088B2',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 12
    },

    stateText: {
        color: '#FFFFFF',
        fontSize: 11.5
    },

    tocText: {
        fontSize: 13,
        color: '#000000'
    },

    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },

    contactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2971BF',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 12,
        gap: 4
    },

    contactText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '300',
        marginRight: 8
    },

    mailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D3D5D7',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 12,
        gap: 4,
        maxWidth: 180
    },

    mailText: {
        color: '#000000',
        fontSize: 11.5,
        marginRight: 8
    },

    /* Action Container */
    swipeActionContainer: {
        flexDirection: 'row',
        height: '100%',
    },

    actionBtn: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: 4
    },

    actionText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500'
    },

    lastActionBtn: {
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
});

export default CustomerCard;