const server = require('./api/server');

const PORT = process.env.PRT || 4000;

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})