import React from 'react';

import './FooterLayout.css'

import { Layout } from 'antd';

const { Footer } = Layout;

const FooterLayout = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      2020 &copy;
    </Footer>
  );
};

export default FooterLayout;
