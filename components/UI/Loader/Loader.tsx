import React from "react";
import { useTranslation } from "react-i18next";
import { CircularProgress, Box, Typography } from "@mui/material";
import { LoaderProps } from "../../../types/common";

const Loader: React.FC<LoaderProps> = ({ message }) => {
  const { t } = useTranslation();

  const loadingText = message || t("loader.loading");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        gap: 2,
      }}
      role="status"
      aria-live="polite"
    >
      <CircularProgress
        color="inherit"
        sx={{ color: "rgba(255, 136, 17, 1)" }}
        size={50}
        aria-hidden="true"
      />

      <Typography variant="body1" color="text.secondary">
        {loadingText}
      </Typography>
    </Box>
  );
};

export default React.memo(Loader);
