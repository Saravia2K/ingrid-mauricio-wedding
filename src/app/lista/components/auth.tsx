"use client";

import { useState } from "react";
import {
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

export default function Auth({ onAuthSuccess }: AuthProps) {
  const [code, setCode] = useState<string | undefined>("");
  const [state, setState] = useState<"loading" | "error" | undefined>();

  const handleIngresarClick = async () => {
    if (!code) return;

    const hash = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "";
    if (hash != code) {
      setState("error");
      return;
    }

    sessionStorage.setItem("admin-logged-in", "1");
    onAuthSuccess();
  };

  const isLoading = state == "loading";
  const isError = state == "error";
  return (
    <Box
      width="100%"
      height="100dvh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component={Stack}
        spacing={3}
        p={3}
        borderRadius={2}
        boxShadow="2px 2px 10px 4px #BDBDBD"
        sx={{ width: { xs: "80%", sm: "75%", md: "30%", lg: 500 } }}
      >
        <Typography component="h1" textAlign="center" fontWeight="bold">
          Ingresa el código de acceso
        </Typography>
        <TextField
          placeholder="Ingresa el código de acceso"
          label="Código de acceso"
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value || "")}
          disabled={isLoading}
          error={isError}
          helperText={isError ? "Código inválido" : undefined}
          slotProps={{
            htmlInput: {
              inputMode: "numeric",
            },
          }}
        />
        <Button
          disabled={state == "loading"}
          variant="contained"
          color="info"
          onClick={handleIngresarClick}
        >
          {isLoading ? <CircularProgress color="error" /> : "Ingresar"}
        </Button>
      </Box>
    </Box>
  );
}

type AuthProps = {
  onAuthSuccess: () => void;
};
