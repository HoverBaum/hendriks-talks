/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType } from 'react'

export type CardProps = {
  elevation?: 1 | 2 | 3
}

const boxShadows: string[] = [
  'box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);',
  'box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);',
  'box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);',
]

export const Card: ComponentType<CardProps> = ({ children, elevation = 1 }) => {
  return (
    <section
      css={css`
        background: #fff;
        border-radius: 2px;
        margin: 1rem;
        margin-top: 2rem;
        padding: 1rem;
        padding-top: 1.2rem;
        position: relative;
        ${boxShadows[elevation - 1]}
      `}
    >
      {children}
    </section>
  )
}
