class SharedRepository {
  async find(db, data) {
    const query = `SELECT * FROM db_${data}`;
    const foundData = await db.all(query);
    return foundData;
  }
}

module.exports = { SharedRepository };
