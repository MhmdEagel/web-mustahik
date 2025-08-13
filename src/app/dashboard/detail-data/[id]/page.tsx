import DetailData from '@/components/views/DataMustahik/DetailData/DetailData'
import { createMetadata } from '@/lib/utils';
import React from 'react'

export const generateMetadata = () => createMetadata({ title: "Detail Data" });

export default async function DetailDatapage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params
  return (
    <DetailData mustahikId={id}/>
  )
}
