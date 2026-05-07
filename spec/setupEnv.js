const path = require('path');

process.env.NODE_ENV = 'test';
process.env.SQLITE_DB_LOCATION = process.env.SQLITE_DB_LOCATION
    || path.join(__dirname, '..', '.tmp', 'test-todo.db');
