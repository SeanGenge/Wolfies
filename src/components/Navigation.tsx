import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
	return (
		<AppBar position="static" color="secondary" sx={{ paddingX: 2 }}>
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
				{/* Logo + Title */}
				<Link href="/" aria-label="Wolfies home">
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<Image
							src="/wolfiesLogo.png"
							alt=""
							width={60}
							height={60}
							priority
						/>
						<Typography variant="h6" noWrap>
							Wolfies
						</Typography>
					</Box>
				</Link>

				{/* Search box */}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						backgroundColor: 'rgba(255,255,255,0.1)',
						paddingX: 1,
						borderRadius: 1,
						width: '300px',
					}}
				>
					<SearchIcon sx={{ mr: 1 }} />
					<InputBase
						placeholder="Search…"
						sx={{ color: 'inherit', flex: 1 }}
					/>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
