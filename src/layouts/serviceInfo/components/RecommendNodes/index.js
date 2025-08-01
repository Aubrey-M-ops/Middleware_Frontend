import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Ant Design components
import {
  Form,
  Input,
  Select,
  Slider,
  Radio,
  Divider,
  Button,
  Typography,
  Space,
  Card as AntCard,
  Popover,
  Spin,
} from "antd";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "./data";
import boxShadow from "assets/theme/functions/boxShadow";

const { Title, Text } = Typography;
const { Option } = Select;

function RecommendNodesTable() {
  const { columns, rows } = data();

  return (
    <SoftBox
      style={{ padding: "10px", boxShadow: 0 }}
      sx={{
        "& .MuiTableRow-root:not(:last-child)": {
          "& td": {
            borderBottom: ({ borders: { borderWidth, borderColor } }) =>
              `${borderWidth[1]} solid ${borderColor}`,
          },
        },
      }}
    >
      <Table style={{ boxShadow: 0 }} columns={columns} rows={rows} />
    </SoftBox>
  );
}

function ScheduleServiceForm() {
  const [form] = Form.useForm();
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    serviceName: "Frontend",
    version: "1.0.0",
    serviceType: "Web App",
    nodeType: "Cloud",
    memory: 4,
    cpu: 500,
    gpu: 2,
    networkBandwidth: 100,
  });

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  const handleShowPanel = () => {
    if (!showRightPanel) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowRightPanel(true);
      }, 500);
    } else {
      setShowRightPanel(false);
    }
  };

  return (
    <AntCard
      style={{
        padding: 24,
        border: 0,
        width: showRightPanel ? "1450px" : "700px",
        transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        maxWidth: "90vw",
        overflow: "hidden",
        // boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        borderRadius: "12px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <Title level={3}>Schedule Service</Title>
      </div>
      <div style={{ display: "flex", position: "relative" }}>
        <div
          className="left-panel"
          style={{
            width: "600px",
            paddingRight: "40px",
            transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            flexShrink: 0,
          }}
        >
          <Form
            form={form}
            layout="vertical"
            initialValues={formData}
            onValuesChange={handleFormChange}
            onFinish={onFinish}
          >
            {/* Basic Info Section */}
            <div style={{ marginBottom: 12 }}>
              <Title level={4}>Basic Info</Title>

              <Space style={{ width: "100%", justifyContent: "space-between" }}>
                <Form.Item
                  name="serviceName"
                  label="Service Name"
                  style={{ flex: 1, marginRight: 16 }}
                >
                  <Input />
                </Form.Item>

                <Form.Item name="version" label="Version" style={{ flex: 1, marginRight: 16 }}>
                  <Input />
                </Form.Item>

                <Form.Item name="serviceType" label="Service Type" style={{ flex: 1 }}>
                  <Select>
                    <Option value="Web App">Web App</Option>
                    <Option value="API">API</Option>
                    <Option value="Database">Database</Option>
                  </Select>
                </Form.Item>
              </Space>
            </div>

            <Divider style={{ margin: "4px 0 24px 0" }} />

            {/* Resource Requirements Section */}
            <div style={{ marginBottom: 32 }}>
              <Title level={4}>Resource Requirements</Title>

              {/* Node Type */}
              <div style={{ marginBottom: 24 }}>
                <Text strong>Node Type</Text>
                <Form.Item name="nodeType" style={{ marginTop: 8 }}>
                  <Radio.Group>
                    <Radio value="Cloud">Cloud Node</Radio>
                    <Radio value="Edge">Edge Node</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>

              {/* Memory */}
              <div style={{ marginBottom: 24 }}>
                <Text strong>Memory</Text>
                <Form.Item name="memory" style={{ marginTop: 8 }}>
                  <Slider
                    min={1}
                    max={32}
                    marks={{
                      1: "1GB",
                      8: "8GB",
                      16: "16GB",
                      32: "32GB",
                    }}
                    tooltip={{
                      formatter: (value) => `${value}GB`,
                    }}
                  />
                </Form.Item>
              </div>

              {/* CPU */}
              <div style={{ marginBottom: 24 }}>
                <Text strong>CPU</Text>
                <Form.Item name="cpu" style={{ marginTop: 8 }}>
                  <Slider
                    min={100}
                    max={2000}
                    step={100}
                    marks={{
                      100: "100m",
                      500: "500m",
                      1000: "1000m",
                      2000: "2000m",
                    }}
                    tooltip={{
                      formatter: (value) => `${value}m`,
                    }}
                  />
                </Form.Item>
              </div>

              {/* Network Bandwidth */}
              <div style={{ marginBottom: 24 }}>
                <Text strong>Network Bandwidth</Text>
                <Form.Item name="networkBandwidth" style={{ marginTop: 8 }}>
                  <Slider
                    min={100}
                    max={1000}
                    step={10}
                    marks={{
                      //   10: "10Mbps",
                      100: "100Mbps",
                      500: "500Mbps",
                      1000: "1000Mbps",
                    }}
                    tooltip={{
                      formatter: (value) => `${value}Mbps`,
                    }}
                  />
                </Form.Item>
              </div>
            </div>

            {/* Action Buttons */}

            <div style={{ textAlign: "right" }}>
                <Button
                //   type="primary"
                  htmlType="submit"
                  loading={isLoading}
                  onClick={handleShowPanel}
                  size="small"
                  variant="dashed"
                  style={{
                    transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    transform: showRightPanel ? "scale(1)" : "scale(0.95)",
                    // background: showRightPanel ? "#52c41a" : "#1890ff",
                    borderColor: showRightPanel ? "#1890ff" : "#52c41a",
                    boxShadow: showRightPanel
                      ? "0 4px 12px rgba(82, 196, 26, 0.3)"
                      : "0 4px 12px rgba(24, 144, 255, 0.3)",
                    fontWeight: "bold",
                    // padding: "8px 24px",
                    // height: "40px",
                    borderRadius: "8px",
                  }}
                >
                  {isLoading ? "Loading..." : showRightPanel ? "Hide Panel ◀◀" : "Show Recommended Nodes ▶▶"}
                </Button>
            </div>
          </Form>
        </div>
        <div
          className="right-panel"
          style={{
            width: showRightPanel ? "800px" : "0",
            height: "100%",
            borderLeft: "1px solid #e8e8e8",
            transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {showRightPanel && (
            <div
              style={{
                height: "100%",
                padding: "20px",
                overflow: "auto",
              }}
            >
              <AntCard
                style={{
                  marginBottom: "20px",
                  borderRadius: "12px",
                  //   boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  border: "1px solid #f0f0f0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "8px 0",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>🪐</span>
                  <Title
                    level={5}
                    style={{
                      margin: 0,
                      color: "#666666",
                      fontWeight: "bold",
                    }}
                  >
                    Recommend Nodes
                  </Title>
                </div>
              </AntCard>
              <RecommendNodesTable />
            </div>
          )}
        </div>
      </div>
    </AntCard>
  );
}

export default RecommendNodesTable;
export { ScheduleServiceForm, RecommendNodesTable };
