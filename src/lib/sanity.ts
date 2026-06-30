// Sanity CMS integration - configure after Sanity project setup
// See: https://www.sanity.io/docs/getting-started-with-sanity

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
}
