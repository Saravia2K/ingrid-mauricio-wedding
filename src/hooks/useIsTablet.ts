import { useTheme, useMediaQuery } from "@mui/material";

export default function useIsTablet() {
  const MUITheme = useTheme();
  return useMediaQuery(MUITheme.breakpoints.up(768));
}
