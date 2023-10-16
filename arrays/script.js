let apprentices = ['justin', 'reggie', 'benji', 'nikki'];

for(let i=0; i<apprentices.length; i++) {
    if(apprentices[i] === 'justin') {
        console.log("justin is awesome");
    }
}

if(apprentices.includes('justin')){
    console.log("true");
}