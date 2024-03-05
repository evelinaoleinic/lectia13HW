let firstName = 'eva'
let lastName = 'oleinic'
let streetAddress = 'Ioan Botezatorul'

let NUME_DE_FAMILIE = 'Topala'
let DATA_DE_LOGARE = 29.03
let PRETUL_ACHITAT = 100

let Nume = 'Oleinic'
let Prenume = 'Eva'
let Locuinta = 'Chisinau'



const nume = 'eva'
const prenume = 'oleinic'
const varsta = 24
console.log(`informatie ${nume} ${prenume} ${varsta}`)

const subiect = 'java'
const tema = 'variabile'
const profesor = 'Iulian Nicula'
console.log(`${subiect} ${tema} ${profesor}`)

const tara = 'Moldova'
const oras = 'Chisinau'
const primar = 'Ion Ceban'
console.log(`date actualizate ${tara} ${oras} ${primar}`)


const num = 10
console.log(num, typeof num)
console.log(typeof String(num))


let numConvertit = String(num)
console.log(numConvertit, typeof numConvertit)
console.log(typeof +numConvertit)

let strToNum = Number(numConvertit)
console.log(typeof strToNum, strToNum)
console.log(typeof +strToNum)

let boolConvert = Boolean(num)
console.log(typeof boolConvert, boolConvert)

const str = 'blabla'

let convertBool = Boolean(str)
console.log(typeof convertBool, convertBool)

let convertNum = Number(str)
console.log(typeof convertNum, convertNum)

const falsy1 = ''
const falsy2 = 0
const falsy3 = undefined
const falsy4 = null
const falsy5 = NaN
const falsy6 = false

const primaIncercare = falsy3 && falsy4

if(falsy3 && falsy4){
    console.log('true')
} else {
    console.log('false')
}
 if(falsy1 && falsy4 && 'true') {
    console.log('true')
 } else {
    console.log('false')
 }

 if (falsy1 || falsy2 || 2) {
    console.log('true')
 } else {
    console.log('false')
 }

 if (falsy5 || falsy6 || falsy4) {
    console.log('ura')
 } else {
    console.log('eh')
 }
 if (1 && 2 && 3) {
    console.log('uraa')
 } else {
    console.log ('ehh')
 }

 if (!falsy5 || falsy6){
    console.log('este')
 } else {
    console.log('nu este')
 }

 if (falsy5 || falsy6){
    console.log('este')
 } else {
    console.log('nu este')
 }

 if ('incercare' || falsy2 || falsy3) {
    console.log('experiment udalsea')
 } else {
    console.log('experiment neudalsea')
 }
 if ('incercare' && falsy2 || falsy3) {
    console.log('experiment udalsea')
 } else {
    console.log('experiment neudalsea')
 }

 if (primaIncercare || 2) {
    console.log('+')
 } else {
    console.log('-')
 }
 if (primaIncercare && 3){
    console.log('+')
 } else {
console.log('-')
 } 

if (falsy1 || falsy2) {
    console.log('prima optiune')
} else if (!falsy1 && falsy3){
console.log('a doua optiune')}
else if (!falsy1 && !falsy2) {
    console.log('a treia optiune')
} 

 const ternaryV = 1 ? 'true' : 'false'
 console.log(ternaryV)

 const ternaryV2 = falsy1 && 3 ? 'este' : 'nu este'
 console.log(ternaryV2)

 const ternaryV3 = falsy3 || 7 ? 'uraa' : 'ehhh'
 console.log(ternaryV3)

 const ternaryV4 = !falsy3 && !falsy2 && 3 ? 'ura' : 'ehhh'
 console.log(ternaryV4)

 const ternaryV5 = falsy2 ? 'este1' : !falsy1 ? 'este2' : 'ehhh'
 console.log(ternaryV5)


const meniu = 'deserturi';
switch (meniu){
    case 'cina':
        console.log('aceste este meniul pentru cina');
        break;
    case 'micul dejun':
        console.log('acesta este meniul pentru micul dejun');
        break;
    case 'business lunch':
        console.log('aceste este meniul business lunch');
        break;
    case 'deserturi':
        console.log('acesta este meniul de deserturi');
        break;
    case 'bauturi':
        console.log('meniul de bauturi');
        break;
    default:
        console.log('introduceti optiunea corecta de meniu')
}