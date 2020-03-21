import {graphql, useStaticQuery} from 'gatsby';

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query{
        allMdx{
          nodes{
            frontmatter{
              title
              slug
              author
              image{
                sharp:childImageSharp{
                  fluid(
                    maxWidth: 100
                    maxHeight:100
                    duotone: {shadow: "#663399", highlight: "#ddbbff"}
                  ){
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt
              
            }
          }
        }
    `)

    return data.allMdx.nodes.map(posts => ({
        title: posts.frontmatter.title,
        author: posts.frontmatter.author,
        slug: posts.frontmatter.slug,
        image:posts.frontmatter.image,
        excerpt: posts.excerpt

    }))
};

export default usePosts;