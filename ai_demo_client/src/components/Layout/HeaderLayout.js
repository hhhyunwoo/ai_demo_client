import React from 'react';

import './HeaderLayout.css'

import {Layout, Menu} from 'antd';
const { Header } = Layout;


const HeaderLayout = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="synthesis">Synthesis</Menu.Item>
        <Menu.Item key="Recognition">Recognition</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderLayout;
