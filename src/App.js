import "./styles.css";
import restaurant from "./restaurant.jpeg";

function Header({ name }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img
        src={restaurant}
        height={200}
        alt="picutre of plate with food of table"
      />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}
const dishes = ["Macaroni and Cheese", "Salmon", "Tofu with Veggies", "Pizza"];

const dishObj = dishes.map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <div className="App">
      <Header name="Kaniah" />
      <Main adjective="amazing" dishes={dishObj} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
export default App;
