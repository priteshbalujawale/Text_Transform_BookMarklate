!function e(){var t,n,l,i,o,r,d,a,s,c,p,y,x,u,m,E,b,$,f,g,v,C,h,_,I,B=null!==document.querySelector(".new-created-Element");function w(e){e.preventDefault();var t=document.getElementById("text").value.toUpperCase();document.getElementById("inpt-text").innerHTML=t}function L(e){e.preventDefault();var t=document.getElementById("text").value.toLowerCase();document.getElementById("inpt-text").innerHTML=t}function S(e){e.preventDefault();for(var t=document.getElementById("text").value.split(" "),n=0;n<t.length;n++){var l=t[n];t[n]=l.charAt(0).toUpperCase()+l.slice(1).toLowerCase()}var i=t.join(" ");document.getElementById("inpt-text").innerHTML=i}B||((a=document.createElement("div")).className="new-created-Element",(s=document.createElement("form")).action="",s.id="form",(c=document.createElement("textarea")).placeholder="text",c.id="text",s.appendChild(c),(p=document.createElement("div")).className="btn-container",(y=document.createElement("button")).id="button_upper",y.className="btn",y.textContent="UPPERCASE",p.appendChild(y),(x=document.createElement("button")).id="button_lower",x.className="btn",x.textContent="lowercase",p.appendChild(x),(u=document.createElement("button")).id="button_capital",u.className="btn",u.textContent="CapitalizeCase",p.appendChild(u),s.appendChild(p),(m=document.createElement("div")).id="inpt-text",(E=document.createElement("button")).className="copy btn",E.textContent="Copy",(b=document.createElement("span")).className="textCopied",b.style.textAlign="center",b.style.visibility="hidden",b.textContent="Text Copied",($=document.createElement("button")).className="close_btn btn",$.textContent="X",a.appendChild(s),a.appendChild(m),a.appendChild(E),a.appendChild(b),a.appendChild($),document.body.appendChild(a),t=document.getElementById("button_upper"),n=document.getElementById("button_lower"),l=document.getElementById("button_capital"),i=document.getElementById("inpt-text"),o=document.getElementById("text"),s=document.getElementById("form"),r=document.querySelector(".new-created-Element"),d=document.querySelector(".close_btn"),copy=document.querySelector(".copy"),b=document.querySelector(".textCopied"),(f=document.querySelector(".new-created-Element")).style.position="fixed",f.style.zIndex="999999999",f.style.right="0",f.style.top="0",f.style.background="#fff",f.style.width="400px",f.style.padding="40px",f.style.boxSizing="border-box",f.style.boxShadow="7px 6px 14px 11px #686262",g=document.getElementById("text"),v=document.getElementById("form"),C=document.getElementById("inpt-text"),h=document.querySelector(".close_btn"),_=document.querySelectorAll(".btn"),document.querySelector(".textCopied"),I=document.querySelector("#text"),_.forEach(function(e){e.style.width="auto",e.style.padding="10px",e.style.fontSize="13px",e.style.background="#F2F5F7",e.style.cursor="pointer",e.style.marginTop="10px",e.style.color="#000",e.style.border="1px solid #000",e.addEventListener("mouseover",function(){e.style.backgroundColor="#1e70b9",e.style.color="#fff"}),e.addEventListener("mouseout",function(){e.style.backgroundColor="#F2F5F7",e.style.color="#000"})}),I.style.background="#fff",I.style.color="#000",h.style.position="absolute",h.style.right="1px",h.style.top="1px",g.style.width="300px",g.style.height="100px",g.style.padding="10px",v.style.display="flex",v.style.flexDirection="column",v.style.rowGap="20px",C.style.fontSize="16px",C.style.padding="10px",C.style.marginTop="40px",C.style.border="1px solid #000",t.addEventListener("click",w),n.addEventListener("click",L),l.addEventListener("click",S),d.addEventListener("click",function(){r.remove(),B=!1}),copy.addEventListener("click",function(){var e=document.getElementById("inpt-text").textContent;navigator.clipboard.writeText(e),b.style.visibility="visible",setTimeout(function(){b.style.visibility="hidden"},1e3)}),t.addEventListener("click",w),n.addEventListener("click",L),l.addEventListener("click",S)),B=!0}();
