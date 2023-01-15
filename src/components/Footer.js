import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box
      mt="80x"
      bgcolor="#fff3f4"
    >
      <Stack
        // gap="15px"
        alignItems="center"
        px="40px"
        pt="24px"
      >
        <img
          src={Logo}
          alt="logo"
          width="200px"
          height="40px"
        />
        <Typography
          variant="h3"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="30px"
          textAlign="center"
          pb="30px"
        >
          Made with ❤ by Prerna Sharma
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
