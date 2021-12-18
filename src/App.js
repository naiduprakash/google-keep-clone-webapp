import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Theme from '@chakra-ui/theme';
import MenuIcon from './components/icons/menu';
import logoImg from './assets/images/logo.png';

function Header(props) {
  return (
    <Flex
      align="center"
      justifyContent="flex-start"
      h="16"
      p="2"
      boxShadow="inset 0 -1px 0 0 #dadce0"
      {...props}
    >
      <Flex minW="232px" pr="30px" flex="1 0 auto">
        <Box borderRadius="50%" p="3" mx="1" d="inline-block">
          <MenuIcon />
        </Box>
        <Flex d="inline-flex" align="center">
          <Image src={logoImg} boxSize="10" mr="1" />
          <Text fontFamily="ProductSans" fontSize="5.5" ml="1">
            Keep
          </Text>
        </Flex>
      </Flex>
      <Flex flex="1 1 100%">
        <Box>Search</Box>
        <Box>actions</Box>
      </Flex>
      <Box pl="30px" flex="0 0 auto">
        PN
      </Box>
    </Flex>
  );
}
function App() {
  return (
    <Box h="full">
      <Header />
      <Flex h={`calc(100% - ${Theme.sizes[16]})`}>
        <Box>
          <Box minW="96" />
          <Box w="96">sidebar</Box>
        </Box>
        <Box flex="1">main content</Box>
      </Flex>
    </Box>
  );
}

export default App;
