module.exports = {
    connection: 'Mysqladapter',
    attributes: {
        id: {
            type: "integer",
            autoIncrement: true,
            primaryKey: true
        },
        sujeto: {
            type: "string"
        },
        predicado: {
            type: "string"
        },
        objeto: {
            type: "string"
        },
    }
};
