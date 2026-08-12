import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

import IcQuestion from '../../assets/icons/circle-question.svg';
import IcClose from '../../assets/icons/close.svg';

const DeleteModal = ({
  isVisible = false,
  onClose,
  onConfirm,
  type = '', // 'Khách hàng' | 'Cơ hội' | 'Dự án'
  title = '', // Tên 'Khách hàng | 'Cơ hội' | 'Dự án'
  isLoading = false
}) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              {/* Header */}
              <View style={styles.header}>
                <View style={styles.headerLeft}>
                  <IcQuestion width={22} height={22} color="#FFFFFF" />
                  <Text style={styles.headerTitle}>Xoá</Text>
                </View>

                <TouchableOpacity
                  onPress={onClose}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <IcClose width={16} height={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              {/* Body */}
              <View style={styles.body}>
                <Text style={styles.confirmText}>Bạn muốn xoá {type}</Text>
                <Text style={styles.titleText}>[{title}]?</Text>
              </View>

              {/* Footer */}
              <View style={styles.footer}>
                <TouchableOpacity
                  style={[styles.btn, styles.btnCancel]}
                  onPress={onClose}
                  activeOpacity={0.7}
                  disabled={isLoading}
                >
                  <Text style={styles.txtCancel}>Không</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.btn, styles.btnConfirm]}
                  onPress={onConfirm}
                  activeOpacity={0.7}
                  disabled={isLoading}
                >
                  <Text style={styles.txtConfirm}>
                    {isLoading ? 'Đang xoá...' : 'Có'}
                  </Text>
                </TouchableOpacity>
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
    paddingHorizontal: 24
  },

  modalContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },

  header: {
    backgroundColor: '#C62828',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 20,
    paddingVertical: 22
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500'
  },

  body: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },

  confirmText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#C62828',
    textAlign: 'center'
  },

  titleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center'
  },

  footer: {
    backgroundColor: '#E0EFF8',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    gap: 12
  },

  btn: {
    width: 98,
    height: 32,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },

  btnCancel: {
    backgroundColor: '#FFFFFF',
    borderColor: '#7E8387'
  },

  btnConfirm: {
    backgroundColor: '#FFFFFF',
    borderColor: '#C62828'
  },

  txtCancel: {
    fontSize: 16,
    color: '#7E8387',
    fontWeight: '500'
  },

  txtConfirm: {
    fontSize: 16,
    color: '#C62828',
    fontWeight: '500'
  }
});

export default DeleteModal;