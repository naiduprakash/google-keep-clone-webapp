import { Box } from '@chakra-ui/layout';

export default function Content({ children, ...props }) {
  return (
    <Box flex="1" height="full" overflowX="hidden" overflowY="auto" {...props}>
      {children}
    </Box>
  );
}
