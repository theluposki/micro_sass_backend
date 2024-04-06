import { test, expect, describe, beforeAll } from 'vitest'
import supertest from 'supertest'
import app from '../app.js'

describe('# /users autenticação', () => {

  test('# POST /users/auth deve retornar um erro', async () => {
    const userMock = {
      email: "luposki@gmail.com",
      password: "123456789"
    }

    const response = await supertest(app).post('/users/auth').send(userMock)
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toEqual("erro na autenticação.")
  })
})
