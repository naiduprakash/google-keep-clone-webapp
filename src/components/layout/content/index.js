import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Masonry from 'react-grid-masonry';
import Note from './note';
import IconAction from '../../IconAction';
import CheckboxCheckedIcon from '../../icons/checkboxChecked';

const mockNotes = Array.from({ length: 50 }).map((_, index) => {
  return {
    uuid: index,
    title: `title text ${index + 1}`,
    bgColor: '#dfdfdf',
    labels: [],
    createdAt: new Date().toJSON(),
    updatedAt: new Date().toJSON(),
    archivedAt: null,
    deletedAt: null,
    tasks: Array.from({ length: 5 }).map((_, taskIndex) => {
      return {
        task: `task ${index + 1}:${taskIndex + 1}`,
        isComplete: false,
      };
    }),
  };
});

function AddNoteForm() {
  let inputHoverStyle = { outline: '0', border: '0' };
  return (
    <Flex
      position="relative"
      w="600px"
      m="32px auto"
      pl="16px"
      pr="5px"
      py="12px"
      h="46px"
      border="1px solid"
      borderColor="brand.150"
      align="center"
      justify="space-between"
      borderRadius="8px"
      boxShadow="0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)"
    >
      <Box
        contentEditable
        flex="1"
        role="textbox"
        arealabel="Take a note..."
        {...inputHoverStyle}
        _hover={inputHoverStyle}
        _active={inputHoverStyle}
      />
      <Box>
        <IconAction
          bgColor="transparent"
          focusable={false}
          width="10"
          height="10"
          icon={<CheckboxCheckedIcon />}
        />
      </Box>
    </Flex>
  );
}

export default function Content(props) {
  const [items, setItems] = useState([...mockNotes]);

  return (
    <Box flex="1" height="full" overflowX="hidden" overflowY="auto" {...props}>
      <AddNoteForm />
      <Masonry
        comp={Note}
        uid="uuid"
        items={items}
        columnWidth={250}
        gutterWidth={15}
        minCols={2}
      />
    </Box>
  );
}
