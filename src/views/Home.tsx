import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "/page1", <PieChartOutlined />),
  getItem("Option 2", "/page2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

// const rootSubmenuKeys = ['sub1', 'sub2'];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate();
  const [openKeys, setOpenKeys] = useState([] as string[]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuClick = (e: MenuItem) => {
    console.log(e);
    const url = e!.key as string;
    navigateTo(url);
  };

  const handleOpenChange = (openKeys: string[]) => {
    console.log(openKeys);
    // 所有点开的二级菜单是否保存
    // const latestOpenkey = keys.find((key: string) => !openKeys.includes(key));
    // // 如果点开的二级菜单中没保存，且所有二级菜单中不存在中，则直接设置
    // if (latestOpenkey && !rootSubmenuKeys.includes(latestOpenkey)) {
    //   setOpenKeys(keys)
    // } else {
    //   // latestOpenkey存在表示切换了二级菜单，直接设置即可，如果找不到那就都不展开二级菜单
    //   setOpenKeys(latestOpenkey ? [latestOpenkey] : [])
    // }
    const lastesOpenKey = openKeys[openKeys.length - 1];
    setOpenKeys([lastesOpenKey]);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左边侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["/page1"]}
          mode="inline"
          items={items}
          onClick={menuClick}
          onOpenChange={handleOpenChange}
          openKeys={openKeys}
        />
      </Sider>
      {/* 右侧内容区 */}
      <Layout>
        <Header style={{ paddingLeft: "16px", background: colorBgContainer }}>
          <Breadcrumb
            style={{ lineHeight: "64px" }}
            items={[{ title: "User" }, { title: "Bill" }]}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
        </Header>
        {/* 内容展示部分 */}
        <Content
          style={{ margin: "16px 16px 0", height: "100%" }}
          className="demo-logo-vertical"
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
