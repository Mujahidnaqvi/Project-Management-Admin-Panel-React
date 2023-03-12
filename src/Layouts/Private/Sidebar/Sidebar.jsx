import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import React, { useState } from "react";
import { ProtectedRoutes } from "../../../Routes/routes";
import { useNavigate } from "react-router-dom";

import { Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">Profile</Menu.Item>
    <Menu.Item key="2">Add Company</Menu.Item>
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

const UserDropdown = () => {
  return (
    <Dropdown overlay={menu} className="text-white py-3">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Avatar icon={<UserOutlined />} />
        <span style={{ marginLeft: 8, paddingTop: 8 }}>John Doe</span>
      </div>
    </Dropdown>
  );
};

const Sidebar = ({ collapsed, setCollapsed, setBreakpoint }) => {
  const navigate = useNavigate();
  //   const navigation = useNavigation();

  console.log({ navigate });
  const items = ProtectedRoutes.map((route, index) => {
    const key = String(index + 1);

    return {
      key: key,
      icon: "",
      label: route.name,
      path: route.path,
      onClick: () => navigate(route.path),
    };
  });
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <UserDropdown />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      ></Menu>
    </Sider>
  );
};

export default Sidebar;
