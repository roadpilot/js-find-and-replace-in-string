/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
  // console.log(s.slice(2,4)) 
    const obj = {}
    for (let i=0; i<indices.length; i++){
        obj[indices[i]] = {}
        obj[indices[i]].source = sources[i]
        obj[indices[i]].target = targets[i]
    }
    Object.keys(obj).sort((a,b) => a-b).reverse().forEach(a => {
        if (s.slice(a,Number(a)+obj[a].source.length) === obj[a].source){
            s = s.slice(0,a) + obj[a].target + s.slice(Number(a)+obj[a].source.length)
        }
    })
    return s
};