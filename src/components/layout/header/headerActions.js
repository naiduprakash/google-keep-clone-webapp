import { Box, Flex, Image, Text } from '@chakra-ui/react';
import IconAction from '../../../components/IconAction';
import logoImg from '../../../assets/images/logo.png';
import Search from './searchForm';
import MenuIcon from '../../../components/icons/menu';
import RefreshIcon from '../../../components/icons/refresh';
import CogwheelIcon from '../../../components/icons/cogwheel';
import ListIcon from '../../../components/icons/list';
import GridIcon from '../../../components/icons/grid';
import { useState } from 'react';

export default function HeaderActions() {
  const [view, setView] = useState('list');

  let ViewComponent = view === 'list' ? ListIcon : GridIcon;

  const toggleView = () => {
    let updatedView = view === 'list' ? 'grid' : 'list';
    setView(updatedView);
  };
  return (
    <Box flex="0 0 auto">
      <IconAction icon={<RefreshIcon />} m="0" />
      <IconAction icon={<ViewComponent />} m="0" onClick={toggleView} />
      <IconAction icon={<CogwheelIcon />} m="0" />
    </Box>
  );
}
