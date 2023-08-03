import axios from 'axios'
import { useEffect, useState } from 'react'

const URL: string = 'https://jsonplaceholder.org'

export const useGetUsers = <T>() => {
    const [users, setUsers] = useState<T[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getUsers = async () => {
        try {
            setLoading(true)
            const users = await axios.get(
                `${URL}/users`,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );
            return users.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            }
        }
    }

    useEffect(() => {
        getUsers().then((res: T[]) => {
            setUsers(res)
            setLoading(false)
        })
    }, [])

    return [users, setUsers, loading] as const
};