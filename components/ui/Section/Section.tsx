import { Container } from 'next/app'
import React, { FC } from 'react'
import s from './Section.module.css'

interface SectionProps {
  SectionTitle: string
  SectionSubtitle?: string
}

const Section: FC<SectionProps> = (props) => {
  return (
    <div>
      <div className={s.title + ' text-center tracking-widest'}>
        {props.SectionTitle}
      </div>
      <div className={s.subtitle + ' text-center tracking-tighter'}>
        {props.SectionSubtitle}
      </div>
    </div>
  )
}

export default Section
