import axios from 'axios'

const BASE_URL_API = 'https://bigchair.herokuapp.com/'


type GetHomeResponse = {
    data: string;
};

type CreateUser = {
    email: string,
    frist_name: string,
    last_name: string,
    genre: string,
    age: number,
    contacted: boolean,
    tests: {
        name: string,
        interSearch: number,
        interPerfection: number,
        interCondemnation: number,
        interBTF: number,
        interVictimization: number,
        interAnxious: number,
        interAvoidant: number,
        interInsecure: number,
        interPast: number,
        interProcrastination: number
    }
}

const connectApi = () => {
    const response = axios.get<GetHomeResponse>(BASE_URL_API)
    return response
}

const createAnnonimousUser = (
    email: string,
    frist_name: string,
    last_name: string,
    genre: string,
    age: string,
    contacted: boolean,
    name: string,
    interSearch: number,
    interPerfection: number,
    interCondemnation: number,
    interBTF: number,
    interVictimization: number,
    interAnxious: number,
    interAvoidant: number,
    interInsecure: number,
    interPast: number,
    interProcrastination: number
) => {
    const response = axios.post<CreateUser>(`${BASE_URL_API}api/createAnnonimousUser`,
        {
            email,
            frist_name,
            last_name,
            genre,
            age,
            contacted,
            tests: {
                name,
                interSearch,
                interPerfection,
                interCondemnation,
                interBTF,
                interVictimization,
                interAnxious,
                interAvoidant,
                interInsecure,
                interPast,
                interProcrastination
            }
        })
    return response
}

export {
    createAnnonimousUser,
    connectApi
}