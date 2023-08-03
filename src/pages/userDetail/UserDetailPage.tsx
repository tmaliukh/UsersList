import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { User } from '../../types';

export const UserDetailPage = ({ users }: {users: User[]}) => {
  let { id } = useParams();
  const user = users.find((user: User) => user.id === Number(id));

  if (!user) {
    return <h2>Not found</h2>
  }

  return (
    <div>
      <Typography variant='h3' align='left'>{`${user?.firstname} ${user?.lastname}`}</Typography>
      <Typography align='left'>Email: {user?.email}</Typography>
      <Typography align='left'>BirthDate: {user?.birthDate}</Typography>
      <Typography align='left'>Phone: {user?.phone}</Typography>
      <Typography align='left'>Website: {user?.website}</Typography>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Typography align='left'>Company: </Typography>
        <div>
          <Typography align='left'>Name: {user?.company?.name}</Typography>
          <Typography align='left'>Bs: {user?.company?.bs}</Typography>
          <Typography align='left'>CatchPhrase: {user?.company?.catchPhrase}</Typography>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Typography align='left'>Address: </Typography>
        <div>
          <Typography align='left'>City: {user?.address?.city}</Typography>
          <Typography align='left'>Street: {user?.address?.street}</Typography>
          <Typography align='left'>Zipcode: {user?.address?.zipcode}</Typography>
        </div>
      </div>
    </div>
  )
}
