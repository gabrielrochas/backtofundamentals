import { Box, Button, HStack } from '@chakra-ui/react';

export default function Pagination() {
  return (
    <HStack spacing="6" mt="8" justify="space-between" align="center">
        <Box>
          <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
        </Box>
      <HStack>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="linkedin"
        disabled
        _disabled={{ bg: 'linkedin.500', cursor: 'default' }}
      >
        1
      </Button>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{ bg: 'gray.500' }}
      >
        2
      </Button>
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{ bg: 'gray.500' }}
      >
        3
      </Button>
      </HStack>
    </HStack>
  );
}
