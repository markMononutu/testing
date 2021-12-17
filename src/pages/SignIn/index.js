import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SignInLogo} from '../../assets';
import {Button, Gap, TextInput} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <LinearGradient style={styles.circle} colors={['#D42EE1', '#5701C9']}>
        <SignInLogo style={styles.logo} />
      </LinearGradient>
      <View style={styles.box}>
        <TextInput title="No.Telp" placeholder="Masukkan Nomor Telepon" />
        <Gap height={17} />
        <TextInput title="Password" placeholder="Masukkan Password" />
        <Gap height={13} />
        <Button title="Sign In" />
        <Gap height={13} />
        <View style={styles.bottomcontainer}>
          <Text style={styles.textleft}>New User?</Text>
          <Text style={styles.textright}>Create an Account</Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    marginHorizontal: 203,
    marginTop: 552,
  },
  box: {
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 39,
    marginTop: 78,
    paddingBottom: 20,
    paddingTop: 28,
    paddingHorizontal: 14.5,
    borderColor: 'black',
    elevation: 4,
  },
  circle: {
    width: 730,
    height: 730,
    marginTop: -433,
    marginLeft: -158,
    borderRadius: 730 / 2,
  },
  bottomcontainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textleft: {
    marginLeft: 25,
    fontSize: 17,
    textAlign: 'left',
  },
  textright: {
    fontSize: 17,
    textAlign: 'right',
    color: '#7E0FD1',
    paddingRight: 26,
  },
});
