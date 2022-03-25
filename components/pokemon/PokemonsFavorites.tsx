import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import CardPokemonFavorite from './CardPokemonFavorite'

interface Props {
  pokemons: number[]
}

export const PokemonsFavorites: FC<Props> = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((id) => (
        <CardPokemonFavorite pokemonId={id} key={id} />
      ))}{' '}
    </Grid.Container>
  )
}
