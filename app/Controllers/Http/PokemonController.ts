import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class PokemonController {
    // public async index({ request, response }: HttpContextContract) {
    //     response.status(200);
    //     // const { name } = request.body;
        
    //     return { 
    //         Request: request
    //     }
    // }

    // public async show({ request, response }: HttpContextContract) {
    //     const { id }  = request.params();
    //     response.status(200);
    //     return {
    //         id
    //     }
    // }

    // public async store({ request, response }: HttpContextContract) {
    //     const { userName, password } = request.body();
    //     const all = request.all();
    //     const body = request.body();
    //     response.status(201);
    //     return {
    //         userName,
    //         password,
    //         all,
    //         body
    //     }
    // }

    // public async update({ request, response }: HttpContextContract) {
    //     const { id } = request.params();
    //     response.status(201);
    //     return {
    //         id
    //     }
    // }

    // public async destroy({ request, response }: HttpContextContract) {
    //     const { id } = request.params();
    //     response.status(200);
    //     return {
    //         id
    //     }
    // }

    public async index({ request, response }: HttpContextContract) {
        response.status(200)
        return {
            ok: true,
            request
        }
    }

    public async store({ request, response }: HttpContextContract) {

                /**
         * Step 1 - Define schema
         */
        const newUserSchema = schema.create({
            username: schema.string(),
            password: schema.string([
            rules.minLength(4)
            ])
        })

        try {
            /**
             * Step 2 - Validate request body against
             *          the schema
             */
            const payload = await request.validate({
            schema: newUserSchema
            })

            response.status(201)
            return {
                ok: true,
                payload
        }


        } catch (error) {
            /**
             * Step 3 - Handle errors
             */
            response.badRequest(error.messages)
        }
    }

    public async show({ request, response }: HttpContextContract) {
        response.status(201)
        const { id }  = request.params();
        return {
            ok: true,
            id
        }
    }

    public async update({ request, response }: HttpContextContract) {
        response.status(201)
        const { id }  = request.params();
        return {
            ok: true,
            id
        }
    }

    public async destroy({ request, response }: HttpContextContract) {
        response.status(201)
        const { id }  = request.params();
        return {
            ok: true,
            id
        }
    }
}
