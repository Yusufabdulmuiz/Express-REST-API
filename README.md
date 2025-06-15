# Express-REST-API
# This is a Simple REST API

A basic Express.js API for managing items

## Setup
1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm run dev  # development (auto-restart)
npm start   # production
```

## API Endpoints

### Base URL
`http://localhost:3000`

### Endpoints
| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | /              | Hello World message     |
| GET    | /items         | Get all items           |
| GET    | /items/:id     | Get single item by ID   |
| POST   | /items         | Create new item         |
| PUT    | /items/:id     | Update existing item    |
| DELETE | /items/:id     | Delete item             |

## Example Requests

### Create Item (POST /items)
```json
{
  "name": "New Item",
  "description": "Item description"
}
```

### Update Item (PUT /items/1)
```json
{
  "name": "Updated Name",
  "description": "Updated description"
}
```

## Testing with Postman
1. Import the collection from `postman_collection.json`
2. Send requests to:
   - GET: `http://localhost:3000/items`
   - POST: `http://localhost:3000/items` with JSON body
   - PUT/DELETE: `http://localhost:3000/items/1` (replace 1 with actual ID)
