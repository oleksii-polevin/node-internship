const BooksModel = require('./model');
/**
 * @async
 * @method getChartData
 * @returns {Promise < void >}  books code3's and their values
 */
async function getChartData() {
    const result = [];
    const books = await BooksModel.aggregate([{
        $group:
        { _id: { code3: '$code3' }, value: { $sum: 1 } },
    }]);
    books.forEach((item) => {
        const chank = {
            // eslint-disable-next-line no-underscore-dangle
            code3: item._id.code3,
            value: item.value,
        };
        result.push(chank);
    });

    return result;
}

module.exports = {
    getChartData,
};
