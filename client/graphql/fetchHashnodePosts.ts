
export const FETCH_ARTICLES = `
query GetPosts ($after: String) {
  publication(host: "frankiefab.hashnode.dev") {
    posts(first: 6, after: $after) {
      edges {
        node {
          coverImage {
            url
          }
          title
          brief
          url
          publishedAt
          readTimeInMinutes
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
`;