module.exports = {
    connection: 'Mysqladapter',
    attributes: {
        id: {
            type: "integer",
            autoIncrement: true,
            primaryKey: true
        },
        links_Value: {
            type: "string"
        },
        link_Type: {
            type: "string"
        },
        o_Value: {
            type: "string"
        },
        o_Type: {
            type: "string"
        }
    }
};
