import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiFileUserLine, RiShoppingBag3Line, RiUserLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="General">
        <NavLink icon={RiDashboardLine} href='/dashboard' title="Dashboard" />

        <NavLink icon={RiUserLine} href='/users' title="User" />
      </NavSection>

      <NavSection title="Sales">
        <NavLink icon={RiFileUserLine} href='/customers' title="Customers" />

        <NavLink icon={RiShoppingBag3Line} href='/sales' title="Sales" />
      </NavSection>
    </Stack>
  );
}
