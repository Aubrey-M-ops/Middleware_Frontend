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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import DefaultCounterCard from "examples/Cards/CounterCards/OutlinedCounterCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import MixedChart from "examples/Charts/MixedChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import NodeTable from "layouts/dashboard/components/NodeTable";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <SoftTypography variant="h2" color="info" textGradient>
            <Icon style={{ lineHeight: "48px", marginRight: "10px" }}>monitor_heart</Icon>
          </SoftTypography>
          <SoftTypography variant="h3" color="info" textGradient>
            ConstellaNet
          </SoftTypography>
        </SoftBox>
        {/* Top line (4 cards) */}
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                bgColor="white"
                direction="right"
                title={{ text: "Online Nodes" }}
                count="10"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "cloud" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                bgColor="white"
                direction="right"
                title={{ text: "Average CPU Usage" }}
                count="75.65%"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "local_gas_station" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                bgColor="white"
                direction="right"
                title={{ text: "Service Deployed" }}
                count="127"
                percentage={{ color: "error", text: "-32" }}
                icon={{ color: "info", component: "devices" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <DefaultCounterCard count={417} suffix="Mbit/s" title="Total Net Tx" />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <NodeTable />
            </Grid>
            {/* <Grid item xs={12} md={6} lg={2}>
            <OrderOverview />
          </Grid> */}
          </Grid>
        </SoftBox>

        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              {/* TODO: Doughnut chart */}
              {/* <ReportsBarChart
                title="active users"
                description={
                  <>
                    (<strong>+23%</strong>) than last week
                  </>
                }
                chart={chart}
                items={items}
              /> */}
            </Grid>
            <Grid item xs={12} lg={7}>
              {/* <GradientLineChart
                title="Sales Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              /> */}
              <MixedChart
                title="Network Traffic"
                // height="20.25rem"
                chart={{
                  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      chartType: "thin-bar",
                      label: "Organic Search",
                      color: "dark",
                      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                    },
                    {
                      chartType: "gradient-line",
                      label: "Referral",
                      color: "info",
                      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
                    },
                  ],
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
