import React, { Component } from "react";
import HeaderLayout from "./components/Layout/HeaderLayout";
import FooterLayout from "./components/Layout/FooterLayout";
import { Layout, Menu, Breadcrumb } from "antd";
import Synthesis from "./containers/Synthesis";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderLayout />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Synthesis></Synthesis>
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </div>
  );
}

export default App;
