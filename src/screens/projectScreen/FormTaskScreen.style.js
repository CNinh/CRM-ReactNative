import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E6E9',
  },

  scrollContent: {
    flex: 1
  },

  scrollContainer: {
    padding: 12
  },

  cardForm: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#D3D5D7'
  },

  formGroup: {
    marginBottom: 10
  },

  label: {
    marginBottom: 6,
    fontSize: 12,
    color: '#000000'
  },

  required: {
    color: '#C62828'
  },

  errorText: {
    color: '#D93025',
    fontSize: 12,
    marginBottom: 4,
    marginLeft: 2,
  },

  inputError: {
    borderColor: '#D93025',
  },

  percentText: {
    fontSize: 12,
    color: '#000000'
  },

  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D3D5D7',
    borderRadius: 5,
    paddingHorizontal: 12,
    height: 40,
    fontSize: 14,
    color: '#000000'
  },

  placeholderText: {
    fontSize: 14,
    color: '#A0AEC0'
  },

  dropdownIcon: {
    fontSize: 12,
    color: '#718096'
  },

  rowGrid: {
    flexDirection: 'row',
    gap: 12
  },

  colHalf: {
    flex: 1
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  sliderContainer: {
    height: 5,
    borderWidth: 1,
    borderColor: '#D3D5D7',
    borderRadius: 5,
    justifyContent: 'center',
  },

  sliderThumb: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D3D5D7'
  },

  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8
  },

  assigneePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E4E6E9',
    borderRadius: 8,
    marginBottom: 12,
    marginTop: -6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 6
  },

  pillText: {
    fontSize: 11.5,
    color: '#000000',
    marginRight: 6
  },

  richEditorBox: {
    borderWidth: 1,
    borderColor: '#D3D5D7',
    borderRadius: 8,
    overflow: 'hidden'
  },

  editorContainer: {
        borderWidth: 1,
        borderColor: '#D3D5D7',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 12
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

  bottomBar: {
    padding: 12,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0'
  },

  saveBtn: {
    backgroundColor: '#2080CD',
    height: 44,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },

  saveBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
  }
});

export default styles;