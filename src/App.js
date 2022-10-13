import Header from "./components/Header"
import CardLocation from "./components/CardLocation";
import data from "./data";


function App() {
  const cards = data.map(item => {
    return (
      <CardLocation 
      key={item.id}
      {...item}
    />
    )
  });

  return (
    <div className="App">
        <Header />
      <section className="cards--list">
        {cards}
      </section>
        
    </div>
  );
}

export default App;
