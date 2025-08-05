import { Box } from "@mui/material";
import Datetime from "./datetime";
import Counter from "./counter";

export default function Date() {
  return (
    <Box mt={4}>
      <Datetime />
      <Counter />
    </Box>
  );
}
