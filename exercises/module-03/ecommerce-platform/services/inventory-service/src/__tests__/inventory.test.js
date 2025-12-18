// Inventory Service Tests
// NOTE: Minimal comments, different structure than other test files

const request = require("supertest");
const app = require("../index");
const stockManager = require("../stock-manager");

beforeEach(() => stockManager.reset());

test("health", async () => {
  const r = await request(app).get("/health");
  expect(r.body.status).toBe("ok");
});

test("get all inventory", async () => {
  const r = await request(app).get("/inventory");
  expect(r.body.items.length).toBeGreaterThan(0);
});

test("get single item", async () => {
  const r = await request(app).get("/inventory/WIDGET-001");
  expect(r.body.found).toBe(true);
  expect(r.body.item.sku).toBe("WIDGET-001");
});

test("not found item returns found:false", async () => {
  const r = await request(app).get("/inventory/FAKE-SKU");
  expect(r.status).toBe(200);
  expect(r.body.found).toBe(false);
});

test("check availability", async () => {
  const r = await request(app).get(
    "/inventory/WIDGET-001/availability?quantity=10"
  );
  expect(r.body.is_available).toBe(true);
});

test("reserve stock", async () => {
  const r = await request(app)
    .post("/inventory/WIDGET-001/reserve")
    .send({ quantity: 5 });
  expect(r.body.reserved).toBeTruthy();
});

test("reserve fails without quantity", async () => {
  const r = await request(app).post("/inventory/WIDGET-001/reserve").send({});
  expect(r.status).toBe(400);
});

test("release stock", async () => {
  await request(app)
    .post("/inventory/WIDGET-001/reserve")
    .send({ quantity: 5 });
  const r = await request(app)
    .post("/inventory/WIDGET-001/release")
    .send({ quantity: 3 });
  expect(r.body.released).toBeTruthy();
});

test("update quantity", async () => {
  const r = await request(app)
    .put("/inventory/WIDGET-001/quantity")
    .send({ quantity: 200 });
  expect(r.body.updated).toBe(true);
  expect(r.body.newQuantity).toBe(200);
});

test("add new item", async () => {
  const r = await request(app)
    .post("/inventory")
    .send({ sku: "NEW-001", name: "New Product", quantity: 50 });
  expect(r.status).toBe(201);
  expect(r.body.created).toBe(true);
});

test("filter low stock", async () => {
  const r = await request(app).get("/inventory?lowStock=true");
  expect(r.body.items).toBeDefined();
});
