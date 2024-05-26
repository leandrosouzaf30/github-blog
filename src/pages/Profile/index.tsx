
import { ProfileContainer, ProfileContent, ProfileDescription, ProfileInfo } from "./styles";
import { GithubLogo, Users, Buildings, ArrowSquareOut } from "phosphor-react";
import { Publicacoes } from "./components/Publicacoes";
import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileContext";



export function Profile(){
    const {user} = useContext(ProfileContext)
    return(
        <div>
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
                <Publicacoes />
            </ProfileContainer>

        </div>

    )
}