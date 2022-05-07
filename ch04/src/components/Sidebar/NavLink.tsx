import { Icon, Link, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import { RiDashboardLine } from 'react-icons/ri';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  title: string;
};

export function NavLink({ icon, title, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" color="linkedin.400">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  );
}
