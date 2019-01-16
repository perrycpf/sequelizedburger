module.exports = (sequelize, DataTypes) => {
    let burgers = sequelize.define(
        "burgers", 
        {
            burger_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1, 255]
                }
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        },
        {
            timestamps: false
        }
    );
    return burgers;
}