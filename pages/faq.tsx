import { Button, Grid } from '@components/ui'
import Section from '@components/ui/Section/Section'
import { Container } from 'next/app'
import Link from 'next/link'
import React, { FC } from 'react'

import Layout from '../components/common/Layout'

interface Props {}

export default function faq(): Props {
  return (
    <div className="grid grid-flow-row">
      <Section
        SectionTitle={'Frequently Asked Questions (FAQ)'}
        SectionSubtitle={'Whatever you want to ask'}
      />
      <div className="grid grid-flow-col">
        <div className="col-span-4"></div>
        <Link href="/">
          <Button type={'button'}>HOME</Button>
        </Link>
        <div className="col-span-4"></div>
      </div>
    </div>
  )
}

faq.Layout = Layout
