import React from "react";

import { Box, Stack, Text } from "@chakra-ui/react";
import Logo from "../assets/images/logo2.png";

const Footer = () => (
  <Box
    w="100%"
    h="250px"
    bgGradient="linear(to-r, brown, brown)"
    _hover={{
      bgGradient: "linear(to-r, red.500, yellow.500)",
    }}
  >
    <Stack align="center">
      <img src={Logo} alt="logo" style={{ width: "200px", height: "200px" }} />
      <Text fontSize="md" letterSpacing="3px">
        AOXGym
      </Text>
    </Stack>
  </Box>
);

export default Footer;
