import Head from 'next/head'
// import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
// import Model from '../model'
// import { Canvas } from '@react-three/fiber'
// import Model3DLoader from '../model3d-loader'

// const Model3D = dynamic(() => import('../model3d'), {
//   ssr: false,
//   loading: () => <Model3DLoader />
// })

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Diptesh's homepage" />
        <meta name="author" content="Diptesh Mohanta" />
        <meta property="og:site_name" content="Diptesh Mohanta" />
        <meta name="og:title" content="Diptesh Mohanta" />
        <meta property="og:type" content="website" />
        <title>Diptesh Mohanta - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <Mpodel3D /> */}
        <br />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
