
const sentenceBody = [
    'authoritarian', 
    'JobKeeper',
    'irresponsible', 
    'low threshold',
    'school holiday extension',
    'death’s door',
    'social dislocation',
    'diabolical',
    'cavalier',
    'vaccine',    
    'airborne',
    'COVID',    
    'COVID',    
    'COVID',    
    'COVID',    
    'COVID',    
    'tiny droplets', 
    'transmission',   
    'cough',
    'hashtag',  
    'death ride',      
    'flatten the curve', 
    '2020',
    'silver bullet',  
    'high alert', 
    'online shopping',
    'toilet paper',
    'toilet paper',
    'toilet paper',
    'panic buying',
    'contract security',
    'enemy of the state',
    'social mingling',
    'nightclubs',
    "we're all in this together",
    'sacrifice for the greater good',
    'private security',
    'stop the spread of',
    'damage to the economic',
    're-entry',
    'early stages',
    'medical worker',
    'infection',
    'military',
    'regrettable',
    'restrictions',
    'close border',
    'elimination',
    'island continent',
    'regulatory relief',
    'outraged',
    'test and trace system',
    'stage 3',
    'stage 4',
    'highest daily increase of',
    'death toll',
    'local community',
    'transmition',
    'epidemiology',
    'outbreaks',
    'peak',
    'tragic',
    'infected',
    'larger volume of',
    'second wave of',
    'exposed to',
    'primary',
    'next step',
    'sanitising',
    'professional',
    'immediate',
    'self-isolate',
    'hospital',
    'ICU capacity',
    'regional ',
    'social distancing',
    'total number of',
    'more and more',
    'COVID-19',
    'stay at home',
    'caregiving',
    'work from home',
    'diagnosis',
    'shortness of breath',
    'sore throat',
    'loss of smell',
    'loss of taste',
    'fever',
    'nausea',
    'detection',
    'mental health',
    'maintaining 1.5 metres of distance between you and',
    'hand sanitising',
    'impacting',
    'tackle',
    'global',
    'COVIDsafe',
    'accountability',
    'to protect against',
    'Department of Health media releases',
    'the worsening',
    'essential',
    'records',
    'information',
    'help the',
    'safe haven',
    'hardline',
    'close down',
    'economic',
    'breaching',
    'testing',
    'f@#king',
    'the ongoing impact of',
    'widespread business closures',
    'gradual',
    'face',
    'slow recovery from',
    'Jetstar',
    'super-spreading',
    'gathering limits',
    'cold or flu',
    'Woolworths',
    'pivot',
    'Pokemon Go',
    "local Government's",
    'face mask',
    'out of control',
    'community transmission',
    'excessive',
    'tightening',
    'police now fining',
    'unemployed',
    'globally mobile',
    'irrationally obstinate',
    'misguided'
]



    


const sentenceEnd = [
    'hard lockdown',
    'pariah state',
    'infection dive',
    'infection spike',
    'Operation Sentinel',
    'patient zero',
    'judicial enquiry',
    'hotel quarantine',
    'Ruby Princess',
    'white knuckle daily wait',
    'invisible enemy',
    'Covid normal',
    'assassin',
    'mask',
    'randomised controlled trails',
    'biosecurity',
    'spike',
    'Remdesivir',
    'rules',
    'new normal',
    'cruise',
    'hotspots',
    'COVID complacency',
    'active cases',
    'enemy of the state',
    'social distancing',
    'social distancing',
    'social distancing',
    'corona virus',
    'anger', 
    'is the writing on the wall',
    'as travel bans ease', 
    'China',
    'Wuhan',
    'mixed messages',
    'clusters',
    'Zoom meeting',
    'rona',
    'stated the Chief Health Officer',
    'aggressive suppression',
    'press conference',
    'is the latest news',
    'sector specific support',
    'bailout plans',
    'crisis',
    'cases confirmed',
    'announcements',
    'warning',
    'control measures',
    'close down',
    'threat',
    'system',
    'cases',
    'is required',
    'while shopping for food and supplies',
    'with no end in sight',
    'clinical symptoms',
    'symptoms',
    'digital platform',
    'confirmed cases',
    'data',
    'conspiracy',
    'news',
    'concerns',
    'border closure',
    'shut down',
    'as the unemployment rate rises',
    'Generation COVID',
    'social distancing measures',
    'impact',
    'with the highest infection levels that we’ve ever seen',
    'response',
    'problem',
    'suburban blitz',
    'dogma',
    'super-spreaders',
    'excuse',
    'interdependence',
    'Achilles heel',
    'social ill',
    'fault lines',
    'facing a nervy future',
    'with empty supermarket shelves'
]
 
const RandomizeFullStopOrComma = () => {
    let zeroOrOne = Math.round(Math.random() * 2)
    if (zeroOrOne === 0) {
        return ',';
    } else {
        return '.';
    }
}


const makeSentence = (body, end) => {
    let sentence = [];
    let randomEndWords = end[Math.floor(Math.random() * end.length)]
    numOfBodyWords = Math.round(Math.random() * 5);

    for (let i = 0; i < numOfBodyWords; i++) {

        let randomBodyWords = body[Math.floor(Math.random() * body.length)];

        if (!sentence.includes(randomBodyWords)) {
            sentence.push(randomBodyWords);
        }
    }

    sentence.push(randomEndWords);
    const sentenceAsString = sentence.join(' ');

    const restOfSentence = sentenceAsString.slice(1);
    const capitalLetter = sentenceAsString[0].toUpperCase();

    let sentenceWithCapsCommaFullStop = capitalLetter + restOfSentence + RandomizeFullStopOrComma() + ' ';

    return sentenceWithCapsCommaFullStop; 
}



const makeParagraph = numOfSentences => {
    let paragraph = '';
    for (let i = 0; i < numOfSentences; i++ ) {
        paragraph += makeSentence(sentenceBody, sentenceEnd);
    }

    return recapitalizeWords(paragraph);
}

const recapitalizeWords = (paragraph) => {
    let punctuatedParagraph = makeParagraphWithLowerCaseAfterComma(paragraph);

    let paraSplitByWord = punctuatedParagraph.split(' ');
    let paraWithCorrectUpperCase = [];
    
    for (let i = 0; i < paraSplitByWord.length; i++) {

        if (
            paraSplitByWord[i] === 'cOVID' || paraSplitByWord[i] === 'jobKeeper' ||
            paraSplitByWord[i] === 'iCU capacity' || paraSplitByWord[i] === 'cOVID-19' || 
            paraSplitByWord[i] === 'cOVIDsafe' || paraSplitByWord[i] === 'department of Health media releases' || 
            paraSplitByWord[i] === 'jetstar' || paraSplitByWord[i] === 'woolworths' 
            || paraSplitByWord[i] === 'pokemon Go'
            ) {
    
            let wordSplitByLetter = paraSplitByWord[i].split('');
            let firstLetter = wordSplitByLetter.shift().toUpperCase();
    
            wordSplitByLetter.unshift(firstLetter);
            const upperCaseWord = wordSplitByLetter.join('');
        
            paraWithCorrectUpperCase.push(upperCaseWord);
        } else {
            paraWithCorrectUpperCase.push(paraSplitByWord[i]);
        }
    } 
        return paraWithCorrectUpperCase.join(' ');
}



const makeParagraphWithLowerCaseAfterComma = (paragraph) => {

    let splitParagraph = paragraph.split('');
    let paragraphWithLowerCaseAfterComma = [];
    
    // this for loop is just changing all the capital letters after a comma into lowercase 
    for (let i = 0; i < splitParagraph.length - 2; i++) {
    
        if (splitParagraph[i] === ',') {
    
            splitParagraph[i + 2] = splitParagraph[i + 2].toLowerCase()
    
            paragraphWithLowerCaseAfterComma.push(splitParagraph[i]);
        } else {
            paragraphWithLowerCaseAfterComma.push(splitParagraph[i])
        }
    }

    return paragraphWithLowerCaseAfterComma.join('') + '.';
}





const selector = document.getElementById('sentence_selector');
const selectorBtn = document.querySelector('.btn');

const paraOne = document.querySelector('.paragraph_one');
const paraTwo = document.querySelector('.paragraph_two');
const paraThree = document.querySelector('.paragraph_three');
const paraFour = document.querySelector('.paragraph_four');
const paraFive = document.querySelector('.paragraph_five');

let allParagraphs = [paraOne, paraTwo, paraThree, paraFour, paraFive];

const printParagraphs= (event) => {
    event.preventDefault();

    allParagraphs.forEach(paragraph => {
        paragraph.innerHTML = "";
    })

    let numBetweenFiveAndSeven = 4 + Math.ceil(Math.random() * 3);

    for (let i = 0; i < selector.value; i++) {
        allParagraphs[i].textContent = makeParagraph(numBetweenFiveAndSeven);
    }
    
}

selectorBtn.addEventListener('click', printParagraphs);


