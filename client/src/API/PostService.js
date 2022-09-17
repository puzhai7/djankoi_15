import axios from "axios";

const host = '192.168.0.210';
const port = '8080';

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