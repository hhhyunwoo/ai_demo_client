import React from 'react';

import './FooterLayout.css'
import 'antd/dist/antd.css';

import { Layout } from 'antd';

const { Footer } = Layout;

const FooterLayout = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  );
};

export default FooterLayout;
