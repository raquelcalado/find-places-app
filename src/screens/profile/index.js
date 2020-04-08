import React, { useState, useEffect } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBottom from '~/components/NavBottom';
import I18n from '~/config/i18n';
import { Creators as ProfileActions } from '~/redux/ducks/profile';
import Button from '~/components/Button';
import ProfileItem from '~/components/ProfileItem';
import { isEmptyField, isValidEmail } from '~/utils/helpers';
import { imageNotFound } from '~/config/Constants';
import {
  Container,
  Avatar,
  EditIcon,
  ContainerIcon,
  IconTitle,
  ProfileFieldsContainer,
  BorderedView,
} from './styles';

function Profile({
  updateProfileRequest,
  navigation,
  logout,
  error,
  clear,
  user,
}) {
  function handleLogout() {
    logout();
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Welcome' })],
      }),
    );
  }

  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.first_name || user.name);
  const [job, setJob] = useState(user.job || '');
  const [validate, setValidate] = useState(false);

  function handleUpdate() {
    setValidate(true);
    if (isValidEmail(email) && !isEmptyField(name) && !isEmptyField(job)) {
      updateProfileRequest({ name, job, email });
      setIsEditing(false);
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
      <BorderedView>
        <Avatar source={{ uri: (user.avatar || imageNotFound) }} />
      </BorderedView>
      {!isEditing ? (
        <ContainerIcon onPress={() => (setIsEditing(true))}>
          <>
            <EditIcon name="account-edit" />
            <IconTitle>{I18n.t('profile_screen.edit')}</IconTitle>
          </>
        </ContainerIcon>
      ) : <></>}

      <ProfileFieldsContainer>
        <ProfileItem
          isEditing={isEditing}
          value={email}
          label={I18n.t('profile_screen.email')}
          iconLeft="email-outline"
          onChangeText={(e) => (setEmail(e))}
          hasError={validate && !isValidEmail(email)}
          errorMessage={I18n.t('error_message.invalid_email')}
        />
        <ProfileItem
          isEditing={isEditing}
          value={name}
          label={I18n.t('profile_screen.first_name')}
          iconLeft="account-outline"
          onChangeText={(e) => (setName(e))}
          hasError={validate && isEmptyField(name)}
          errorMessage={I18n.t('error_message.no_empty')}
        />
        <ProfileItem
          isEditing={isEditing}
          value={job}
          label={I18n.t('profile_screen.job')}
          iconLeft="briefcase-outline"
          onChangeText={(e) => (setJob(e))}
          hasError={validate && isEmptyField(job)}
          errorMessage={I18n.t('error_message.no_empty')}
        />
      </ProfileFieldsContainer>
      {isEditing
        ? <Button
            btnStyle="secundary"
            content={I18n.t('profile_screen.save')}
            action={() => { handleUpdate(); }}
          />
        : <Button
            btnStyle="primary"
            content={I18n.t('profile_screen.logout')}
            action={() => { handleLogout(); }}
          />
      }

      <NavBottom navigation={navigation} menuActive="Profile" />
    </Container>
  );
}

Profile.propTypes = {
  updateProfileRequest: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  error: PropTypes.string,
  clear: PropTypes.func,
};

Profile.defaultProps = {
  error: null,
  clear: null,
};

const mapStateToProps = (state) => ({
  user: state.profile.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...ProfileActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
