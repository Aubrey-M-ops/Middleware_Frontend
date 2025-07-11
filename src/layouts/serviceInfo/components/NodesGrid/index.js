import { Grid } from "@mui/material";
import NodeCard from "./NodeCard";
import { toNodeView } from "./dataFactory";
import { POD_MOCK_DATA } from "mock/MOCK_DATA";

export default function NodesGrid() {
  const nodes = POD_MOCK_DATA.nodes.map(toNodeView);
  return (
    <Grid container spacing={3}>
      {nodes.map((node) => (
        <Grid item xs={12} md={6} lg={4} key={node.id}>
          <NodeCard node={node} />
        </Grid>
      ))}
    </Grid>
  );
}
