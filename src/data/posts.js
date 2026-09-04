export const posts = [
  {
    slug: 'como-construir-una-identidad-de-marca-desde-cero',
    title: 'Cómo construir una identidad de marca desde cero',
    excerpt:
      'Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the brand image and give visitors a taste of the company’s values and personality.',
    date: '26 de agosto de 2026',
    readTime: '7 min. de lectura',
    image: 'https://picsum.photos/seed/enlace-blog-1/737/816',
  },
  {
    slug: 'tendencias-de-diseno-para-2027',
    title: 'Tendencias de diseño para 2027',
    excerpt:
      'Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the brand image and give visitors a taste of the company’s values and personality.',
    date: '2 de agosto de 2026',
    readTime: '5 min. de lectura',
    image: 'https://picsum.photos/seed/enlace-blog-2/737/816',
  },
  {
    slug: 'el-rol-del-branding-en-el-crecimiento-de-un-negocio',
    title: 'El rol del branding en el crecimiento de un negocio',
    excerpt:
      'Let the writing speak for itself. Keep a consistent tone and voice throughout the website to stay true to the brand image and give visitors a taste of the company’s values and personality.',
    date: '20 de julio de 2026',
    readTime: '6 min. de lectura',
    image: 'https://picsum.photos/seed/enlace-blog-3/737/816',
  },
]

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}
