import React from "react"
import {
  FormControl, FormLabel, Heading,
  Button, VStack, Avatar, Input
} from '@chakra-ui/react'
import { Gravatar} from "../utils/Gravatar"
import { dataset } from "../components/dataset"

const handleSubmit =e=> { e.preventDefault(); return handleAction(); };
const pushItem =(form)=> {
  dataset.unshift({
    ...form,
    id: crypto.randomUUID(),
    avatar: Gravatar(form.email),
  });
}
const handleAction =()=> <form action="https://formsubmit.co/6cbbe635bf23e284172e27f0b5960dd0" method="POST" />

const BadgeForm =(props)=> { return (<>

<form style={{
    position: "relative", 
    top: "-270px", alignItems: "center"
  }} 
  id="badge-form"
  onSubmit={handleSubmit}
>
  <VStack spacing={4}>
    <Heading as='h1' size='lg' isTruncated>
      JOIN US!
    </Heading>

    <Avatar size='lg'
      name={props.formValues.firsName} 
      src={
        !props.formValues.email==""? 
          Gravatar(props.formValues.email)
        : props.formValues.avatar
      }
    />
      <VStack spacing="24px" direction="vertical">
         <FormControl>
          <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input placeholder='Insert you email'
              htmlSize={20} 
              width='auto' 
              id='email' type='email'
              size='sm'
              name="email"
              onChange={props.onChange}
              value={props.formValues.email}
            />

          <FormLabel htmlFor='firstname' mt={1}>Firstname</FormLabel>
            <Input placeholder='Insert you firstname'
              htmlSize={20} 
              width='auto' 
              id='firstname' type='text'
              size='sm'
              name="firstname"
              onChange={props.onChange}
              value={props.formValues.firstname}
            />

          <FormLabel htmlFor='lastname' mt={1}>Lastname</FormLabel>
            <Input placeholder='Insert you lastname'
              htmlSize={20} 
              width='auto' 
              id='lastname' type='text'
              size='sm'
              name="lastname"
              onChange={props.onChange}
              value={props.formValues.lastname}
            />

          <FormLabel htmlFor='jobtitle' mt={1}
          >
            Job Title
          </FormLabel>
          <Input placeholder='Insert you job title'
            htmlSize={20} 
            width='auto' 
            id='jobtitle' type='text'
            size='sm'
            name="jobtitle"
            onChange={props.onChange}
            value={props.formValues.jobtitle}
          />

          <FormLabel htmlFor='twitter' mt={1}>Twitter</FormLabel>
          <Input placeholder='Insert twitter account'
            htmlSize={20} 
            width='auto' 
            id='twitter' type='text'
            size='sm'
            name="twitter"
            onChange={props.onChange}
            value={props.formValues.twitter}
          />
         </FormControl>

        <Button 
          type="submit"
          colorScheme='green' mt='24px'
          onClick={()=>pushItem(props.formValues)}
        >
          PRINT YOUR BADGE
        </Button>
      </VStack>
  </VStack>
</form>

</> ) }; export {BadgeForm};