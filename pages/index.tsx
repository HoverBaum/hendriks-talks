/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
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
          @font-face {
            font-family: 'Simonetta-Black';
            src: url('/fonts/Simonetta-Black.ttf');
          }
          @font-face {
            font-family: 'Simonetta';
            src: url('/fonts/Simonetta-Regular.ttf');
          }
          html {
            font: normal 16px 'Roboto', sans-serif;
            color: rgba(0, 0, 0, 0.87);
          }
          body {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            min-height: 100vh;
            padding-top: 1rem;
          }
          main {
            flex-grow: 1;
          }
          footer {
            margin-top: 3rem;
            padding-bottom: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          hgroup h2 {
            margin-bottom: 0.2rem;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #334a5e;
            font-family: 'Simonetta-Black', serif;
            line-height: 100%;
          }
          h1 {
            font-size: 5.2917rem;
            margin-top: 2.488em;
          }
          h2 {
            font-size: 2.6458rem;
            margin-top: 2.074em;
          }
          h3 {
            font-size: 1.75rem;
            margin-top: 1.728em;
          }
          h4 {
            font-size: 1.333rem;
            margin-top: 1.44em;
          }
          small {
            font-size: 0.7708rem;
          }
          p {
            line-height: 150%;
          }
          a {
            color: #cc3600;
          }
          ::selection {
            background: #ff6933;
            color: white;
          }
        `}
      />
      <header>
        <hgroup className="page-heading">
          <h1
            css={css`
              margin-top: 0;
            `}
          >
            Talks by Hendrik
          </h1>
          <p>
            This is a list of publically available slides from the talks I have
            given.
          </p>
          <p>
            Images for my talks are generally taken from{' '}
            <a href="https://unsplash.com/">unsplash.com</a> and I save them
            into a{' '}
            <a href="https://unsplash.com/collections/4603698/talks">
              collection of images for my talks
            </a>
            .
          </p>
        </hgroup>
      </header>

      <main id="talks">
        <Talks />
      </main>

      <footer>
        <img src="https://storage.googleapis.com/hoverbaum-blog-assets/emojies/emoji-tree.png" />

        <small>
          You can also checkout: <a href="https://hoverbaum.net/">my blog</a>,{' '}
          <a href="http://hendrikwallbaum.de">my personal page</a> and{' '}
          <a href="https://github.com/HoverBaum/hendriks-talks">
            this page on GitHub
          </a>
          .
        </small>
      </footer>
    </div>
  )
}

export default HomePage
