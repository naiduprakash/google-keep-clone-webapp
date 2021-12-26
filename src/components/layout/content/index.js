import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Masonry from 'react-grid-masonry';

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

function Note({ data, itemIdx }) {
  console.log(data);
  return (
    <Box minHeight="150px" bgColor={data?.bgColor}>
      {itemIdx}"ddd"
    </Box>
  );
}

export default function Content(props) {
  const [items, setItems] = useState([...mockNotes]);

  return (
    <Box flex="1" height="full" overflowX="hidden" overflowY="auto" {...props}>
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
