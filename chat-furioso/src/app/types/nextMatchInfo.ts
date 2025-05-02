export interface NextMatchInfo {
    response: string
}

export namespace NextMatch {
    export function fromJson(json: any): NextMatchInfo {
        return {
            response: json.response,
        };
    }
}