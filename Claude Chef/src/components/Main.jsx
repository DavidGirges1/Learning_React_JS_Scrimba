import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsEle = ingredients.map((element) => {
    return <li>{element}</li>;
  });

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  return (
    <main>
      <form className="add-ingredient-form" action={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <ul>{ingredientsEle}</ul>
    </main>
  );
}
