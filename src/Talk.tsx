import { ComponentType } from 'react'
import { TalkType } from './allTalks'
import { Card } from './Card'
import { CardHeader } from './CardHeader'

export interface TalkProps {
  talk: TalkType
}

const Talk: ComponentType<TalkProps> = ({ talk }) => {
  return (
    <Card>
      <CardHeader title={talk.title} subtitle={talk.subtitle} />
      <p>{talk.description}</p>
      <ul>
        {talk.links &&
          talk.links.map((link) => (
            <li key={link.href}>
              <a target="_blank" href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
      </ul>
      <span className="year">{talk.year}</span>
    </Card>
  )
}

export default Talk
