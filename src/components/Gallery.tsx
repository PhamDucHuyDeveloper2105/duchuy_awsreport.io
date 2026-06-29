interface GalleryProps {
  items?: Array<{ title: string; src: string; alt: string }>
}

const Gallery = ({
  items = [
    { title: 'Diagram', src: '/assets/hero.png', alt: 'Project diagram' },
    { title: 'Architecture', src: '/assets/hero.png', alt: 'Architecture visual' },
    { title: 'Cloud', src: '/assets/hero.png', alt: 'Cloud illustration' },
  ],
}: GalleryProps) => {
  return (
    <section className="gallery-grid">
      {items.map((item) => (
        <figure key={item.title} className="gallery-card">
          <img src={item.src} alt={item.alt} loading="lazy" />
          <figcaption>{item.title}</figcaption>
        </figure>
      ))}
    </section>
  )
}

export default Gallery
