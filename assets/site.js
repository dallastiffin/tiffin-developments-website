/* Tiffin Developments — lead form
   Posts to the portfolio Lead Router (Google Apps Script). Leads land in the
   "Tiffin Developments - Website Leads" Google Sheet and email tiffindevelopments@gmail.com. */
(function(){
  var ENDPOINT = "https://script.google.com/macros/s/AKfycbyUzWIbd-lu-Lbsx4iQWj0bLN1fqSG2pyzyhrR7O4clNP8Rx0wFUqknTYX8_Cjhx77fng/exec";
  var SITE_KEY = "tiffin-developments";

  var form = document.getElementById('leadForm');
  if(!form) return;
  var status = document.getElementById('formStatus');
  var btn = form.querySelector('button[type=submit]');
  var label = btn.textContent;

  form.addEventListener('input', function(ev){ if(ev.target.getAttribute('aria-invalid')==='true' && ev.target.value.trim()) ev.target.setAttribute('aria-invalid','false'); });
  function val(n){ var el = form.elements[n]; return el ? el.value.trim() : ''; }
  function show(text, kind){
    status.hidden = false;
    status.textContent = text;
    status.className = 'form-status ' + kind;
    btn.disabled = false;
    btn.textContent = label;
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var missing = [];
    ['name','phone'].forEach(function(n){
      var el = form.elements[n];
      var bad = !el.value.trim();
      el.setAttribute('aria-invalid', bad ? 'true' : 'false');
      if(bad) missing.push(n === 'name' ? 'your name' : 'a phone number');
    });
    if(missing.length){
      show('Please add ' + missing.join(' and ') + ' so we can reach you.', 'error');
      form.elements[missing[0] === 'your name' ? 'name' : 'phone'].focus();
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending…';
    var biz = val('business');
    var msg = val('message');
    var payload = {
      site: SITE_KEY,
      name: val('name'),
      phone: val('phone'),
      email: val('email'),
      city: val('city'),
      service: val('service'),
      message: (biz ? 'Business: ' + biz + (msg ? '\n\n' : '') : '') + msg,
      source: 'Book a call — ' + (form.dataset.source || 'home'),
      pageUrl: window.location.href,
      botcheck: val('botcheck')
    };
    var fail = "That didn't go through. Call (226) 602-0654 or email tiffindevelopments@gmail.com.";
    try{
      fetch(ENDPOINT, {
        method:'POST', mode:'no-cors',
        headers:{'Content-Type':'text/plain;charset=utf-8'},
        body: JSON.stringify(payload)
      }).then(function(){
        show("Got it. We'll be in touch within one business day to book your call.", 'success');
        form.reset();
      }).catch(function(){ show(fail, 'error'); });
    }catch(err){ show(fail, 'error'); }
  });
})();
