import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { User } from '../types';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

type ModalProps = {
    openModal: boolean,
    handleClose: () => void,
    user: User,
    updateUser: (arg: User) => void,
}

export const ModalWindow = ({ openModal, handleClose, user, updateUser }: ModalProps) => {
    const [formData, setFormData] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        company: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const updatedUser = Object.assign(user, {
            ...formData, company: {
                ...user.company,
                name: formData.company
            }
        });
        updateUser(updatedUser)
        handleClose()
    };
    React.useEffect(() => {
        setFormData({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            company: user.company.name
        });
    }, [user])

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: '20px' }}>
                        Edit user
                    </Typography>
                    <form style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        <TextField
                            name="firstname"
                            id="outlined"
                            helperText="Set firstname"
                            size="small"
                            fullWidth
                            value={formData.firstname}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            id="outlined"
                            name="lastname"
                            defaultValue={user.lastname}
                            helperText="Set lastname"
                            size="small"
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            id="outlined"
                            name="email"
                            defaultValue={user.email}
                            helperText="Set email"
                            size="small"
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            id="outlined"
                            name="company"
                            defaultValue={user.company?.name}
                            helperText="Set company"
                            size="small"
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                    </form>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button variant="outlined" size='small' onClick={handleSubmit}>Save</Button>
                        <Button
                            variant="outlined"
                            size='small'
                            style={{ marginLeft: '20px' }}
                            onClick={handleClose}
                        >Close</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}