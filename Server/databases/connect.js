const { Sequelize, DataTypes }      = require('sequelize');
const sequelize                     = new Sequelize("sqlite::memory:");


const Users = sequelize.define( 'users', {
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
   }, 
   username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   }
}, {
   timestamps: false
});

const Services = sequelize.define( 'services', {
   service_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false
   }
} );

const Schedules = sequelize.define( 'schedules', {
   schedule_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
   }
   , schedule: {
      type: DataTypes.DATE, allowNull: false
   }
}
 );

const ServicesScheduled = sequelize.define( 'services_scheduled' )

Users.hasMany( Services, {
   onDelete: 'CASCADE',
   onUpdate: 'CASCADE'
} );
Services.belongsTo( Users );

Services.belongsToMany( Schedules, { through: ServicesScheduled } );
Schedules.belongsToMany( Services, { through: ServicesScheduled } );


function connect() {
   function connection() {
      
      sequelize.sync()
      .then( function(err) {
         console.log( ">> connection established" );
      })
      .catch( (error) => {
         console.error( '>> incapaz de conectarse a la BD', error );
      });
      return conn;
   }
   function insert_servicio( servicio ) {
      let c = connection();
   }
}

const db = {};

db.insert = async function(servicio) {
   await connect().insert_servicio( servicio );
};

module.exports = db;