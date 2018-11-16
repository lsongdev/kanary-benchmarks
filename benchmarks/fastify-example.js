const fastify = require('fastify')();

fastify.get('/', (request, reply) => {
  reply.send('hello world');
});

fastify.listen(3000);