"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    static winsAnalysisWithHtmlReport(teamName) {
        const summary = new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HtmlReport_1.HtmlReport());
        return summary;
    }
    constructor(analyzer, outpuTarget) {
        this.analyzer = analyzer;
        this.outpuTarget = outpuTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outpuTarget.print(output);
    }
}
exports.Summary = Summary;
