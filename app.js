const root = document.documentElement;


const fretboard = document.querySelector('.fretboard');
const numberOfFrets = 12;
const numberOfStrings = 6;

const singleFretmarkPositions = [3,5,7,9,15,17,21];
const doubleFretmarkPositions = [12, 24];

const app = {
    init(){
        this.setupFretboard();
    },
    setupFretboard(){
        //tell the CSS how many strings we have
        root.style.setProperty('--number-of-strings', numberOfStrings);
        //add strings to fretboard
        for(var i=0; i < numberOfStrings; i++){
            var string = tools.createElement('div');
            string.classList.add('string');
            fretboard.appendChild(string);

            //Create frets
            for(var fret = 0; fret <= numberOfFrets; fret++){
                var noteFret = tools.createElement('div');
                    console.log("noteFret:", noteFret);
                noteFret.classList.add('note-fret');
                string.appendChild(noteFret);
                //Add single fretdots
                if(i === 0 && singleFretmarkPositions.indexOf(fret) !== -1) {
                        console.log("noteFret IN IF:", noteFret);
                    noteFret.classList.add('single-fretmark');    
                }
                //add double fretdots
                if(i === 0 && doubleFretmarkPositions.indexOf(fret) !== -1) {
                //noteFret.classList.add('double-the-mark'); 
                noteFret.classList.add('double-fretmark');    
            }
            }
        }  
    }
}

const tools = {
    createElement(element, content) {
        element = document.createElement(element);
        if(arguments.lenth > 1){
            element.innerHTML = content;
        }
        return element;
    }
}

app.init();