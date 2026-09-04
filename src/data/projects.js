function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const projects = [
  { name: 'Kaira Surf Camp', category: 'Branding · Identidad visual', row: 1, col: 1 },
  { name: 'Grupo Urbex', category: 'Branding · Diseño digital', row: 1, col: 2 },
  { name: 'Monada', category: 'Branding · Packaging', row: 1, col: 4 },
  { name: 'Better Together', category: 'Branding · Identidad visual', row: 2, col: 2 },
  { name: 'Lucila Barattini', category: 'Identidad visual · Web design', row: 2, col: 3 },
  { name: 'Influence Energy', category: 'Identidad visual · Packaging', row: 3, col: 1 },
  { name: 'BT Homes', category: 'Diseño digital', row: 3, col: 3 },
  { name: 'Enlace Interno', category: 'Branding · Identidad visual', row: 3, col: 4 },
].map((project) => ({
  ...project,
  slug: slugify(project.name),
  image: `https://picsum.photos/seed/enlace-work-${slugify(project.name)}/500/724`,
}))

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
