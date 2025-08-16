'use client';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		tertiary: Palette['primary'];
	}
	interface PaletteOptions {
		tertiary?: PaletteOptions['primary'];
	}
}

declare module '@mui/material/CircularProgress' {
	interface CircularProgressPropsColorOverrides {
		tertiary: true;
	}
}

export const currTheme = createTheme({
	palette: {
		primary: {
			main: '#080909',
		},
		secondary: {
			main: '#0e0f0e',
		},
		tertiary: {
			main: '#ffb500'
		},
		text: {
			primary: '#ffffff',
			secondary: '#cccccc',
		},
	},
});

currTheme.palette.background = {
	default: currTheme.palette.primary.main,
	paper: currTheme.palette.secondary.main,
};
