import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		type: 'light',
        dark: '#2B2B2B',
        yellow: '#FFCD00',
        lightdark: '#3C3C3C',
		light: '#FFFFFF',
		primary: {
			main: '#2B2B2B',
		},
		secondary: {
			main: '#3C3C3C',
		},
		text: {
			primary: '#FFFFFF',
			secondary: '#FFCD00',
			disabled: '#145E8C',
			hint: '#127CA6',
		},
		warning: {
			main: '#FFCD00',
		},
		error: {
			main: '#F46161',
		},
		success: {
			main: '#049DD9',
		},
		divider: '#383F40',
		info: {
			main: '#FFFFFF',
		},
	},
	typography: {
		// fontSize: 14,
		// htmlFontSize: 17,
		// fontFamily: "Poppins"
	},
});

export default theme;