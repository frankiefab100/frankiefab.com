module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('PGHOST', '127.0.0.1'),
            port: env.int('PGPORT', 5931),
            database: env('PGDATABASE', 'railway'),
            user: env('PGUSER', 'postgres'),
            password: env('PGPASSWORD', 'password'),
            ssl: env.bool(true),
        },
    },
});


// export default ({ env }) => ({
//     connection: {
//         client: 'postgres',
//         connection: {
//             host: env('DATABASE_HOST'),
//             port: env.int('DATABASE_PORT', 5432),
//             database: env('DATABASE_NAME'),
//             user: env('DATABASE_USERNAME'),
//             password: env('DATABASE_PASSWORD'),
//             ssl: env.bool('DATABASE_SSL', false) && {
//                 rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
//             },
//             schema: env('DATABASE_SCHEMA', 'public'),
//         },
//         pool: {
//             min: env.int('DATABASE_POOL_MIN', 2),
//             max: env.int('DATABASE_POOL_MAX', 10)
//         },
//         debug: false,
//     },
// });


// module.exports = ({ env }) => ({
//     connection: {
//         client: 'postgres',
//         connection: {
//             host: env('PGHOST', '127.0.0.1'),
//             port: env.int('PGPORT', 5432),
//             database: env('PGDATABASE', 'strapi'),
//             user: env('PGUSER', 'strapi'),
//             password: env('PGPASSWORD', 'password'),
//             ssl: env.bool(true),
//         },
//         pool: { min: 0 },
//     },
// });