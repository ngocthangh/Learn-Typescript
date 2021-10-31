import { MatchReader } from "./MatchReader"
import { MatchResult } from './MatchResult'
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './reports/ConsoleReport'
import { HtmlReport } from './reports/HtmlReport'
import { WinAnalysis } from "./analyzers/WinAnalysis"
import { Summary } from './Summary'

// const reader = new MatchReader('football.csv')
// reader.read()

let manUnitedWins = 0


// const printMatchResult = (match): MatchResult => {
//     if (match[5] === )
// }


// for (let match of reader.data) {
//     if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//         manUnitedWins++
//     }
//     if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//         manUnitedWins++
//     }
// }
// console.log(`MAN UINTED WION ${manUnitedWins}`)

// create an object that sastifies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satifying ther 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load()


// for (let match of matchReader.matches) {
//     if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//         manUnitedWins++
//     }
//     if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//         manUnitedWins++
//     }
// }
// console.log(`MAN UINTED WION ${manUnitedWins}`)


// const summary = new Summary(
//     new WinAnalysis('Man United'),
//     // new ConsoleReport()
//     new HtmlReport()
// )

// summary.buildAndPrintReport(matchReader.matches)

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

const summary = Summary.winAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)