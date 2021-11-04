/** @jsxImportSource @emotion/react */
import { ComponentType } from 'react'
import { Headline, Subtitle } from './baum-ui'

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
      <Headline>{title}</Headline>
      {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
    </hgroup>
  )
}
