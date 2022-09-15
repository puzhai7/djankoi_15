import axios from "axios";

export default class PostService {

    static async getAllUsers() {
        // Получение всех пользователей
        const response = await axios.get('http://localhost:8080/api/user');
        return response;
    }

    static async getPostsByUser(id) {
        // Получение всех постов пользователя
        const response = await axios.get(`https://localhost:8080/api/post?id=${id}`);
        return response;
    }

}