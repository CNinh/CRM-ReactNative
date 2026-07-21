import {View, Text, FlatList, StyleSheet} from 'react-native';
import styles from './InfoScreen.style';
import {
  getDatas,
  addData,
  removeData,
  closeRealm,
  Infos,
  getDataById,
  updateData,
} from '../../realm/StorageServices';
import {useEffect, useState} from 'react';
import DefaultButton from '../../components/buttons/DefaultButton';
import FormModal from '../../components/modals/FormModal';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useTranslation} from 'react-i18next';
import IconInput from '../../components/inputs/IconInput';
import {phoneRegExp} from '../../constants/regex';
import colors from '../../constants/colors';
import {IconButton} from 'react-native-paper';
import DefaultText from '../../components/texts/DefaultText';

const ListItem = ({item, removeItem, editItem} = props) => {
  return (
    <View style={listItemStyle.listItem}>
      <View style={listItemStyle.nameContainer}>
        <DefaultText text={item.name} style={listItemStyle.name}></DefaultText>
        <IconButton
          icon={'pencil'}
          iconColor={colors.black}
          size={16}
          onPress={() => editItem(item)}
          style={listItemStyle.editButton}
        />
      </View>

      <DefaultText text={item.age} />
      <DefaultText text={item.phoneNumber}></DefaultText>
      <IconButton
        icon={'close'}
        iconColor={colors.black}
        size={18}
        onPress={() => removeItem(item)}
        style={listItemStyle.removeButton}
      />
    </View>
  );
};

const listItemStyle = StyleSheet.create({
  listItem: {
    position: 'relative',
    backgroundColor: colors.white,
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      borderRadius: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  name: {
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.black,
    alignItems: 'center',
  },
  editButton: {
    margin: 0,
  },
  removeButton: {
    position: 'absolute',
    top: 0,
    right: 2,
  },
});

const InfoScreen = () => {
  const {t} = useTranslation();
  const [infos, setInfos] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const schema = yup
    .object({
      id: yup.string(),
      name: yup
        .string()
        .required(t('message.required').replace('{0}', t('input.name'))),
      age: yup
        .number()
        .required(t('message.required').replace('{0}', t('input.age')))
        .typeError(t('message.integerFormat').replace('{0}', t('input.age'))),
      phoneNumber: yup
        .string()
        .required(t('message.required').replace('{0}', t('input.phoneNumber')))
        .matches(phoneRegExp, t('message.phoneNumberFormat')),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const getData = async () => {
      const data = await getDatas('Info');
      setInfos(data);
    };
    getData();

    // return () => {
    //   closeRealm();
    // };
  }, []);

  const onLogin = async data => {
    if (data.id) {
      await updateData('Info', data.id, data).then(newInfos =>
        setInfos(newInfos),
      );
    } else {
      await addData('Info', data).then(newInfos => setInfos(newInfos));
    }
    reset({
      age: '',
      name: '',
      phoneNumber: '',
    });
    setIsOpen(false);
  };

  const removeItem = async info => {
    await removeData('Info', info).then(newInfos => setInfos(newInfos));
  };

  const editItem = async info => {
    const infoToUpdate = await getDataById('Info', info.id);
    if (infoToUpdate) {
      setValue('id', infoToUpdate.id);
      setValue('name', infoToUpdate.name);
      setValue('age', infoToUpdate.age);
      setValue('phoneNumber', infoToUpdate.phoneNumber);
      setIsOpen(true);
    }
  };

  return (
    <View style={styles.container}>
      <DefaultButton
        onPress={() => setIsOpen(true)}
        title={t('button.add')}
        type="primary"
        mode="contained"
        style={{
          margin: 20,
        }}
      />
      <FlatList
        data={infos}
        style={styles.infoList}
        renderItem={({item}) => (
          <ListItem item={item} removeItem={removeItem} editItem={editItem} />
        )}
      />
      <FormModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={'Thêm info'}
        onSubmit={handleSubmit(onLogin)}
        onDismiss={() =>
          reset({
            age: '',
            name: '',
            phoneNumber: '',
          })
        }>
        <>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <IconInput
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                label={t('input.name')}
                leftIcon="account"
                mode="outlined"
                errorMessage={errors.name?.message}
              />
            )}
            name="name"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <IconInput
                value={value.toString()}
                onChange={onChange}
                onBlur={onBlur}
                label={t('input.age')}
                leftIcon="account"
                mode="outlined"
                errorMessage={errors.age?.message}
                inputMode="numeric"
                keyboardType="numeric"
              />
            )}
            name="age"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <IconInput
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                label={t('input.phoneNumber')}
                leftIcon="phone"
                mode="outlined"
                errorMessage={errors.phoneNumber?.message}
                inputMode="numeric"
                keyboardType="phone-pad"
              />
            )}
            name="phoneNumber"
            defaultValue=""
          />
        </>
      </FormModal>
    </View>
  );
};

export default InfoScreen;
