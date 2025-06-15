const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store
let items = [
  { id: 1, name: "Item 1", description: "First item" },
  { id: 2, name: "Item 2", description: "Second item" }
];

// 1. Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 2. CRUD Operations for /items

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET single item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  
  res.json(item);
});

// POST create new item
app.post('/items', (req, res) => {
  // Input validation
  if (!req.body.name || !req.body.description) {
    return res.status(400).json({ error: "Name and description are required" });
  }

  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update existing item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  // Input validation
  if (!req.body.name || !req.body.description) {
    return res.status(400).json({ error: "Name and description are required" });
  }

  items[itemIndex] = {
    id,
    name: req.body.name,
    description: req.body.description
  };

  res.json(items[itemIndex]);
});

// DELETE item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem[0]);
});

// 3. Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
