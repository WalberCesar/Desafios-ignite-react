import { Container, HeaderSearchInput } from "./index.style";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchInputSchema = z.object({
  query: z.string(),
});
type SearchInputSchema = z.infer<typeof searchInputSchema>;

type Props = {
  getPosts: (data: string) => Promise<void>;
  postsLength: number;
};
export function SearchInput({ getPosts, postsLength }: Props) {
  const { register, handleSubmit } = useForm<SearchInputSchema>({
    resolver: zodResolver(searchInputSchema),
  });

  function handleSearchPosts(data: SearchInputSchema) {
    getPosts(data.query);
  }
  return (
    <Container onSubmit={handleSubmit(handleSearchPosts)}>
      <HeaderSearchInput>
        <h3>Publicações</h3>
        <p>{postsLength} publicações</p>
      </HeaderSearchInput>
      <input type="text" placeholder="Buscar Conteúdo" {...register("query")} />
    </Container>
  );
}
