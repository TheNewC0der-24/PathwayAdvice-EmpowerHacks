import React from 'react';

import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';

const AnxietyDiscordersTab = () => {
    return (
        <Box
            sx={{
                height: "350px",
                overflowY: "scroll",
            }}
        >
            <Typography gutterBottom variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Causes:</span> genetics, personality traits, brain chemical (brain’s reaction to previous life experiences), abuse, loss
            </Typography>
            <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Symptoms:</span>
            </Typography>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            1.
                        </ListItemIcon>
                        <ListItemText
                            primary="Excessive worry or fear"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            2.
                        </ListItemIcon>
                        <ListItemText
                            primary="Restlessness or feeling on edge"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            3.
                        </ListItemIcon>
                        <ListItemText
                            primary="Difficulty concentrating"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            4.
                        </ListItemIcon>
                        <ListItemText
                            primary="Irritability and Muscle tension"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            5.
                        </ListItemIcon>
                        <ListItemText
                            primary="Sleep disturbances"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            6.
                        </ListItemIcon>
                        <ListItemText
                            primary="Rapid heartbeat or palpitations"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            7.
                        </ListItemIcon>
                        <ListItemText
                            primary="Sweating or trembling"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            8.
                        </ListItemIcon>
                        <ListItemText
                            primary="Avoidance of certain situations or places"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            9.
                        </ListItemIcon>
                        <ListItemText
                            primary="Intrusive thoughts or repetitive behaviors"
                        />
                    </ListItemButton>
                </ListItem>
            </List>

            <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Solutions:</span> Cognitive Behavioral Therapy (CBT) is particularly effective for anxiety. It helps individuals identify and change negative thought patterns and behaviors that contribute to anxiety.
            </Typography>

            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            1.
                        </ListItemIcon>
                        <ListItemText
                            primary="Medication:"
                            secondary="Antidepressants or anti-anxiety medications may be prescribed by a psychiatrist to help manage symptoms. These should be discussed with a medical professional."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            2.
                        </ListItemIcon>
                        <ListItemText
                            primary="Lifestyle Changes:"
                            secondary="Regular exercise, a balanced diet, and sufficient sleep can positively impact anxiety. Avoiding alcohol, caffeine, and recreational drugs is also recommended."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            3.
                        </ListItemIcon>
                        <ListItemText
                            primary="Stress Management:"
                            secondary="Techniques such as deep breathing, meditation, and progressive muscle relaxation can help manage stress and anxiety."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            4.
                        </ListItemIcon>
                        <ListItemText
                            primary="Mindfulness:"
                            secondary="Practices like mindfulness and meditation can increase awareness of the present moment and reduce rumination."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            5.
                        </ListItemIcon>
                        <ListItemText
                            primary="Support Networks:"
                            secondary="Connecting with friends, family, or support groups can provide a sense of community and understanding."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            6.
                        </ListItemIcon>
                        <ListItemText
                            primary="Time Management:"
                            secondary="Learning effective time management and organizational skills can reduce feelings of being overwhelmed."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            7.
                        </ListItemIcon>
                        <ListItemText
                            primary="Professional Help:"
                            secondary="Consulting with a mental health professional is crucial to develop a personalized treatment plan."
                        />
                    </ListItemButton>
                </ListItem>
            </List>

            <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Student Helplines:</span> National Suicide Prevention Lifeline (US): 1-800-273-TALK (1-800-273-8255)
            </Typography>

            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            1.
                        </ListItemIcon>
                        <ListItemText
                            primary="Crisis Text Line (US): Text  HOME to 741741"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            2.
                        </ListItemIcon>
                        <ListItemText
                            primary="Samaritans (UK): 116 123"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            3.
                        </ListItemIcon>
                        <ListItemText
                            primary="Kids Help Phone (Canada): 1-800-668-6868"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            4.
                        </ListItemIcon>
                        <ListItemText
                            primary="Befrienders Worldwide: Visit www.befrienders.org to find a helpline in your country"
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default AnxietyDiscordersTab;
