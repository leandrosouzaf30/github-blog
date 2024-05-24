import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";


interface ProfileProviderProps {
    children: ReactNode
}

interface User {
    avatar_url: string,
    name: string,
    hml_url: string,
    bio: string,
    login: string,
    company: string,
    followers: number
}

interface ProfileContextType {
    user: User;
    getUser: () => Promise<void>;
  }

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({children}: ProfileProviderProps) {
    const [user, setUser] = useState<User>({
        avatar_url: '', 
        name: '', 
        hml_url: '',
        bio: '', 
        login: '', 
        company: '', 
        followers: 0
    })

    async function getUser() {
        const userGit = 'leandrosouzaf30'
        const response = await api.get(`users/${userGit}`)
        
        setUser(response.data)
    }

    useEffect(()=>{
        getUser();
    }, [])

    return(
        <ProfileContext.Provider value={{
            user,
            getUser
        }}>
            {children}
        </ProfileContext.Provider>
    );
}