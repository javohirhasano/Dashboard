import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from '../../redux/action';
import UserWrapper from './UserWrapper';
import { Table, TableHead, TableRow, TableCell, TableBody, LinearProgress } from '@material-ui/core';

const User = () => {
    const users = useSelector(state => state.users);
    const isLoad = useSelector(state => state.isLoading);

    console.log(users);
    const dispatch = useDispatch()
    useEffect(() => {
        setUsers(dispatch)
    }, [])
    return (
        <UserWrapper>
            {isLoad && <LinearProgress className="m-3" /> || users.length > 0 &&
                < Table className="table col-md-4 col-sm-5 col-lg-3">
                    <TableHead>
                        <TableRow className="rows">
                            <TableCell className="text"><span className="text-danger">ID</span></TableCell>
                            <TableCell className="text"><span className="text-danger">Name</span></TableCell>
                            <TableCell className="text"><span className="text-danger">username</span></TableCell>
                            <TableCell className="text"><span className="text-danger">Email</span></TableCell>
                            <TableCell className="text"><span className="text-danger">Phone</span></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users ?.map(v =>
                            <TableRow >
                                <TableCell className="text">{v.id}</TableCell>
                                <TableCell className="text">{v.name}</TableCell>
                                <TableCell className="text">{v.username}</TableCell>
                                <TableCell className="text">{v.email}</TableCell>
                                <TableCell className="text">{v.phone}</TableCell>

                            </TableRow>
                        )}
                    </TableBody>
                </Table> || "QAYTA URUNIB KURING"}
        </UserWrapper >
    )
}
export default User