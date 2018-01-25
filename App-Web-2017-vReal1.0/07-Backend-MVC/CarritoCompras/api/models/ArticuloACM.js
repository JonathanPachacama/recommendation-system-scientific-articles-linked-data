module.exports = {
    connection: 'Mysqladapter',
    attributes: {
        id: {
            type: "integer",
            autoIncrement: true,
            primaryKey: true
        },
        value: {
            type: "string"
        },
        type: {
            type: "string"
        },
    }
};
