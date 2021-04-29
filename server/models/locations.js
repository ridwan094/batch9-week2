const locations = (sequelize, DataTypes)=> {
    const Locations =  sequelize.define('locations', {
      location_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      street_address: {
        type: DataTypes.STRING(40),
        allowNull: true
      },
      postal_code: {
        type: DataTypes.STRING(12),
        allowNull: true
      },
      city: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      state_province: {
        type: DataTypes.STRING(25),
        allowNull: true
      },
      country_id: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        references: {
          model: 'countries',
          key: 'country_id'
        }
      }
    }, {
      sequelize,
      tableName: 'locations',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "locations_pkey",
          unique: true,
          fields: [
            { name: "location_id" },
          ]
        },
      ]
    });
  
    return Locations;
  };
  
  export default locations;