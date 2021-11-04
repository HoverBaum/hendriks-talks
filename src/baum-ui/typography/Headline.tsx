/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType } from 'react'

export const Headline: ComponentType = ({ children }) => {
  return (
    <h2
      css={css`
        color: #334a5e;
        font-family: 'Simonetta-Black', serif;
        font-size: 2.6458rem;
        margin-top: 2.074em;
        margin-bottom: 0.2rem;
      `}
    >
      {children}
    </h2>
  )
}
