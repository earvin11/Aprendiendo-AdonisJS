import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

    public async login ({ request, response }: HttpContextContract) {

        const { username, password } = request.body();

        response.status(200);
        return {
            isLogin: true,
            username,
            password
        }

    }

}
