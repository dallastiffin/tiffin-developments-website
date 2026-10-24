/* Corner chat pointer: points at the live LeadConnector chat bubble. */
(function(){
  var tag = document.getElementById('chatTag');
  function store(k,v){ try{ v===undefined ? (v=sessionStorage.getItem(k)) : sessionStorage.setItem(k,v); }catch(e){} return v; }
  function openChat(){
    var w = window.leadConnector && window.leadConnector.chatWidget;
    try{ if(w && typeof w.openWidget === 'function'){ w.openWidget(); hide(); return true; } }catch(e){}
    var host = document.querySelector('chat-widget, #chat-widget, [id^="lc_chat"], .lc_text-widget, iframe[src*="leadconnector"]');
    var btn = host && host.shadowRoot && host.shadowRoot.querySelector('button, [role="button"]');
    if(btn){ btn.click(); hide(); return true; }
    return false;
  }
  function show(){ if(!tag || store('chatTagHidden')==='1') return; tag.hidden=false; tag.classList.add('in'); }
  function hide(){ if(!tag) return; tag.hidden=true; store('chatTagHidden','1'); }
  function nudge(){ if(!tag) return; tag.hidden=false; tag.classList.remove('in','nudge'); void tag.offsetWidth; tag.classList.add('nudge'); tag.querySelector('.chat-go').focus({preventScroll:true}); }
  if(tag){
    tag.querySelector('[data-close]').addEventListener('click', function(e){ e.stopPropagation(); hide(); });
    tag.querySelector('.chat-go').addEventListener('click', function(){ if(!openChat()) nudge(); });
    var shown=false;
    function maybe(){ if(shown) return; var y=window.scrollY||0; if(y > Math.min(420, window.innerHeight*.45)){ shown=true; show(); window.removeEventListener('scroll', maybe); } }
    window.addEventListener('scroll', maybe, {passive:true});
    setTimeout(function(){ if(!shown){ shown=true; show(); } }, 9000);
  }
  document.querySelectorAll('[data-open-chat]').forEach(function(b){
    b.addEventListener('click', function(e){ e.preventDefault(); if(!openChat()){ nudge(); } });
  });
})();
