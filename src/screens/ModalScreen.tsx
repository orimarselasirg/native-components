import React, { useState, useContext } from 'react';
import { RenderItemHeader } from '../components/ItemHeader';
import { View, Button, Modal, StyleSheet } from 'react-native';
import { styles } from '../theme/globalTheme';
import { ThemeContext } from '../context/ThemeContext';

export const ModalScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.globaMagin}>
      <RenderItemHeader title="Modal Screen" />
      <Button
        title="Modal Screen"
        color= {theme.buttonColor}
        onPress={() => setShowModal(!showModal)}
      />
      <Modal
        animationType="fade"
        visible={showModal}
        transparent={true}
       >
        <View style={{...styleModal.container, backgroundColor: theme.modalBackground}}>
          <View style={{...styleModal.modalStyles, backgroundColor: theme.colors.background, shadowColor: theme.shadowColor}}>
            <RenderItemHeader title="Modal Screen" />
            <Button
              title="Cerrar"
              color= {theme.buttonColor}
              onPress={() => setShowModal(!showModal)}
            />
          </View>
        </View>
       </Modal>
    </View>
  );
};

const styleModal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 100,
    // height: 100,
  },
  modalStyles: {
    borderRadius: 5,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    elevation: 10,

  },
});
