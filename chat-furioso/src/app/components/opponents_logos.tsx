import Fallback from '/assets/fallback.png'

type OpponentLogoProps = {
  opponent: string
}

export default function OpponentLogo({ opponent }: OpponentLogoProps) {
  const logoImage: Record<string, string> = {
    spirit:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Team_Spirit_new_em.svg/2048px-Team_Spirit_new_em.svg.png',
    g2: 'https://img-cdn.hltv.org/teamlogo/zFLwAELOD15BjJSDMMNBWQ.png',
    the_mongolz: 'https://img-cdn.hltv.org/teamlogo/bRk2sh_tSTO6fq1GLhgcal.png',
    natus_vincere:
      '//upload.wikimedia.org/wikipedia/commons/e/e0/Natus_Vincere_logo.png',
    faze: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/FaZe-Logo-2024-All.png',
    eternal_fire:
      'https://img-cdn.hltv.org/teamlogo/Tafdq71X3B_-73b73bAixr.png',
    mouz: 'https://upload.wikimedia.org/wikipedia/commons/3/39/MOUZlogo2021.png',
    astralis:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Astralis_logo.svg/1686px-Astralis_logo.svg.png',
    pain: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/PaiN_Gaming_logo.svg/2234px-PaiN_Gaming_logo.svg.png',
    flyquest: 'https://img-cdn.hltv.org/teamlogo/fmqTgF6Ziw0uied7MO3_ri.png',
    complexity: 'https://img-cdn.hltv.org/teamlogo/mYH7ldcjUjr02R21SLk_pE.png',
    nexus: 'https://img-cdn.hltv.org/teamlogo/TsvwZ9z4tVRO9Ry1jYxs_n.png',
    betboom: 'https://img-cdn.hltv.org/teamlogo/G4ZrdB0-q41USPd_z27IQA.png',
    saw: 'https://img-cdn.hltv.org/teamlogo/9vOlYp2U_z0vXPb9aLK-4r.png',
    imperial_valkyries:
      'https://img-cdn.hltv.org/teamlogo/Hc-AMHZB9eKXBOJwtNvazg.png',
    atox: 'https://img-cdn.hltv.org/teamlogo/AYB9kpaAt4S3YY4xCaoI_D.png',
    nemiga: 'https://img-cdn.hltv.org/teamlogo/6ZPCm5r3XyGByXkFGiRnLh.png',
    metizport: 'https://img-cdn.hltv.org/teamlogo/uHxM4VRz0qIDKVsckVrbjv.png',
    eclot: 'https://img-cdn.hltv.org/teamlogo/_hHH1jUhX-4DfQpnVo6Gv-.png',
    b8: 'https://img-cdn.hltv.org/teamlogo/O6nRWTCjUzBAR4pcOcrpSG.png',
    passion_ua: 'https://img-cdn.hltv.org/teamlogo/hg5jCb7ksX_OgKGNq3ZA_2.png',
    sharks: 'https://img-cdn.hltv.org/teamlogo/xduTwTuydAWc0Dbt-eEjeH.png',
    fluxo: 'https://img-cdn.hltv.org/teamlogo/zGveLNj821BCJGMu93qnj-.png',
    nine_pandas: 'https://img-cdn.hltv.org/teamlogo/u4ZlTBpqD-bXOZRqxYY385.png',
    gtz: 'https://img-cdn.hltv.org/teamlogo/IZC1pzgBnxO-ngz5nENWIZ.png',
    partizan: 'https://img-cdn.hltv.org/teamlogo/y59RRaQNbpspDdGJoR1Xfr.png',
    m80: 'https://static.draft5.gg/teams/2765-m80-390f079e26.png',
    nrg: 'https://img-cdn.hltv.org/teamlogo/SJZaPBCyZssru-pUDS3aZe.png',
    spirit_academy:
      'https://img-cdn.hltv.org/teamlogo/txUq00aBKY7O4fLVJegmi_.png',
    imperial: 'https://img-cdn.hltv.org/teamlogo/WF5P55R5fxcmhoew6vHZQr.png',
    gun5: 'https://img-cdn.hltv.org/teamlogo/h7rPBXKkg9rmhbeBVmRG28.png',
    bestia: 'https://img-cdn.hltv.org/teamlogo/Z_R5K__qrvHmPjF66iCay-.png',
    monte: 'https://img-cdn.hltv.org/teamlogo/2tc9n4fHkiRIX2FiJSkhgt.png'
  }

  return (
    <>
      <img
        className={`h-full w-full`}
        alt={opponent}
        src={logoImage[opponent.toLowerCase().replace(/\s+/g, '_')] || Fallback}
      ></img>
    </>
  )
}
