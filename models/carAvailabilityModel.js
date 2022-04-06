module.exports = (sequelize,DataTypes) => {
    const carAvailability = sequelize.define("carAvailability", {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true
        },
        car_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        start_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
    })

    return carAvailability
}