import { createServer } from "miragejs"
import categories from './categories.json';
import menu from './menu.json';

createServer({
  routes() {
    this.get("/api/categories", () => {
      return {
        categories
      }
    }),
    this.get("/api/coffees", () => {
      return {
        menu: menu.coffees
      }
    }),
    this.get("/api/teas", () => {
      return {
        menu: menu.teas
      }
    }),
    this.get("/api/honey", () => {
      return {
        menu: menu.honey
      }
    }),
    this.get("/api/foods", () => {
      return {
        menu: menu.foods
      }
    })
  },
})

