/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import PropTypes from 'prop-types';
import I18n from '~/config/i18n';
import {
  Container, NavContainer, Title, CenteredColumn, MenuIcon,
} from './styles';

function BottomMenu({ menuActive, navigation }) {
  const tabs = [{
    key: 'Home',
    icon: 'home',
    label: I18n.t('bottomNavigation.home'),
    barColor: 'white',
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
  {
    key: 'Map',
    icon: 'google-maps',
    label: I18n.t('bottomNavigation.maps'),
    barColor: 'white',
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
  {
    key: 'List',
    icon: 'format-list-bulleted',
    label: I18n.t('bottomNavigation.list'),
    barColor: 'white',
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
  {
    key: 'Profile',
    icon: 'account',
    label: I18n.t('bottomNavigation.profile'),
    barColor: 'white',
    pressColor: 'rgba(255, 255, 255, 0.16)',
  }];

  const [activeTab, setActiveTab] = useState(menuActive);

  const renderIcon = (icon, label, key) => ({ isActive }) => (
    <Container>
      <TouchableWithoutFeedback onPress={() => navigation.navigate(key)}>
        <CenteredColumn>
          <MenuIcon isActive={isActive} name={icon} />
          <Title isActive={isActive}>{label}</Title>
        </CenteredColumn>
      </TouchableWithoutFeedback>
    </Container>
  );

  function renderTab({ tab, isActive }) {
    return (
      <FullTab
        isActive={isActive}
        key={tab.key}
        label={tab.label}
        renderIcon={renderIcon(tab.icon, tab.label, tab.key)}
      />
    );
  }
  return (
    <NavContainer>
      <BottomNavigation
        activeTab={activeTab}
        onTabPress={(newTab) => setActiveTab(newTab.key)}
        renderTab={renderTab}
        tabs={tabs}
      />
    </NavContainer>
  );
}

BottomMenu.propTypes = {
  menuActive: PropTypes.string.isRequired,
};
export default (BottomMenu);
