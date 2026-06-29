import type { ReactNode } from 'react'

interface CardProps {
  title: string
  children: ReactNode
  accent?: string
}

const Card = ({ title, children, accent = '#aa3bff' }: CardProps) => {
  return (
    <article className="card" style={{ borderTopColor: accent }}>
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </article>
  )
}

export default Card
