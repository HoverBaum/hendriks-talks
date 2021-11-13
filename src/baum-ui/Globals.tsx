import { css, Global } from '@emotion/react'

export const Globals = () => (
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
        font: normal 18px 'Roboto', sans-serif;
        color: rgba(0, 0, 0, 0.87);
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
)
