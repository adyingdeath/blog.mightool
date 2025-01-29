import React from 'react'

interface TocItem {
  title: string
  id: string
  depth: number
}

interface TocProps {
  toc: TocItem[]
  title: string
}

function TOC({ toc, title }: TocProps) {
  return (
    <div className="toc-container mb-4">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <nav className="toc-nav">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-gray-600 hover:text-gray-900 transition-colors"
            style={{
              paddingLeft: `${(item.depth - 1) * 1}rem`,
              marginBottom: '0.5rem',
              fontSize: item.depth === 1 ? '1rem' : '0.9rem',
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default TOC
