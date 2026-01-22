export const recipes = [
  {
    id: 1,
    name: "Classic French Toast",
    ingredients: ["Bread", "Egg", "Milk", "Sugar", "Cinnamon"],
    preferences: ["Vegetarian"],
    instructions: "Whisk eggs, milk, sugar, and cinnamon. Dip bread in mixture and fry until golden brown.",
    image: "https://images.unsplash.com/photo-1484723088339-fe7a77038e97?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Vegan Chickpea Salad",
    ingredients: ["Chickpeas", "Cucumber", "Tomato", "Onion", "Lemon", "Olive Oil"],
    preferences: ["Vegan", "Gluten-Free"],
    instructions: "Mix chopped vegetables with chickpeas. Dress with lemon juice and olive oil.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Keto Garlic Butter Salmon",
    ingredients: ["Salmon", "Butter", "Garlic", "Lemon", "Parsley"],
    preferences: ["Keto", "Gluten-Free"],
    instructions: "Pan-sear salmon in garlic butter. Finish with lemon juice and parsley.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Avocado Toast",
    ingredients: ["Bread", "Avocado", "Chili Flakes", "Lemon"],
    preferences: ["Vegan", "Vegetarian"],
    instructions: "Mash avocado on toasted bread. Sprinkle with chili flakes and lemon juice.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    name: "Quinoa Bowl",
    ingredients: ["Quinoa", "Spinach", "Sweet Potato", "Black Beans"],
    preferences: ["Vegan", "Gluten-Free"],
    instructions: "Combine cooked quinoa with roasted sweet potatoes, spinach, and beans.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    name: "Spaghetti Aglio e Olio",
    ingredients: ["Spaghetti", "Garlic", "Olive Oil", "Chili Flakes", "Parsley"],
    preferences: ["Vegetarian"],
    instructions: "Cook pasta. Sauté garlic and chili flakes in oil. Toss with pasta and parsley.",
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 7,
    name: "Mushroom Risotto",
    ingredients: ["Rice", "Mushrooms", "Onion", "Vegetable Broth", "Butter", "Parmesan"],
    preferences: ["Vegetarian", "Gluten-Free"],
    instructions: "Sauté onions and mushrooms. Add rice and slowly add broth until creamy.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 8,
    name: "Tofu Stir-Fry",
    ingredients: ["Tofu", "Broccoli", "Soy Sauce", "Ginger", "Garlic", "Sesame Oil"],
    preferences: ["Vegan"],
    instructions: "Fry tofu until crispy. Add vegetables and sauce ingredients. Serve over rice.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400"
  }
];

export const suggestRecipes = (availableIngredients, selectedPreference) => {
  return recipes.filter(recipe => {
    // Check dietary preference
    const matchesPreference = !selectedPreference || recipe.preferences.includes(selectedPreference);

    // If no ingredients specified, show all that match preference
    if (availableIngredients.length === 0) return matchesPreference;

    // Check ingredients (should match at least one of the user's ingredients)
    const matchesIngredients = recipe.ingredients.some(ing =>
      availableIngredients.some(inputIng =>
        ing.toLowerCase().includes(inputIng.toLowerCase().trim())
      )
    );

    return matchesPreference && matchesIngredients;
  });
};
