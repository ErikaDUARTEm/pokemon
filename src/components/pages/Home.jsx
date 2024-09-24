import PokemonList from "../organisms/pokemonList/PokemonList";
import { Search } from "../organisms/search/Search";

export function Home (){
return (
    <>
        <Search/>
        <PokemonList/>
    </>
)
}