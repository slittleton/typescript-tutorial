import { MatchReader } from './MatchReader';
import { Summary } from './Summary';




const matchReader = MatchReader.fromCsv('footbal.csv')

const summary = Summary.winsAnalysisWithHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches);







