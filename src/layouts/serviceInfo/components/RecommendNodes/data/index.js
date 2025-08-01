// @mui material components
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftProgress from "components/SoftProgress";
import SoftButton from "components/SoftButton";

import { MOCK_ROWS } from "./mockdata";

export default function data() {
  // Determine CPU usage color based on percentage
  const getCpuColor = (usage) => {
    if (usage === 0) return "error";
    if (usage < 50) return "success";
    if (usage < 80) return "info";
    return "error";
  };

  const rowItem = (item, index) => {
    const { node, role, cpuUsage, memoryAll, memoryUsed, memoryPercent, score } = item;

    return {
      Rank: (
        <SoftBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={0.5}
          sx={{
            borderRadius: "12px",
            padding: "8px 12px",
            border: `3px solid ${
              index === 0
                ? "warning.main"
                : index === 1
                ? "info.main"
                : index === 2
                ? "success.main"
                : "grey.400"
            }`,
            position: "relative",
            minWidth: "70px",
            backgroundColor: "transparent",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-3px",
              left: "-3px",
              right: "-3px",
              bottom: "-3px",
              background: `linear-gradient(45deg, ${
                index === 0
                  ? "#ff9800"
                  : index === 1
                  ? "#2196f3"
                  : index === 2
                  ? "#4caf50"
                  : "#9e9e9e"
              }, ${
                index === 0
                  ? "#ffb74d"
                  : index === 1
                  ? "#42a5f5"
                  : index === 2
                  ? "#66bb6a"
                  : "#bdbdbd"
              })`,
              borderRadius: "15px",
              zIndex: -1,
            },
          }}
        >
          <Icon
            color={
              index === 0 ? "warning" : index === 1 ? "info" : index === 2 ? "success" : "grey"
            }
            fontSize="small"
            sx={{ fontSize: "1.2rem" }}
          >
            {index === 0
              ? "emoji_events"
              : index === 1
              ? "military_tech"
              : index === 2
              ? "workspace_premium"
              : "looks"}
          </Icon>
          <SoftTypography
            variant="h6"
            color={
              index === 0 ? "warning" : index === 1 ? "info" : index === 2 ? "success" : "grey"
            }
            fontWeight="bold"
            textAlign="center"
          >
            {index + 1}
          </SoftTypography>
        </SoftBox>
      ),
      Node: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {node}
        </SoftTypography>
      ),
      Role: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.2rem",
            height: "40px",
            lineHeight: "40px",
          }}
        >
          <Icon color={role === "CLOUD" ? "info" : "warning"} fontSize="medium">
            {role === "CLOUD" ? "cloud" : "devices_other"}
          </Icon>
          <SoftTypography
            variant="caption"
            color={role === "CLOUD" ? "info" : "warning"}
            fontWeight="medium"
            textAlign="center"
            // fontSize="0.8rem"
          >
            {role}
          </SoftTypography>
        </div>
      ),
      Score: (
        <SoftBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={{
            backgroundColor:
              score >= 85 ? "success.light" : score >= 75 ? "info.light" : "warning.light",
            borderRadius: "8px",
            padding: "8px 12px",
            border: `2px solid ${
              score >= 85 ? "success.main" : score >= 75 ? "info.main" : "warning.main"
            }`,
            minWidth: "80px",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-2px",
              left: "-2px",
              right: "-2px",
              bottom: "-2px",
              background: `linear-gradient(45deg, ${
                score >= 85 ? "#4caf50" : score >= 75 ? "#2196f3" : "#ff9800"
              }, ${score >= 85 ? "#66bb6a" : score >= 75 ? "#42a5f5" : "#ffb74d"})`,
              borderRadius: "10px",
              zIndex: -1,
            },
          }}
        >
          <Icon color="white" fontSize="small">
            {score >= 85 ? "star" : score >= 75 ? "trending_up" : "warning"}
          </Icon>
          <SoftTypography variant="h6" color="white" fontWeight="bold" textAlign="center">
            {score}
          </SoftTypography>
        </SoftBox>
      ),
      "CPU Usage %": (
        <SoftBox width="8rem" textAlign="left">
          <SoftProgress
            value={cpuUsage}
            color={getCpuColor(cpuUsage)}
            variant="gradient"
            label={false}
          />
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            {cpuUsage}%
          </SoftTypography>
        </SoftBox>
      ),
      "Memory (GiB)": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {memoryUsed} / {memoryAll} ({memoryPercent}%)
        </SoftTypography>
      ),
      Actions: (
        <SoftBox display="flex" justifyContent="center">
          <SoftButton
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#e1bee7",
              color: "#4a148c",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: "#ce93d8",
                boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                transform: "translateY(-1px)",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            <Icon fontSize="small" sx={{ mr: 0.5 }}>
              rocket_launch
            </Icon>
            Deploy
          </SoftButton>
        </SoftBox>
      ),
    };
  };

  return {
    columns: [
      { name: "Rank", align: "center" },
      { name: "Node", align: "left" },
      { name: "Role", align: "center" },
      { name: "Score", align: "center" },
      { name: "CPU Usage %", align: "center" },
      { name: "Memory (GiB)", align: "center" },
      { name: "Actions", align: "center" },
    ],
    rows: MOCK_ROWS.sort((a, b) => b.score - a.score).map((_row, index) => rowItem(_row, index)),
  };
}
