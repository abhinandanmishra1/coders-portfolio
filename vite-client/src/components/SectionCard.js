import React from 'react'

function Section({extraClass,children}) {
  return (
    <section className={`section-card ${extraClass || ''}`}>
        {children}
    </section>
  )
}

export default Section;
