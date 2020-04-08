import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import I18n from '~/config/i18n';
import { Creators as ProfileActions } from '~/redux/ducks/profile';
import registrationImg from '~/assets/images/registration.png';
import InputText from '~/components/Input';
import Button from '~/components/Button';
import { isEmptyField, isValidEmail } from '~/utils/helpers';
import {
  Container, ContainerInput, Img, Title,
} from './styles';

function Register({
  createAccountRequest,
  accountCreated,
  navigation,
  error,
  clear,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [eyeIcon, setEyeIcon] = useState('eye-outline');
  const [validate, setValidate] = useState(false);

  function handleEyeIcon() {
    if (eyeIcon === 'eye-off-outline') {
      setEyeIcon('eye-outline');
    } else {
      setEyeIcon('eye-off-outline');
    }
  }

  function handleRegister() {
    setValidate(true);
    if (isValidEmail(email) && !isEmptyField(password)) {
      createAccountRequest({ email, password });
      if (accountCreated) navigation.navigate('Login');
    }
  }

  useEffect(() => {
    if (error) {
      Alert.alert(I18n.t('error_message.attention'), error);
      setTimeout(clear, 100);
    }
  }, [error]);

  return (
    <Container>
      <Img source={registrationImg} resizeMode="stretch" />
      <Title>{I18n.t('register_screen.form')}</Title>
      <ContainerInput>
      <InputText
          keyboardType="email-address"
          onChangeText={(e) => setEmail(e)}
          label={I18n.t('register_screen.email')}
          iconLeft="email-outline"
          value={email}
          hasError={validate && !isValidEmail(email)}
          errorMessage={I18n.t('error_message.invalid_email')}
          placeholder={I18n.t('login_placeholder')}/>

        <InputText
          secureTextEntry={hidePassword}
          onChangeText={(p) => setPassword(p)}
          label={I18n.t('register_screen.password')}
          value={password}
          iconLeft="lock-outline"
          iconLeftAction={() => (setHidePassword(!hidePassword), handleEyeIcon())}
          iconRight={eyeIcon}
          hasError={validate && isEmptyField(password)}
          errorMessage={I18n.t('error_message.no_empty')}
          placeholder="**********"/>
      </ContainerInput>
      <Button btnStyle="primary" content={I18n.t('register_screen.register')} action={() => { handleRegister(); }} />
    </Container>
  );
}

Register.propTypes = {
  createAccountRequest: PropTypes.func.isRequired,
  accountCreated: PropTypes.bool,
  error: PropTypes.string,
  clear: PropTypes.func,
};

Register.defaultProps = {
  accountCreated: null,
  error: null,
  clear: null,
};

const mapStateToProps = (state) => ({
  accountCreated: state.profile.accountCreated,
  error: state.profile.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  ProfileActions,
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
