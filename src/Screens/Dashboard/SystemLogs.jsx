import { Collapse } from "antd";

const { Panel } = Collapse;
const SystemLogs = () => {
  return (
    <>
      <Collapse size="large" expandIconPosition="end">
        <Panel header="Email > Web Hook Response " key="1">
          <p>Email Bounced. Marco</p>
          <p>12/Aug/2021</p>
        </Panel>
      </Collapse>
    </>
  );
};

export default SystemLogs;
