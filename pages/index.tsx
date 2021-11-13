/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import { Paragraph, Small, Title, Globals } from '../src/baum-ui'
import Talks from '../src/Talks'

const HomePage = () => {
  return (
    <div
      css={css`
        padding-top: 1rem;
        max-width: 50rem;
        padding: 0 1rem;
      `}
    >
      <Global
        styles={css`
          body {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            min-height: 100vh;
            padding-top: 1rem;
          }
          footer {
            margin-top: 3rem;
            padding-bottom: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      />
      <Globals />
      <header>
        <Title>Talks by Hendrik</Title>

        <Paragraph>
          This is a list of publically available slides from the talks I have
          given.
        </Paragraph>
        <Paragraph>
          Images for my talks are generally taken from{' '}
          <a href="https://unsplash.com/">unsplash.com</a> and I save them into
          a{' '}
          <a href="https://unsplash.com/collections/4603698/talks">
            collection of images for my talks
          </a>
          .
        </Paragraph>
      </header>

      <main id="talks">
        <Talks />
      </main>

      <footer>
        <img src="https://storage.googleapis.com/hoverbaum-blog-assets/emojies/emoji-tree.png" />

        <Small>
          You can also checkout: <a href="https://hoverbaum.net/">my blog</a>,{' '}
          <a href="http://hendrikwallbaum.de">my personal page</a> and{' '}
          <a href="https://github.com/HoverBaum/hendriks-talks">
            this page on GitHub
          </a>
          .
        </Small>
      </footer>
    </div>
  )
}

export default HomePage
