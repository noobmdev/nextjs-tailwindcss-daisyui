import useTrans from '@/hooks/useTrans';

export default function Home() {
  const trans = useTrans();

  return (
    <div>
      <div>
        <h3>
          {trans.home.title}
          {/* Welcome to <TitleLink href="https://nextjs.org">Next.js!</TitleLink> */}
        </h3>

        {/* <h2>
          Get started by editing <div>pages/index.tsx</div>
        </h2> */}

        {/* <Cards>
          <Card href="https://nextjs.org/docs">
            <CardTitle>Documentation &rarr;</CardTitle>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card href="https://nextjs.org/learn">
            <CardTitle>Learn &rarr;</CardTitle>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/canary/examples">
            <CardTitle>Examples &rarr;</CardTitle>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Card>
        </Cards> */}
      </div>

      {/* <Footer>
        <FooterCopyRight
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </FooterCopyRight>
      </Footer> */}
    </div>
  );
}
