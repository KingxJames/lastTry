// Header.tsx
import React from 'react';
import "./Header.scss";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { toggleSidebar } from '../../utils';  // Corrected import path

interface Section {
  title: string;
  url: string;
}

interface HeaderProps {
  sections?: ReadonlyArray<Section>;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ sections = [], title }) => {  // Added default value for sections
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;



 // <Sheet
        //     // sx={{
        //     //     display: { xs: 'flex', md: 'none' },
        //     //     alignItems: 'center',
        //     //     justifyContent: 'space-between',
        //     //     position: 'fixed',
        //     //     top: 0,
        //     //     width: '100vw',
        //     //     height: 'var(--Header-height)',
        //     //     zIndex: 9995,
        //     //     p: 2,
        //     //     gap: 1,
        //     //     borderBottom: '1px solid',
        //     //     borderColor: 'background.level1',
        //     //     boxShadow: 'sm',
        //     // }}
        //     >
        //     {/* <GlobalStyles
        //         styles={(theme) => ({
        //         ':root': {
        //             '--Header-height': '52px',
        //             [theme.breakpoints.up('md')]: {
        //             '--Header-height': '0px',
        //             },
        //         },
        //         })}
        //     /> */}
        //     <IconButton
        //         onClick={() => toggleSidebar()}
        //         variant="outlined"
        //         color="neutral"
        //         size="sm"
        //     >
        //         <MenuIcon />
        //     </IconButton>
        //     </Sheet>