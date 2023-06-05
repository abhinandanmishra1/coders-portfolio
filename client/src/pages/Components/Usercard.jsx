import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChipsArray from './Chip';
import SocialMedia from './SocialMedia';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Usercard = () => {
    return (
        <Card className="card-user">
            <CardMedia
                className='card-user-media'
                image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcNCAcNBwcHBw0HBw0HBwcHBw8ICQcNFREWFhURExMYHSggGBoxGxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFw0NDysZFRkrLTctKystKysrKy0rKysrKysrKysrKysrKysrKysrKysrKy0rKysrKysrNy0rKysrK//AABEIALwBDAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIGBf/EABUQAQEAAAAAAAAAAAAAAAAAAAAB/8QAGgEBAQEBAQEBAAAAAAAAAAAAAwECBwUABv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwD3kk/VOapJPnyFQfNSAEKWQUJVSyChBSyKsmhSSJkhosiZprKlkQVClkVCoUkgBClkASaLIAgpZFQhVJIqKhVLIggpJHQpJ57naBZr5ZFQgpZEKgpJEKqFLImaWVLIggpZFQhVJIqzSGiyAU1lSyIKhSyIIVSSIIKWRBUNFkTJoUkgCSlkFBCkkdEkHnOcRUIV8SQJCqWQCkNFkAqoUkiFQUsiCClkVZNZqlkVCCkkQqDRZEFQpZACKpZACFJIBUFLIqEGiyIKh8SRBBosjpKzTQ81zeQUIKSRUIVSyKhCqWQAitFkApCkkAprKlkVZIqlkVZIUsgoQaJIhUFLIgqFLIghVLIqzSKpJAkKpZEyQpJACFLI6MKh5zm8iZpoUsiZNClkFFVCkkQQUsiCFrRZFWaaFJIAqFLIqFQpZEEFLImaQpJEzTQ0WQAsqWRUJKSQUIVSyIIVSyJIKSR0QpZec5vIhTWVLIhVRVLIFUFLIggpJFWVRVLIhUGiyIKhSyCg0VSSAFlSyKhBSyIKitEkQQUsiFVClkQQUkioQqlkVCCkkdHQhXmucSKhCqSQUINFkVCClkQqClkVZIqkkFFNClkAQaLIghVJIghVLIqEKpZACKpJAqgpZACFLIAaFJImTQ0WQUEKWR0dZIrzXN5BQqFLIhVQ0SRCqiqWQCoKWRBBSyIIKSRMkKWQA0NFkANFUkgoQUsioQqlkVCCkkQQUsiFVClkQqoUkiCSlkdEKqHnObyAEKWQAiqWQWhBokiFQUsgopoUsgoNZUsiCFUkioQUsiFVDRZACFJIggpZEEFLIKkKpJEEKpZAqgpZEEFJI6KhB5zm8iCoUsiFVFUsgoIqlkFFQqkkQqDRZFQhVLIqEFLIARVJIAqFLIhSFJIBUFLIgqlLIKCK0WQUJVSSAEKWQJBSyOiCDznN5EKhVJIAqFLIghVLIhUKpZACK0SQAsqWRBBSyKhUKSRBCqWRBUKWRCoKWRCqhSSIKhSyIIKWRBUKSRBBSyOioQrznN5FRVRWiyBVBSSAEVSyAIVSyIIVSyIVBSSJk0NFkFBCkkVZNClkFBFUsgSFUsgVQqkkCqoUsiCoUsiCFUkgSClkf//Z"
                title="green iguana"
            />
            <CardContent className='card-user-content'>
                <div className='user-card-pic'>
                    <img className="user-card-image" src="data:image/png;base64,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" alt="" />
                </div>
                <div className='user-card-profile display-flex-col'>
                    <Card sx={{ height: 120 }}>
                        <CardContent>
                            <div className='user-profile-name-div'>
                                <p className='user-profile-name'>Anaisha Goyal</p>
                                <div className="greenbadge"><p className='user-profile-green-badge'>Pro</p></div>
                                <div className="bluebage"><p className='user-profile-blue-badge'>Looking for job</p></div>
                            </div>
                            <Typography className='user-profile-desg' variant="h5" component="div">
                                Full Stack Dev | Adobe "23"
                            </Typography>
                            <div className='display-flex-row user-profile-loca'>

                                Mumbai, India
                            </div>
                        </CardContent>
                    </Card>
                    <div className="chip-array-div">
                        <ChipsArray />
                    </div>
                    <div className="user-profile-social display-flex-row">
                        <SocialMedia />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Usercard