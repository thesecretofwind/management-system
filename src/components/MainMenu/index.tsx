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
import { useLocation, useNavigate } from "react-router-dom";


type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem("Option 1", "/page1", <PieChartOutlined />),
//   getItem("Option 2", "/page2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];

// 转换为嵌套树的形式，更直观，以方便后端返回数据后渲染侧边栏menu
const items = [ 
  {
    label:'栏目1',
    key: '/page1',
    icon:<PieChartOutlined />,
  },
  {
    label:'栏目2',
    key: '/page2',
    icon:<DesktopOutlined />
  },
  {
    label:'栏目3',
    key: 'page3', // 注意：有子menu的key值好像不用加上斜杠/
    icon: <UserOutlined />,
    children: [
      {
        label:'栏目301',
        key: '/page3/page301',
      },
      {
        label:'栏目302',
        key: '/page3/page302',
      },      
      {
        label:'栏目303',
        key: '/page3/page3011',
      },
      {
        label:'栏目304',
        key: '/page3/page304',
      },
    ]
  },
  {
    label:'栏目4',
    key: 'page4',
    icon: <TeamOutlined />,
    children: [
      {
        label:'栏目401',
        key: '/page4/page401',
      },
      {
        label:'栏目402',
        key: '/page4/page402',
      }
    ]
  },
  {
    label:'栏目5',
    key: '/page5',
    icon: <FileOutlined />
  },
]

// const rootSubmenuKeys = ['sub1', 'sub2'];

const MainMenu: React.FC = () => {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();

  const menuClick = (e: MenuItem) => {
    const url = e!.key as string;
    navigateTo(url);
    // 点击没有二级菜单的menu直接将展开的二级菜单直接收齐
    const hasChildren = items.some(item => item.key === url);
    console.log(hasChildren);
    if (hasChildren && openKeys.length !== 0) {
      setOpenKeys([])
    }
  };
  // 如果是二级菜单路由，就要展开，此时就要将currentRoute.pathname与所有二级菜单的key值作比较，如果存在则设置父级的key为openKeys
  let firstOpenKeys = '';
  for (const item of items) {
    if (!item.children) {
      continue;
    }
    const children =  item.children;
    const targetChild = children.find(child => child.key === currentRoute.pathname);
    if (targetChild) {
      firstOpenKeys = item.key;
      break;
    }
  }

  const [openKeys, setOpenKeys] = useState([firstOpenKeys]);

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
        <Menu
          theme="dark"
          // 当前选中项，对应Item的key值
          defaultSelectedKeys={[currentRoute.pathname]}
          mode="inline"
          items={items}
          onClick={menuClick}
          onOpenChange={handleOpenChange}
          openKeys={openKeys}
        />);
};

export default MainMenu;
