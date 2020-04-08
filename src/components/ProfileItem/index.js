import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, ContainerItems, Title, Label,
} from './styles';
import InputText from '../Input';

function ProfileItem({
  isEditing,
  onChangeText,
  value,
  label,
  hasError,
  errorMessage,
  iconLeft,
}) {
  return (
    <Container>
      {isEditing
        ? (
          <InputText
            hasError={hasError}
            errorMessage={errorMessage}
            onChangeText={onChangeText}
            iconLeft={iconLeft}
            label={label}
            value={value}
          />
        )
        : (
          <ContainerItems>
            <Label>{label}</Label>
            <Title>{value || '---'}</Title>
          </ContainerItems>
        )}

    </Container>
  );
}

ProfileItem.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isEditing: PropTypes.bool.isRequired,
  hasError: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  iconLeft: PropTypes.string,
};

ProfileItem.defaultProps = {
  value: '',
  label: '',
  errorMessage: '',
  hasError: false,
  iconLeft: '',
};

export default (ProfileItem);
