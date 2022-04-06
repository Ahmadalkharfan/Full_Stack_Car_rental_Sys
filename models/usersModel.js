module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        gender: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        role: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        pass: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        mobileNumber: {
            type: DataTypes.INTEGER(30),
            allowNull: false
        },
    })


    return User
}