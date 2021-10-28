/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType } from 'react'
import { Headline } from './components/typography/Headline'
import { Subtitle } from './components/typography/Subtitle'

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
