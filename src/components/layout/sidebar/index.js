import { useState } from 'react';
import { Box } from '@chakra-ui/react';

import SidebarItem from '../../../components/layout/sidebar/sidebarItem';

import LightBulbIcon from '../../../components/icons/lightBulb';
import TrashIcon from '../../../components/icons/trash';
import BookmarkIcon from '../../../components/icons/bookmark';
import PencilIcon from '../../../components/icons/pencil';
import ArchiveIcon from '../../../components/icons/archive';

const mockLabels = Array.from({ length: 10 }).map((_, index) => ({
  label: `Bookmark label ${index + 1}`,
  order: index,
}));

export default function Sidebar(props) {
  const [labels, setLabels] = useState([...mockLabels]);

  return (
    <Box {...props}>
      <Box minW="280px" />
      <Box w="280px" pt="8px" height="full" overflowX="hidden" overflowY="auto">
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
      </Box>
    </Box>
  );
}
