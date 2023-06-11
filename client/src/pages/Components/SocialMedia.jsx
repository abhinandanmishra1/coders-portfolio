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
            {/* <Fab size="medium" className='social-icons-a' color="primary"  > */}
            {/* <LinkedInIcon sx={{ mr: 1, fontSize: 40, }} /> */}
            {/* <div className='soc'></div> */}
            <img className='social-css' src="data:image/png;base64,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" alt="" />
            <img className='social-css' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png" alt="" />
            <img className='social-css' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" alt="" />
            <img className='social-css' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
            <img className='social-css-youtube' src="https://w7.pngwing.com/pngs/1009/93/png-transparent-youtube-computer-icons-logo-youtube-angle-social-media-share-icon.png" alt="" />
            {/* </Fab> */}
            {/* <Fab size="medium" className='social-icons-a' >
                <YouTubeIcon sx={{ mr: 1, fontSize: 40 }} />
            </Fab>
            <Fab size="medium" className='social-icons-a' color="primary"  >
                <FacebookIcon sx={{ mr: 1, fontSize: 40 }} />
            </Fab>
            <Fab size="medium" className='social-icons-a'  >
                <InstagramIcon sx={{ mr: 1, fontSize: 40 }} />
            </Fab> */}
        </Box>
    );
}


{/* <LinkedInIcon sx={{ mr: 1, fontSize: 40 }} />
<YouTubeIcon sx={{ mr: 1, fontSize: 40 }} />
<FacebookIcon sx={{ mr: 1, fontSize: 40 }} />
<InstagramIcon sx={{ mr: 1, fontSize: 40 }} /> */}

