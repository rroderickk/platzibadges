import React from "react";
import { Link } from "react-router-dom";
import { Box, useColorModeValue, } from "@chakra-ui/react"
import logo from "@logos/logo.svg"
import header from "@logos/badge-header.svg"

const Navbar =(props)=> { return (<>

  <Box position="absolute"
    as="nav" 
    w="480px" pl={10} pt={4}
    h="80px"
    bg={useColorModeValue('transparent', '#20202380')}
    css={{ 
      display: 'flex',
      backdropFilter: 'blur(4px)',
      borderRadius: '20px 0 0 0',
    }}
    color="green.100"
    zIndex={1}
    {...props}
  >
    <img src={logo} alt="ico"/>
    <Link to="/" style={styleLink}>About</Link>
    <Link to="/home" style={styleLink}>Badge</Link>
    <Link to="/badgelist" style={styleLink}>List</Link>
    <Link to="/404" style={styleLink}>404</Link>
  </Box>

  <Box as="footer" w="480px" zIndex={1}
    __css= {{
      position: "absolute", bottom: "0px", paddingleft: "155px",
      backdropFilter: "blur(40px)",
    }}
  >
    <img src={header} alt="bag-header"/>
  </Box>

</> ) }; export { Navbar };

const styleLink ={
  paddingLeft: '10px',
  paddingTop: '24px'
}