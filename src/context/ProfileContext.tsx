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
    issues: []
    getUser: () => Promise<void>;
    getIssues: () => Promise<void>;

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
    const [issues, setIssues] = useState([])

    async function getUser() {
        const userGit = 'leandrosouzaf30'
        const response = await api.get(`users/${userGit}`)
        
        setUser(response.data)
    }


    async function getIssues(){
        const response = await api.get('https://api.github.com/repos/leandrosouzaf30/github-blog/issues')
        setIssues(response.data)
    }

    useEffect(()=>{
        getIssues()
        getUser();
    },[])

    return(
        <ProfileContext.Provider value={{
            user,
            issues,
            getUser,
            getIssues,
        }}>
            {children}
        </ProfileContext.Provider>
    );
}