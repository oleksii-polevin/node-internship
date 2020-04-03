const BooksModel = require('./model');
/**
 * @async
 * @method getChartData
 * @returns {Promise < void >}  books code3's and their values
 */
async function getChartData() {
    const books = await BooksModel.aggregate([{
        $group:
        { _id: '$code3', value: { $sum: 1 } },
    },
    {
        $project: {
            _id: 0,
            code3: '$_id',
            value: 1,
        },
    },
    ]);

    return books;
}

module.exports = {
    getChartData,
};
