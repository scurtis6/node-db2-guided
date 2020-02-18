// describes the changes
exports.up = function(knex) {
    // DO NOT FORGET TO RETURN
  return knex.schema.createTable('characters', tbl => {
      // adds an id column that auto-increments
        tbl.increments(); // primary key

        tbl
            .string('name', 256)
            .notNullable()
            .index(); // makes searching by the name faster
        
        tbl.string('house', 128);

        tbl.string('origin', 256);

        tbl.boolean('alive');
    });
};

// how to undo the changes
exports.down = function(knex) {
  
};
