import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content,
} from './styles';

function Button({
  content,
  action,
  btnStyle,
}) {
  return (
      <Container onPress={action} style={btnStyle}>
          <Content style={btnStyle}>{content}</Content>
      </Container>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  btnStyle: PropTypes.string,
};

Button.defaultProps = {
  btnStyle: 'primary',
};

export default (Button);
