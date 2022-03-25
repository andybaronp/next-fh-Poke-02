import { FC } from 'react'
import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface Props {
  pokemonId: number
}

const CardPokemonFavorite: FC<Props> = ({ pokemonId }) => {
  const router = useRouter()

  const onFavoriteClick = () => {
    router.push(`/pokemon/${pokemonId}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable css={{ padding: 10 }} onClick={onFavoriteClick}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt='No Favorites IMG'
          height={150}
          width={150}
        />
      </Card>
    </Grid>
  )
}

export default CardPokemonFavorite
