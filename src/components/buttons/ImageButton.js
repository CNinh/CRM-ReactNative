import { View, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultText from '../texts/DefaultText';
import { SvgUri } from 'react-native-svg';
import { API_BASE_URL } from '../../constants/api';

const ImageButton = ({
  onPress,
  backgroundColor,
  imageSrc,
  text,
  textColor,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.container,
        { backgroundColor: backgroundColor },
        style,
      ]}>
      <View style={styles.imageWrapper}>
        <SvgUri
          uri={`${API_BASE_URL}${imageSrc}`}
          width={25}
          height={25}
        />
      </View>
      <DefaultText
        text={text}
        style={[
          styles.text,
          { color: textColor },
        ]}
      />
    </TouchableOpacity>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  imageWrapper: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    overflow: 'hidden',
  },
  text: {
    marginLeft: 22,
  },
});
