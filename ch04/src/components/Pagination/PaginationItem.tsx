import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  page: number;
  isCurrentPage?: boolean;
}
export function PaginationItem({
  page,
  isCurrentPage = false,
}: PaginationItemProps) {
  if (isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="linkedin"
        disabled
        _disabled={{ bg: 'linkedin.500', cursor: 'default' }}
      >
        {page}
      </Button>
    );
  } else {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{ bg: 'gray.500' }}
      >
        {page}
      </Button>
    );
  }
}
