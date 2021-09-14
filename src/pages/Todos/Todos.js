import React, { useEffect } from 'react'
import TodosWrapper from "./TodosWrapper"
import { useSelector, useDispatch } from 'react-redux'
import { setTodos } from '../../redux/action'

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { LinearProgress } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

const Todos = () => {
    const classes = useStyles();
    const todos = useSelector(state => state.todos)
    const isLading = useSelector(state => state.isLoading)

    const dispatch = useDispatch()
    useEffect(() => {
        setTodos(dispatch)
    }, [])

    return (
        <TodosWrapper >
            {isLading && <LinearProgress className="m-3" /> || todos.length > 0 &&
                <div >
                    <div className={classes.root} >
                        <Accordion className="containtodo">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {todos ?.map(v =>
                                        <div className="d-flex ps-2">
                                            <h3 className="me-3 ">{v.id}</h3>
                                            <h3 className="text2">{v.title}</h3>
                                        </div>

                                    )}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            }
        </TodosWrapper>


    )

}
export default Todos