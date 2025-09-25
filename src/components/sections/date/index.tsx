import { Box } from "@mui/material";
import Datetime from "./datetime";
import Counter from "./counter";

export const dynamic = "force-static";

import DATA from "@/assets/json/data.json";

const { date, hour } = DATA;
export default function Date() {
  return (
    <Box mt={4}>
      <Datetime />
      <Counter date={`${date}T${hour}`} />
    </Box>
  );
}
