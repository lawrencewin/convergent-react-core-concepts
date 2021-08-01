import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
    root: {
        width: 150,
        height: 150,
        backgroundColor: "lightBlue",
        margin: 20,
        padding: 0,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    content: {
      paddingTop: '45%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
})

export default function SimpleCard(props) {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <Typography className={classes.title} color="textSecondary">
                        {props.title}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
