// module.exports = ({ env }) => ({
//     connection: {
//         client: 'postgres',
//         connection: {
//             host: env('DATABASE_HOST'),
//             port: env.int('DATABASE_PORT', 5432),
//             database: env('DATABASE_NAME'),
//             user: env('DATABASE_USERNAME'),
//             password: env('DATABASE_PASSWORD'),
//             schema: env('DATABASE_SCHEMA', 'public'),
//             ssl: {
//                 rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//             },
//         },
//         debug: false,
//     },
// });

module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('PGHOST', '127.0.0.1'),
            port: env.int('PGPORT', 5432),
            database: env('PGDATABASE', 'strapi'),
            user: env('PGUSER', 'strapi'),
            password: env('PGPASSWORD', 'password'),
            ssl: env.bool(true),
        },
        pool: { min: 0 },
    },
});