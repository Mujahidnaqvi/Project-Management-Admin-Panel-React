import { Card, Col, Divider, Row, Tabs } from "antd";
import React from "react";

import { Line } from "react-chartjs-2";

const gridStyle = {
  width: "100%",
  textAlign: "center",
  cursor: "pointer",
};

const Overview = () => {
  const data = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };
  const onChange = (key) => {
    console.log(key);
  };
  const InvoicesItems = [
    {
      key: "1",
      label: `Active`,
      children: <Line data={data} options={options} />,
    },
    {
      key: "2",
      label: `Outstanding`,
      children: <Line data={data} options={options} />,
    },
  ];
  const PaymentsItems = [
    {
      key: "1",
      label: `Completed`,
      children: <Line data={data} options={options} />,
    },
    {
      key: "2",
      label: `Refunded`,
      children: <Line data={data} options={options} />,
    },
  ];
  return (
    <>
      <div className="row ">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12 mb-4">
              <Card.Grid style={gridStyle}>
                <div
                  className="d-flex"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    padding: "0 1.6rem",
                    letterSpacing: "1px",
                  }}
                >
                  Completed Payments
                </div>
                <div style={{ fontSize: "2rem" }}>$25000</div>
                <div className="text-muted">Current Period</div>
              </Card.Grid>
            </div>
            <div className="col-md-12">
              <Card.Grid style={gridStyle}>
                <div
                  className="d-flex"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    padding: "0 1.6rem",
                    letterSpacing: "1px",
                  }}
                >
                  Active Invoices
                </div>
                <div style={{ fontSize: "2rem" }}>$25000</div>
                <div className="text-muted">Current Period</div>
              </Card.Grid>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <Line data={data} options={options} />
        </div>
      </div>

      <Divider />

      <Row className="mt-4 mb-4" gutter={10}>
        <Col md={12} className="mb-3">
          <Card
            style={{
              width: "100%",
            }}
            title="Invoices"
          >
            <Tabs
              defaultActiveKey="1"
              items={InvoicesItems}
              onChange={onChange}
            />{" "}
          </Card>
        </Col>
        <Col md={12} className="mb-3">
          <Card
            style={{
              width: "100%",
            }}
            title="Payments"
          >
            <Tabs
              defaultActiveKey="1"
              items={PaymentsItems}
              onChange={onChange}
            />
          </Card>
        </Col>
        <Col md={12}>
          <Card
            style={{
              width: "100%",
            }}
            title="Quotes"
          >
            <Line data={data} options={options} />
          </Card>
        </Col>
        <Col md={12}>
          <Card
            style={{
              width: "100%",
            }}
            title="Tasks"
          >
            <Line data={data} options={options} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <Card
            style={{
              width: "100%",
            }}
            title="Expenses"
          >
            <Line data={data} options={options} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Overview;
