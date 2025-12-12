import { describe, it, expect } from 'vitest'
import { validateShortURL } from '../../src/urlValidator'

describe("Testes Unitários - Validador de URL", () => {
  it("Deve validar uma URL correta", () => {
    const stringTest = "abc123456"

    expect(validateShortURL(stringTest)).toBe(true);
  })

  it("Deve rejeitar uma URL com mais de 10 caracteres", () => {
    const stringTestMoreCaracteres = "abcde012345"

    expect(validateShortURL(stringTestMoreCaracteres)).toBe(false);
  })

  it("Deve rejeitar uma URL com caracteres inválidos", () => {
    const stringTestInvalidCaracteres = "test@123"

    expect(validateShortURL(stringTestInvalidCaracteres)).toBe(false)
  })
})