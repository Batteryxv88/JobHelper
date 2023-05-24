export const textBrake = (text: string) => {
    const regExp = /Code|Classification|Cause|Measures to take when alert occurs|Estimated abnormal parts|Correction|Note|Solution|Faulty part isolation DIPSW|Control while detached/;

    const textSplit = text.split('Code').map((item) => {
        return `Code ${item}`
    })

    const rrr = textSplit.map((error) => {
         return error.split(regExp)
    })

    const eee = rrr.map((item) => {
        return {code: item[1].trim(), class: item[2], cause: item[3], measure: item[4], abnormal: item[5],
            corr: item[6], note: item[7], solution: item[8], isolate: item[9], control: item[10]}
    })

    console.log(eee)
}
