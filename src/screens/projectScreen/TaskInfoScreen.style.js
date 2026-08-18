import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E6E9'
  },

  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },

  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent'
  },

  activeTabButton: {
    borderBottomColor: '#1A7FC1'
  },

  tabText: {
    fontSize: 14,
    color: '#7E8387',
    fontWeight: '500'
  },

  activeTabText: {
    color: '#1A7FC1',
    fontWeight: '500'
  },

  scrollContent: {
    flex: 1
  },

  contentPadding: {
    paddingHorizontal: 12,
    paddingVertical: 16
  },

  // Info Tab
  badgeRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16
  },

  badge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#FFFFFF'
  },

  badgeStatus: {
    backgroundColor: '#B6E0F0'
  },

  badgeStatusText: {
    color: '#185FA5',
    fontWeight: '500',
    fontSize: 14
  },

  badgeText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500'
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 8
  },

  progressText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000'
  },

  progressTrack: {
    height: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 20
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#1A7FC1',
    borderRadius: 50
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16
  },

  gridCard: {
    width: 189,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#D3D5D7',
    borderRadius: 10
  },

  gridLabel: {
    fontSize: 11.5,
    color: '#000000'
  },

  gridValue: {
    fontSize: 14.5,
    fontWeight: '500',
    color: '#000000'
  },

  cardSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: -4,
    marginBottom: 8
  },

  assigneeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },

  avatarCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F1EFE8',
    justifyContent: 'center',
    alignItems: 'center'
  },

  avatarText: {
    fontSize: 12,
    color: '#5F5E5A'
  },

  assigneeName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000'
  },

  descriptionText: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 20,
    marginHorizontal: 12,
    marginBottom: 12
  },

  // Card file đính kèm
  fileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    gap: 10,
    marginBottom: 8
  },

  fileNameText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#000000',
    flex: 1,
    marginHorizontal: 12
  },

  emptyFileText: {
    fontSize: 14,
    fontWeight: '300',
    fontStyle: 'italic',
    color: '#000000',
    marginHorizontal: 12
  },

  // Logs Tab
  dateBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  calendarIconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#4AA0DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4
  },

  datePill: {
    backgroundColor: '#4AA0DF',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 16
  },

  datePillText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '300'
  },

  logCard: {
    width: 356,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 8,
    marginLeft: 30,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#1A7FC1',
  },

  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },

  logMetaText: {
    fontSize: 11.5,
    color: '#333333',
  },

  logActions: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: -8
  },

  editBtn: {
    backgroundColor: '#3B98E1',
    width: 26,
    height: 26,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteBtn: {
    backgroundColor: '#E5533D',
    width: 26,
    height: 26,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logContent: {
    fontSize: 13,
    color: '#000000',
    marginHorizontal: 16,
    marginTop: -4
  },

  logAttachmentTag: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7E8387',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 8,
    alignSelf: 'flex-start',
    gap: 6,
  },

  attachmentName: {
    fontSize: 12,
    color: '#000000',
  },

  // Bottom Action Bar Info
  bottomBarInfo: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    gap: 10
  },

  btnActionPrimary: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A7FC1',
    gap: 6
  },

  btnActionPrimaryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500'
  },

  btnActionSecondary: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A7FC1',
    gap: 6
  },

  btnActionSecondaryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500'
  },

  pendingFileOuterContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#FFFFFF'
  },

  attachmentPreviewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D5D7',
    borderRadius: 10,
    padding: 6,
    paddingRight: 12,
    alignSelf: 'flex-start',
    gap: 8
  },

  attachmentPreviewName: {
    fontSize: 13,
    color: '#000000',
    marginRight: 8
  },

  // Bottom Bar Logs / Chat
  bottomBarLogsContainer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#000000',
    paddingVertical: 16,
    paddingHorizontal: 8
  },

  chatInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },

  attachFileBtn: {
    padding: 4
  },

  inputBox: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#7E8387',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#000000'
  },

  sendBtn: {
    padding: 4
  }
});

export default styles;