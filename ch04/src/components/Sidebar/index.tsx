import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiFileUserLine,
  RiShoppingBag3Line,
  RiUserLine,
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="General">
          <NavLink icon={RiDashboardLine} title="Dashboard" />

          <NavLink icon={RiUserLine} title="Users" />
        </NavSection>

        <NavSection title="Sales">
          <NavLink icon={RiFileUserLine} title="Customers" />

          <NavLink icon={RiShoppingBag3Line} title="Sales" />
        </NavSection>
      </Stack>
    </Box>
  );
}
