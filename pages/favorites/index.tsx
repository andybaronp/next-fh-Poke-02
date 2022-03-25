import { Layout } from '../../components/layouts'
import NoFavorites from '../../components/ui/NoFavorites'
import { useEffect, useState } from 'react'
import { localfavorites } from '../../utils'
import { PokemonsFavorites } from '../../components/pokemon'
const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(localfavorites.pokemonslist())
  }, [])

  return (
    <Layout title='Pokemon favoritos'>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonsFavorites pokemons={favorites} />
      )}
    </Layout>
  )
}

export default FavoritesPage
