import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'

export const Navbar = () => {
  const { theme } = useTheme()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 30px',
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
        }
        alt='icon Pokémon de la aplicación'
        width={70}
        height={70}
      />

      <NextLink href='/' passHref>
        <Link>
          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okémon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href={'/favorites'} passHref>
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
