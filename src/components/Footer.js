import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/signature.png';

const Footer = () => (
    <Box mt="80px" bgcolor="#ffcccc">
        <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
            <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
        </Stack>
        <Typography variant="h5" fontFamily="Alegreya" sx={{ fontSize: { lg: '28px', xs: '20px' }, fontWeight: 'bold', textShadow: '2px 2px #888888' }}
                    mt="41px" textAlign="center" pb="40px"> Afit teretana </Typography>
        <Typography fontSize="12px" fontFamily="Alegreya" lineHeight="23px" sx={{ fontSize: { lg: '28px', xs: '20px' } }}
                    mt="41px" textAlign="center" pb="40px">
            Author: muhamed-droid
        </Typography>
    </Box>
);

export default Footer;