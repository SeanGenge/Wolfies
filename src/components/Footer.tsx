// src/components/Footer.tsx
"use client";

import { Box, Container, Typography, Stack } from "@mui/material";

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				bgcolor: "secondary.main",
				py: 3,
				mt: "5rem",
			}}
		>
			<Container maxWidth="xl">
				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<Typography variant="body2">
						© {new Date().getFullYear()} Wolfies. All rights reserved.
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}
