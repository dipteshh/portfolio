import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="sample-outline">
    <Container>
      <Title>
        Name <Badge>year</Badge>
      </Title>
      <P>Description</P>
      <P>More Description(if needed)</P>
      <UnorderedList my={4}>
        <ListItem>List item 1 ...(if needed)</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Lorem</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Lorem </span>
        </ListItem>
        <ListItem>
          <Meta>Lorem</Meta>
          <Link href="#">
            Lorem <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Lorem</Meta>
          <Link href="#">
            Lorem
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="#">
            Lorem <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/menkiki_01.png" alt="menkiki" />
        <WorkImage src="/images/works/menkiki_02.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
