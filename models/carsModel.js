module.exports = (sequelize,DataTypes) => {
    const Car = sequelize.define("Car", {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true
        },
        brand: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        door_num: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        year: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        color: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        model_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        mode: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        plate_number: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
            
        },
        location_latitudes: {
            type: DataTypes.DECIMAL(10,8),
            allowNull: false
        },
        location_longitude: {
            type: DataTypes.DECIMAL(11,8),
            allowNull: false
        },
        day_price: {
            type: DataTypes.DECIMAL(11,4),
            allowNull: false
        },
        is_featured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    return Car
}