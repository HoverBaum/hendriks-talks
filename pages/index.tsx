/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'
import Talks from '../src/Talks'

const HomePage = () => {
  return (
    <>
      <Global
        styles={css`
          html {
            background-color: #ededed;
            font: normal 16px/22px 'Roboto', sans-serif;
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
            font-weight: 300;
          }
          .wrapper {
            width: 50rem;
            padding-top: 1rem;
            max-width: 90%;
          }
          .year {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            opacity: 0.3;
          }
        `}
      />
      <header className="wrapper">
        <hgroup className="page-heading">
          <h1>Talks by Hendrik</h1>
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

      <main className="wrapper" id="talks">
        <Talks />
      </main>

      <footer className="wrapper">
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
    </>
  )
}

export default HomePage
