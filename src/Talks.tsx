import { ComponentType } from 'react'
import Talk from './Talk'
import { talks } from './allTalks'

export interface TalksProps {}

const Talks: ComponentType<TalksProps> = () => {
  return (
    <>
      {talks.map((talk) => (
        <Talk key={talk.title} talk={talk} />
      ))}
    </>
  )
}

export default Talks
