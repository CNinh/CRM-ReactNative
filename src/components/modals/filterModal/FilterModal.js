import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';
import { Portal } from 'react-native-paper';
import { useEffect, useState } from 'react';
import FilterDropdownList from './FilterDropdownList';
import DatePickerSheet from '../../sheets/DatePickerSheet';
import IcFilter from '../../../assets/icons/filter.svg'
import IcArrowR from '../../../assets/icons/arrow_right.svg';
import IcArrowD from '../../../assets/icons/arrow_down.svg';
import IcCalendar from '../../../assets/icons/calendar.svg';
import { stage, service, department, staff } from '../../../data/mockData';

const { height } = Dimensions.get('window');
const HEADER_HEIGHT = 56;

const FilterModal = ({
  visible,
  onClose,
  onApply,
  onClear,
  initialStage = [],
  initialService = [],
  initialDepartment = [],
  initialStaff = [],
  initialFromDate,
  initialToDate
}) => {
  if (!visible) return null;

  const getCurrentDateString = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const [selectedStage, setSelectedStage] = useState(initialStage);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedDepartment, setSelectedDepartment] = useState(initialDepartment);
  const [selectedStaff, setSelectedStaff] = useState(initialStaff);

  const [openFirstDate, setOpenFirstDate] = useState(false);
  const [openLastDate, setOpenLastDate] = useState(false);

  const handleSelectStage = (id) => {
    setSelectedStage(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSelectService = (id) => {
    setSelectedService(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSelectDepartment = (id) => {
    setSelectedDepartment(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSelectStaff = (id) => {
    setSelectedStaff(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleClear = () => {
    setSelectedStage([]);
    setSelectedService([]);
    setSelectedDepartment([]);
    setSelectedStaff([]);
    setFromDate(getCurrentDateString());
    setToDate(getCurrentDateString());
    if (onClear) onClear();
  };

  const handleApplyFilter = () => {
    if (onApply) {
      onApply({
        stage: selectedStage,
        service: selectedService,
        department: selectedDepartment,
        staff: selectedStaff,
        fromDate,
        toDate
      });
    }
  };

  useEffect(() => {
    if (visible) {
      setSelectedStage(initialStage);
      setSelectedService(initialService);
      setSelectedDepartment(initialDepartment);
      setSelectedStaff(initialStaff);
      if (initialFromDate) setFromDate(initialFromDate);
      if (initialToDate) setToDate(initialToDate);
    }
  }, [visible]);

  return (
    <Portal>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <IcFilter width={20} height={20} color="#2971BF" />
            <Text style={styles.headerTitle}>Bộ lọc</Text>
          </View>
          <TouchableOpacity onPress={onClose} activeOpacity={0.7}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Khối mục filter */}
          <FilterDropdownList
            title="Giai đoạn"
            type="tag"
            data={stage}
            selectedId={selectedStage}
            onSelect={handleSelectStage}
          />

          <FilterDropdownList
            title="Sản phẩm dịch vụ"
            type="tree"
            placeholder="Tìm sản phẩm dịch vụ"
            data={service}
            selectedId={selectedService}
            onSelect={handleSelectService}
          />

          <FilterDropdownList
            title="Phòng ban"
            type="checkbox"
            placeholder="Tìm phòng ban"
            data={department}
            selectedId={selectedDepartment}
            onSelect={handleSelectDepartment}
          />

          <FilterDropdownList
            title="Nhân viên"
            type="checkbox"
            placeholder="Tìm nhân viên"
            data={staff}
            selectedId={selectedStaff}
            onSelect={handleSelectStaff}
          />

          {/* Date picker */}
          <View style={styles.dateSection}>
            <Text style={styles.dateSectionTitle}>Khoảng thời gian</Text>

            <View style={styles.dateFilterContainer}>
              <Text style={styles.dateLabel}>Từ ngày</Text>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => setOpenFirstDate(true)}
              >
                <Text style={styles.dateText}>{fromDate}</Text>
                <IcCalendar width={24} height={24} color="#000000" />
              </TouchableOpacity>

              <Text style={styles.dateLabel}>Đến ngày</Text>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => setOpenLastDate(true)}
              >
                <Text style={styles.dateText}>{toDate}</Text>
                <IcCalendar width={24} height={24} color="#000000" />
              </TouchableOpacity>
            </View>

            {/* Mở sheet chọn ngày */}
            <DatePickerSheet
              visible={openFirstDate}
              title="Chọn ngày bắt đầu"
              currentDateStr={fromDate}
              onClose={() => setOpenFirstDate(false)}
              onConfirm={(selectedDate) => {
                setFromDate(selectedDate)
                setOpenFirstDate(false)
              }}
            />

            <DatePickerSheet
              visible={openLastDate}
              title="Chọn ngày kết thúc"
              currentDateStr={toDate}
              onClose={() => setOpenLastDate(false)}
              onConfirm={(selectedDate) => {
                setToDate(selectedDate)
                setOpenLastDate(false)
              }}
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btnClear}
            onPress={handleClear}
            activeOpacity={0.8}
          >
            <Text style={styles.txtClear}>Bỏ chọn hết</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnApply}
            onPress={handleApplyFilter}
            activeOpacity={0.8}
          >
            <Text style={styles.txtApply}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: -16,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D5D7',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },

  closeText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000'
  },

  content: {
    flex: 1,
    paddingTop: 8
  },

  dateSection: {
    paddingHorizontal: 4,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D5D7'
  },

  dateSectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginHorizontal: 20
  },

  dateLabel: {
    fontSize: 15,
    color: '#000000',
    marginHorizontal: 12
  },

  dateFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 4,
    marginRight: 4,
    marginLeft: -6
  },

  dateInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 36,
    width: 140,
    borderWidth: 1,
    borderColor: '#D3D5D7',
    borderRadius: 4,
    paddingLeft: 6,
    paddingRight: 4
  },

  dateText: {
    fontSize: 12,
    color: '#000000',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20
  },

  btnClear: {
    height: 42,
    width: 178,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D3D5D7',
    backgroundColor: '#F5F4ED',
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtClear: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },

  btnApply: {
    height: 42,
    width: 178,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2971BF',
    backgroundColor: '#1A7FC1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtApply: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff'
  }
});

export default FilterModal;
