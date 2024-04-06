/**
 * Cria um objeto de usuário com nickname, email e senha.
 *
 * @param {Object} user - Objeto contendo as informações do usuário.
 * @param {string} user.nickname - O nickname do usuário. Deve ter no mínimo 8 caracteres.
 * @param {string} user.email - O email do usuário.
 * @param {string} user.password - A senha do usuário.
 * @returns {Object|{error: string}} Retorna um objeto com o nickname, email e senha do usuário, ou um objeto com uma mensagem de erro se o nickname for inválido.
 *
 * @example
 * const userInfo = user({ nickname: 'usuario123', email: 'usuario@email.com', password: 'senha123' });
 * // Retorna { nickname: 'usuario123', email: 'usuario@email.com', password: 'senha123' }
 */

const user = ({ nickname, email, password }) => {

  const setNickname = (nickname) => {
    if (nickname.length < 8) return { error: "nome de usuário de ter no minimo 8 caracter." }
    return nickname.toLowerCase()
  }

  nickname = setNickname(nickname)
  if (nickname.error) return nickname

  const setEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(regex.test(email))
    if (!regex.test(email)) return { error: "e-mail inválido." }

    return email
  }

  email = setEmail(email)
  if (email.error) return email


  return {
    nickname,
    email,
    password
  }
}

export default user
