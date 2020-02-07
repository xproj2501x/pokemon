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
  }).then(() => {
    BASE_STATS.forEach((baseStats) => {
      BaseStatsDto.findOne({name: baseStats.name})
        .then((data) => {
          if (!data) {
            BaseStatsDto.create({
              id: baseStats.id,
              name: baseStats.name,
              type: [baseStats.type1, baseStats.type2],
              catchRate: baseStats.catchRate,
              attributes: {
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
              },
              experienceYield: baseStats.baseExpYield,
              items: [baseStats.item1, baseStats.item2],
              gender: baseStats.gender,
              eggCycles: baseStats.eggCycles,
              friendship: baseStats.baseFriendship,
              growthType: baseStats.levelUpType,
              eggGroups: [baseStats.eggGroup1, baseStats.eggGroup2],
              abilities: [baseStats.ability1, baseStats.ability2, baseStats.abilityHidden]
            }).catch((err) => {
              console.log(err);
            });
          }
        }).catch((err) => {
          console.log(err);
      });
    }).then(() => {
      mongoose.connection.close();
    });
  });
}

buildDatabase();

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////

