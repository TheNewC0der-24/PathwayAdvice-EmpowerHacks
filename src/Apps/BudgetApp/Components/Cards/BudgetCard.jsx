import {
    Card,
    CardContent,
    Button,
    Typography,
    CardHeader,
    LinearProgress,
    CardActions,
} from '@mui/material';

import { currencyFormatter } from '../../Utils/utils';

import styles from './BudgetCard.module.css';

export default function BudgetCard({ name, amount, max, normal, handleClickOpenViewExpenses }) {

    const classNames = [];
    if (amount > max) {
        classNames.push(styles.danger);
    } else if (normal) {
        classNames.push(styles.normal);
    }

    return (
        <Card className={classNames.join(" ")} sx={{
            border: "1px solid #DCDFE4",
            color: "#0e1313",
        }} elevation={0}>
            <CardHeader
                title={name}
                action={
                    <Typography variant="h6">
                        {currencyFormatter.format(amount)} {max && <span style={{ fontSize: "15px", opacity: "0.7" }}>/ {currencyFormatter.format(max)}</span>}
                    </Typography>
                }
            />
            {
                max && (
                    <CardContent>
                        <LinearProgress variant="determinate"
                            color={getProgressBarVariant(amount, max)}
                            value={(amount / max) * 100}
                            sx={{
                                backgroundColor: amount > max && "#d32f2f",
                                height: "10px",
                                borderRadius: "5px",
                            }}
                        />
                    </CardContent>
                )
            }
            <CardActions sx={{ float: "right" }}>
                <Button variant="contained" size='small' sx={{
                    bgcolor: "#0e1313",
                    color: "#fff",
                    '&:hover': {
                        bgcolor: "#0e1313",
                    }
                }}
                    onClick={handleClickOpenViewExpenses}
                >
                    View Expenses
                </Button>
            </CardActions>
        </Card>
    )
}

function getProgressBarVariant(amount, max) {
    const ratio = amount / max;
    if (ratio < 0.5) return "success";
    else if (ratio < 0.75) return "warning";
    else return "error";
}