import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Form = () => {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Baby Item</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
  </FormControl>
  )
}

export default Form;