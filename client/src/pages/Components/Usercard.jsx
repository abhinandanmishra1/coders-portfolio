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
import edit from '../../assets/images/edit.png';
import user2 from '../../assets/images/user2.png';

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
                    <img className="user-card-image" src={user2} alt="" />
                </div>
                <div className='user-card-profile display-flex-col'>
                    <Card sx={{ height: 120 }}>
                        <CardContent>
                            <div className='user-profile-name-div'>
                                <p className='user-profile-name'>Anaisha Goyal</p>
                                <div className="greenbadge"><p className='user-profile-green-badge'>Pro</p></div>
                                <div className="bluebage"><p className='user-profile-blue-badge'>Looking for job</p></div>
                                <div className="edit-cover">
                                    <img src={edit} alt="" />
                                    <p>Edit Cover</p></div>
                            </div>
                            <Typography className='user-profile-desg' variant="h5" component="div">
                                Full Stack Dev at Adobe | Harvard "23"
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