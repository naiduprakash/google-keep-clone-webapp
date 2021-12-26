import { Box, Flex } from '@chakra-ui/react';
import Theme from '@chakra-ui/theme';

import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
import Content from './components/layout/content';

function App() {
  return (
    <Box h="full">
      <Header />
      <Flex h={`calc(100% - ${Theme.sizes[16]})`}>
        <Sidebar />
        <Content />
      </Flex>
    </Box>
  );
}

export default App;
