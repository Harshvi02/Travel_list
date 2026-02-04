const initialItems = [];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 FAR AWAY 🧳</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>

      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>

      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <p>List will come here</p>
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
