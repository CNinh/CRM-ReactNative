import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import colors from '../../constants/colors';
const DefaultButton = ({
  title,
  onPress,
  type = 'primary',
  style,
  mode,
  leftIcon,
  rightIcon,
}) => {
  return (
    <Button
      onPress={onPress}
      labelStyle={{ fontSize: 14 }}
      buttonColor={mode === 'outlined' ? colors.white : colors[type]}
      textColor={mode === 'outlined' ? colors[type] : colors.white}
      mode={mode}
      icon={leftIcon || rightIcon || ''}
      contentStyle={{flexDirection: rightIcon ? 'row-reverse' : 'row'}}
      style={[
        styles.button,
        {
          borderWidth: mode === 'outlined' ? 1 : 0,
          borderColor: colors[type],
        },
        style,
      ]}>
      {title}
    </Button>
  );
};

export default DefaultButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
  },
});
