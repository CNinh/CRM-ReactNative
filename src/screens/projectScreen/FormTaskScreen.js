import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    SafeAreaView,
    Alert,
} from 'react-native';
import { Slider } from '@react-native-assets/slider';
import styles from './FormTaskScreen.style';
import DropDownList from '../../components/lists/DropDownList';
import { DateInput } from '../../utils/DateTimeInput';

import IcAlignR from '../../assets/icons/align-right.svg';
import IcAlignL from '../../assets/icons/align-left.svg';
import IcAlignJ from '../../assets/icons/align-justify.svg';
import IcAlignC from '../../assets/icons/align-center.svg';
import IcListN from '../../assets/icons/list-ol.svg';
import IcClose from '../../assets/icons/close.svg';
import IcExcel from '../../assets/icons/file-excel.svg';
import IcEye from '../../assets/icons/tab-eye.svg';
import IcDelete from '../../assets/icons/delete.svg';
import IcSave from '../../assets/icons/save.svg';

import { TASK_TYPES, STATUS_OPTIONS, PRIORITY_OPTIONS, staff } from '../../data/mockData';

export const FormTaskScreen = ({ navigation }) => {
    const [error, setError] = useState({});
    const [taskType, setTaskType] = useState(TASK_TYPES[0]);
    const [parentTask, setParentTask] = useState(null);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState(STATUS_OPTIONS[1]);
    const [priority, setPriority] = useState(PRIORITY_OPTIONS[1]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [progress, setProgress] = useState(0);
    const [estimatedHours, setEstimatedHours] = useState('8.00');
    const [actualHours, setActualHours] = useState('0.00');
    const [assignees, setAssignees] = useState([
        { id: '10', name: 'Mai Ngọc Phương Ngân' },
        { id: '21', name: 'Mai Ngọc Phương Ngân' },
    ]);
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([
        { id: '1', name: 'danhsachbophan14042026.xlsx' }
    ]);

    const handleClearError = (field) => {
        if (error[field]) {
            setError(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleSelectAssignee = (person) => {
        if (!assignees.some(item => item.id === person.id)) {
            setAssignees(prev => [...prev, person]);
        }
    };

    const handleRemoveAssignee = (id) => {
        setAssignees(prev => prev.filter(item => item.id !== id));
    };

    const handleRemoveFile = (fileId) => {
        setFiles(prev => prev.filter(f => f.id !== fileId));
    };

    const handleSave = () => {
        const requiredError = {};

        if (!taskType?.name && !taskType?.title) {
            requiredError.taskType = 'Loại công việc không được để trống';
        }
        if (!title.trim()) {
            requiredError.title = 'Tên công việc không được để trống';
        }

        if (Object.keys(requiredError).length > 0) {
            setError(requiredError);
            return;
        }

        const formData = {
            title,
            taskType: taskType?.name,
            parentTaskId: parentTask?.id || null,
            status: status?.name,
            priority: priority?.name,
            startDate,
            endDate,
            progress,
            estimatedHours,
            description,
            attachments: files,
        };

        console.log('Dữ liệu lưu:', formData);
        Alert.alert('Thành công', 'Đã lưu công việc');
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollContent}
                contentContainerStyle={styles.scrollContainer}
            >
                <View style={styles.cardForm}>
                    {/* Loại công việc * */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>
                            Loại công việc <Text style={styles.required}>*</Text>
                        </Text>
                        {error.taskType && <Text style={styles.errorText}>{error.taskType}</Text>}
                        <DropDownList
                            placeholder="Chọn loại công việc..."
                            dropDownHeight={40}
                            fontSize={14}
                            fontWeight={500}
                            data={TASK_TYPES}
                            selectedItem={taskType}
                            onSelect={(item) => {
                                setTaskType(item);
                                handleClearError('taskType');
                                if (item.id !== 2) setParentTask(null);
                            }}
                        />
                    </View>

                    {/* Công việc cha */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Công việc cha</Text>
                        <DropDownList
                            placeholder="Chọn công việc"
                            dropDownHeight={40}
                            data={TASK_TYPES}
                            selectedItem={parentTask}
                            onSelect={(item) => setParentTask(item)}
                        />
                    </View>

                    {/* Tên công việc * */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>
                            Tên công việc <Text style={styles.required}>*</Text>
                        </Text>
                        {error.title && <Text style={styles.errorText}>{error.title}</Text>}
                        <TextInput
                            style={styles.textInput}
                            value={title}
                            onChangeText={(text) => {
                                setTitle(text);
                                handleClearError('title');
                            }}
                        />
                    </View>

                    {/* Trạng thái & Độ ưu tiên */}
                    <View style={styles.rowGrid}>
                        <View style={[styles.formGroup, styles.colHalf]}>
                            <Text style={styles.label}>Trạng thái</Text>
                            <DropDownList
                                placeholder="Chọn trạng thái..."
                                dropDownHeight={40}
                                fontSize={14}
                                data={STATUS_OPTIONS}
                                selectedItem={status}
                                onSelect={(item) => setStatus(item)}
                            />
                        </View>

                        <View style={[styles.formGroup, styles.colHalf]}>
                            <Text style={styles.label}>Độ ưu tiên</Text>
                            <DropDownList
                                placeholder="Chọn độ ưu tiên..."
                                dropDownHeight={40}
                                fontSize={14}
                                data={PRIORITY_OPTIONS}
                                selectedItem={priority}
                                onSelect={(item) => setPriority(item)}
                            />
                        </View>
                    </View>

                    {/* Ngày bắt đầu & Ngày kết thúc */}
                    <View style={styles.rowGrid}>
                        <View style={[styles.formGroup, styles.colHalf]}>
                            <Text style={styles.label}>Ngày bắt đầu</Text>
                            <DateInput
                                value={startDate}
                                onChange={setStartDate}
                                customInputStyle={styles.textInput}
                            />
                        </View>

                        <View style={[styles.formGroup, styles.colHalf]}>
                            <Text style={styles.label}>Ngày kết thúc</Text>
                            <DateInput
                                value={endDate}
                                onChange={setEndDate}
                                customInputStyle={styles.textInput}
                            />
                        </View>
                    </View>

                    {/* % Hoàn thành */}
                    <View style={styles.formGroup}>
                        <View style={styles.labelRow}>
                            <Text style={styles.label}>% Hoàn thành</Text>
                            <Text style={styles.percentText}>{Math.round(progress)}%</Text>
                        </View>

                        <View style={styles.sliderContainer}>
                            <Slider
                                value={progress}
                                onValueChange={(val) => setProgress(val)}
                                minimumValue={0}
                                maximumValue={100}
                                step={1}
                                minimumTrackTintColor="#1A7FC1"
                                minimumTrackStyle={{ backgroundColor: '#1A7FC1' }}
                                maximumTrackTintColor="#FFFFFF"
                                maximumTrackStyle={{ backgroundColor: '#FFFFFF' }}
                                CustomThumb={() => (
                                    <View style={styles.sliderThumb} />
                                )}
                            />
                        </View>
                    </View>

                    {/* Thời gian dự tính & Thực tế */}
                    <View style={styles.rowGrid}>
                        <View style={[styles.formGroup, styles.colHalf]}>
                            <Text style={styles.label}>Thời gian dự tính (giờ)</Text>
                            <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                value={estimatedHours}
                                onChangeText={setEstimatedHours}
                            />
                        </View>

                        <View style={[styles.formGroup, styles.colHalf]}>
                            <Text style={styles.label}>Thời gian thực tế (giờ)</Text>
                            <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                value={actualHours}
                                onChangeText={setActualHours}
                            />
                        </View>
                    </View>

                    {/* Người đảm nhận */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Người đảm nhận</Text>
                        <DropDownList
                            placeholder='Chọn người đảm nhận'
                            dropDownHeight={40}
                            data={staff}
                            selectedItem={null}
                            onSelect={(item) => setAssignees(item)}
                        />
                    </View>

                    {/* Selected assignees */}
                    {assignees.length > 0 && (
                        <View style={styles.tagContainer}>
                            {assignees.map((item, index) => (
                                <View key={item.id || index} style={styles.assigneePill}>
                                    <Text style={styles.pillText}>{item.name || item}</Text>
                                    <TouchableOpacity onPress={() => handleRemoveAssignee(item.id || index)}>
                                        <IcClose width={11} height={11} color="#000000" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Mô tả */}
                    <View style={styles.FormGroup}>
                        <Text style={styles.label}>Nội dung</Text>
                        <View style={styles.editorContainer}>
                            <View style={styles.editorToolbar}>
                                <View style={styles.textEditor}>
                                    <TouchableOpacity style={styles.toolBtn}><Text style={styles.toolText}>B</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtn}><Text style={[styles.toolText, { fontStyle: 'italic', fontFamily: 'serif' }]}>I</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtn}><Text style={[styles.toolText, { textDecorationLine: 'underline' }]}>U</Text></TouchableOpacity>
                                </View>
                                <View style={styles.lineEditor}>
                                    <TouchableOpacity style={styles.toolBtnIc}><IcAlignR width={16} height={16} color="#000000" /></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtnIc}><IcAlignL width={16} height={16} color="#000000" /></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtnIc}><IcAlignJ width={16} height={16} color="#000000" /></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtnIc}><IcAlignC width={16} height={16} color="#000000" /></TouchableOpacity>
                                    <TouchableOpacity style={styles.toolBtnIc}><IcListN width={16} height={16} color="#000000" /></TouchableOpacity>
                                </View>
                            </View>
                            <TextInput
                                style={styles.editorInput}
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                                onChangeText={setDescription}
                            />
                        </View>
                    </View>

                    <View style={styles.FormGroup}>
                        <Text style={styles.label}>Files</Text>
                        <TouchableOpacity style={styles.filePicker} activeOpacity={0.7}>
                            <Text style={styles.placeholderText}>Chọn File</Text>
                        </TouchableOpacity>

                        {files.map((file) => (
                            <View key={file.id} style={styles.fileItemRow}>
                                <View style={styles.fileMainInfo}>
                                    <IcExcel width={22} height={22} color="#3B6D11" />
                                    <Text style={styles.fileName} numberOfLines={1}>{file.name}</Text>
                                </View>
                                <View style={styles.fileActions}>
                                    <TouchableOpacity style={{ marginRight: 12 }}>
                                        <IcEye width={20} height={20} color="#7E8387" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleRemoveFile(file.id)}>
                                        <IcDelete width={16} height={16} color="#C62828" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Save Action */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                    <IcSave width={15} height={15} color="#FFFFFF" />
                    <Text style={styles.saveBtnText}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default FormTaskScreen;