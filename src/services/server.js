import { createServer } from "miragejs"
import categories from './categories.json';

createServer({
  routes() {
    this.get("/api/categories", () => {
      return {
        categories
      }
    })
  },
})