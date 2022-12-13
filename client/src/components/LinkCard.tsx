import React, { FC } from 'react'

export interface LinkCardProps {
    _id: string,
    from: string,
    to: string, 
    code: string, 
    date: Date, 
    clicks: number, 
    owner: string,
}

interface LinkCardUse {
    link: LinkCardProps,
}

export const LinkCard: FC<LinkCardUse> = ( {link}) => {

  console.log(link);
  
  return (
    <>
      <h2>Link</h2>

      <p>Your Link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>From: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Number of clicks: <strong>{link.clicks}</strong></p>
      <p>Date of creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
  )
}