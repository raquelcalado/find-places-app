import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import I18n from '~/config/i18n';
import globalColors from './Colors';
import {
  Splash,
  Welcome,
  Login,
  Register,
  Home,
  Map,
  List,
  Profile,
} from '~/screens';

const navigatorOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: globalColors.backgroundColorApp,
    elevation: 0,
  },
};

const Navigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: { headerShown: false },
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: { headerShown: false },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      ...navigatorOptions,
      title: I18n.t('login'),
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      ...navigatorOptions,
      title: I18n.t('register_screen.register'),
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      ...navigatorOptions,
      title: I18n.t('home_screen.home'),
    },
  },
  Map: {
    screen: Map,
    navigationOptions: {
      ...navigatorOptions,
      title: I18n.t('bottomNavigation.maps'),
    },
  },
  List: {
    screen: List,
    navigationOptions: {
      ...navigatorOptions,
      title: I18n.t('bottomNavigation.list'),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      ...navigatorOptions,
      title: I18n.t('bottomNavigation.profile'),
    },
  },
}, {
  headerMode: 'screen',
  mode: 'modal',
  headerStyle: {
    backgroundColor: 'red',
  },
});

export default createAppContainer(Navigator);
