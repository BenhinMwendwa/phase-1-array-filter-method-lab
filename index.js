// Code your solution here
const drivers=[`Bobby`,`Sammy`,`Sally`,`Annette`,`Sarah`,`Bobby`]
function findMatching(drivers , name){
    
    const lowerCName=name.toLowerCase()
    return drivers.filter(drivers=>drivers.toLowerCase()===lowerCName) 

}
const value = findMatching(drivers ,`Bobby`)
console.log(value) 
function   fuzzyMatch(drivers,letters)
{
return drivers.filter(drivers=>drivers.startsWith(letters))
}
const fuzzy= fuzzyMatch(drivers,`S`)
console.log(fuzzy)
function matchName(drivers,match){
    
        return drivers.filter((record) => record.name === match);
      }