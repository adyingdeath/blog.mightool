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
      <h1 className="text-lg font-bold mb-4">{title}</h1>
      <nav className="toc-nav">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              block text-gray-600 hover:text-gray-900 transition-colors
              ${item.depth > 1 ? 'border-l border-gray-200' : ''}
            `}
            style={{
              paddingLeft: `${item.depth * 1.25}rem`,
              marginTop: `${0.5 - (item.depth - 1) * 0.1}rem`,
              marginBottom: `${0.5 - (item.depth - 1) * 0.1}rem`,
              fontSize: `${1.1 - item.depth * 0.1}rem`,
              opacity: 1 - (item.depth - 1) * 0.1,
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
