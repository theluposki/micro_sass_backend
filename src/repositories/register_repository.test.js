import { test, expect, describe, beforeAll } from 'vitest'
import supertest from 'supertest'
import app from '../app.js'

describe('# /users', () => {

  let userId;

  test('# POST /users/register', async () => {
    const userMock = {
      nickname: "luposki!",
      email: "luposki@gmail.com",
      password: "123456789"
    }

    const response = await supertest(app).post('/users/register').send(userMock)
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("message")
    expect(response.body).toHaveProperty("id")
    userId = response.body.id
    expect(response.body.message).toEqual("registrado com sucesso.")
  })

  test('# POST /users/register error nickname', async () => {
    const userMock = {
      nickname: "luposki",
      email: "luposki@gmail.com",
      password: "123456789"
    }

    const response = await supertest(app).post('/users/register').send(userMock)
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toEqual("nome de usuário de ter no minimo 8 caracter.")
  })

  test('# POST /users/register error e-mail', async () => {
    const userMock = {
      nickname: "luposki1",
      email: "luposkigmailom", 
      password: "123456789"
    }

    const response = await supertest(app).post('/users/register').send(userMock)
    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toEqual("e-mail inválido.")
  })
})
