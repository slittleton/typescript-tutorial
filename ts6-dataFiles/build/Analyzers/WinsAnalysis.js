"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../enums/MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let matchesWon = 0;
        for (let match of matches) {
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
        return `Team ${this.team} won ${matchesWon} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
