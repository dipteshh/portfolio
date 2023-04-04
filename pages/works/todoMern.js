import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        To-Do list <Badge>2023-</Badge>
      </Title>
      <P>
        A To-do list website that helps you remember all important tasks. This
        is built using MERN stack and implements all CRUD functionality.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://todo-mern-app-dm.onrender.com/">
            https://todo-mern-app-dm.onrender.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>API</Meta>
          <Link href="https://todo-mern-backend-9q1n.onrender.com/todos">
            https://todo-mern-backend-9q1n.onrender.com/todos
            <ExternalLinkIcon mx="2px" />
            (GET /todos route)
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MongoDB, Express.js, React, NodeJS</span>
        </ListItem>
        <ListItem>
          <Meta>Hosting</Meta>
          <span>Render</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/todoMern1.png" alt="To-Do MERN" />
      <WorkImage src="/images/works/todoMern2.png" alt="To-Do MERN" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
