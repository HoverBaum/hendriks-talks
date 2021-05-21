/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType } from 'react'

export type CardHeaderProp = {
  title: string
  subtitle?: string
}

export const CardHeader: ComponentType<CardHeaderProp> = ({
  title,
  subtitle,
}) => {
  return (
    <hgroup>
      <h2
        css={css`
          margin-top: 0;
        `}
      >
        {title}
      </h2>
      {!!subtitle && <small>{subtitle}</small>}
    </hgroup>
  )
}
