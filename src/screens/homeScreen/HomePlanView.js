import { useEffect, useState, useMemo } from "react"
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";
import { Checkbox } from "react-native-paper";
import styles from "./HomePlanView.style";
import PlanCard from "../../components/cards/PlanCard";
import IcArrowL from "../../assets/icons/arrow_left.svg";
import IcArrowR from "../../assets/icons/arrow_right.svg";
import MonthYearPickerSheet from "../../components/sheets/MonthYearPickerSheet";

import { plan } from "../../data/mockData";

const parseDate = (dateStr) => {
    if (!dateStr) return '';
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, 0)}`;
}

const HomePlanView = ({ navigation }) => {
    // lấy ngày hiện tại
    const today = new Date();
    const currentDayStr = String(today.getDate()).padStart(2, "0");
    const currentMonthStr = String(today.getMonth() + 1).padStart(2, "0");
    const currentYearStr = today.getFullYear();
    const currentDate = `${currentYearStr}-${currentMonthStr}-${currentDayStr}`;

    const [isPersonal, setIsPersonal] = useState(false);

    // set default tháng, năm hiện tại
    const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [isModalVisible, setIsModalVisible] = useState(false);

    // set default date trong calendar
    const [selectedDate, setSelectedDate] = useState(currentDate);

    // lấy t2 của tuần hiện tại
    const [currentWeekStart, setCurrentWeekStart] = useState(() => {
        const date = new Date();
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    });

    const formattedPlans = useMemo(() => {
        return (plan || []).map(item => ({
            id: String(item.id),
            time: item.time,
            name: item.staff && item.staff.length > 0 ? item.staff[0] : "Chưa phân công",
            title: item.stage || "Kế hoạch",
            project: item.name,
            company: item.dept,
            address: item.address,
            description: item.description,
            fullDate: parseDate(item.date)
        }));
    }, []);

    // Tìm ngày kế tiếp gần nhất ngày hiện tại
    const nearestFutureDateWithPlan = useMemo(() => {
        const todayStr = currentDate;
        const futureDates = formattedPlans
            .map(p => p.fullDate)
            .filter(d => d >= todayStr)
            .sort();

        return futureDates.length > 0 ? futureDates[0] : null;
    }, [formattedPlans, currentDate]);

    // Generate 7 ngày trong tuần
    const generateWeeklyDays = (mondayDate) => {
        const days = [];
        const labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

        for (let i = 0; i < 7; i++) {
            const nextDate = new Date(mondayDate);
            nextDate.setDate(mondayDate.getDate() + i);

            const dayNum = String(nextDate.getDate()).padStart(2, "0");
            const monthNum = String(nextDate.getMonth() + 1).padStart(2, "0");
            const yearNum = nextDate.getFullYear();
            const fullDateStr = `${yearNum}-${monthNum}-${dayNum}`;

            const tasksInDay = formattedPlans.filter(p => p.fullDate === fullDateStr);

            // Báo đỏ với ngày kế tiếp gần nhất có kế hoạch
            const isRed = nearestFutureDateWithPlan === fullDateStr;

            days.push({
                id: String(i + 1),
                dayOfWeek: labels[i],
                dayNumber: dayNum,
                fullDate: fullDateStr,
                taskCount: tasksInDay.length,
                isRed: isRed
            });
        }
        return days;
    };

    const weeklyDaysData = generateWeeklyDays(currentWeekStart);

    const totalWeeklyPlans = useMemo(() => {
        return weeklyDaysData.reduce((total, day) => total + day.taskCount, 0);
    }, [weeklyDaysData]);

    // List kế hoạch của ngày được chọn
    const currentDayPlans = useMemo(() => {
        return formattedPlans.filter(p => p.fullDate === selectedDate);
    }, [formattedPlans, selectedDate]);

    const handleNavigateWeek = (direction) => {
        const newWeekStart = new Date(currentWeekStart);
        if (direction === "prev") {
            newWeekStart.setDate(currentWeekStart.getDate() - 7);
        } else {
            newWeekStart.setDate(currentWeekStart.getDate() + 7);
        }
        setCurrentWeekStart(newWeekStart);

        const midWeekDate = new Date(newWeekStart);
        midWeekDate.setDate(newWeekStart.getDate() + 3);
        setCurrentMonth(midWeekDate.getMonth() + 1);
        setCurrentYear(midWeekDate.getFullYear());

        // Tự động chọn T2 của tuần mới
        const dayNum = String(newWeekStart.getDate()).padStart(2, "0");
        const monthNum = String(newWeekStart.getMonth() + 1).padStart(2, "0");
        const yearNum = newWeekStart.getFullYear();

        setSelectedDate(`${yearNum}-${monthNum}-${dayNum}`);
    };

    // Hiển thị tháng, năm được chọn từ modal
    const handleMonthYearChange = (month, year) => {
        setCurrentMonth(month);
        setCurrentYear(year);

        // set default week = tuần đầu tiên của tháng, năm được chọn
        const firstDayOfMonth = new Date(year, month - 1, 1);
        const day = firstDayOfMonth.getDay();
        const diff = firstDayOfMonth.getDate() - day + (day === 0 ? -6 : 1);
        const newMonday = new Date(firstDayOfMonth.setDate(diff));

        setCurrentWeekStart(newMonday);

        // set default selected date của tuần được chọn
        const dayNum = String(newMonday.getDate()).padStart(2, "0");
        const monthNum = String(newMonday.getMonth() + 1).padStart(2, "0");
        setSelectedDate(`${newMonday.getFullYear()}-${monthNum}-${dayNum}`);
    };

    useEffect(() => {
        if (navigation) {
            navigation.setOptions({
                handleReload: () => {
                    const reloadToday = new Date();
                    const rDayStr = String(reloadToday.getDate()).padStart(2, "0");
                    const rMonthStr = String(reloadToday.getMonth() + 1).padStart(2, "0");

                    setIsPersonal(false);
                    setVisibleCount(3);
                    setSelectedDate(`${reloadToday.getFullYear()}-${rMonthStr}-${rDayStr}`);
                    setCurrentMonth(reloadToday.getMonth() + 1);
                    setCurrentYear(reloadToday.getFullYear());

                    const defaultDate = new Date();
                    const day = defaultDate.getDay();
                    const diff = defaultDate.getDate() - day + (day === 0 ? -6 : 1);
                    setCurrentWeekStart(new Date(defaultDate.setDate(diff)));
                }
            });
        }
    }, [navigation]);

    const renderCalendarHeader = () => (
        <View style={styles.calendarContainer}>
            <View style={styles.tierContainer}>
                <TouchableOpacity
                    style={styles.checkboxRow}
                    onPress={() => setIsPersonal(!isPersonal)}
                    activeOpacity={0.8}
                >
                    <View style={[styles.checkbox, isPersonal && styles.checkboxChecked]}>
                        {isPersonal && (
                            <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold', textAlign: 'center', lineHeight: 14 }}>
                                ✓
                            </Text>
                        )}
                    </View>
                    <Text style={styles.labelCheckbox}>Lịch cá nhân</Text>
                </TouchableOpacity>
                <Text style={styles.txtTotal}>Tổng: {totalWeeklyPlans}</Text>
            </View>

            {/* Tháng, năm */}
            <View style={styles.monthSelectorRow}>
                <TouchableOpacity style={styles.arrowBtn} onPress={() => handleNavigateWeek("prev")}>
                    <IcArrowL width={16} height={16} color="#000000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.monthBadge} onPress={() => setIsModalVisible(true)}>
                    <Text style={styles.monthText}>Tháng {currentMonth}, {currentYear}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.arrowBtn} onPress={() => handleNavigateWeek("next")}>
                    <IcArrowR width={16} height={16} color="#000000" />
                </TouchableOpacity>
            </View>

            {/* Tuần */}
            <View style={styles.weekStripRow}>
                {weeklyDaysData.map((item) => {
                    const isSelected = item.fullDate === selectedDate;
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.dayItemBtn, isSelected && styles.dayItemActive]}
                            onPress={() => setSelectedDate(item.fullDate)}
                            activeOpacity={0.7}
                        >
                            <Text style={[styles.txtSubDay, item.isRed && styles.txtRedColor]}>
                                {item.dayOfWeek}
                            </Text>
                            <Text style={[styles.txtMainDay, item.isRed && styles.txtRedColor, isSelected]}>
                                {item.dayNumber}
                            </Text>

                            <View style={styles.badgeWrapper}>
                                {item.taskCount > 0 ? (
                                    <View style={styles.taskBadge}>
                                        <Text style={styles.taskBadgeText}>{item.taskCount}</Text>
                                    </View>
                                ) : (
                                    <View style={styles.emptyBadge} />
                                )}
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={currentDayPlans}
                renderItem={({ item }) => <PlanCard item={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={renderCalendarHeader}
                contentContainerStyle={styles.listPadding}
                showsVerticalScrollIndicator={false}
            />

            <MonthYearPickerSheet
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                currentMonth={currentMonth}
                currentYear={currentYear}
                onChange={handleMonthYearChange}
            />
        </SafeAreaView>
    )
}

export default HomePlanView;