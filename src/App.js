import { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Theme from '@chakra-ui/theme';
import Masonry from 'react-grid-masonry';

import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
import Content from './components/layout/content';
import SidebarItem from './components/layout/sidebar/sidebarItem';

import LightBulbIcon from './components/icons/lightBulb';
import TrashIcon from './components/icons/trash';
import BookmarkIcon from './components/icons/bookmark';
import PencilIcon from './components/icons/pencil';
import ArchiveIcon from './components/icons/archive';

const mockLabels = Array.from({ length: 20 }).map((_, index) => ({
  label: `Bookmark label ${index + 1}`,
  order: index,
}));

const mockNotes = Array.from({ length: 500 }).map((_, index) => {
  return {
    uuid: index,
    title: `title text ${index + 1}`,
    bgColor: '#dfdfdf',
    labels: [mockLabels[0]],
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

function App() {
  const [labels, setLabels] = useState([...mockLabels]);
  const [items, setItems] = useState([...mockNotes]);

  console.log('app');

  return (
    <Box h="full">
      <Header />
      <Flex h={`calc(100% - ${Theme.sizes[16]})`}>
        <Sidebar>
          <SidebarItem icon={<LightBulbIcon />} active>
            Notes
          </SidebarItem>
          {labels.map((label) => {
            return (
              <SidebarItem key={label.order} icon={<BookmarkIcon />}>
                {label.label}
              </SidebarItem>
            );
          })}
          <SidebarItem icon={<PencilIcon />}>Edit labels</SidebarItem>
          <SidebarItem icon={<ArchiveIcon />}>Archive</SidebarItem>
          <SidebarItem icon={<TrashIcon />}>Trash</SidebarItem>
        </Sidebar>
        <Content>
          <Masonry
            comp={Note}
            uid="uuid"
            items={items}
            columnWidth={250}
            gutterWidth={15}
            minCols={2}
          />
        </Content>
      </Flex>
    </Box>
  );
}

export default App;
