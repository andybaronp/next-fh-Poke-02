import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui'

type Props = {
  title?: string
}
// verifica si existe el objeto window para trabajar en front o back
const origin = typeof window === 'undefined' ? '' : window.location.origin

// Layout principal
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokémon App'}</title>
        <meta name='author' content='Jhoandris Barón' />
        <meta name='description' content={`Información del Pokémon ${title}`} />
        <meta name='keyword' content={`${title}, pokémon pokemon pokedex`} />
        <meta property='og:title' content={`Info sobre ${title}`} />
        <meta property='og:description' content={`Description from ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
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
