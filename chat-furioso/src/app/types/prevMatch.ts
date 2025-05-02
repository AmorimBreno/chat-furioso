export interface PrevMatchInfo {
    finalScore: string;
    opponent: string;
    maps: { map: string; score: string }[];
    players: {
        name: string;
        kd: string;
        kd_diff: string;
        adr: string;
        kast: string;
        rating: string;
    }[];
}

export namespace PrevMatch {
    export function fromJson(json: any): PrevMatchInfo {

    console.log("json.finalScore " +json.finalScore)
    console.log("json.opponent " + json.opponent)
    console.log("json.maps " +json.maps)
    console.log("json.players " +json.players)
    
      if (!Array.isArray(json.maps)) {
        throw new Error(`O JSON.maps de partida anterior nao e um Array.`);
      }

      if (!json.maps ) {
        throw new Error("O JSON.maps de partida anterior está nao existe.");
      }

      if (!json ) {
        throw new Error("O JSON de partida anterior está nao existe.");
      }
  
      return {
        finalScore: json.finalScore || "0-0",
        opponent: json.opponent || "Desconhecido",
        maps: json.maps.map((map: any) => ({
          map: map.map || "Desconhecido",
          score: map.score || "0-0",
        })),
        players: json.players?.map((player: any) => ({
          name: player.name || "Desconhecido",
          kd: player.kd || "0/0",
          kd_diff: player.kd_diff || "0",
          adr: player.adr || "0.00",
          kast: player.kast || "0%",
          rating: player.rating || "0.00",
        })) || [],
      };
    }
  }