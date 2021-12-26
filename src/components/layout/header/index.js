import { Box, Flex, Image, Text } from '@chakra-ui/react';
import IconAction from '../../../components/IconAction';
import logoImg from '../../../assets/images/logo.png';
import MenuIcon from '../../../components/icons/menu';

import SearchForm from './searchForm';
import HeaderActions from './headerActions';

export default function Header(props) {
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
        <IconAction icon={<MenuIcon />} />
        <Flex d="inline-flex" align="center">
          <Image src={logoImg} boxSize="10" mr="1" />
          <Text fontFamily="ProductSans" fontSize="5.5" ml="1">
            Keep
          </Text>
        </Flex>
      </Flex>
      <Flex flex="1 1 100%" align="center" pl="10px" pr="30px">
        <SearchForm flex="1 1 0" />
        <HeaderActions />
      </Flex>
      <Flex pl="30px" flex="0 0 auto" minW="124px" justify="flex-end">
        <IconAction active="true" icon={<Box lineHeight="1">PN</Box>} m="0" />
      </Flex>
    </Flex>
  );
}
