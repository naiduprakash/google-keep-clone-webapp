import { Box, Flex } from '@chakra-ui/react';

export default function SidebarItem({ icon, active, children, ...props }) {
  let hoverStyle = { bgColor: 'brand.50' };
  let activeStyle = { ...hoverStyle, bgColor: 'brand.100' };
  let elementProps = {};
  if (active) {
    elementProps = {
      ...elementProps,
      ...activeStyle,
      bgColor: 'brandPrimary',
    };
  } else {
    elementProps._hover = hoverStyle;
    elementProps._active = activeStyle;
  }

  return (
    <Flex
      transition="background 100ms ease-in,width 100ms ease-out"
      pl="12px"
      h="48px"
      align="center"
      borderRadius="0 25px 25px 0"
      cursor="pointer"
      {...elementProps}
      {...props}
    >
      <Box px="12px">{icon}</Box>
      <Box ml="20px" color="brand.850">
        {children}
      </Box>
    </Flex>
  );
}
