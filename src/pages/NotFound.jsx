import React from "react";
import {Link} from "react-router-dom"
import { Stack, Button, Divider } from "@chakra-ui/react"
import {ChevronLeftIcon} from '@chakra-ui/icons'
import { GlobalStyle } from "../GlobalStyle"


const NotFound =()=> { return ( <> <GlobalStyle/>

<h1 style={{
		display: 'flex'
	}}
> 
	404 
<Divider orientation="vertical" ml={4} mr={4}/> 
	Nothing to do here...
</h1>

<Link to="/">
	<Button mt={4} bg="green.200" color="black" size="lg"  width='200px'
		leftIcon={<ChevronLeftIcon />}
		_active={{
			bg: '#bfff4f',
			transform: 'scale(0.96)',
			borderColor: '#bec3c9',
		}}
	> 
		Volver
	</Button>
</Link>

</>); }; export { NotFound };
