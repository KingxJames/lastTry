import * as React from 'react';
// import { useColorScheme } from '@mui/joy/styles';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';

export const ColorSchemeToggle: React.FC<IconButtonProps> = (props) => {
  const { onClick, sx, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton
        size="sm"
        variant="outlined"
        color="neutral"
        {...other}
        sx={sx}
        disabled
      />
    );
  }

  return (
    <CssVarsProvider>
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="outlined"
        color="neutral"
        {...other}
        onClick={(event) => {
          setMode(mode === 'light' ? 'dark' : 'light');
          if (onClick) {
            onClick(event);
          }
        }}
        sx={[
          {
            '& > *:first-child': {
              display: mode === 'dark' ? 'none' : 'initial',
            },
            '& > *:last-child': {
              display: mode === 'light' ? 'none' : 'initial',
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <DarkModeRoundedIcon />
        <LightModeIcon />
      </IconButton>
    </CssVarsProvider>
  );
};

export default ColorSchemeToggle;
