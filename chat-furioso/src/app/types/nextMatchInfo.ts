export interface NextMatchInfo {
    date: string
    opponent: string
    tournament: string
}

export namespace NextMatch {
    export function fromJson(json: any): NextMatchInfo {
        return {
            date: json.date,
            opponent: json.opponent,
            tournament: json.tournament
        };
    }
}