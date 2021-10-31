import { MatchData } from "./MatchData";
import { HtmlReport } from './reports/HtmlReport'
import { WinAnalysis } from "./analyzers/WinAnalysis"

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    constructor(public analyzer: Analyzer, 
        public outputTarget: OutputTarget) {}

    static winAnalysisWithHtmlReport(team: string) {
        return new Summary(
            new WinAnalysis(team),
            new HtmlReport()
        )
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output)
    }
}

// new Summary(new WinAnalysis(), new ConsoleReport())