import React from 'react';
import { useShoppingList } from '../context/ShoppingListContext';

const RecipeCard = ({ recipe }) => {
    const { addToShoppingList } = useShoppingList();

    return (
        <div className="glass-card recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <div className="recipe-content">
                <h3 className="recipe-title">{recipe.name}</h3>
                <div className="recipe-tags">
                    {recipe.preferences.map(pref => (
                        <span key={pref} className="tag">{pref}</span>
                    ))}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        Required Ingredients:
                    </p>
                    {recipe.ingredients.map((ing, i) => (
                        <span key={i} className="ingredient-chip">{ing}</span>
                    ))}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {recipe.instructions.substring(0, 100)}...
                </p>
            </div>
            <button
                className="btn"
                onClick={() => addToShoppingList(recipe.ingredients)}
            >
                Add Ingredients to List
            </button>
        </div>
    );
};

export default RecipeCard;
