import React, { Fragment, Suspense, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LazyLoading from "../../Components/SplashScreen/LazyLoading";
import { AppRoutes } from "../../Routes/AppRoutes";
import { ProtectedRoutes } from "../../Routes/routes";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";
import { Col, Container, Row } from "react-bootstrap";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const PrivateLayout = () => {
  const [pageName, setPageName] = useState("");
  const [page, setPage] = useState(null);
  const getComponentName = (pname, page) => {
    setPageName(pname);
    setPage(page);
  };
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Fragment>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout className="site-layout">
          <Navbar />

          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Suspense fallback={<LazyLoading />}>
              <Routes>
                {ProtectedRoutes &&
                  ProtectedRoutes.length > 0 &&
                  ProtectedRoutes.map((route, k) => {
                    return (
                      <Route
                        key={k}
                        path={route.path}
                        element={<route.component />}
                      />
                    );
                  })}
                <Route
                  path="*"
                  element={<Navigate to={AppRoutes.Dashboard} replace />}
                />
              </Routes>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Fragment>
  );
};
export default PrivateLayout;
