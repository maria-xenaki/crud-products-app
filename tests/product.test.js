const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const Product = require("../models/product.model");

require("dotenv").config();

beforeEach(async ()=> {
    await Product.deleteMany({});
    await Product.create({
        product: "Test product",
        cost: 10,
        description: "Test description",
        quantity: 5
    });
});

afterEach(async ()=> {
    await Product.deleteMany({});
});

afterAll(async () => {
    await mongoose.disconnect();
});

describe("Products API", () => {

    it("GET/api/products - should return all products", async () => {
        const res = await request(app).get("/api/products");
        expect(res.statusCode).toBe(200);
        expect(res.body.data.length).toBeGreaterThan(0);
    });

    it("POST/api/products - should create a new product", async () => {
        const newProduct = {
            product: "New product",
            cost: 15,
            description: "A brand new product",
            quantity: 10
        };
        const res = await request(app)
            .post("/api/products")
            .send(newProduct);
        expect(res.statusCode).toBe(201);
        expect(res.body.data).toHaveProperty("_id");
        expect(res.body.data.product).toBe(newProduct.product);
        expect(res.body.data.cost).toBe(newProduct.cost);
        expect(res.body.data.description).toBe(newProduct.description);
        expect(res.body.data.quantity).toBe(newProduct.quantity);
    } )
});
