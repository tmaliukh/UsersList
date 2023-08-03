import { Link } from 'react-router-dom'

export const HomePage: React.FC = () => {
    return (
        <div>
            <Link to='/users'>Visit users page</Link>
        </div>
    )
}
