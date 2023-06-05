import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function PortfolioResumeBar() {
    return (
        <div className="por-res-div">
            <Stack direction="row" spacing={1} >
                <Chip label="Portfolio" className="portfolio-chip font-mont" />
                <Chip label="Resume" className="portfolio-chip font-mont" />
            </Stack>
        </div>
    );
}
