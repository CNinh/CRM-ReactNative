import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './PlanTab.style';
import AvatarGroup from '../../../components/avatars/AvatarGroup';

import IcClock from '../../../assets/icons/clock.svg';
import IcLocation from '../../../assets/icons/location.svg';
import IcUserPlus from '../../../assets/icons/user-plus.svg';

import { optPlans } from '../../../data/mockData';

const PlanCardItem = ({ plan }) => {
   const [isExpanded, setIsExpanded] = useState(false);
   const relatedUsers = plan.relatedUsers || [];

   return (
      <View style={styles.cardContainer}>
         <View style={styles.headerSection}>
            <View style={styles.timeRow}>
               <IcClock width={15} height={15} color="#000000" />
               <Text style={styles.timeText}>
                  {plan.date} <Text style={{ fontWeight: '800' }}>·</Text> {plan.time}
               </Text>
            </View>

            <Text style={styles.planTitle}>{plan.title || plan.name}</Text>

            <View style={styles.locationRow}>
               <IcLocation width={18} height={18} color="#000000" />
               <Text style={styles.locationText} numberOfLines={1}>
                  {plan.location || plan.address || 'Chưa có địa điểm'}
               </Text>
            </View>

            <View style={styles.relatedUserRow}>
               {relatedUsers.length === 0 ? (
                  <View style={styles.noUserRow}>
                     <IcUserPlus width={22} height={22} color="#D3D5D7" />
                     <Text style={styles.noUserText}>Chưa có người liên quan</Text>
                  </View>
               ) : (
                  /* Sử dụng AvatarGroup gọn gàng */
                  <AvatarGroup members={relatedUsers} maxDisplay={3} />
               )}
            </View>
         </View>

         <View style={styles.contentSection}>
            <Text style={styles.contentLabel}>Nội dung</Text>
            <Text
               style={styles.contentText}
               numberOfLines={isExpanded ? undefined : 2}
            >
               {plan.content || plan.description || 'Chưa có nội dung chi tiết.'}
            </Text>

            {(plan.content?.length > 60 || plan.description?.length > 60) && (
               <TouchableOpacity
                  style={styles.toggleMoreBtn}
                  onPress={() => setIsExpanded(!isExpanded)}
                  activeOpacity={0.7}
               >
                  <Text style={styles.toggleMoreText}>
                     {isExpanded ? 'Rút gọn' : 'Xem thêm'}
                  </Text>
               </TouchableOpacity>
            )}
         </View>
      </View>
   );
};

const PlanTab = ({ item, data }) => {
   const dataToRender = data || [];

   return (
      <View style={styles.container}>
         {dataToRender.map((planItem, index) => (
            <PlanCardItem key={planItem.id || index} plan={planItem} />
         ))}
      </View>
   );
};

export default PlanTab;