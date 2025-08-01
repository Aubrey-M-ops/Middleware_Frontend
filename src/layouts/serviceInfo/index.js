/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import authorsTableData from "layouts/serviceInfo/data/authorsTableData";
import projectsTableData from "layouts/serviceInfo/data/projectsTableData";
import RecommendNodesTable from "layouts/serviceInfo/components/RecommendNodes";

import NodesGrid from "layouts/serviceInfo/components/NodesGrid";
import { ScheduleServiceForm } from "./components/RecommendNodes";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import Modal from "@mui/material/Modal";
import { useState } from "react";

function Tables() {
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  // const { columns, rows } = authorsTableData;
  // const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox p={3}>
              <SoftTypography variant="h4">Service Deployment</SoftTypography>
            </SoftBox>
            <SoftBox pl={3} pb={3}>
              <Button
                variant="contained"
                startIcon={<Icon>add</Icon>}
                onClick={() => setShowScheduleForm(true)}
                sx={{
                  backgroundColor: "#abe9f7",
                  color: "white",
                  textTransform: "none",
                  fontWeight: "bold",
                  px: 3,
                  py: 1,
                }}
              >
                Schedule a New Service
              </Button>
            </SoftBox>

            <NodesGrid />

            {/* Schedule Service Modal */}
            <Modal
              open={showScheduleForm}
              onClose={() => setShowScheduleForm(false)}
              aria-labelledby="schedule-service-modal"
              aria-describedby="schedule-service-form"
            >
              <SoftBox
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  // width: "50%",
                  // maxWidth: 600,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 24,
                  p: 0,
                  // maxHeight: "90vh",
                  overflow: "auto",
                }}
              >
                <ScheduleServiceForm />
                <SoftBox display="flex" justifyContent="flex-end" p={3} pt={0}>
                  <Button
                    variant="outlined"
                    onClick={() => setShowScheduleForm(false)}
                    sx={{ mr: 2 }}
                    style={{ color: "#666666" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    style={{ color: "white" }}
                    sx={{
                      backgroundColor: "#2196f3",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#1976d2",
                      },
                    }}
                  >
                    Schedule Service
                  </Button>
                </SoftBox>
              </SoftBox>
            </Modal>
          </Card>
        </SoftBox>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Projects table</SoftTypography>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <RecommendNodesTable />
            {/* <ScheduleServiceForm /> */}
          </SoftBox>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
