import { Alert } from 'react-native';
import I18n from '~/config/i18n';

export const responseMiddleware = (response) => Promise.resolve(response.data || response);

const handleErrorMsg = (bodyText) => {
  try {
    return JSON.parse(bodyText);
  } catch (e) {
    return bodyText;
  }
};

const getErrorInfo = (response) => {
  if (response && response.data) return response.data;
  if (response) return response;
  return { message: I18n.t('error_message.request_error') };
};

export const errorMiddleware = ({ response, message }) => {
  const errorMsg = handleErrorMsg(getErrorInfo(response));

  if (errorMsg.lock) {
    Alert.alert(
      I18n.t('error_message.attention'),
      message,
      [{ text: 'OK' }],
      { cancelable: false },
    );
  }

  return Promise.reject(message);
};
