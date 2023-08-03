import './App.css'
import { UsersPage } from './pages/users/UsersPage'
import { UserDetailPage } from './pages/userDetail/UserDetailPage';
import { HomePage } from './pages/HomePage';
import { useGetUsers } from './hooks/useGetUsers';
import { User } from './types';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  const userData = useGetUsers<User>()
  const [users] = userData
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage userData={userData} />} />
          <Route path="/users/:id" element={<UserDetailPage users={users} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  )
}

export default App
