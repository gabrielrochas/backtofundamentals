import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      ailta
      <Text as="span" color="linkedin.500" ml="1">
        .
      </Text>
    </Text>
  );
}
