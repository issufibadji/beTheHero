// Update with your config settings.
//Ambiente de Desenvolvimento
module.exports = {

  development: {
    client: 'sqlite3', 
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault:true,//usado para o valor de db seja nullo
  },

  test: {
    client: 'sqlite3', 
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    useNullAsDefault:true,//usado para o valor de db seja nullo
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
