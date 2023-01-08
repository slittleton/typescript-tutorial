import { MatchData } from "../custom-types/MatchData";
import { Analyzer } from "../interfaces/Analyzer";
import { MatchResult } from "../enums/MatchResult";


export class WinsAnalysis implements Analyzer {


  constructor(public team: string) {

  }

  run(matches: MatchData[]): string {

    let matchesWon: number = 0;

    for (let match of matches) {
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

    return `Team ${this.team} won ${matchesWon} games`;
  }


  // end of class
}