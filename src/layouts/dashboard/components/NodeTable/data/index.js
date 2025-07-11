// @mui material components
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";
import SoftBadge from "components/SoftBadge";

// Date handling
import dayjs from "dayjs";

import { MOCK_ROWS } from "./mockdata";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  //  online/offline badge
  const renderStatus = (status = "offline") => {
    return (
      <SoftBadge
        variant="gradient"
        badgeContent={status}
        color={status === "online" ? "success" : "secondary"}
        size="xs"
        container
      />
    );
  };

  // Determine CPU usage color based on percentage
  const getCpuColor = (usage) => {
    if (usage === 0) return "error";
    if (usage < 50) return "success";
    if (usage < 80) return "info";
    return "error";
  };

  const rowItem = (item) => {
    const {
      node,
      role,
      cpuUsage,
      memoryAll,
      memoryUsed,
      memoryPercent,
      netTx,
      netRx,
      pods,
      lastSeen,
      status,
    } = item;

    return {
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
      "Net Tx (Mbit/s)": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {netTx}
        </SoftTypography>
      ),
      "Net Rx (Mbit/s)": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {netRx}
        </SoftTypography>
      ),
      Pods: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {pods}
        </SoftTypography>
      ),
      "Last Seen": (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {lastSeen ? dayjs(lastSeen).format("YYYY-MM-DD HH:mm:ss") : ""}
        </SoftTypography>
      ),
      Status: renderStatus(status),
    };
  };

  return {
    columns: [
      { name: "Node", align: "left" },
      { name: "Role", align: "center" },
      { name: "CPU Usage %", align: "center" },
      { name: "Memory (GiB)", align: "center" },
      { name: "Status", align: "center" },
      { name: "Net Tx (Mbit/s)", align: "center" },
      { name: "Pods", align: "center" },
      { name: "Last Seen", align: "center" },
    ],
    rows: MOCK_ROWS.map((_row) => rowItem(_row)),
  };
}
