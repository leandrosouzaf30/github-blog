import { SearchFormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useState } from "react";
import { ProfileContext } from "../../../../context/ProfileContext";

// Mapeia o tipo de dado a ser retornado
const searchFormSchema = z.object({
    query: z.string(),
  });
  
  // Cria tipagem do campo de busca
  type SearchFormInputs = z.infer<typeof searchFormSchema>;


export function BuscaPublicacoes(){
    const {getIssues} = useContext(ProfileContext)

       
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
      } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchTransactions(data: SearchFormInputs){
      getIssues(data.query)
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" placeholder="Busque por conteúdo" {...register('query')}/>
        </SearchFormContainer>          
    )
}