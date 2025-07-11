import Card from "@mui/material/Card";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftBox from "components/SoftBox";

export default function ServiceCard({ svc }) {
  return (
    <Card variant="outlined" sx={{ p: 2 }}>
      <SoftBox>
        <SoftBadge
          variant="contained"
          // color={svc.status === "Running" ? "success" : "error"}
          size="sm"
          badgeContent="POD"
          container
          style={{ marginRight: "10px" }}
        />
        <SoftTypography variant="button" fontWeight="bold">
          {svc.pod}
        </SoftTypography>
      </SoftBox>

      <SoftBox
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        gap={1}
        mb={2}
        style={{ paddingLeft: "10px" }}
      >
        <SoftTypography variant="caption" color="text">
          <b>Service:</b> {svc.name}
        </SoftTypography>
        <SoftTypography variant="caption" color="text">
          <b>Image:</b> {svc.image.split(":")[0]}
        </SoftTypography>
        <SoftTypography variant="caption" color="text">
          <b>CPU:</b> {svc.cpu}
        </SoftTypography>
        <SoftTypography variant="caption" color="text">
          <b>Mem:</b> {svc.mem}
        </SoftTypography>
        <SoftBadge
          variant="contained"
          color={svc.status === "Running" ? "success" : "error"}
          size="xs"
          style={{ marginLeft: "-8px" }}
          badgeContent={svc.status}
        />
      </SoftBox>
    </Card>
  );
}
