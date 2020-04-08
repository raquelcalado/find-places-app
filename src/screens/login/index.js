import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import I18n from '~/config/i18n';
import { Creators as ProfileActions } from '~/redux/ducks/profile';
import welcomeBackImg from '~/assets/images/welcomeback.png';
import InputText from '~/components/Input';
import Button from '~/components/Button';
import {
  Container, ContainerInput, Img, Title, NoAccount, Register, SubtitleContainer,
} from './styles';
import { isEmptyField, isValidEmail } from '~/utils/helpers';

function Login({
  navigation, loginRequest, fetchUserRequest, user, error, clear,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [eyeIcon, setEyeIcon] = useState('eye-outline');
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      fetchUserRequest({ userID: user.id });
      navigation.navigate('Home');
    }
  }, [user]);

  function handleLogin() {
    setValidate(true);
    if (isValidEmail(email) && !isEmptyField(password)) {
      loginRequest({ email, password });
    }
  }

  useEffect(() => {
    if (error) {
      Alert.alert(I18n.t('error_message.attention'), error);
      setTimeout(clear, 100);
    }
  }, [error]);

  function handleEyeIcon() {
    if (eyeIcon === 'eye-off-outline') {
      setEyeIcon('eye-outline');
    } else {
      setEyeIcon('eye-off-outline');
    }
  }

  return (
    <Container>
      <Title>{I18n.t('login_screen.welcome_back')}</Title>
      <Img source={welcomeBackImg} resizeMode="stretch" />
      <ContainerInput>
        <InputText
          keyboardType="email-address"
          value={email}
          onChangeText={(e) => setEmail(e)}
          iconLeft="email-outline"
          hasError={validate && !isValidEmail(email)}
          errorMessage={I18n.t('error_message.invalid_email')}
          placeholder={I18n.t('login_placeholder')}/>

        <InputText
          secureTextEntry={hidePassword}
          onChangeText={(p) => setPassword(p)}
          value={password}
          iconLeft="lock-outline"
          iconLeftAction={() => (setHidePassword(!hidePassword), handleEyeIcon())}
          iconRight={eyeIcon}
          hasError={validate && isEmptyField(password)}
          errorMessage={I18n.t('error_message.no_empty')}
          placeholder="**********"/>
      </ContainerInput>
      <Button btnStyle="primary" content={I18n.t('login')} action={() => { handleLogin(); }} />
      <SubtitleContainer>
        <NoAccount>{I18n.t('login_screen.no_account')} </NoAccount>
        <Register onPress={() => navigation.navigate('Register')}>{I18n.t('login_screen.register')}</Register>
      </SubtitleContainer>
    </Container>
  );
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  fetchUserRequest: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    email: PropTypes.string,
    token: PropTypes.string,
    password: PropTypes.string,
  }),
  error: PropTypes.func,
  clear: PropTypes.func,
};

Login.defaultProps = {
  user: null,
  error: null,
  clear: null,
};

const mapStateToProps = (state) => ({
  user: state.profile.user,
  error: state.profile.error,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  ProfileActions,
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
