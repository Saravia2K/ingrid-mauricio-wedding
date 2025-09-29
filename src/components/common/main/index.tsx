import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Main({ children, pb }: MainProps) {
  return (
    <Box
      component="main"
      maxWidth={768}
      minWidth={375}
      margin="auto"
      pb={pb ? "1rem" : 0}
      sx={{ overflowX: "hidden" }}
      className="animate__animated animate__fadeIn"
    >
      {children}
    </Box>
  );
}

type MainProps = PropsWithChildren<{
  pb?: boolean;
}>;
