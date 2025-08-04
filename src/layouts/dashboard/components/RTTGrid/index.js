import { ResponsiveHeatMap } from "@nivo/heatmap";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import { Table as AntdTable } from "antd";
import { mockData } from "./RTTMockData";
import { useState, useMemo } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import "antd/dist/reset.css";

/**
 * Transform ns matrix → Nivo data (ms) & table rows.
 */
function useRttTransforms(source) {
  return useMemo(() => {
    const { nodes, matrix } = source;
    // heatmap
    const heatmap = Object.entries(matrix).map(([from, cols]) => ({
      id: from,
      data: Object.entries(cols).map(([to, ns]) => ({
        x: to,
        y: +(ns / 1e6).toFixed(2),
      })),
    }));

    // flat rows for table (current + avg mock)
    const tableRows = [];
    Object.entries(matrix).forEach(([from, cols]) => {
      Object.entries(cols).forEach(([to, ns]) => {
        tableRows.push({
          from,
          to,
          current: +(ns / 1e6).toFixed(2),
          avg: +(ns / 1e6 + Math.random()).toFixed(2), // mock avg
          lastSpike: `${Math.floor(Math.random() * 59) + 1} min ago`,
        });
      });
    });

    return { heatmap, nodes, tableRows };
  }, [source]);
}

export default function AgentRttDashboard() {
  const { heatmap, nodes, tableRows } = useRttTransforms(mockData);
  const [selectedPair, setSelectedPair] = useState(null);

  const columns = [
    { title: "From", dataIndex: "from", key: "from" },
    { title: "To", dataIndex: "to", key: "to" },
    { title: "Current RTT (ms)", dataIndex: "current", key: "current" },
    { title: "Avg RTT (ms)", dataIndex: "avg", key: "avg" },
    { title: "Last spike", dataIndex: "lastSpike", key: "lastSpike" },
  ];

  const rowKey = (row) => `${row.from}-${row.to}`;

  const selectedRowKeys = selectedPair ? [`${selectedPair.from}-${selectedPair.to}`] : [];

  return (
    <Grid container spacing={3}>
      {/* Header */}
      <Grid item xs={12} ml={2}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600 }}
          color="text.secondary"
          gutterBottom
        >
          Last updated: {new Date(mockData.updatedAt).toLocaleTimeString()}
        </Typography>
      </Grid>

      {/* Heatmap + Table */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, height: 420 }}>
          <ResponsiveHeatMap
            legends={[
              {
                anchor: "top",
                translateY: -40,
                length: 400,
                thickness: 8,
                direction: "row",
                tickPosition: "after",
                tickSize: 3,
                tickSpacing: 4,
                tickOverlap: false,
                tickFormat: (d) => `${d} ms`,
                title: "RTT (ms)",
                titleAlign: "start",
                titleOffset: 4,
              },
            ]}
            data={heatmap}
            keys={nodes}
            indexBy="id"
            margin={{ top: 40, left: 0, bottom: 40, left: 60 }}
            colors={{ type: "sequential", scheme: "blues" }}
            axisTop={null}
            axisleft={null}
            axisBottom={{ tickRotation: -45 }}
            animate
            onClick={({ xKey, yKey, value }) => setSelectedPair({ from: yKey, to: xKey, value })}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, height: 420, overflow: "auto" }}>
          <AntdTable
            size="small"
            rowKey={rowKey}
            columns={columns}
            dataSource={tableRows}
            pagination={false}
            rowSelection={{
              type: "radio",
              selectedRowKeys,
              onSelect: (record) =>
                setSelectedPair({
                  from: record.from,
                  to: record.to,
                  value: record.current,
                }),
            }}
            onRow={(record) => ({
              onClick: () => {
                setSelectedPair({
                  from: record.from,
                  to: record.to,
                  value: record.current,
                });
              },
              style: {
                cursor: "pointer",
              },
            })}
            scroll={{ y: 340 }}
          />
        </Paper>
      </Grid>

      {/* Trend line */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          {selectedPair ? (
            <DefaultLineChart
              title={`${selectedPair.from} → ${selectedPair.to}`}
              chart={{
                labels: Array.from({ length: 40 }, (_, i) => i + 1),
                datasets: [
                  {
                    color: "info",
                    label: "RTT (ms)",
                    data: Array.from(
                      { length: 40 },
                      () => +(selectedPair.value + Math.random() * 2 - 1).toFixed(2)
                    ),
                  },
                ],
              }}
            />
          ) : (
            <Typography color="text.secondary">Select a cell to view trend</Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}
