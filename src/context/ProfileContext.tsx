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


interface Items{
    id: number,
    number: number,
    title: string,
    body: string
}

interface Issues {
    total_count: number,
    items: Items[]
}

interface ProfileContextType {
    user: User;
    issues: Issues;
    getUser: () => Promise<void>;
    getIssues: (query?:string) => Promise<void>;

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
    const [issues, setIssues] = useState<Issues>({
        total_count: 0,
        items:[{
            id: 0,
            number: 0,
            title: '',
            body: ''
        }]
    })

    async function getUser() {
        const userGit = 'leandrosouzaf30'
        const response = await api.get(`users/${userGit}`)
        
        setUser(response.data)
    }


    async function getIssues(query?: string){
        const q = query ? query : ''
        // const response = await api.get('https://api.github.com/repos/leandrosouzaf30/github-blog/issues')
        const owner = "leandrosouzaf30"
        const repo = "github-blog"
        const fullQuery = `${q} repo:${owner}/${repo}`;
  
        const response = await api.get('search/issues', {
            params: {
              q: fullQuery
            }
          })
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
            getIssues
        }}>
            {children}
        </ProfileContext.Provider>
    );
}