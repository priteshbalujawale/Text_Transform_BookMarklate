(function textTransform() {
    var hasClass = document.querySelector(".new-created-Element") !== null;
    var button_upper, button_lower, button_capital, inpt_text, inputText, form, NewElement, close_btn;
  
    if (!hasClass) {
      createElement();
      StyleFunc();
      document.addEventListener('mouseup',getSelectionText);
      button_upper.addEventListener("click", upperCaseFunc);
      button_lower.addEventListener("click", lowerCaseFunc);
      button_capital.addEventListener("click", capitalCaseFunc);
      close_btn.addEventListener("click", function () {
        NewElement.remove();
        hasClass = false;
      });
      copy.addEventListener('click',function()
      {
        textCopied =document.querySelector('.textCopied');
          var copyText = document.getElementById("inpt-text").textContent;
          navigator.clipboard.writeText(copyText);
          textCopied.style.visibility = 'visible';
          textCopied.style.color = "#000";
          setTimeout(function() {
            textCopied.style.visibility = 'hidden';
          }, 1000);
      }
      );
    }
  
    hasClass = true;
  
    function createElement() {    

// Create main container div
var containerDiv = document.createElement("div");
containerDiv.className = "new-created-Element";

// Create form element
var form = document.createElement("form");
form.action = "";
form.id = "form";

// Create textarea input field
var textarea = document.createElement("textarea");
textarea.placeholder = "text";
textarea.id = "text";
form.appendChild(textarea);
//create reset button
var reset = document.createElement("input")
reset.type = "reset";
reset.className = "btn";
reset.id = "reset-btn";
form.appendChild(reset);
// Create buttons container
var btnContainer = document.createElement("div");
btnContainer.className = "btn-container";

// Create UPPERCASE button
var upperButton = document.createElement("button");
upperButton.id = "button_upper";
upperButton.className = "btn";
upperButton.textContent = "UPPERCASE";
btnContainer.appendChild(upperButton);

// Create lowercase button
var lowerButton = document.createElement("button");
lowerButton.id = "button_lower";
lowerButton.className = "btn";
lowerButton.textContent = "lowercase";
btnContainer.appendChild(lowerButton);

// Create CapitalizeCase button
var capitalButton = document.createElement("button");
capitalButton.id = "button_capital";
capitalButton.className = "btn";
capitalButton.textContent = "CapitalizeCase";
btnContainer.appendChild(capitalButton);

// Append buttons container to form
form.appendChild(btnContainer);

// Create inpt-text div
var inptText = document.createElement("div");
inptText.id = "inpt-text";

// Create copy button
var copyButton = document.createElement("button");
copyButton.className = "copy btn";
copyButton.textContent = "Copy";


// Create textCopied span
var textCopied = document.createElement("span");
textCopied.className = "textCopied";
textCopied.style.textAlign = "center";
textCopied.style.visibility = "hidden";
textCopied.textContent = "Text Copied";

// Create close button
var closeButton = document.createElement("button");
closeButton.className = "close_btn btn";
closeButton.textContent = "X";

// Append elements to the container div
containerDiv.appendChild(form);
containerDiv.appendChild(inptText);
containerDiv.appendChild(copyButton);
containerDiv.appendChild(textCopied);
containerDiv.appendChild(closeButton);


// Append the container div to the document body
  document.body.appendChild(containerDiv);
}
// upperCase function
      function upperCaseFunc(e) {
      e.preventDefault();
      var inputText = document.getElementById("text").value;
      var transFormedText = inputText.toUpperCase();
      document.getElementById("inpt-text").innerHTML = transFormedText;

    }
  //lowercase function
    function lowerCaseFunc(e) {
      e.preventDefault();
      var inputText = document.getElementById("text").value;
      var transFormedText = inputText.toLowerCase();
      document.getElementById("inpt-text").innerHTML = transFormedText;
    }
  //CapitalCase function
    // function capitalCaseFunc(e) {
    //   e.preventDefault();
    //   var inputText = document.getElementById("text").value;
    //   var words = inputText.split(" ");
    //   for (var i = 0; i < words.length; i++) {
    //     var word = words[i];
    //     words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    //   }
    //   var transFormedText = words.join(" ");

      
    //   document.getElementById("inpt-text").innerHTML = transFormedText;
    // }

    function capitalCaseFunc(e) {
      e.preventDefault();
      var sentence = document.getElementById("text").value;; // Input sentence
      let words = sentence.split(/\b/); // Split the sentence into words
      let capitalizedWords = words.map(word => {
        if (/^[a-zA-Z]+$/.test(word)) { // Check if the word contains only letters
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
          return word; // Return the word as it is (symbols, signs, and brackets)
        }
      });
    
      document.getElementById("inpt-text").innerHTML = capitalizedWords.join(''); // Join the words back into a sentence
    }
    
    
  //Style of elements
    function StyleFunc() {
      NewElement = document.querySelector(".new-created-Element"); 
      button_upper = document.getElementById("button_upper");
      button_lower = document.getElementById("button_lower");
      button_capital = document.getElementById("button_capital");
      inpt_text = document.getElementById("inpt-text");
      inputText = document.getElementById("text");
      form = document.getElementById("form");
      close_btn = document.querySelector(".close_btn");
      copy = document.querySelector(".copy"); 
      btns = document.querySelectorAll('.btn');
      textCopied = document.querySelector('.textCopied');
      text = document.querySelector('#text');
      resetBtn = document.getElementById("reset-btn");

      NewElement.style.position = "fixed";
      NewElement.style.zIndex = "9999999999999";
      NewElement.style.right = "0";
      NewElement.style.top = "0";
      NewElement.style.background = "#fff";
      NewElement.style.width = "400px";
      NewElement.style.padding = "40px";
      NewElement.style.boxSizing = "border-box";
      NewElement.style.boxShadow = "7px 6px 14px 11px #686262";
  
      btns.forEach(function(e){
        e.style.width= 'auto';
        e.style.padding="10px";
        e.style.fontSize='13px';
        e.style.background="#F2F5F7";
        e.style.cursor='pointer';
        e.style.margin='10px 3px';
        e.style.color="#000";
         e.style.border="1px solid #000"
        e.addEventListener("mouseover", function() {
            e.style.backgroundColor = "#1e70b9";
            e.style.color = "#fff";
          });
        e.addEventListener("mouseout", function() {
            e.style.backgroundColor = "#F2F5F7";
            e.style.color = "#000";
          });
    
      });
      text.style.background="#fff"
      text.style.color="#000"
      close_btn.style.position = "absolute";
      close_btn.style.right = "1px";
      close_btn.style.top = "1px";
      inputText.style.width = "300px";
      inputText.style.height = "100px";
      inputText.style.padding = "10px";
      form.style.display = "flex";
      form.style.flexDirection = "column";
      form.style.rowGap = "20px";
      inpt_text.style.fontSize = "16px";
      inpt_text.style.padding = "10px";
      inpt_text.style.marginTop = "40px";
      inpt_text.style.minHeight = "auto";
      inpt_text.style.border = "1px solid #000";
      inpt_text.style.maxHeight = "240px";
      inpt_text.style.overflowX = "auto";
      inpt-text.style.color = "#000";
      resetBtn.style.width = "fit-content";
      resetBtn.style.padding = "4px";
    }
     function getSelectionText() {
      var selecteText = "";
      if (window.getSelection) {
        selecteText = window.getSelection().toString();
      } else if (document.selection && document.selection.type != "Control") {
        selecteText = document.selection.createRange().selecteText;
      }
      document.getElementById('text').value = selecteText
  }
  })();
