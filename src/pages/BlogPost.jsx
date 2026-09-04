import { useParams, Link, Navigate } from 'react-router-dom'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import { posts, getPostBySlug } from '../data/posts'
import './BlogPost.css'

const methodologyCopy = `De la suma de la estrategia y el diseño centrado en las personas
surge nuestra metodología, aportando la flexibilidad que las marcas
necesitan para ir más allá de las barreras de su industria y
pertenencia.`

const bodyParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.',
  'Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.',
  'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.',
  'Donec imperdiet, erat sed tincidunt ultrices, magna lorem consectetur justo, vitae interdum neque turpis in mauris. Praesent volutpat, lectus sed facilisis suscipit, libero erat aliquam magna, quis tincidunt lorem ipsum nec augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  'Praesent consectetur, lorem quis tincidunt ullamcorper, libero justo interdum neque, eget malesuada ipsum lorem vitae erat. Suspendisse potenti. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, at suscipit erat justo vitae turpis. Nam interdum, lectus vitae consequat aliquet, augue lorem fermentum justo, sed tincidunt arcu sapien vitae libero.',
  'Nam feugiat, magna quis tincidunt malesuada, lectus augue posuere lorem, non tincidunt purus lacus vel nisi. Etiam at lacus sed erat tristique tincidunt. Donec vitae augue sed magna tincidunt vulputate. Sed malesuada, massa vitae faucibus tincidunt, augue lectus consequat purus, vitae suscipit neque libero sed mauris.',
]

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const heroImage = `https://picsum.photos/seed/enlace-blogpost-hero-${post.slug}/1599/816`
  const inlineImage = `https://picsum.photos/seed/enlace-blogpost-inline-${post.slug}/737/816`
  const otherPosts = posts.filter((p) => p.slug !== post.slug)

  return (
    <>
      <SiteNav />

      <article className="blogpost">
        <header className="blogpost-header">
          <div className="blogpost-meta">
            <p>Date: {post.date}</p>
            <p>{post.readTime}</p>
          </div>
          <h1 className="blogpost-title">{post.title}</h1>
          <p className="blogpost-excerpt">{post.excerpt}</p>
        </header>

        <div className="blogpost-hero">
          <img src={heroImage} alt={post.title} />
        </div>

        <p className="blogpost-copy">{methodologyCopy}</p>

        <div className="blogpost-body">
          <div className="blogpost-inline-image">
            <img src={inlineImage} alt="" loading="lazy" />
          </div>
          <div className="blogpost-text">
            {bodyParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="blogpost-more">
          <h2 className="blogpost-more-heading">Más artículos</h2>
          <div className="blogpost-more-grid">
            {otherPosts.map((p) => (
              <Link to={`/blog/${p.slug}`} className="blogpost-more-card" key={p.slug}>
                <div className="blogpost-more-image">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="blogpost-more-caption">
                  <p>{p.title}</p>
                  <p>{p.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}

export default BlogPost
