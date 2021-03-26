import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import './Cards.css'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
    }
})

function Cards({ content }) {
    const classes = useStyles();
    return(
        <div className = { `${classes.root} ` }>
            {content.map(val =>
                <Card 
                    key = { val.id }
                    className={ `${classes.root} card-item`}>
                    <CardContent>
                        <div>
                            { val.review }
                        </div>
                        <div className="user">{ val.name }</div>
                    </CardContent>
                </Card>
                )}
        </div>
    )
}

export default Cards