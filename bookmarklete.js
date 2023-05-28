
//Code for bookmarklete
javascript:(!function e(){var t,n,l,o,i,r,s,d,a,c,y,p,u,x,b,$,f=null!==document.querySelector(".new-created-Element");function v(e){e.preventDefault();var t=document.getElementById("text").value.toUpperCase();document.getElementById("inpt-text").innerHTML=t}function E(e){e.preventDefault();var t=document.getElementById("text").value.toLowerCase();document.getElementById("inpt-text").innerHTML=t}function g(e){e.preventDefault();for(var t=document.getElementById("text").value.split(" "),n=0;n<t.length;n++){var l=t[n];t[n]=l.charAt(0).toUpperCase()+l.slice(1).toLowerCase()}var o=t.join(" ");document.getElementById("inpt-text").innerHTML=o}f||((a=document.createElement("div")).setAttribute("class","new-created-Element"),a.innerHTML=`        <form action="" id="form">          <textarea placeholder="text" id="text"></textarea>          <div class="btn-container">            <button id="button_upper" class="btn">UPPERCASE</button>            <button id="button_lower" class="btn">lowercase</button>            <button id="button_capital" class="btn">CapitalizeCase</button>          </div>        </form>        <div id="inpt-text"></div>        <button class="copy btn">Copy</button>        <span class="textCopied" style="text-align:center;visibility: hidden;">Text Copied</span>        <button class="close_btn btn">X</button>      `,document.body.appendChild(a),t=document.getElementById("button_upper"),n=document.getElementById("button_lower"),l=document.getElementById("button_capital"),o=document.getElementById("inpt-text"),i=document.getElementById("text"),r=document.getElementById("form"),s=document.querySelector(".new-created-Element"),d=document.querySelector(".close_btn"),copy=document.querySelector(".copy"),textCopied=document.querySelector(".textCopied"),(c=document.querySelector(".new-created-Element")).style.position="fixed",c.style.zIndex="9999",c.style.right="0",c.style.top="0",c.style.background="#fff",c.style.width="400px",c.style.padding="40px",c.style.boxSizing="border-box",c.style.boxShadow="7px 6px 14px 11px #686262",y=document.getElementById("text"),p=document.getElementById("form"),u=document.getElementById("inpt-text"),x=document.querySelector(".close_btn"),b=document.querySelectorAll(".btn"),document.querySelector(".textCopied"),$=document.querySelector("#text"),b.forEach(function(e){e.style.width="auto",e.style.padding="10px",e.style.fontSize="13px",e.style.background="#F2F5F7",e.style.cursor="pointer",e.style.marginTop="10px",e.style.color="#000",e.style.border="1px solid #000",e.addEventListener("mouseover",function(){e.style.backgroundColor="#1e70b9",e.style.color="#fff"}),e.addEventListener("mouseout",function(){e.style.backgroundColor="#F2F5F7",e.style.color="#000"})}),$.style.background="#fff",$.style.color="#000",x.style.position="absolute",x.style.right="1px",x.style.top="1px",y.style.width="300px",y.style.height="100px",y.style.padding="10px",p.style.display="flex",p.style.flexDirection="column",p.style.rowGap="20px",u.style.fontSize="16px",u.style.padding="10px",u.style.marginTop="40px",u.style.border="1px solid #000",t.addEventListener("click",v),n.addEventListener("click",E),l.addEventListener("click",g),d.addEventListener("click",function(){s.remove(),f=!1}),copy.addEventListener("click",function(){var e=document.getElementById("inpt-text").textContent;navigator.clipboard.writeText(e),textCopied.style.visibility="visible",setTimeout(function(){textCopied.style.visibility="hidden"},1e3)}),t.addEventListener("click",v),n.addEventListener("click",E),l.addEventListener("click",g)),f=!0}());




// ===================================== code to make bookmark start=====================================================================

(function textTransform() {
    var hasClass = document.querySelector(".new-created-Element") !== null;
    var button_upper, button_lower, button_capital, inpt_text, inputText, form, NewElement, close_btn;
  
    if (!hasClass) {
      createElement();
      button_upper.addEventListener("click", upperCaseFunc);
      button_lower.addEventListener("click", lowerCaseFunc);
      button_capital.addEventListener("click", capitalCaseFunc);
    }
  
    hasClass = true;
  
    function createElement() {
      var inputForm = document.createElement("div");
      inputForm.setAttribute("class", "new-created-Element");
      inputForm.innerHTML = `
        <form action="" id="form">
          <textarea placeholder="text" id="text"></textarea>
          <div class="btn-container">
            <button id="button_upper" class="btn">UPPERCASE</button>
            <button id="button_lower" class="btn">lowercase</button>
            <button id="button_capital" class="btn">CapitalizeCase</button>
          </div>
        </form>
        <div id="inpt-text"></div>
        <button class="copy btn">Copy</button>
        <span class="textCopied" style="text-align:center;visibility: hidden;">Text Copied</span>
        <button class="close_btn btn">X</button>
      `;
      document.body.appendChild(inputForm);
      button_upper = document.getElementById("button_upper");
      button_lower = document.getElementById("button_lower");
      button_capital = document.getElementById("button_capital");
      inpt_text = document.getElementById("inpt-text");
      inputText = document.getElementById("text");
      form = document.getElementById("form");
      NewElement = document.querySelector(".new-created-Element");
      close_btn = document.querySelector(".close_btn");
      copy = document.querySelector(".copy");
      textCopied =document.querySelector('.textCopied');
      
      StyleFunc();
      button_upper.addEventListener("click", upperCaseFunc);
      button_lower.addEventListener("click", lowerCaseFunc);
      button_capital.addEventListener("click", capitalCaseFunc);
      close_btn.addEventListener("click", function () {
        NewElement.remove();
        hasClass = false;
      });
      copy.addEventListener('click',function()
      {
          var copyText = document.getElementById("inpt-text").textContent;
          navigator.clipboard.writeText(copyText);
          textCopied.style.visibility = 'visible';
          setTimeout(function() {
            textCopied.style.visibility = 'hidden';
          }, 1000);
      }
      );

    }
      function upperCaseFunc(e) {
      e.preventDefault();
      var inputText = document.getElementById("text").value;
      var transFormedText = inputText.toUpperCase();
      document.getElementById("inpt-text").innerHTML = transFormedText;

    }
  
    function lowerCaseFunc(e) {
      e.preventDefault();
      var inputText = document.getElementById("text").value;
      var transFormedText = inputText.toLowerCase();
      document.getElementById("inpt-text").innerHTML = transFormedText;
    }
  
    function capitalCaseFunc(e) {
      e.preventDefault();
      var inputText = document.getElementById("text").value;
      var words = inputText.split(" ");
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      var transFormedText = words.join(" ");
      document.getElementById("inpt-text").innerHTML = transFormedText;
    }
  
    function StyleFunc() {
      var NewElement = document.querySelector(".new-created-Element");
      NewElement.style.position = "fixed";
      NewElement.style.zIndex = "9999";
      NewElement.style.right = "0";
      NewElement.style.top = "0";
      NewElement.style.background = "#fff";
      NewElement.style.width = "400px";
      NewElement.style.padding = "40px";
      NewElement.style.boxSizing = "border-box";
      NewElement.style.boxShadow = "7px 6px 14px 11px #686262";
  
      var inputText = document.getElementById("text");
      var form = document.getElementById("form");
      var inpt_text = document.getElementById("inpt-text");
      var close_btn = document.querySelector(".close_btn");
      var btns = document.querySelectorAll('.btn');
      var textCopied = document.querySelector('.textCopied');
      var text = document.querySelector('#text');

      btns.forEach(function(e){
        e.style.width= 'auto';
        e.style.padding="10px";
        e.style.fontSize='13px';
        e.style.background="#F2F5F7";
        e.style.cursor='pointer';
        e.style.marginTop='10px';
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
      inpt_text.style.border = "1px solid #000";
      
    }
  })();
// ===================================== code to make bookmark End=====================================================================


