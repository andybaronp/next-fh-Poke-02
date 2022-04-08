import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { Pokemon } from '../../interfaces'
import pokeApi from '../../api/pokeApi'
import { Button, Card, Container, Grid, Text } from '@nextui-org/react'
import Image from 'next/image'
import { localfavorites } from '../../utils'
import confetti from 'canvas-confetti'
import { PokemonListResponse } from '../../interfaces/pokemon-list'
import { getPokemonInfo } from '../../utils/getPokemonInfo'

interface Props {
  pokemon: Pokemon
}
const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [favorite, setFavorite] = useState(
    //trae la lista del localstorage
    localfavorites.existInFavorites(pokemon.id)
  )

  const saveFavorite = () => {
    localfavorites.tooggleFavorites(pokemon.id)
    setFavorite(!favorite)
    if (favorite) return
    // Efecto confeti
    confetti({
      zIndex: 999,
      particleCount: 150,
      spread: 100,
      angle: -150,
      origin: {
        x: 1,
        y: 0,
      },
    })
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card css={{ padding: '30px' }} hoverable>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  '/otro.png'
                }
                alt={pokemon.name}
                width='100%'
                height={100}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>
              <Button
                color={'gradient'}
                ghost={!favorite}
                onClick={saveFavorite}
              >
                {!favorite ? 'Guardar en favoritos' : 'En favoritos ❤️'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Stripes: </Text>
              <Container direction='row' justify='space-between' display='flex'>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />{' '}
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />{' '}
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />{' '}
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
// Pathd static  trabaja con el staticProps
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`)
  const pokemonsName: string[] = data.results.map((pokemon) => pokemon.name)
  return {
    paths: pokemonsName.map((name) => ({
      params: { name },
    })),
    // false si no pasa los que no existen- blocking verifica estando en build
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }
  const pokemon = await getPokemonInfo(name)
  // verifica si existe o no hace la consulta sino redirige
  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        // si la redireción es permanente o no
        permanent: false,
      },
    }
  }

  return {
    props: {
      pokemon,
    },
    // Revalida en segundos
    revalidate: 86400,
  }
}
export default PokemonByNamePage
