import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';

import MainMenu from '@/components/MainMenu';

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <MainMenu />
      </Sider>
      {/* 右侧内容区 */}
      <Layout>
        <Header style={{ paddingLeft: '16px', background: colorBgContainer }}>
          <Breadcrumb
            style={{ lineHeight: '64px' }}
            items={[{ title: 'User' }, { title: 'Bill' }]}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
        </Header>
        {/* 内容展示部分 */}
        <Content
          style={{ margin: '16px 16px 0', height: '100%' }}
          className="demo-logo-vertical"
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
