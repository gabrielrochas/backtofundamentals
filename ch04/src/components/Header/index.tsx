import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const [toggleItems, setToggleItems] = useState(isWideVersion);
  const { onOpen } = useSidebarDrawer();

  useEffect(() => {
    setToggleItems(!toggleItems);
  }, [isWideVersion]);

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          display="flex"
          mr="2"
          onClick={onOpen}
        ></IconButton>
      )}

      <Logo />

      <SearchBox />

      <NotificationNav />

      <Profile />
    </Flex>
  );
}
