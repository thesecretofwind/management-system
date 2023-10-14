import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";


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

const MainMenu: React.FC = () => {
  const navigateTo = useNavigate();
  const [openKeys, setOpenKeys] = useState([] as string[]);

  const menuClick = (e: MenuItem) => {
    const url = e!.key as string;
    navigateTo(url);
  };

  const handleOpenChange = (openKeys: string[]) => {
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
        <Menu
          theme="dark"
          defaultSelectedKeys={["/page1"]}
          mode="inline"
          items={items}
          onClick={menuClick}
          onOpenChange={handleOpenChange}
          openKeys={openKeys}
        />);
};

export default MainMenu;
