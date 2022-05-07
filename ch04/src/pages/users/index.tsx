import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiDeleteBinLine, RiEditLine } from 'react-icons/ri';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function UsersList() {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="linkedin"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              New User
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="linkedin" />
                </Th>
                <Th>User</Th>
                <Th>Created at</Th>
                <Th width="6"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="linkedin" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Rocha</Text>
                    <Text fontSize="sm" color="gray.300">
                      gabrielrochaas@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>07 de maio, 2022</Td>
                <Td pr="0">
                  <HStack>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="linkedin"
                    >
                      <Icon as={RiEditLine} fontSize="16" ml="auto" />
                    </Button>
                    <Button as="a" size="sm" fontSize="sm" colorScheme="pink">
                      <Icon as={RiDeleteBinLine} fontSize="16" ml="auto" />
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <h1>Users List</h1>
      </Flex>
    </Box>
  );
}
