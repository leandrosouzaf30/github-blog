import { useContext, useEffect, useState } from "react";
import { GithubLogo, Users, Buildings, ArrowSquareOut } from "phosphor-react";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { DetailContainer, DetailContent, DetailDescription, DetailInfo } from "./styled";
import { api } from "../../../../lib/axios";
import { Link, useParams } from "react-router-dom";
import { ProfileContext } from "../../../../context/ProfileContext";


interface DetailIssue{
    title: string,
    user: string,
    created_at: string,
    body: string,
    html_url: string,
    
}

export function IssueDetail(){
    const {user} = useContext(ProfileContext)
    const {number} = useParams(); 
    const [comments, setComments] = useState([])
    const [detail, setDetail] = useState<DetailIssue>({
        title: '',
        user: '',
        created_at: '',
        body: '',
        html_url: '',
        
    })
    const repo = "github-blog"
    const baseUrl = `repos/${user.login}/${repo}/issues`

    async function getIssueDetail(){
        const url = `${baseUrl}/${number}`
        const response = await api.get(url)
        setDetail(response.data); 
    }

    async function commentsNumber() {
        const url = `${baseUrl}/${number}/comments`
        const response = await api.get(url)
        setComments(response.data); 
    }

    useEffect(()=>{
        getIssueDetail()
        commentsNumber()
    }, [])
    return(
        <div>
            <DetailContainer>
                <DetailContent>
                    <DetailDescription>
                        <head>
                                <Link to="/">Voltar</Link>
                                <a href={detail.html_url} target="_blank">
                                    Ver no Github
                                    <ArrowSquareOut size={22} />    
                                </a>
                        </head>
                        <span>{detail.title}</span>
                        <DetailInfo>
                        <span>
                                <GithubLogo size={32} />
                                {user.name}
                            </span>
                            
                            <span>
                                <Buildings size={32} />
                                {detail.created_at}
                            </span>
                            
                            <span>
                                <Users size={32} />
                                {comments.length} comentários
                            </span>
                        </DetailInfo>
                    </DetailDescription>
                </DetailContent>
                <Markdown remarkPlugins={[remarkGfm]}>{detail.body}</Markdown>
            </DetailContainer>
        </div>    

    )
}