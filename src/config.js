/**
 * Configuração da aplicação.
 * @typedef {Object} AppConfig
 * @property {number} port - Porta na qual a aplicação será executada.
 * @property {string} nameDatabase - nome do banco de dados.
 */

/** @type {AppConfig} */


const app = {
    port: Number(process.env.PORT),
    nameDatabase: "myDatabase"
};

export default {
    app
}
