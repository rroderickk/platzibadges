import   React from "react";
import { Layout } from "../containers/Layout"
import img from "@logos/astronauts.svg"
import {Link} from "react-router-dom"
import {Heading, Button} from "@chakra-ui/react"

const About =()=> { return (<>

<Layout  gradient={{g1: "true"}}>
  <Heading size="lg" as="h2"  mb={4}>PRINT YOUR BADGES</Heading>

  <img src={img} width="400px" alt="about-platziBadges"/>

  <Link to="/home">
    <Button mt={4} bg="green.200" color="black" size="lg"  width='292px'
      _active={{
        bg: '#bfff4f',
        transform: 'scale(0.96)',
        borderColor: '#bec3c9',
      }}
    > 
      Start now
    </Button>
  </Link>
</Layout>

</> ) }; export {About};