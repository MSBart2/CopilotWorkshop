// Notification Service Tests
// No structure, just a bunch of tests thrown together

const request = require("supertest");
const app = require("../index");
const emailSender = require("../email-sender");
const smsSender = require("../sms-sender");

beforeEach(() => {
  emailSender.clearSentEmails();
  smsSender.clearSentMessages();
});

test("health check", async () => {
  const r = await request(app).get("/health");
  expect(r.body.up).toBe(true);
});

test("send email with template", async () => {
  const r = await request(app)
    .post("/email")
    .send({
      to: "test@example.com",
      template: "orderConfirmation",
      data: { orderId: "123", customerName: "Test", total: 5000 },
    });
  expect(r.body.sent).toBe(true);
});

test("email fails without to address", async () => {
  const r = await request(app).post("/email").send({
    template: "orderConfirmation",
    data: {},
  });
  expect(r.body.sent).toBe(false);
});

test("email fails with bad template", async () => {
  const r = await request(app).post("/email").send({
    to: "test@example.com",
    template: "nonexistent",
    data: {},
  });
  expect(r.body.sent).toBe(false);
  expect(r.body.error).toContain("Unknown");
});

test("send raw email", async () => {
  const r = await request(app).post("/email/raw").send({
    to: "user@example.com",
    subject: "Hello",
    body: "This is a test",
  });
  expect(r.body.sent).toBeTruthy();
});

test("send sms", async () => {
  const r = await request(app).post("/sms").send({
    to: "+1-555-123-4567",
    message: "Test message",
  });
  expect(r.body.sent).toBe(true);
});

test("sms fails with short phone", async () => {
  const r = await request(app).post("/sms").send({
    to: "123",
    message: "Test",
  });
  expect(r.body.sent).toBe(false);
});

test("sms fails with long message", async () => {
  const r = await request(app)
    .post("/sms")
    .send({
      to: "+1-555-123-4567",
      message: "x".repeat(200),
    });
  expect(r.body.sent).toBe(false);
});

test("get templates", async () => {
  const r = await request(app).get("/templates");
  expect(r.body.templates).toContain("orderConfirmation");
});

test("debug endpoints work", async () => {
  const emails = await request(app).get("/debug/emails");
  const sms = await request(app).get("/debug/sms");
  expect(emails.body.emails).toBeDefined();
  expect(sms.body.messages).toBeDefined();
});
