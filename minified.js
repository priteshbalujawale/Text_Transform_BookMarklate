javascript:!function e(){var t,n,l,o,i,a,d,r,s,p,c,y,x,u,m,b,$,E,g,f,C=null!==document.querySelector(".new-created-Element");C||((s=document.createElement("div")).className="new-created-Element",(p=document.createElement("form")).action="",p.id="form",(c=document.createElement("textarea")).placeholder="text",c.id="text",p.appendChild(c),(y=document.createElement("input")).type="reset",y.className="btn",y.id="reset-btn",p.appendChild(y),(x=document.createElement("div")).className="btn-container",(u=document.createElement("button")).id="button_upper",u.className="btn",u.textContent="UPPERCASE",x.appendChild(u),(m=document.createElement("button")).id="button_lower",m.className="btn",m.textContent="lowercase",x.appendChild(m),(b=document.createElement("button")).id="button_capital",b.className="btn",b.textContent="CapitalizeCase",x.appendChild(b),p.appendChild(x),($=document.createElement("div")).id="inpt-text",(E=document.createElement("button")).className="copy btn",E.textContent="Copy",(g=document.createElement("span")).className="textCopied",g.style.textAlign="center",g.style.visibility="hidden",g.textContent="Text Copied",(f=document.createElement("button")).className="close_btn btn",f.textContent="X",s.appendChild(p),s.appendChild($),s.appendChild(E),s.appendChild(g),s.appendChild(f),document.body.appendChild(s),d=document.querySelector(".new-created-Element"),t=document.getElementById("button_upper"),n=document.getElementById("button_lower"),l=document.getElementById("button_capital"),o=document.getElementById("inpt-text"),i=document.getElementById("text"),a=document.getElementById("form"),r=document.querySelector(".close_btn"),copy=document.querySelector(".copy"),btns=document.querySelectorAll(".btn"),textCopied=document.querySelector(".textCopied"),text=document.querySelector("#text"),resetBtn=document.getElementById("reset-btn"),d.style.position="fixed",d.style.zIndex="9999999999999",d.style.right="0",d.style.top="0",d.style.background="#fff",d.style.width="400px",d.style.padding="40px",d.style.boxSizing="border-box",d.style.boxShadow="7px 6px 14px 11px #686262",btns.forEach(function(e){e.style.width="auto",e.style.padding="10px",e.style.fontSize="13px",e.style.background="#F2F5F7",e.style.cursor="pointer",e.style.margin="10px 3px",e.style.color="#000",e.style.border="1px solid #000",e.addEventListener("mouseover",function(){e.style.backgroundColor="#1e70b9",e.style.color="#fff"}),e.addEventListener("mouseout",function(){e.style.backgroundColor="#F2F5F7",e.style.color="#000"})}),text.style.background="#fff",text.style.color="#000",r.style.position="absolute",r.style.right="1px",r.style.top="1px",i.style.width="300px",i.style.height="100px",i.style.padding="10px",a.style.display="flex",a.style.flexDirection="column",a.style.rowGap="20px",o.style.fontSize="16px",o.style.padding="10px",o.style.marginTop="40px",o.style.minHeight="auto",o.style.border="1px solid #000",o.style.maxHeight="240px",o.style.overflowX="auto",o.style.color="#000",resetBtn.style.width="fit-content",resetBtn.style.padding="4px",document.addEventListener("mouseup",function e(){var t="";window.getSelection?t=window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&(t=document.selection.createRange().selecteText),document.getElementById("text").value=t}),t.addEventListener("click",function e(t){t.preventDefault();var n=document.getElementById("text").value.toUpperCase();document.getElementById("inpt-text").innerHTML=n}),n.addEventListener("click",function e(t){t.preventDefault();var n=document.getElementById("text").value.toLowerCase();document.getElementById("inpt-text").innerHTML=n}),l.addEventListener("click",function e(t){t.preventDefault();let n=document.getElementById("text").value.split(/\b/).map(e=>/^[a-zA-Z]+$/.test(e)?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():e);document.getElementById("inpt-text").innerHTML=n.join("")}),r.addEventListener("click",function(){d.remove(),C=!1}),copy.addEventListener("click",function(){textCopied=document.querySelector(".textCopied");var e=document.getElementById("inpt-text").textContent;navigator.clipboard.writeText(e),textCopied.style.visibility="visible",textCopied.style.color="#000",setTimeout(function(){textCopied.style.visibility="hidden"},1e3)})),C=!0}();
