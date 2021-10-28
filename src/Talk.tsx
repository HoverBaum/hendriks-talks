/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType } from 'react'
import { TalkType } from './allTalks'
import { Card } from './Card'
import { CardHeader } from './CardHeader'
import { Paragraph } from './components/typography/Paragraph'

export interface TalkProps {
  talk: TalkType
}

const Talk: ComponentType<TalkProps> = ({ talk }) => {
  return (
    <section
      css={css`
        position: relative;
      `}
    >
      <CardHeader title={talk.title} subtitle={talk.subtitle} />
      <Paragraph>{talk.description}</Paragraph>
      <ul>
        {talk.links &&
          talk.links.map((link) => (
            <li key={link.href}>
              <a
                target="_blank"
                href={link.href}
                css={css`
                  color: inherit;
                `}
              >
                {link.text}
              </a>
            </li>
          ))}
      </ul>
      <span
        css={css`
          position: absolute;
          right: 1rem;
          opacity: 0.3;
        `}
      >
        {talk.year}
      </span>
    </section>
  )
}

export default Talk
