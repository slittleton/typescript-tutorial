import { MatchData } from "../custom-types/MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;

}