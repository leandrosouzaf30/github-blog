import { useContext } from "react";
import { CardContent, PublicacoesContainer, PublicacoesHeader, PublicacoesList } from "./styles";
import { ProfileContext } from "../../../../context/ProfileContext";
import { BuscaPublicacoes } from "../BuscaPublicacoes";
import { Link } from "react-router-dom";

export function Publicacoes(){
    const {issues} = useContext(ProfileContext)
    
    return(
        <div>
            <PublicacoesHeader>
                <h3>Publicações</h3>
                <span>{issues.total_count} publicações</span>
            </PublicacoesHeader>
            <BuscaPublicacoes />
            <PublicacoesContainer>
                    {issues.items.map(issue=>{
                        return(
                            <PublicacoesList key={issue.id}>
                                <Link to={`/issue-detail/${issue.number}`}>
                                    <CardContent>
                                        <div>
                                            <h1>{issue.title}</h1>
                                            {/* <span>{issue.created_at}</span> */}
                                            <span>Há 1 dia</span>
                                        </div>
                                        <span>
                                            <pre>{issue.body}</pre>
                                        </span>
                                    </CardContent>
                                </Link>
                            </PublicacoesList>
                            )
                    })}
            </PublicacoesContainer> 
        </div>
    )
}