import React from "react";
import {
  FormControl, FormLabel, FormHelperText,
  Heading,Button, Text, VStack, Avatar, Input} from '@chakra-ui/react'


const Badge =(props)=> { return (<>
<form>
  <VStack spacing={4} align="center" m={-48}>
    <Heading as='h1' size='lg' isTruncated>
      JOIN US!
    </Heading>

    <Avatar size='lg' 
      name={props.firsName} 
      src={props.avatarUrl}
    />
      <VStack spacing={3} align="center" >
        <FormControl>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input placeholder='Insert you email'
            htmlSize={20} 
            width='auto' 
            id='email' type='email'
            size='md'
          />
          <br/>
          <FormLabel htmlFor='firsname'>Firstname</FormLabel>
          <Input placeholder='Insert you firstname'
            htmlSize={20} 
            width='auto' 
            id='firstname' type='text'
            size='md'
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <Button size='md' colorScheme='green' mt='24px'>
          Create a free account
        </Button>
      </VStack>
  </VStack>
</form>
</> ) }; export {Badge};