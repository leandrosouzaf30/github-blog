
import { ProfileContainer, ProfileContent, ProfileHeader, ProfileInfo } from "./styles";
import { Header } from "../../components/Header";
import { GithubLogo, Users, Buildings, ArrowSquareOut } from "phosphor-react";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

export function Profile(){
    const [user, setUser] = useState({})
    
    async function getUser() {
        const userGit = 'leandrosouzaf30'
        const response = await api.get(`users/${userGit}`)
        
        setUser(response.data)
    }

    useEffect(()=>{
        getUser();
    }, [])
    console.log(user)
    return(
        <div>
            <Header/>
            <ProfileContainer>
                <img src={user.avatar_url} alt="" />
                <ProfileContent>
                    <ProfileHeader>
                        <h1>{user.name}</h1>
                        <a href={user.html_url}>
                            GITHUB
                            <ArrowSquareOut size={22} />    
                        </a>
                    </ProfileHeader>
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
                </ProfileContent>
            </ProfileContainer>
        </div>
    )
}