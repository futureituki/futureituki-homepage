import { 
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage
 } from "@chakra-ui/react"
import { useState } from "react"

const Form = ({handleInput, input, isError, type, errorMessage, formtext}) => {
  return(
    <FormControl isInvalid={isError}>
    <FormLabel htmlFor={type}>{type}</FormLabel>
    <Input
      id={type}
      type={type}
      value={input}
      onChange={handleInput}
    />
    {!isError ? (
      <FormHelperText>
        {formtext}
      </FormHelperText>
    ) : (
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    )}
  </FormControl>
  )
}

export default Form