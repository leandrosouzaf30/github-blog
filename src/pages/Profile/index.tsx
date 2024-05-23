
import { ProfileContainer, ProfileContent, ProfileDescription, ProfileInfo } from "./styles";
import { Header } from "../../components/Header";
import { GithubLogo, Users, Buildings, ArrowSquareOut } from "phosphor-react";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { Publicacoes } from "./components/Publicacoes";
import { BuscaPublicacoes } from "./components/BuscaPublicacoes";

interface User {
    avatar_url: string,
    name: string,
    hml_url: string,
    bio: string,
    login: string,
    company: string,
    followers: number
}

export function Profile(){
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
        <div>
            <Header/>
            <ProfileContainer>
                <ProfileContent>
                    <img src={user.avatar_url} alt="" />
                    <ProfileDescription>
                        <head>
                            <h1>{user.name}</h1>
                            <a href={user.hml_url}>
                                GITHUB
                                <ArrowSquareOut size={22} />    
                            </a>
                        </head>
                        <span>{user.bio}</span>
                        <ProfileInfo>
                            <span>
                                <GithubLogo size={32} />
                                {user.login}
                            </span>
                            
                            <span>
                                <Buildings size={32} />
                                {user.company}
                            </span>
                            
                            <span>
                                <Users size={32} />
                                {user.followers} seguidores
                            </span>
                            
                        </ProfileInfo>
                    </ProfileDescription>
                </ProfileContent>
                <BuscaPublicacoes/>
                <Publicacoes />
            </ProfileContainer>

        </div>

    )
}