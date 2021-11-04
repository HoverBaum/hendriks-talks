/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType } from 'react'

export const Title: ComponentType = ({ children }) => {
  return (
    <h1
      css={css`
        color: #334a5e;
        font-family: 'Simonetta-Black', serif;
        font-size: 5.2917rem;
      `}
    >
      {children}
    </h1>
  )
}
