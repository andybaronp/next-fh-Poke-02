import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui'

type Props = {
  title?: string
}
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokémon App'}</title>
        <meta name='author' content='Jhoandris Barón' />
        <meta name='description' content={`Información del Pokémon ${title}`} />
        <meta name='keyword' content={`${title}, pokémon pokemon pokedex`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </>
  )
}
