import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <Stack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='name' label="Full Name" />
              <Input name='email' label="Email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='password' type='password' label="Password" />
              <Input name='password_check' type='password' label="Password Check" />
            </SimpleGrid>
          </Stack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Button colorScheme="whiteAlpha">Back</Button>
              <Button colorScheme="linkedin">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
