import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#E4E6E9'
  },

  headerContainer: {
    backgroundColor: '#4AA0DF',
    paddingBottom: 20,
    paddingHorizontal: 20
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 32
  },

  avatarWrapper: {
    position: 'relative'
  },

  avatarContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarImage: {
    width: 68,
    height: 68,
    borderRadius: 34
  },

  cameraBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D5D7'
  },

  userInfoText: {
    gap: -4
  },

  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2
  },

  userDepartment: {
    fontSize: 13,
    color: '#FFFFFF'
  },

  body: {
    flex: 1,
    padding: 10
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D3D5D7',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 14
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D5D7'
  },

  cardHeaderTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },

  cardHeaderTitle: {
    fontSize: 16,
    color: '#000000'
  },

  btnEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  txtEdit: {
    fontSize: 12,
    color: '#1A7FC1'
  },

  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#E6F1FB',
    justifyContent: 'center',
    alignItems: 'center'
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D5D7',
    gap: 12
  },

  infoContent: {
    gap: -2
  },

  infoLabel: {
    fontSize: 12,
    color: '#7E8387'
  },

  infoValue: {
    fontSize: 16,
    color: '#000000'
  },

  securityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  securityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  }
});

export default styles;