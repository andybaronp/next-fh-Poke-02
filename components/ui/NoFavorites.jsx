import { Container, Image, Text } from '@nextui-org/react'

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 100px)',
      }}
    >
      <Text h1> No hay Favoritos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'
        alt='No Favorites IMG'
        height={350}
        width={350}
        css={{
          opacity: '0.1',
          filter: 'blur(8px)',
        }}
      />
    </Container>
  )
}

export default NoFavorites
