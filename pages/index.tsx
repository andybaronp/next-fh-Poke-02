import type { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts'
import pokeApi from '../api/pokeApi'
import { PokemonListResponse, SmallPokemon } from '../interfaces/'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon'

interface Propos {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Propos> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokémons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  // objeto pokemons con la data de la consulta solo lo que se necesita
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }))

  return {
    props: {
      pokemons,
    },
  }
}
export default Home
