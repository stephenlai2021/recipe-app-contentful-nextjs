import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getAllRecipes = async () => {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'recipe' })

  return { recipes: res.items } 
}

export const getRecipeBySlug = async slug => {

  const { items } = await client.getEntries({
    content_type: "recipe",
    'fields.slug': slug
  })

  return { items }
}