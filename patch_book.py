#!/usr/bin/env python3
import base64, json, urllib.request, urllib.error, os

REPO = "OtisAgent/haf-plna"
GITHUB_TOKEN = os.environ["GITHUB_TOKEN"]

def gh(method, path, body=None):
    url = f"https://api.github.com{path}"
    req = urllib.request.Request(url, method=method)
    req.add_header("Authorization", f"Bearer {GITHUB_TOKEN}")
    req.add_header("Accept", "application/vnd.github.v3+json")
    if body:
        data = json.dumps(body).encode()
        req.add_header("Content-Type", "application/json")
        req.data = data
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())

# ── Fetch book.html ──────────────────────────────────────────
print("Fetching book.html...")
res = gh("GET", f"/repos/{REPO}/contents/book.html")
sha = res["sha"]
content = base64.b64decode(res["content"]).decode("utf-8")
print(f"  SHA: {sha}, size: {len(content)}")

# ── Old submitBooking function ───────────────────────────────
OLD = """function submitBooking(){
  const first=document.getElementById('bkFirst')?.value.trim();
  const last=document.getElementById('bkLast')?.value.trim();
  const phone=document.getElementById('bkPhone')?.value.trim();
  const from=document.getElementById('bkFrom')?.value.trim();
  const to=document.getElementById('bkTo')?.value.trim();
  if(!first||!last||!phone||!from||!to){alert('Please fill in your name, phone number, and both postcodes.');return;}
  if(P.calendar&&!bSel){alert('Please select a date from the calendar.');return;}
  const ref='REF-'+Math.floor(100000+Math.random()*900000);
  document.getElementById('confirmRef').textContent=ref;
  document.getElementById('confirmNote').textContent=P.whatsapp
    ?'Check your WhatsApp — the driver will confirm within 1 hour.'
    :'The driver will review and respond within 24 hours.';
  document.getElementById('mainPage').style.display='none';
  document.getElementById('successPage').style.display='block';
  window.scrollTo(0,0);
}"""

# ── New submitBooking function ────────────────────────────────
NEW = """async function submitBooking(){
  const first=document.getElementById('bkFirst')?.value.trim();
  const last=document.getElementById('bkLast')?.value.trim();
  const phone=document.getElementById('bkPhone')?.value.trim();
  const from=document.getElementById('bkFrom')?.value.trim();
  const to=document.getElementById('bkTo')?.value.trim();
  if(!first||!last||!phone||!from||!to){alert('Please fill in your name, phone number, and both postcodes.');return;}
  if(P.calendar&&!bSel){alert('Please select a date from the calendar.');return;}
  const submitBtn=document.querySelector('[onclick*="submitBooking"]');
  if(submitBtn){submitBtn.textContent='Sending…';submitBtn.disabled=true;}
  const ref='REF-'+Math.floor(100000+Math.random()*900000);
  try{
    await fetch(`${SUPA_URL}/rest/v1/plna_bookings`,{
      method:'POST',
      headers:{'apikey':SUPA_KEY,'Authorization':'Bearer '+SUPA_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},
      body:JSON.stringify({ref,driver_username:driverKey,customer_first:first,customer_last:last,customer_phone:phone,from_postcode:from,to_postcode:to,preferred_date:bSel||null,notes:''})
    });
  }catch(e){console.error('Booking save failed:',e);}
  document.getElementById('confirmRef').textContent=ref;
  document.getElementById('confirmNote').textContent=P.whatsapp
    ?'Check your WhatsApp — the driver will confirm within 1 hour.'
    :'The driver will review and respond within 24 hours.';
  document.getElementById('mainPage').style.display='none';
  document.getElementById('successPage').style.display='block';
  window.scrollTo(0,0);
}"""

assert OLD in content, "ERROR: Old submitBooking not found in book.html"
patched = content.replace(OLD, NEW, 1)
assert patched != content, "ERROR: No change made"
print("  Patch applied OK")

# ── Push to GitHub ────────────────────────────────────────────
encoded = base64.b64encode(patched.encode()).decode()
print("Pushing book.html...")
gh("PUT", f"/repos/{REPO}/contents/book.html", {
    "message": "fix: wire submitBooking() to save real bookings to Supabase",
    "content": encoded,
    "sha": sha
})
print("Done — book.html updated.")
