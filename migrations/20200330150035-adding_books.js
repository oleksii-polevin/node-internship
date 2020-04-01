const csv = require('csv-parser');
const fs = require('fs');

/**
 * Reading data from csv file
 * @returns {Promise} books in json format
 */
function readCsv() {
    return new Promise((resolve, reject) => {
        const file = [];

        fs.createReadStream('./books.csv')
            .pipe(csv())
            .on('data', (data) => file.push(data))
            .on('end', () => {
                resolve(file);
            })
            .on('error', (error) => reject(error));
    });
}

module.exports = {
    async up(db) {
        const books = await readCsv();
        await db.collection('booksmodel').insertMany(books);
        await db.collection('booksmodel').updateMany({}, { $set: { createdAt: Date() } });
    },

    // async down(db) {

    // },
};
