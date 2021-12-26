import { Box } from '@chakra-ui/react';

export default function Sidebar({ children, ...props }) {
  return (
    <Box {...props}>
      <Box minW="280px" />
      <Box w="280px" pt="8px" height="full" overflowX="hidden" overflowY="auto">
        {children}
      </Box>
    </Box>
  );
}
