"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./enums/MatchResult");
const MatchReader_1 = require("./MatchReader");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let matchesWon = 0;
for (let match of matchReader.matches) {
    const homeMatchTeam = match[1];
    const awayMatchTeam = match[2];
    const winLoseDraw = match[5];
    if (homeMatchTeam === 'Man United' && winLoseDraw === MatchResult_1.MatchResult.HomeWin) {
        matchesWon++;
    }
    if (awayMatchTeam === 'Man United' && winLoseDraw === MatchResult_1.MatchResult.AwayWin) {
        matchesWon++;
    }
}
console.log(` Man United won ${matchesWon} games`);
