import { Card, Col } from "antd";
import { useState } from "react";
import SystemLogs from "./SystemLogs";
import Activity from "./Activity";
import Overview from "./Overview";
import { Row } from "react-bootstrap";

const tabList = [
  {
    key: "overview",
    tab: "Overview",
  },
  {
    key: "activity",
    tab: "Avtivity",
  },
  {
    key: "systemLogs",
    tab: "System Logs",
  },
];

const contentList = {
  overview: <Overview />,
  activity: <Activity />,
  systemLogs: <SystemLogs />,
};

const Dashboard = () => {
  const [activeTabKey, setActiveTabKey] = useState("overview");
  const onTab1Change = (key) => {
    setActiveTabKey(key);
  };

  return (
    <div className="dashboard mt-4">
      <Card
        style={{
          width: "100%",
        }}
        title="Dashboard"
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey]}
      </Card>
    </div>
  );
};
export default Dashboard;
