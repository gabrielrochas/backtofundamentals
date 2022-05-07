import { Box, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Box w="64">
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight">
        ailta
        <Text as="span" color="linkedin.500" ml="1">
          .
        </Text>
      </Text>
    </Box>
  );
}
