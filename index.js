const shout = (variable)=>{
    return variable.toUpperCase(); 
}

const whisper = (variable) =>{
    return variable.toLowerCase()
}

const logShout = (variable) =>{
    console.log(shout(variable))
}

const logWhisper = (string) =>{
    console.log(whisper(string))
}


const sayHiToHeadphonedRoommate = (string) => {
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      return "Sorry, I can only respond to certain phrases.";
    }
  };