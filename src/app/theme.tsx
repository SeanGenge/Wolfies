'use client';
import { createTheme } from '@mui/material/styles';

export const currTheme = createTheme({
	palette: {
		primary: {
			main: '#080909',
		},
		secondary: {
			main: '#0e0f0e',
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
