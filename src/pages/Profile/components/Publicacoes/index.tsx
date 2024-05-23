import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { CardContent, PublicacoesCard, PublicacoesContainer, PublicacoesList } from "./styles";

export function Publicacoes(){
    const [issues, setIssues] = useState([])

    async function getIssues(){
        const response = await api.get('https://api.github.com/repos/leandrosouzaf30/github-blog/issues')
        setIssues(response.data)
    }

    useEffect(()=>{
        getIssues()
    },[])

    return(
       <PublicacoesContainer>
            {issues.map(issue=>{
                return(
                    <PublicacoesList key={issue.id}>
                    <PublicacoesCard>
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
                    </PublicacoesCard>
                </PublicacoesList>
                )
            })}
       </PublicacoesContainer> 
    )
}