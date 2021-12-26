import { IconButton } from '@chakra-ui/react';

export default function IconAction({ focusable = true, active = false, ...props }) {
  let hoverStyle = { bgColor: 'brand.800-1', outline: 0, boxShadow: `none` };
  let activeStyle = { ...hoverStyle, bgColor: 'brand.800-2' };
  let iconProps = {
    _hover: hoverStyle,
  };
  iconProps._focus = { boxShadow: 'none' };
  if (focusable) {
    iconProps._focus = hoverStyle;
  }

  iconProps._active = activeStyle;
  if (active) {
    iconProps = { ...iconProps, ...hoverStyle };
  }

  return (
    <IconButton
      borderRadius="50%"
      d="inline-flex"
      alignItems="center"
      justifyContent="center"
      mx="1"
      width="12"
      height="12"
      bgColor="white"
      boxShadow="none"
      {...iconProps}
      {...props}
    />
  );
}
