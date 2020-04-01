module.exports = {
    async up(db) {
        await db.collection('booksmodel').find({}).forEach(
            (elem) => {
                db.collection('booksmodel').updateOne(
                    {
                        // eslint-disable-next-line no-underscore-dangle
                        _id: elem._id,
                    },
                    {
                        $set: {
                            titleLength: elem.title.length,
                            updatedAt: Date(),
                        },
                    },

                );
            },
        );
    },

    // async down(db) {

    // },
};
