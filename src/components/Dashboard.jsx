import React, { useState, useEffect } from 'react';
import { suggestRecipes } from '../utils/RecipeEngine';
import RecipeCard from './RecipeCard';
import { useShoppingList } from '../context/ShoppingListContext';

const Dashboard = () => {
    const [ingredients, setIngredients] = useState('');
    const [preference, setPreference] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const { shoppingList, removeFromShoppingList, clearList } = useShoppingList();

    useEffect(() => {
        const ingredientList = ingredients.split(',').map(i => i.trim()).filter(i => i !== '');
        const suggestions = suggestRecipes(ingredientList, preference);
        setFilteredRecipes(suggestions);
    }, [ingredients, preference]);

    return (
        <div className="container">
            <header>
                <h1>Grocery Guru</h1>
                <p className="subtitle">Discover recipes and generate shopping lists</p>
            </header>

            <div className="controls">
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--primary)' }}>
                        What ingredients do you have?
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Tomato, Egg, Bread (separate by comma)"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--accent)' }}>
                        Dietary Preference
                    </label>
                    <select value={preference} onChange={(e) => setPreference(e.target.value)}>
                        <option value="">All Dishes</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Keto">Keto</option>
                        <option value="Gluten-Free">Gluten-Free</option>
                    </select>
                </div>
            </div>

            <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem', opacity: 0.9 }}>
                {ingredients ? '✨ Suggested for You' : '🍽️ All Available Dishes'}
            </h2>

            <main className="recipe-grid">
                {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
                {filteredRecipes.length === 0 && (
                    <p style={{ textAlign: 'center', gridColumn: '1/-1', color: 'var(--text-muted)' }}>
                        No recipes found matching those ingredients. Try adding more or checking all dishes!
                    </p>
                )}
            </main>

            {shoppingList.length > 0 && (
                <aside className="glass-card shopping-list-panel">
                    <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Shopping List</h2>
                    <div className="shopping-list-items">
                        {shoppingList.map(item => (
                            <div key={item} className="shopping-item">
                                <span>{item}</span>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromShoppingList(item)}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }} onClick={clearList}>
                        Clear List
                    </button>
                </aside>
            )}
        </div>
    );
};

export default Dashboard;
