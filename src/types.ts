export type User = {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    company: UserCompany
    birthDate?: string;
    phone?: string;
    website?: string;
    address?: UserAddress;
};

type UserCompany = {
    bs: string;
    catchPhrase: string;
    name: string;
}
type UserAddress = {
    city: string;
    street: string;
    zipcode: string;
}

export type ActionFunction = React.Dispatch<React.SetStateAction<boolean>>

export type UserDataType = readonly [User[], React.Dispatch<React.SetStateAction<User[]>>, boolean]