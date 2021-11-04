/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { ComponentType } from 'react'

export const Subtitle: ComponentType = ({ children }) => {
  return (
    <h4
      css={css`
        margin: 0;
        font-size: 1.333rem;
        color: #334a5e;
        font-family: 'Simonetta-Black', serif;
      `}
    >
      {children}
    </h4>
  )
}
