import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiFileUserLine,
  RiShoppingBag3Line,
  RiUserLine,
} from 'react-icons/ri';

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text
            fontWeight="bold"
            color="gray.600"
            fontSize="small"
            textTransform="uppercase"
          >
            General
          </Text>
          <Stack spacing="4" mt="4" align="stretch">
            <Link display="flex" color="linkedin.400">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" color="linkedin.400">
              <Icon as={RiUserLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Users
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text
            fontWeight="bold"
            color="gray.600"
            fontSize="small"
            textTransform="uppercase"
          >
            Sales
          </Text>
          <Stack spacing="4" mt="4" align="stretch">
            <Link display="flex" color="linkedin.400">
              <Icon as={RiFileUserLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Customers
              </Text>
            </Link>
            <Link display="flex" color="linkedin.400">
              <Icon as={RiShoppingBag3Line} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Sales
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
