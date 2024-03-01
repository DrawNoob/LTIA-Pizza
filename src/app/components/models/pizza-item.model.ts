import { PizzaIngredient } from "../models/pizza-ingredient.model";

export class PizzaItem {
    public imagePath: string;
    public title: string;
    public description: string;
    public ingredients: PizzaIngredient[];

    constructor(title: string, desc: string, imagePath: string, ingredients: PizzaIngredient[]) {
        this.imagePath = imagePath;
        this.title = title;
        this.description = desc;
        this.ingredients = ingredients;
    }
}