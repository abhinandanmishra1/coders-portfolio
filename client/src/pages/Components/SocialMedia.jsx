import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialMedia() {
    return (
        <Box sx={{ '& > :not(style)': { m: 2 } }}>
            <Fab size="medium" className='social-icons-a' color="primary"  >
                <LinkedInIcon sx={{ mr: 1, fontSize: 40, }} />
            </Fab>
            <Fab size="medium" className='social-icons-a' >
                <YouTubeIcon sx={{ mr: 1, fontSize: 40 }} />
            </Fab>
            <Fab size="medium" className='social-icons-a' color="primary"  >
                <FacebookIcon sx={{ mr: 1, fontSize: 40 }} />
            </Fab>
            <Fab size="medium" className='social-icons-a'  >
                <InstagramIcon sx={{ mr: 1, fontSize: 40 }} />
            </Fab>
        </Box>
    );
}


{/* <LinkedInIcon sx={{ mr: 1, fontSize: 40 }} />
<YouTubeIcon sx={{ mr: 1, fontSize: 40 }} />
<FacebookIcon sx={{ mr: 1, fontSize: 40 }} />
<InstagramIcon sx={{ mr: 1, fontSize: 40 }} /> */}

