import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '../../types';
import { pink, grey } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './usersStyle.css'
import { useNavigate } from 'react-router-dom';

type PropsType = {
    rows: User[],
    handleDelete: (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>, arg: number) => void,
    handleOpen: (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>, arg: User) => void,
}

export const UsersTable = ({ rows, handleDelete, handleOpen }: PropsType) => {
    const navigate = useNavigate();

    const navigateUserDetailPage = (id: number) => {
        navigate(`/users/${id}`);
    };
    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='table-row'>
                    <TableRow >
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell align="right">Last name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody className='table-body'>
                    {rows?.map((row, i) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className='table-row'
                            onClick={() => navigateUserDetailPage(row.id)}
                        >
                            <TableCell align="right">{i+1}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.firstname}
                            </TableCell>
                            <TableCell align="right">{row.lastname}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.company?.name}</TableCell>
                            <TableCell align="right" className='action-cell' onClick={(e) => handleDelete(e, row.id)}><DeleteIcon sx={{ color: pink[500] }} /></TableCell>
                            <TableCell align="right" className='action-cell' onClick={(e) => handleOpen(e, row)}><EditOutlinedIcon sx={{ color: grey[500] }} /></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}