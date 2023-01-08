import { MatchData } from "./custom-types/MatchData";
import { Analyzer } from "./interfaces/Analyzer";
import { OutputTarget } from "./interfaces/OutputTarget";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export class Summary {

  static winsAnalysisWithHtmlReport(teamName: string): Summary {

    const summary = new Summary(new WinsAnalysis(teamName), new HtmlReport());

    return summary;
  }

  constructor(public analyzer: Analyzer, public outpuTarget: OutputTarget) {
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outpuTarget.print(output);
  }


}

