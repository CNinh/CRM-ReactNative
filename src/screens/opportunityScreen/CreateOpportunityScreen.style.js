import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    safeArea: {
        flex: 1
    },

    container: {
        flex: 1,
        backgroundColor: '#D3D5D7'
    },

    deptCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 6,
        marginBottom: 8,
        gap: 6
    },

    deptTitle: {
        fontSize: 20,
        color: '#000000'
    },

    formCard: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        borderRadius: 12,
        padding: 8,
        marginBottom: -20
    },

    fieldGroup: {
        marginBottom: 4
    },

    label: {
        fontSize: 12.5,
        color: '#000000',
        marginVertical: 6
    },

    required: {
        color: '#D32F2F',
        fontSize: 13,
        fontWeight: '600'
    },

    inputError: {
        borderColor: '#D93025'
    },

    errorText: {
        color: '#D93025',
        fontSize: 12,
        marginBottom: 4,
        marginLeft: 2
    },

    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 4,
        paddingHorizontal: 12,
        fontSize: 14,
        color: '#000000'
    },

    tagGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        marginTop: 12
    },

    serviceTag: {
        backgroundColor: '#E4E6E9',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: '#E5E7EB',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },

    serviceText: {
        fontSize: 11,
        color: '#000000'
    },

    rowTwoFields: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    editorContainer: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        overflow: 'hidden'
    },

    editorToolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D3D5D7',
        paddingHorizontal: 12,
        gap: 8
    },

    textEditor: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
    },

    lineEditor: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
    },

    toolBtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: 30,
        height: 30,
        textAlign: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 1,
    },

    toolBtnIc: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: 30,
        height: 30,
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: 7,
        margin: 1,
    },

    toolText: {
        fontSize: 14.5,
        fontWeight: '500',
        color: '#000000'
    },

    editorInput: {
        height: 90,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
        color: '#000000',
        backgroundColor: '#FFFFFF'
    },

    filePicker: {
        height: 40,
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 8,
        paddingHorizontal: 12,
        justifyContent: 'center'
    },

    placeholderText: {
        fontSize: 12,
        color: '#7E8387',
        marginHorizontal: 4
    },

    fileItemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 8,
        padding: 6,
        marginTop: 10,
        marginBottom: -4
    },

    fileMainInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 6,
        marginLeft: 2
    },

    fileName: {
        fontSize: 12.5,
        color: '#000000',
        flex: 1
    },

    fileActions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8
    },

    footer: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE'
    },

    btnSave: {
        backgroundColor: '#1A7FC1',
        height: 44,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        gap: 12
    },

    btnSaveText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '500'
    },
});