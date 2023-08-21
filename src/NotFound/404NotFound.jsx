import React from 'react';

import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Link
} from '@mui/material';

import { FaHandPointRight } from 'react-icons/fa';

const NotFound = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '5rem',
                paddingBottom: '5rem',
            }}
        >
            <Typography variant='h5'>Oops! 404 Error - Page Not Found</Typography>
            <Typography variant='body1'>
                Sorry, but the page you are looking for seems to have gone on a vacation. It might be sunbathing on a tropical beach, sipping a piña colada.
            </Typography>
            <Typography variant='body1' sx={{ mt: 3 }}>
                While the page is enjoying its time off, here are a few things you can do:
            </Typography>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <FaHandPointRight />
                        </ListItemIcon>
                        <ListItemText
                            primary="Check the URL again: Sometimes a small typo can lead to a big adventure. Ensure that you typed the address correctly."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <FaHandPointRight />
                        </ListItemIcon>
                        <ListItemText
                            primary="Navigate back to the dashboard: Using the navigation menu above will take you back to the main page."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <FaHandPointRight />
                        </ListItemIcon>
                        <ListItemText
                            primary="Explore other areas: Take this opportunity to discover some exciting projects and works on the website. Who knows, you might stumble upon something even better!"
                        />
                    </ListItemButton>
                </ListItem>
            </List>
            <Typography mb={3} variant='body1'>
                If you believe this is a technical glitch, please let the developer know by contacting them at{" "}
                <Link href='mailto:khuranabhavya24@gmail.com' >khuranabhavya24@gmail.com</Link>
            </Typography>
            <Typography mb={3} variant='body1'>
                Thank you for your understanding, and have a fantastic day!.
            </Typography>
        </Container>
    )
}

export default NotFound;
