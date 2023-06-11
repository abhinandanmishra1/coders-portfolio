import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import karma from '../../assets/images/karma.png'
import points from '../../assets/images/points.png'
import streak from '../../assets/images/streak.png'
import league from '../../assets/images/league.png'

export default function Stats() {
    return (
        <div className='stats-upper-div'>
            <h2>Stats</h2>
            <Stack className='stats-div' direction="row">
                <Chip
                    className="streak-chip"
                    avatar={<Avatar className="stats-images" alt="Natacha" src={points} />}
                    label="Avatar"
                    variant="outlined"
                />
                <Chip
                    className="streak-chip"
                    avatar={<Avatar className="stats-images" alt="Natacha" src={streak} />}
                    label="Avatar"
                    variant="outlined"
                />
                <Chip
                    className="streak-chip"
                    avatar={<Avatar className="stats-images" alt="Natacha" src={league} />}
                    label="Avatar"
                    variant="outlined"
                />
                <Chip
                    className="streak-chip"
                    avatar={<Avatar className="stats-images" alt="Natacha" src={karma} />}
                    label="Avatar"
                    variant="outlined"
                />
            </Stack>
        </div>
    );
}
