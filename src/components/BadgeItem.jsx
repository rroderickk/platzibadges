import React from "react";
import { 
  Badge, Box, 
  Heading, Wrap,WrapItem , 
  Text, Avatar, } from "@chakra-ui/react"
import { MdStar } from "react-icons/md";

const BadgeItem =({formValues})=> { return (<>
  <Wrap maxW={400} 
    direction="row" 
    spacing={4}
    mb={4} 
    p={5} 
    rounded="md"
    __css={{
      position: "relative",
      top: "60px",
      outline: "1px solid white", 
      backdropFilter: "blur(40px)",
      zIndex: "1",
    }}
    sx={{filter: "contrast(90%)"}}
  >
    <Avatar size="xl" 
      name={formValues.firstname} 
      src={formValues.avatar}
    />

      <Wrap direction='column' 
        color="white"   
        sx={{filter: "contrast(120%)"}}
      >

        <WrapItem pt={1} w="100%" >
          <Heading size="md" as="h3">
            {formValues.firstname} {formValues.lastname}
          </Heading>
        </WrapItem>

        <WrapItem w="100%">
          <Box as={MdStar} color="orange.400" mt={1} mr={1}/>
          {formValues.jobtitle}
          {formValues.verified && 
            <Badge colorScheme="pink"
              mt={1} ml={2}
            >
              <b>Verified</b>
            </Badge>
          }
        </WrapItem>

        <Text
          bgGradient='linear(to-l, #9f0, cyan, )'
          bgClip='text'
          fontSize='sm'
          fontWeight='bolder'
        >
          <WrapItem w="100%">
            @{formValues.twitter}
          </WrapItem>
        </Text>

      </Wrap>
  </Wrap>
</> ) }; export {BadgeItem};