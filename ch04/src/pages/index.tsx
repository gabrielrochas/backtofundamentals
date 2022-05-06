import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg={'gray.800'}
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              name="email"
              id='email'
              type="email"
              border="none"
              bg="gray.900"
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              id='passw'
              type="password"
              border="none"
              bg="gray.900"
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="linkedin">
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
