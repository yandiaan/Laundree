import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {WARNA_TERSIER} from '../../utils/constant';
import {IconTambahSaldo} from '../../assets';
import {IconTambahPoint} from '../../assets';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasiSaldo}>
        <View style={styles.text}>
          <Text style={styles.label}>Saldo :</Text>
          <Text style={styles.value}>
            Rp. 100.000 <IconTambahSaldo />
          </Text>
        </View>
      </View>
      <View style={{borderWidth: 0.5, borderColor: 'black', margin: 10}} />
      <View style={styles.informasiPoint}>
        <View style={styles.text}>
          <Text style={styles.label}>Point :</Text>
          <Text style={styles.value}>
            1.000 Pts <IconTambahPoint />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: WARNA_TERSIER,
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -windowHeight * 0.07,
    justifyContent: 'space-between',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  informasiSaldo: {
    width: '45%',
  },
  informasiPoint: {
    width: '45%',
  },
  label: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
    flexDirection: 'row',
  },
  value: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  buttonAksi: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
