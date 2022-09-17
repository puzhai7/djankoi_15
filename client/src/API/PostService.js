import axios from "axios";
import server_config from '../ip.server.json'

const host = server_config.host;
const port = server_config.port;

export default class PostService {

    static async getAllUsers() {
        // Получение всех пользователей
        const response = await axios.get(`http://${host}:${port}/api/user`);
        return response;
    }

    static async getUserById(id) {
        // Получение всех пользователей
        const response = await axios.get(`http://${host}:${port}/api/user/${id}`);
        return response;
    }

    static async getPostsByUser(id) {
        // Получение всех постов пользователя
        const response = await axios.get(`http://${host}:${port}/api/post?id=${id}`);
        return response;
    }

}