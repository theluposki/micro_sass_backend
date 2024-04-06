import db from "../databases/index.js";
import User from "../domain/user.js"

/**
 * Registra um novo usuário no repositório.
 *
 * @async
 * @function register_repository
 * @param {Object} body - O corpo da requisição, contendo as informações do usuário.
 * @returns {Promise<Object|{error: string}>} Retorna uma Promise que resolve para um objeto contendo uma mensagem de sucesso e um ID, ou um objeto com uma mensagem de erro se ocorrer um problema.
 *
 * @example
 * const result = await register_repository({ nickname: 'usuario123', email: 'usuario@email.com', password: 'senha123' });
 * // Retorna { message: "registrado com sucesso.", id: "a0fdd3bc-7b08-45c9-8caa-6a731565c620" } ou { error: "mensagem de erro" }
 */

export const register_repository = async (body) => {
    
    const user = User(body)

    if(user.error) return user


    return { message: "registrado com sucesso.", id: "a0fdd3bc-7b08-45c9-8caa-6a731565c620" }
}
