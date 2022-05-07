import { Avatar, Box, Flex, Hide, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Hide below="md">
        <Box mr="4" textAlign="right">
          <Text>Gabriel Rocha</Text>

          <Text color="gray.300" fontSize="small">
            gabriel.rochaas@gmail.com
          </Text>
        </Box>
      </Hide>

      <Avatar name="Gabriel Rocha" src="https://github.com/gabrielrochas.png" />
    </Flex>
  );
}
