import fastify from 'fastify';
import cors from "@fastify/cors";

import { UserContextSchema, DepartmentContextSchema } from '@repo/schemas';


const server = fastify( {
    logger: true, //For the Observability POV
});

server.register(cors, {
    origin: '*',
})

server.get('/ping', async () => {
    return { status: 'ok', message: 'The ping was successfull'}
})

const start = async() => {
    try {
        await server.listen({ port: 3001, host: '0.0.0.0' });
        server.log.info(`Server is running on ${server.server.address()}`);
    } catch (error) {
        server.log.error(error);
        process.exit(1);
    }
}

start();

//Notes: Steps
/*(Fastify)
Import the needed modules
Create the server instance const server 
cors setup
define get endpoint
define start function
start the server


*/
