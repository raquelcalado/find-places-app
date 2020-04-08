import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, InputContainer, Error, Label, Input, IconInput, Space,
} from './styles';

function InputText({
  onChangeText,
  keyboardType,
  secureTextEntry,
  iconLeftAction,
  placeholder,
  iconRight,
  iconLeft,
  label,
  hasError,
  errorMessage,
  value,
}) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer hasError={hasError}>
          {iconLeft ? (<IconInput name={iconLeft} />) : <Space />}
          <Input value={value} secureTextEntry={secureTextEntry} keyboardType={keyboardType} autoCapitalize="none" onChangeText={onChangeText} placeholder={placeholder}/>
          {iconRight ? (<IconInput onPress={iconLeftAction} name={iconRight} />) : <Space />}
      </InputContainer>
      {hasError ? <Error>{errorMessage}</Error> : <Error />}
    </Container>
  );
}

InputText.propTypes = {
  iconLeftAction: PropTypes.func,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  iconRight: PropTypes.string,
  iconLeft: PropTypes.string,
  label: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
};

InputText.defaultProps = {
  placeholder: '',
  keyboardType: 'default',
  label: '',
  iconRight: null,
  iconLeft: null,
  secureTextEntry: false,
  iconLeftAction: null,
  hasError: false,
  errorMessage: '',
  value: '',
};

export default (InputText);
