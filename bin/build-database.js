/**
 * build-database
 * ===
 *
 * @module build-database
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import mongoose from 'mongoose';
import BaseStatsDto from '../src/server/dto/base-stats-dto';
import BASE_STATS from '../src/data/base-stats';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

const CONFIG = {
  DB: {
    HOST: 'localhost',
    PORT: 27107,
    NAME: 'pokemon'
  }
};

function buildDatabase() {
  mongoose.Promise = Promise;
  mongoose.connect(`mongodb://${CONFIG.DB.HOST}/${CONFIG.DB.NAME}`);
  mongoose.connection.on('error', () => {
    throw new Error(`Error: unable to connect to database ${CONFIG.DB.HOST}`);
  });
  mongoose.connection.on('connected', () => {
    console.log(`'Connected to database ${CONFIG.DB.HOST}`);
  });
  BASE_STATS.forEach((baseStats) => {
    BaseStatsDto.findOne({name: baseStats.name})
      .then((data) => {
        if (!data) {
          BaseStatsDto.create({
            id: baseStats.id,
            name: baseStats.name,
            abilities: {
              hitPoints: baseStats.baseHP,
              attack: baseStats.baseAttack,
              defense: baseStats.baseDefense,
              specialAttack: baseStats.baseSpAtk,
              specialDefense: baseStats.baseSpDef,
              speed: baseStats.baseSpeed
            },
            effortYield: {
              hitPoints: baseStats.effortYield.hitPoints,
              attack: baseStats.effortYield.attack,
              defense: baseStats.effortYield.defense,
              specialAttack: baseStats.effortYield.spAtk,
              specialDefense: baseStats.effortYield.spDef,
              speed: baseStats.effortYield.speed
            }
          }).catch((err) => {
            console.log(err);
          });
        }
      }).catch((err) => {
        console.log(err);
      });
  });
  // mongoose.connection.close();
}

buildDatabase();

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////

