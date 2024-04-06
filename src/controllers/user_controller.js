import { register_repository } from "../repositories/register_repository.js";

/**
 * Registra um novo usuário no sistema.
 *
 * @async
 * @function register
 * @param {Object} req - O objeto de requisição do Express.
 * @param {Object} req.body - O corpo da requisição, contendo as informações do usuário.
 * @param {Object} res - O objeto de resposta do Express.
 * @returns {Promise<void>} Retorna uma Promise que resolve para nada, indicando que a função é assíncrona.
 *
 * @example
 * // Supondo que register_repository seja uma função que retorna uma Promise
 * const result = await register_repository({ nickname: 'usuario123', email: 'usuario@email.com', password: 'senha123' });
 * // A função register irá enviar uma resposta com o resultado da operação de registro.
 */

export const register = async (req, res) => {
    try {
        const result = await register_repository(req.body);

        if(result.error) {
            res.status(400).json(result)
            return
        }

        res.status(201).json(result)
    } catch (error) {
        console.log(error)
    }
}
