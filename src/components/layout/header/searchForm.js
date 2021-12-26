import { Box, Flex, Input } from '@chakra-ui/react';
import MagnifyingGlassIcon from '../../icons/magnifyingGlass';
import CrossIcon from '../../icons/cross';
import IconAction from '../../IconAction';
import { useState } from 'react';

export default function Search(props) {
  const [inputFocus, setInputFocus] = useState(false);
  const [search, setSearch] = useState('');

  console.log(search);

  const handleClearSearch = () => {
    setSearch('');
    setInputFocus(false);
  };

  return (
    <Box {...props}>
      <Flex
        as="form"
        transition="background 100ms ease-in,width 100ms ease-out"
        align="center"
        background="brand.50"
        border="1px solid transparent"
        w="full"
        maxW="720px"
        borderRadius="8"
        _focusWithin={{
          background: 'white',
          boxShadow: '0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%)',
        }}
      >
        <Box px="5px">
          <IconAction
            bgColor="transparent"
            focusable={false}
            width="10"
            height="10"
            icon={<MagnifyingGlassIcon />}
          />
        </Box>
        <Box flex="1 1 0">
          <Input
            w="full"
            size="4"
            py="11px"
            value={search}
            outline="0"
            border="0"
            _focus={{ border: 0, outline: 0 }}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setInputFocus(true)}
            type="text"
          />
        </Box>
        {inputFocus || search.length ? (
          <Box px="5px">
            <IconAction
              bgColor="transparent"
              focusable={false}
              width="10"
              height="10"
              onClick={handleClearSearch}
              icon={<CrossIcon />}
            />
          </Box>
        ) : null}
      </Flex>
    </Box>
  );
}
