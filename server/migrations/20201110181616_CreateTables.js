exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists("campsites")
    .dropTableIfExists("users")
    .then(() => {
      return knex.schema
          .createTable("users", (table) => {
            table.increments("id").notNullable();
            table.string("username").unique().notNullable();
            table.string("password_digest"); // encyrpted password
            table.string("token");
            table.timestamp("created_at").defaultTo(knex.fn.now());
          })
          .createTable("campsites", (table) => {
            table.increments("id").notNullable();
            table.string("name").notNullable();
            table.string("address");
            table.string('url_to_image');
            table.string('website');
            table.text('description');
            table.integer("user_id").unsigned().notNullable();
            table
              .foreign("user_id")
              .references("id")
              .inTable("users")
              .onDelete("CASCADE");
            table.timestamp("added_at").defaultTo(knex.fn.now());
          })
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("campsites")
    .dropTable("users");
};
