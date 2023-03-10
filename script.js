var coll = document.getElementsByClassName("collapsible");

for(let i=0; i<coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function getTime() {
    let today = new Date();
    hour = today.getHours();
    minutes = today.getMinutes();

    if(hour < 10){
        hour = "0" + hour;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    let time = hour + ":" + minutes;
    return time;
  }

  function firstBotMessage() {
    let firstMessage = "How's it going";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
}

// async function getHardResponse(userText){
//    if(userText==undefined || userText==""){

//    }
//    else{
//     let res = "";

//    await axios.get('https://api.monkedev.com/fun/chat?msg=${userText}').then(data => {
//     res = JSON.stringify(data.data.response)
//    })
//     let botHtml = '<p class="botText"><span>' + res + '</span></p>';
//     $("#chatbox").append(botHtml);
//    }
// }

function getResponse(){
    let userText = $("#textInput").val();

    // if(userText == ""){
    //     userText = "I love code palace!";
    // }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);

    setTimeout(() =>{
        getHardResponse(userText);
    }, 1000)
}




function sendButton() {
    getResponse();
  }
  function heartButton() {
    buttonSendText("Heart clicked!")
    }

function buttonSendText(sampleText) { 
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
 }

 $("#textInput").keypress(function(e){
    if(e.which == 13){
        getResponse();
    }
});


