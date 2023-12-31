function solve(s) {
    let results = []
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    let Cons = s.split(/[^b-df-hj-np-tv-z]/gi).filter(x=> x!='')
    for(let i=0;i<Cons.length;i++){
      current = Cons[i]
      results.push(current.split('').map(x=> alpha.indexOf(x)+1).reduce((a,b)=> a+b))
    }
    return Math.max(...results)
  };


console.log(solve("zodiac")) // --> 26
console.log(solve("chruschtschov")) // --> 80
console.log(solve("khrushchev")) // --> 38
console.log(solve("strength")) // --> 57
console.log(solve("az")) // --> 26
console.log(solve("catchphrase")) // --> 57
console.log(solve("twelfthstreet")) // --> 103
console.log(solve("mischtschenkoana")) // --> 82