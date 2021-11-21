const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{                   //info dentro de objeto
      type: DataTypes.STRING(3),
      allowNull:false,  
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING, //info de name dentro de objeto
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING, //dentro de array
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING, //dentro de array
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    area: {
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};

//   continents: {
//   type: Datatypes.ENUM,
//   values: ["Africa", "America", "Asia", "Europe", "Oceania", "Polar", ""], 
//   allowNull: false
// },
