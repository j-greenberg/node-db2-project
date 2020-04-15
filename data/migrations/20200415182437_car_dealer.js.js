
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        // a primary key, called id that autoincrements
        tbl.increments('id'); 

        // an index makes searching for a value in a column a LOT faster
        // VIN, make, model, mileage
        tbl.string('VIN').notNullable().unique()
        tbl.string('make').notNullable()
        tbl.string('model').notNullable()
        tbl.integer('mileage').notNullable()
        //transmission type and status of the title (clean, salvage, etc.), 
        tbl.string('transmission type')
        tbl.string('title status')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars"); 
};
