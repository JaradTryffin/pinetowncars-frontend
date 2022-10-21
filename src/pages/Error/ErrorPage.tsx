import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occured</Typography>
      <Typography>{error.statusText || error.message}</Typography>
    </Box>
  );
};

export default ErrorPage;
