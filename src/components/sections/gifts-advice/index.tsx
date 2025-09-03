import { Box } from "@mui/material";
import InformationCard from "@/components/common/information-card";

import stamp from "@/assets/images/arrangements/papel-304x142.svg";
import icon from "@/assets/images/arrangements/Icono-Regalo.svg";

export default function GiftsAdvice() {
  return (
    <Box id="gifts-advice" component="section" mt={8}>
      <InformationCard stamp={stamp} icon={icon}>
        Agradecemos tus muestras de cariño, ya sea en sobre o mediante
        transferencia para tu comodidad.
      </InformationCard>
    </Box>
  );
}
