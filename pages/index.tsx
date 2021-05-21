import Talks from '../src/Talks'

const HomePage = () => {
  return (
    <>
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
