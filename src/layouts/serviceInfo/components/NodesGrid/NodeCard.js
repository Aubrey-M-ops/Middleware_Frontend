import SoftBox from "components/SoftBox";
import Card from "@mui/material/Card";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftProgress from "components/SoftProgress";
import ServiceCard from "./ServiceCard";

export default function NodeCard({ node }) {
  const color = node.role === "cloud" ? "info" : "secondary";
  return (
    <Card shadow="md" sx={{ p: 3, height: "100%" }}>
      {/* Header */}
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <SoftTypography variant="h5">{node.name}</SoftTypography>
        <SoftBadge variant="gradient" color={color} size="md" badgeContent={node.role} container/>
      </SoftBox>

      {/* Resource progress */}
      <SoftBox mb={2}>
        <SoftTypography variant="caption">CPU {node.cpuPct}%</SoftTypography>
        <SoftProgress color="info" value={node.cpuPct} />
        <SoftTypography variant="caption">Memory {node.memPct}%</SoftTypography>
        <SoftProgress color="warning" value={node.memPct} />
      </SoftBox>

      {/* Services grid */}
      <SoftBox display="grid" gap={2} gridTemplateColumns="repeat(auto-fill,minmax(180px,1fr))">
        {node.services.map((svc) => (
          <ServiceCard key={svc.serviceId} svc={svc} />
        ))}
      </SoftBox>
    </Card>
  );
}
