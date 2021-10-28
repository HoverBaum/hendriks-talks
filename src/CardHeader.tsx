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
      <h2>{title}</h2>
      {!!subtitle && <h4 style={{ marginTop: '1rem' }}>{subtitle}</h4>}
    </hgroup>
  )
}
