import React, { useState } from 'react'
import { User, UserDataType } from '../../types'
import './usersStyle.css'
import { UsersTable } from './UsersTable';
import { ModalWindow } from '../../components/ModalWindow';

export const UsersPage: React.FC<UserDataType> = (props: UserDataType) => {
    const [openModal, setOpenModal] = useState(false);
    const [users, setUsers, loading] = props.userData;
    const [editUser, setEditUser] = useState<User | any>(null);

    const handleOpen = (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>, user: User) => {
        e.stopPropagation()
        setEditUser(user)
        setOpenModal(true)
    };
    const handleClose = () => {
        setOpenModal(false);
    };

    const updateUser = (editedUser: User) => {
        setUsers(users.map((user: User) => (user.id === editedUser.id ? editedUser : user)))
    }

    const handleDelete = (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>, id: number) => {
        e.stopPropagation()
        setUsers(users.filter((user: User) => user.id !== id))
    }

    if (loading) {
        return <h2>Loading ...</h2>
    }

    return (
        <>
            <UsersTable rows={users} 
            handleDelete={handleDelete} 
            handleOpen={handleOpen} 
            />
            {openModal && <ModalWindow
                openModal={openModal}
                handleClose={handleClose}
                updateUser={updateUser}
                user={editUser}
            />}
        </>
    )
}
