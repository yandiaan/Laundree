import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {ImageHeader, Logo} from '../../assets';
import {Saldo, PesananAktif} from '../../components/';
import ButtonIcon from '../../components/ButtonIcon';
import {WARNA_ABU_ABU, WARNA_TITLE} from '../../utils/constant';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <View style={styles.hello}>
            <Image source={Logo} style={styles.logo} />
            <View style={styles.greet}>
              <Text style={styles.username}>Hai Fareza.....</Text>
              <Text style={styles.selamat}>Selamat Datang di Laundree</Text>
            </View>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Kiloan" type="layanan" />
            <ButtonIcon title="Satuan" type="layanan" />
            <ButtonIcon title="VIP" type="layanan" />
            <ButtonIcon title="Karpet" type="layanan" />
            <ButtonIcon title="Selimut" type="layanan" />
            <ButtonIcon title="Ekspress" type="layanan" />
            <ButtonIcon title="Kilat" type="layanan" />
            <ButtonIcon title="Sepatu" type="layanan" />
            <ButtonIcon title="Setrika" type="layanan" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    height: 90,
    width: 90,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  hello: {
    marginTop: windowHeight * 0.03,
    flex: 1,
    flexDirection: 'row',
  },
  greet: {
    marginStart: 24,
    marginTop: 24,
  },
  selamat: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    color: WARNA_TITLE,
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    color: WARNA_TITLE,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
});
