import RecipeCard from '../components/RecipeCard'
import { getAllRecipes } from '../helpers/api-utils'

export async function getStaticProps() {

  const { recipes } = await getAllRecipes()

  return { props: { recipes } }
}

export default function Recipes({ recipes }) {
  console.log(recipes)

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}