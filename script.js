
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
    'dogma',  
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
    'medical workers',
    'infections',
    'military',
    'regrettable'
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
    'corona virus',
    'anger', 
    'is the writing on the wall',
    'as travel bans ease', 
    'China',
    'Wuhan',
    'mixed messages',
    'clusters',
    'Zoom meeting',
    'rona'
]
 

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

    return capitalLetter + restOfSentence + '. '; 
}

const numberOfSentences = number => {
    let paragraph = '';
    for (let i = 0; i < number; i++ ) {
        paragraph += makeSentence(sentenceBody, sentenceEnd);
    }

    return paragraph;
}


const selector = document.getElementById('sentence_selector');
const selectorBtn = document.querySelector('.btn');
const textArea = document.querySelector('.text_area');

const printSentences= (event) => {
    event.preventDefault()
    textArea.textContent = numberOfSentences(selector.value)
}

selectorBtn.addEventListener('click', printSentences)


