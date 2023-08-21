import React from 'react';

import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    ListSubheader
} from '@mui/material';

const ADHDTab = () => {
    return (
        <Box
            sx={{
                height: "350px",
                overflowY: "scroll",
            }}
        >
            <Typography gutterBottom variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Causes:</span> There is a strong genetic component to ADHD. If a family member has ADHD, there is an increased likelihood of other family members also having the disorder. Certain genes related to neurotransmitter regulation and brain development are thought to be involved.
            </Typography>

            <Typography gutterBottom variant="subtitle1">
                Neurotransmitter Imbalances: Neurotransmitters like dopamine and norepinephrine play a crucial role in regulating attention, focus, and impulse control. Abnormalities in their levels or functioning may contribute to ADHD symptoms.
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                Brain Structure and Function: Brain imaging studies have shown differences in the size and activity of certain brain regions in individuals with ADHD. The prefrontal cortex, responsible for executive functions, and the basal ganglia, involved in reward and motivation, are areas of particular interest.
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                Prenatal Factors: Exposure to prenatal risk factors such as maternal smoking, alcohol or drug use during pregnancy, or maternal stress may increase the risk of developing ADHD.
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                Environmental Exposures: Environmental factors, such as exposure to lead or other toxins, may contribute to the development of ADHD.
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                Birth Complications: Premature birth, low birth weight, and complications during birth are associated with a higher risk of ADHD.
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                Brain Injury: Traumatic brain injury or other brain conditions can result in ADHD-like symptoms, but this is a relatively small portion of ADHD cases.
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                Diet and Nutrition: While no specific foods are known to cause ADHD, some studies suggest that certain dietary factors, like artificial food colorings or excessive sugar intake, might influence symptoms in some children.
            </Typography>

            <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Symptoms:</span> Predominantly Inattentive Presentation:
            </Typography>

            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            1.
                        </ListItemIcon>
                        <ListItemText
                            primary="Difficulty sustaining attention in tasks or activities"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            2.
                        </ListItemIcon>
                        <ListItemText
                            primary="Making careless mistakes in schoolwork or other activities"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            3.
                        </ListItemIcon>
                        <ListItemText
                            primary="Difficulty organizing tasks and activities"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            4.
                        </ListItemIcon>
                        <ListItemText
                            primary="Avoiding or strongly disliking tasks that require sustained mental effort"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            5.
                        </ListItemIcon>
                        <ListItemText
                            primary="Frequent losing of necessary items, such as school supplies"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            6.
                        </ListItemIcon>
                        <ListItemText
                            primary="Easily distracted by external stimuli"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            7.
                        </ListItemIcon>
                        <ListItemText
                            primary="Forgetfulness in daily activities"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            8.
                        </ListItemIcon>
                        <ListItemText
                            primary="Difficulty following instructions or completing assignments"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            9.
                        </ListItemIcon>
                        <ListItemText
                            primary="Difficulty organizing tasks and managing time"
                        />
                    </ListItemButton>
                </ListItem>
            </List>

            <Typography gutterBottom variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Combined Presentation:</span> A combination of symptoms from both inattentive and hyperactive-impulsive presentations
            </Typography>

            <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Solutions:</span> Cognitive Behavioral Therapy (CBT) is particularly effective for anxiety. It helps individuals identify and change negative thought patterns and behaviors that contribute to anxiety.
            </Typography>

            <List
                subheader={
                    <ListSubheader>
                        Behavioral Interventions:
                    </ListSubheader>
                }
            >
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            1.
                        </ListItemIcon>
                        <ListItemText
                            primary="Behavioral Therapy:"
                            secondary="Cognitive Behavioral Therapy (CBT) and other behavioral therapies can help individuals develop strategies to manage symptoms, improve time management, and address impulsivity."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            2.
                        </ListItemIcon>
                        <ListItemText
                            primary="Parent Training:"
                            secondary="Parents can learn techniques for managing their child's behavior and providing structure and support at home."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            3.
                        </ListItemIcon>
                        <ListItemText
                            primary="Educational Support:"
                            secondary=" Teachers can implement strategies in the classroom to accommodate learning needs and help students stay focused."
                        />
                    </ListItemButton>
                </ListItem>
            </List>

            <List
                subheader={
                    <ListSubheader>
                        Medication:
                    </ListSubheader>
                }
            >
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            1.
                        </ListItemIcon>
                        <ListItemText
                            primary="Stimulant Medications:"
                            secondary="These are commonly prescribed for ADHD and can help improve attention, focus, and impulse control. Examples include methylphenidate (e.g., Ritalin) and amphetamine-based medications (e.g., Adderall)."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            2.
                        </ListItemIcon>
                        <ListItemText
                            primary="Non-Stimulant Medications:"
                            secondary="In some cases, non-stimulant medications like atomoxetine (Strattera) may be prescribed."
                        />
                    </ListItemButton>
                </ListItem>
            </List>

            <List
                subheader={
                    <ListSubheader>
                        Support and Education:
                    </ListSubheader>
                }
            >
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            1.
                        </ListItemIcon>
                        <ListItemText
                            primary="Psychoeducation:"
                            secondary="Learning about ADHD, its symptoms, and effective strategies can empower individuals to better manage their condition."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            2.
                        </ListItemIcon>
                        <ListItemText
                            primary="Support Groups:"
                            secondary="Joining support groups with others who have ADHD can provide a sense of community and shared experiences."
                        />
                    </ListItemButton>
                </ListItem>
            </List>

            <List
                subheader={
                    <ListSubheader>
                        Environmental Modifications:
                    </ListSubheader>
                }
            >
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            1.
                        </ListItemIcon>
                        <ListItemText
                            primary="Minimize Distractions:"
                            secondary="Creating an organized and clutter-free environment can help reduce distractions."
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            2.
                        </ListItemIcon>
                        <ListItemText
                            primary="Support Groups:"
                            secondary="Joining support groups with others who have ADHD can provide a sense of community and shared experiences."
                        />
                    </ListItemButton>
                </ListItem>
            </List>

            <List
                subheader={
                    <ListSubheader>
                        Professional Guidance:
                    </ListSubheader>
                }
            >
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            1.
                        </ListItemIcon>
                        <ListItemText
                            primary="Collaborating with mental health professionals, educators, and medical providers is crucial for developing a tailored treatment plan."
                        />
                    </ListItemButton>
                </ListItem>
            </List>

            <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Student Helplines:</span> CHADD (Children and Adults with Attention-Deficit/Hyperactivity Disorder) Helpline (US): 1-800-233-4050
            </Typography>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            1.
                        </ListItemIcon>
                        <ListItemText
                            primary="National Institute of Mental Health (NIMH) Information Resource Center (US): 1-866-615-6464"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            2.
                        </ListItemIcon>
                        <ListItemText
                            primary="ADDISS Helpline (UK): 020 8952 2800"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            3.
                        </ListItemIcon>
                        <ListItemText
                            primary="CADDAC (Centre for ADHD Awareness, Canada) Helpline: 1-800-233-4050"
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            4.
                        </ListItemIcon>
                        <ListItemText
                            primary="ADHD Australia Helpline: 1300 85 22 85"
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default ADHDTab;
