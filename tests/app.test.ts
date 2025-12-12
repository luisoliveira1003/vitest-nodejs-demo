import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../src/app";

describe("Testes para app.ts", () => {
  it("Deve validar uma URL válida via API", async () => {
    const res = await request(app).post("/validate-url").send({ url: "valid123" });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ valid: true })
  })

  it("Deve rejeitar uma URL inválida via API", async () => {
    const res = await request(app).post("/validate-url").send({ url: "invalid!$" });
    
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ valid: false });
  });
})