import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <>
      <Box
        sx={{ width: "100%", maxWidth: 500, paddingTop: 12, paddingLeft: 4 }}
      >
        <Typography variant="h5" gutterBottom>
          <div>Cristian Nasirabadi</div>
        </Typography>
        <Typography variant="h6" gutterBottom>
          <div>Frontend Developer</div>
        </Typography>
        <div>&nbsp;&nbsp;Mobile: +46 76 293 1896</div>
        <div>&nbsp;&nbsp;Email: cristian.nasirabadi@knowit.se</div>
        <div>&nbsp;&nbsp;Email: cristian.nasirabadi@gmail.com</div>
        <div>&nbsp;&nbsp;Website under construction</div>
      </Box>
    </>
  );
}
export default Home;
