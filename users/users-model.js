const db = require("../database/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findSkaters,
  findSkaterById,
  newSkater,
};

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users").where({ id }).first();
}

function findSkaters() {
  return db("skaters");
}

function findSkaterById(id) {
  return db("skaters").where({ id: id }).first();
}

function newSkater(skater) {
  return db("skaters")
    .insert(skater)
    .then(ids => ({ id: ids[0] }));
}
