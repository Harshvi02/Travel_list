import { useState } from "react";
const initialItems = [];

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={setItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}


function Logo() {
  return <h1>🌴 FAR AWAY 🧳</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); // page reload stop

    if (!description) return;

    onAddItem(items => [
      ...items,
      { description, packed: false }
    ]);

    setDescription(""); // input clear
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
  value={quantity}
  onChange={(e) => setQuantity(Number(e.target.value))}
>
  {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
    <option value={num} key={num}>
      {num}
    </option>
  ))}
</select>


      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}


function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>Start adding some items to your packing list 🚀</em>
    </footer>
  );
}

export default App;
