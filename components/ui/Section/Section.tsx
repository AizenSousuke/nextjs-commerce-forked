import { Container } from 'next/app'
import React, { FC } from 'react'
import s from './Section.module.css'

interface SectionProps {
  SectionTitle: string
  SectionSubtitle?: string
}

const Section: FC<SectionProps> = (props) => {
  return (
    <Container>
      <div className="grid grid-cols-1">
          <div className={s.title + " text-center tracking-widest"}>{props.SectionTitle}</div>
          <div className={s.subtitle + " text-center tracking-tighter"}>{props.SectionSubtitle}</div>
      </div>
    </Container>
  )
}

export default Section
