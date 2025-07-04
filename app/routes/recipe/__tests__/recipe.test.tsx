import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryRouter, RouterProvider } from "react-router";
import Recipe from "../recipe";

describe("Recipe page", () => {
  test("renders heading", () => {
    const routes = [
      {
        path: "/recipe/52997",
        element: (
    <Recipe
      params={{ id: "52997" }}
      loaderData={[
    {
      "idMeal": "52997",
      "strMeal": "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
      "strMealAlternate": null,
      "strCategory": "Beef",
      "strArea": "Vietnamese",
      "strInstructions": "Add'l ingredients: mayonnaise, siracha\r\n\r\n1\r\n\r\nPlace rice in a fine-mesh sieve and rinse until water runs clear. Add to a small pot with 1 cup water (2 cups for 4 servings) and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15 minutes. Keep covered off heat for at least 10 minutes or until ready to serve.\r\n\r\n2\r\n\r\nMeanwhile, wash and dry all produce. Peel and finely chop garlic. Zest and quarter lime (for 4 servings, zest 1 lime and quarter both). Trim and halve cucumber lengthwise; thinly slice crosswise into half-moons. Halve, peel, and medium dice onion. Trim, peel, and grate carrot.\r\n\r\n3\r\n\r\nIn a medium bowl, combine cucumber, juice from half the lime, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. In a small bowl, combine mayonnaise, a pinch of garlic, a squeeze of lime juice, and as much sriracha as you’d like. Season with salt and pepper.\r\n\r\n4\r\n\r\nHeat a drizzle of oil in a large pan over medium-high heat. Add onion and cook, stirring, until softened, 4-5 minutes. Add beef, remaining garlic, and 2 tsp sugar (4 tsp for 4 servings). Cook, breaking up meat into pieces, until beef is browned and cooked through, 4-5 minutes. Stir in soy sauce. Turn off heat; taste and season with salt and pepper.\r\n\r\n5\r\n\r\nFluff rice with a fork; stir in lime zest and 1 TBSP butter. Divide rice between bowls. Arrange beef, grated carrot, and pickled cucumber on top. Top with a squeeze of lime juice. Drizzle with sriracha mayo.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
      "strTags": null,
      "strYoutube": "",
      "strIngredient1": "Rice",
      "strIngredient2": "Onion",
      "strIngredient3": "Lime",
      "strIngredient4": "Garlic Clove",
      "strIngredient5": "Cucumber",
      "strIngredient6": "Carrots",
      "strIngredient7": "Ground Beef",
      "strIngredient8": "Soy Sauce",
      "strIngredient9": "",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "White",
      "strMeasure2": "1",
      "strMeasure3": "1",
      "strMeasure4": "3",
      "strMeasure5": "1",
      "strMeasure6": "3 oz ",
      "strMeasure7": "1 lb",
      "strMeasure8": "2 oz ",
      "strMeasure9": " ",
      "strMeasure10": " ",
      "strMeasure11": " ",
      "strMeasure12": " ",
      "strMeasure13": " ",
      "strMeasure14": " ",
      "strMeasure15": " ",
      "strMeasure16": " ",
      "strMeasure17": " ",
      "strMeasure18": " ",
      "strMeasure19": " ",
      "strMeasure20": " ",
      "strSource": "",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": null
    }
  ]}
      matches={[ {
          params: {},
          id: "root",
          pathname: "/recipe/52997",
          data: undefined,
          handle: undefined,
        },
        {
          params: {id: "52997"},
          id: "routes/recipe",
          pathname: "/recipe/52997",
          data: undefined,
          handle: undefined,
        }]}
    />
        ),
      },
    ];
     const router = createMemoryRouter(routes, {
      initialEntries: ["/recipe/52997"],
    });
    render(<RouterProvider router={router} />);
    
    expect(
      screen.getByRole("heading", { name: /Ingredients/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /How To Prepare/i })
    ).toBeInTheDocument();
    
  });
  });

