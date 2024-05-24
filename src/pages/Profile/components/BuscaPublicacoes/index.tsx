import { SearchFormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { api } from "../../../../lib/axios";

// Mapeia o tipo de dado a ser retornado
const searchFormSchema = z.object({
    query: z.string(),
  });
  
  // Cria tipagem do campo de busca
  type SearchFormInputs = z.infer<typeof searchFormSchema>;


export function BuscaPublicacoes(){
    const [searchIssue, SetsearcheIssue] = useState([])

       
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
      } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactions(data: SearchFormInputs){
        const owner = "leandrosouzaf30"
        const repo = "github-blog"
        const fullQuery = `${data.query} repo:${owner}/${repo}`;
  
        const response = await api.get('search/issues', {
            params: {
              q: fullQuery
            }
          })
      
          SetsearcheIssue(response.data)
          console.log(searchIssue)
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" placeholder="Busque por transações" {...register('query')}/>
        </SearchFormContainer>          
    )
}