import pizza from "./pizza.jpg";
import alfredo from "./alfredo.webp";
import salad from "./salad.webp";
import salmon from "./salmon.jpg";
import burger from "./burger.jpeg";
import vegeterian from "./vegeterian.jpg";

const restaurantMenu = [
  {
    image: pizza,
    name: "Margherita Pizza",
    type: "Pizza",
    description:
      "Classic Italian pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
    price: 10.99,
  },
  {
    image: alfredo,
    name: "Chicken Alfredo",
    type: "Pasta",
    description:
      "Creamy fettuccine pasta tossed with grilled chicken, Parmesan cheese, and Alfredo sauce.",
    price: 12.99,
  },
  {
    image: salad,
    name: "Caesar Salad",
    type: "Salad",
    description:
      "Crisp romaine lettuce, croutons, and Parmesan cheese tossed in Caesar dressing.",
    price: 8.49,
  },
  {
    image: salmon,
    name: "Grilled Salmon",
    type: "Seafood",
    description:
      "Fresh salmon fillet grilled to perfection and served with seasonal vegetables.",
    price: 15.99,
  },
  {
    image: burger,
    name: "Cheeseburger",
    type: "Burgers",
    description:
      "Juicy beef patty topped with cheddar cheese, lettuce, tomato, onion, and pickles, served with fries.",
    price: 11.49,
  },
  {
    image: vegeterian,
    name: "Vegetable Stir-Fry",
    type: "Vegetarian",
    description:
      "Assorted vegetables stir-fried in a savory sauce, served over steamed rice.",
    price: 9.99,
  },
];

const renderMenuPage = () => {
  const menu = restaurantMenu
    .map((item) => {
      return `
        <div class="menu-item">
        <img src=${item.image} alt="" />
        <div class="info">
        <h3>${item.name}</h3>
        <p class="description">${item.description}</p>
        <p class="price">$${item.price}</p>
        </div>
        </div>
        `;
    })
    .join("");
  return `
  <h2>Delicious Menu</h2>
  <div class="menu">
    ${menu}
    </div>`;
};

export default renderMenuPage;
