import { Header } from "antd/es/layout/layout";

import { Button, Drawer, Input } from "antd";

import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import {
  DashboardOutlined,
  FileOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Header
      style={{
        padding: 0,
        background: "#fff",
      }}
      className="d-flex justify-content-end align-items-center px-4"
    >
      <div className="input">
        <Input
          size="large"
          placeholder="large size"
          prefix={<SearchOutlined />}
        />
      </div>
      <Button
        onClick={showDrawer}
        className="d-flex align-items-center border-0 h4"
      >
        <MenuOutlined />
      </Button>
      <Drawer title="History" placement="right" onClose={onClose} open={open}>
        <div className="d-flex justify-content-between align-item-center mb-4">
          <div className="d-flex gap-4">
            <button
              className="overlay-trigger"
              style={{ width: 20, height: 20 }}
            >
              <DashboardOutlined />
            </button>
            <p className="m-0">Dashboard</p>
          </div>

          <p className="m-0">8 hours ago</p>
        </div>
        <div className="d-flex justify-content-between align-item-center">
          <div className="d-flex gap-4">
            <button
              className="overlay-trigger"
              style={{ width: 20, height: 20 }}
            >
              <FileOutlined />
            </button>
            <p className="m-0">Expenses</p>
          </div>

          <p className="m-0">1 Day ago</p>
        </div>
      </Drawer>
    </Header>
  );
};
export default Navbar;
