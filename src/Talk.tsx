import { ComponentType } from 'react'
import { TalkType } from './allTalks'

export interface TalkProps {
  talk: TalkType
}

const Talk: ComponentType<TalkProps> = ({ talk }) => {
  return (
    <section className="card card_1">
      <hgroup>
        <h2>{talk.title}</h2>
        <small>{talk.subtitle}</small>
      </hgroup>
      <p>{talk.description}</p>
      <ul>
        {talk.links &&
          talk.links.map((link) => (
            <li>
              <a target="_blank" href="${link.href}">
                {link.text}
              </a>
            </li>
          ))}
      </ul>
      <span className="year">{talk.year}</span>
    </section>
  )
}

export default Talk
