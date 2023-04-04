import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="sample-outline">
    <Container>
      <Title>
        Dike <Badge>2021</Badge>
      </Title>
      <P>
        Dike is a platform which helps users to balance their financials. Using
        an intuitive gamified approach it promotes money management and helps
        individual to start investing early.
      </P>
      {/* <P>Challenges Faced</P> */}
      <br />
      <p>Challenges Faced :</p>
      <UnorderedList my={4}>
        <ListItem>
          The entire flow of data starting from consent approval to obtaining
          the decrypted data is not very intutitve at first. The sample app
          helped a lot to understand it in limited time.
        </ListItem>
        <ListItem>
          Modelling the data obtained from FIU and making sense from it.
        </ListItem>
        <ListItem>
          Writing a react native app and delivering it before the deadline.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, iPhone</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/littlestar642/dike">
            https://github.com/littlestar642/dike
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Hackathon</Meta>
          <Link href="https://devfolio.co/projects/dike-b708">
            https://devfolio.co/projects/dike-b708
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Node.js, Firebase </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dike-thumb.png" alt="Dike" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/dike3.jpeg" alt="dike" />
        <WorkImage src="/images/works/dike1.jpeg" alt="dike" />
        <WorkImage src="/images/works/dike4.png" alt="dike" />
        <WorkImage src="/images/works/dike5.png" alt="dike" />
      </SimpleGrid>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/QTA4KDiMzWM"
          title="Dike Demo  | financial app for students"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
