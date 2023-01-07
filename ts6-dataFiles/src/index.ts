import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './enums/MatchResult';
import { MatchReader } from './MatchReader';


const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load()




let matchesWon: number = 0;

for (let match of matchReader.matches) {
  const homeMatchTeam = match[1];
  const awayMatchTeam = match[2];
  const winLoseDraw = match[5];

  if (homeMatchTeam === 'Man United' && winLoseDraw === MatchResult.HomeWin) {
    matchesWon++;
  }
  if (awayMatchTeam === 'Man United' && winLoseDraw === MatchResult.AwayWin) {
    matchesWon++;
  }
}


console.log(` Man United won ${matchesWon} games`);
