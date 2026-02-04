import { useState } from "react";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear the list?");
    if (confirmed) setItems([]);   // 🔥 YE LINE MOST IMPORTANT
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onClearList={handleClearList}   // ✅ prop pass ho raha
      />
      <Footer items={items} />
    </div>
  );
}


/* ---------------- COMPONENTS ---------------- */

function Logo() {
  return <h1>🌴 FAR AWAY 🧳</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
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



function PackingList({ items, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            {item.quantity} {item.description}
          </li>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED</option>
        </select>

        {/* 🔴 YAHI GALTI HOTI HAI MOSTLY */}
        <button onClick={onClearList}>CLEAR LIST</button>
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer className="stats">
      <em>Start adding some items to your packing list 🚀</em>
    </footer>
  );
}
