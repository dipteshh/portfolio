import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import todoMern from '../public/images/works/todo-mern.png'
import dikeThumb from '../public/images/works/dike-thumb.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="todoMern" title="To-do list" thumbnail={todoMern}>
            A To-do list website that helps you remember all important tasks.
            This is built using MERN stack and implements all CRUD
            functionality.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <WorkGridItem id="dike" title="Dike" thumbnail={dikeThumb}>
          Dike is a platform which helps users to balance their financials.
          Using an intuitive gamified approach it promotes money management and
          helps individual to start investing early.
        </WorkGridItem>
      </SimpleGrid>
    </Container>
    <br />
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
