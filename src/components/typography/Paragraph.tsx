/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { ComponentType } from 'react'

export const Paragraph: ComponentType = ({ children }) => {
  return (
    <p
      css={css`
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        color: rgba(0, 0, 0, 0.87);
        line-height: 150%;
      `}
    >
      {children}
    </p>
  )
}
