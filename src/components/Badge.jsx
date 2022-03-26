import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { Stack, Text, Heading } from "@chakra-ui/react";
import { Gravatar } from "../utils/Gravatar"

const Badge =(props)=> { return (<>
<Container>
  <Tilt
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    perspective={4000}
    transitionSpeed={2000}
    scale={1.09}
    gyroscope={true}
  >
    <Heading as='h2' size='md' maxW={48} ml={10} max={4}
      css={{textTransform: "uppercase"}}
    >
      {props.formValues.firstname==""? "YOUR BADGE": props.formValues.firstname}
    </Heading>

    <Card>
      <CardImage 
        src={
        !props.formValues.email==""? Gravatar(props.formValues.email)
        : props.formValues.avatar
      }
        alt="avatar"
      />

      <CardBody>
        <Text
          bgGradient='linear(to-l,  #FF0080, #9f0)'
          bgClip='text'
          fontSize='xs'
          fontWeight='lighter'
        >
          @{props.formValues.twitter==""? "CheatModes4": props.formValues.twitter} 
        </Text>
         <Stack spacing={1}>
          <Heading as='h5' size='xs' css={{textTransform: "capitalize"}}>
            {props.formValues.firstname==""? "Firstname": props.formValues.firstname}
          </Heading>
          <Heading as='h5' size='xs' css={{textTransform: "capitalize"}}>
            {props.formValues.lastname==""?   "Lastname": props.formValues.lastname} 
          </Heading>
          <Heading as='h5' size='xs'>
            {props.formValues.jobTitle==""?  "Job title": props.formValues.jobTitle} 
          </Heading>
          <Heading as='h6' fontSize="12px">
            {props.formValues.email==""?         "Email": props.formValues.email}    
          </Heading>
         </Stack>
      </CardBody>

    </Card>
  </Tilt>
</Container>

</> ) }; export {Badge};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-155px);
`;

const Card = styled.div`
  padding: 30px;
  border-radius: 16px;
  background-color: lime;
  background: linear-gradient(80deg, rgba(28,54,67,1) 6%, rgba(27,27,37,1) 10%, rgba(27,29,40,1) 94%, rgba(105,140,44,1) 20%, rgba(191,255,79,1) 1%);
  box-shadow: 6px 6px 31px #0b0c10,
             -6px -6px 31px #2d2e40;
`;

const CardImage = styled.img`
  transform: translate3D(0px, 0, 25px);
  border-radius: 100%;
  width: 200px;
  height: 200px;
`;

const CardBody = styled.div`
  transform: translateZ(55px);
  padding: 15px;
  border-radius: 15px;
  font-size: 16px;
  color: #fff;
  max-width: 200px;
`;

//// import {VStack, Box, Stack, Heading,
//// 	Flex, Menu, MenuItem, MenuList, MenuButton,
//// 	IconButton, useColorModeValue, } from "@chakra-ui/react"

