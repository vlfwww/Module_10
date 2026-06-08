import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Button } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface ErrorViewProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorView: React.FC<ErrorViewProps> = ({ message, onRetry }) => {
  const { t } = useTranslation();

  return (
    <Box
      role="alert"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        gap: 2,
        textAlign: "center",
        padding: 3,
      }}
    >
      <Box sx={{ color: "rgba(255, 136, 17, 1)", fontSize: 70, display: "flex" }}>
        <HighlightOffIcon fontSize="inherit" aria-hidden="true" />
      </Box>

      <Typography variant="h4" component="h1" color="text.primary" sx={{ fontWeight: "700" }}>
        {t("error_view.title")}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400 }}>
        {message || t("error_view.default_message")}
      </Typography>

      {onRetry && (
        <Button
          variant="contained"
          onClick={onRetry}
          sx={{
            backgroundColor: "rgba(255, 136, 17, 1)",
            textTransform: "none",
            fontWeight: "600",
            padding: "8px 24px",
            "&:hover": { backgroundColor: "rgba(230, 115, 10, 1)" },
          }}
        >
          {t("error_view.retry")}
        </Button>
      )}
    </Box>
  );
};

export default ErrorView;
