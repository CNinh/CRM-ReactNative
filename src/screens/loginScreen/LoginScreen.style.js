import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },

  headerContainer: {
    height: 240,
    position: 'relative',
  },

  bgHeader: {
    width: '100%',
    height: '100%',
  },

  logoOverlay: {
    position: 'absolute',
    paddingBottom: 10,
    bottom: 1,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 410,
    height: 91,
  },

  formContainer: {
    paddingHorizontal: 25,
    marginTop: 30,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 15,
    color: '#333333',
    backgroundColor: '#ffffff',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -5,
    marginBottom: 10,
    marginLeft: -8,
  },

  checkboxLabel: {
    fontSize: 14,
    fontWeight:'600',
    color: '#444444',
  },

  loginButton: {
    backgroundColor: '#1A7FC1',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  supportContainer: {
    paddingHorizontal: 25,
    marginTop: 25,
  },

  supportText: {
    fontSize: 13,
    color: '#333333',
    lineHeight: 20,
  },

  boldRed: {
    color: '#d90429',
    fontWeight: 'bold',
  },

  boldText: {
    fontWeight: 'bold',
    color: '#000000',
  },

  linkText: {
    color: '#0077b6',
    textDecorationLine: 'underline',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#B6E0F0',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#b2d2e8',
  },

  footerText: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default styles;