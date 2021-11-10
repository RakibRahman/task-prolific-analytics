import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Text,
  Flex,
  FormLabel,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  FormControl,
  Stack,
  Button,
  useToast,
} from '@chakra-ui/react';
const Form = () => {
  React.useEffect(() => {
    document.title = 'Form';
  }, []);
  const successToast = useToast({
    title: 'Form Submitted.',
    description: 'User Data Successfully Submitted',
    status: 'success',
    duration: 1900,
    isClosable: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    successToast();

    console.log(data);
  };

  return (
    <Box
      w={{ sm: '100%', lg: '900px' }}
      minH="400px"
      bg="white"
      mx="auto"
      borderRadius="15px"
      p="4"
    >
      <Flex justify="center" w="100%" align="center" flexDirection="column">
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '60%' }}>
          <FormControl>
            <FormLabel fontWeight="bold">Email</FormLabel>
            <Input
              {...register('email', {
                required: 'Email field is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'This is not a valid email',
                },
              })}
            />
            <Text color="red">{errors.email?.message}</Text>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold">Name</FormLabel>
            <Input {...register('name', { required: true })} />
            {errors.name && <Text color="red">Name field is required</Text>}
          </FormControl>

          <Box my="2">
            <CheckboxGroup colorScheme="green">
              <FormLabel fontWeight="bold">Skills</FormLabel>

              <Stack direction="row">
                <Checkbox
                  name="skills"
                  value="CSS"
                  {...register('skills', {
                    required: 'Skills field is required',
                  })}
                >
                  CSS
                </Checkbox>
                <Checkbox
                  name="skills"
                  value="JavaScript"
                  {...register('skills', {
                    required: 'Skills field is required',
                  })}
                >
                  JavaScript
                </Checkbox>
                <Checkbox
                  name="skills"
                  value="React"
                  {...register('skills', {
                    required: 'Skills field is required',
                  })}
                >
                  React
                </Checkbox>
                <Checkbox
                  value="Figma"
                  name="skills"
                  {...register('skills', {
                    required: 'Skills field is required',
                  })}
                >
                  Figma
                </Checkbox>
              </Stack>
              {errors.skills && (
                <Text color="red">{errors.skills.message}</Text>
              )}
            </CheckboxGroup>
          </Box>
          <RadioGroup>
            <FormLabel fontWeight="bold">Gender</FormLabel>
            <Stack direction="row">
              <Radio name="gender" value="male" {...register('gender')}>
                Male
              </Radio>
              <Radio name="gender" value="female" {...register('gender')}>
                Female
              </Radio>
              <Radio name="gender" value="others" {...register('gender')}>
                Others
              </Radio>
            </Stack>
          </RadioGroup>
          <Button mt="2" type="submit">
            Submit
          </Button>
        </form>
      </Flex>
    </Box>
  );
};
export default Form;
