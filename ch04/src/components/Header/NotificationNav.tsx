import { Flex, HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export function NotificationNav() {
  return (
    <Flex align="center" ml="auto">
      <HStack
        spacing={['4', '6']}
        mx={['4', '6']}
        pr={['4', '6']}
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
      </HStack>
    </Flex>
  );
}
