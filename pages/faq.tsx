import { Button, Grid } from '@components/ui'
import Section from '@components/ui/Section/Section'
import { Container } from 'next/app'
import Link from 'next/link'
import React, { FC } from 'react'

import Layout from '../components/common/Layout'

interface Props {}

export default function faq(): Props {
  return (
    <Container>
      <Section
        SectionTitle={'Frequently Asked Questions (FAQ)'}
        SectionSubtitle={'Whatever you want to ask'}
      />
      <Link href="/">
        <Button type={'button'}>HOME</Button>
      </Link>
    </Container>
  )
}

faq.Layout = Layout
