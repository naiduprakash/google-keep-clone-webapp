import { Box } from '@chakra-ui/layout';
export default function Note({ data, itemIdx }) {
  return (
    <Box minHeight="150px" bgColor={data?.bgColor}>
      {itemIdx}"ddd"
    </Box>
  );
}
