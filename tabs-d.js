// PLNA tab content — Compliance, Communications, Billing
document.getElementById('tab-compliance').innerHTML = `
        <!-- COMPLIANCE & PROFILE -->
        <div id="tab-compliance" style="display:none">
          <div class="greet">
            <h2>Compliance &amp; Profile</h2>
            <div class="greet-sub">Jake Thornton &middot; JT389391 &middot; PLNA Pro</div>
          </div>
          <div class="status-banner green" style="border-radius:var(--radius-sm);padding:14px 18px;display:flex;align-items:center;gap:12px;margin-bottom:20px;border:1px solid rgba(62,117,80,.25);background:rgba(62,117,80,.07)">
            <svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:var(--green);stroke-width:2;fill:none;flex:none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <div>
              <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--green);margin-bottom:1px">Clever Checked &mdash; Approved</div>
              <div style="font-size:12.5px;color:var(--muted)">All documents verified. Your account is active and connected to HAF KNECT.</div>
            </div>
          </div>
          <div class="section-head"><div class="section-title">Documents &amp; Licences</div></div>
          <div class="doc-list">
            <div class="doc-item">
              <div class="doc-ic green"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg></div>
              <div class="doc-body"><div class="doc-title">Driver Licence &mdash; B+E</div><div class="doc-sub">Full UK licence &middot; No endorsements</div></div>
              <div class="doc-exp ok">Expires 14 Mar 2028</div>
            </div>
            <div class="doc-item">
              <div class="doc-ic green"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <div class="doc-body"><div class="doc-title">Goods in Transit Insurance</div><div class="doc-sub">Up to £10,000 per consignment</div></div>
              <div class="doc-exp ok">Expires 30 Nov 2026</div>
            </div>
            <div class="doc-item">
              <div class="doc-ic green"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
              <div class="doc-body"><div class="doc-title">Vehicle MOT &mdash; SWB 3.5T</div><div class="doc-sub">VN17 HAF &middot; Ford Transit Custom</div></div>
              <div class="doc-exp ok">Expires 22 Jan 2027</div>
            </div>
            <div class="doc-item">
              <div class="doc-ic amber"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
              <div class="doc-body"><div class="doc-title">Vehicle Insurance</div><div class="doc-sub">Renewal required &mdash; upload updated certificate</div></div>
              <div class="doc-exp near">Expires 31 Jul 2026</div>
            </div>
          </div>
          <div class="section-head"><div class="section-title">Profile details</div></div>
          <div class="earn-card">
            <table class="earn-table">
              <tbody>
                <tr><td style="color:var(--muted);width:40%">Full name</td><td><strong>Jake Thornton</strong></td></tr>
                <tr><td style="color:var(--muted)">HAF Username</td><td><strong>JT389391</strong></td></tr>
                <tr><td style="color:var(--muted)">Phone / WhatsApp</td><td><strong>07740 &middot;&middot;&middot; 3893</strong></td></tr>
                <tr><td style="color:var(--muted)">Email</td><td><strong>j.thornton@gmail.com</strong></td></tr>
                <tr><td style="color:var(--muted)">Base postcode</td><td><strong>B90 4AA</strong></td></tr>
                <tr><td style="color:var(--muted)">Van type</td><td><strong>SWB Van 3.5T</strong></td></tr>
                <tr><td style="color:var(--muted)">Plan</td><td><strong>PLNA Pro</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>

`;
document.getElementById('tab-comms').innerHTML = `
        <!-- COMMUNICATIONS -->
        <div id="tab-comms" style="display:none">
          <div class="greet">
            <h2>Communications</h2>
            <div class="greet-sub">Messages and notifications</div>
          </div>
          <div class="msg-list">
            <div class="msg-item unread">
              <div class="msg-av orange">H</div>
              <div class="msg-body">
                <div class="msg-from">HAF Dispatch</div>
                <div class="msg-preview">New job alert &mdash; B2 &rarr; M1 available now. 84 mi, SWB Van, £94.50. Tap to view.</div>
              </div>
              <div class="msg-time">09:02</div>
            </div>
            <div class="msg-item unread">
              <div class="msg-av">K</div>
              <div class="msg-body">
                <div class="msg-from">KNECT Bot</div>
                <div class="msg-preview">Your delivery KN-D1002 is on track. Delivery window 12:00&ndash;12:30. Shipper notified.</div>
              </div>
              <div class="msg-time">10:41</div>
            </div>
            <div class="msg-item">
              <div class="msg-av">H</div>
              <div class="msg-body">
                <div class="msg-from">HAF System</div>
                <div class="msg-preview">Your PLNA Pro plan renews on 1 Aug 2026. No action needed &mdash; auto-renewal active.</div>
              </div>
              <div class="msg-time">Yesterday</div>
            </div>
            <div class="msg-item">
              <div class="msg-av orange">H</div>
              <div class="msg-body">
                <div class="msg-from">HAF Dispatch</div>
                <div class="msg-preview">Return-route opportunity: LS1 &rarr; B2 area, tomorrow 14:00. 96 mi, £88.00.</div>
              </div>
              <div class="msg-time">Yesterday</div>
            </div>
            <div class="msg-item">
              <div class="msg-av">C</div>
              <div class="msg-body">
                <div class="msg-from">CleverCheck</div>
                <div class="msg-preview">Action required: your vehicle insurance expires 31 Jul 2026. Please upload updated cert.</div>
              </div>
              <div class="msg-time">2 Jul</div>
            </div>
          </div>
        </div>
`;
document.getElementById('tab-billing').innerHTML = `
        <div id="tab-billing" style="display:none">
          <div class="billing-intro">
            <h2>Plans &amp; Billing</h2>
            <p>Free on the fly, or the full planning toolkit. Pay monthly or save with a year up front.</p>
          </div>

          <div class="billing-toggle">
            <span class="billing-period active" onclick="setBillingPeriod('monthly')">Monthly</span>
            <button class="billing-toggle-track" id="billingToggle" onclick="toggleBilling()"><span class="knob"></span></button>
            <span class="billing-period" id="annualLabel" onclick="setBillingPeriod('annual')">Annual <span class="billing-save-pill">SAVE 15%</span></span>
          </div>

          <div class="plan-grid" style="grid-template-columns:1fr 1fr 1fr;max-width:900px">
            <div class="plan-card">
              <div class="plan-name">PLNA Lite</div>
              <div class="plan-price">
                <span class="plan-price-n">&pound;0</span>
                <span class="plan-price-per">/ month</span>
              </div>
              <div class="plan-tagline">Get started on the HAF network.</div>
              <ul class="plan-features">
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Driver &amp; vehicle profile</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Availability &amp; calendar</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>See the job board</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Basic area preferences</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>KNECT network connection</li>
              </ul>
              <button class="btn btn-ghost" style="width:100%;justify-content:center">Choose Lite</button>
            </div>

            <div class="plan-card">
              <div class="plan-name">PLNA Plus</div>
              <div class="plan-price">
                <span class="plan-price-n" id="plusPrice">&pound;10</span>
                <span class="plan-price-per">/ month</span>
              </div>
              <div class="plan-tagline">Plan better, earn more consistently.</div>
              <ul class="plan-features">
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Everything in Lite</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Route planner</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Proof of delivery records</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Money &amp; payouts tracker</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Driver landing page</li>
              </ul>
              <button class="btn btn-ghost" style="width:100%;justify-content:center">Choose Plus</button>
            </div>

            <div class="plan-card pro">
              <div class="plan-name">PLNA Pro</div>
              <div class="plan-price">
                <span class="plan-price-n" id="proPrice">&pound;50</span>
                <span class="plan-price-per">/ month</span>
              </div>
              <div class="plan-tagline">Run smarter. Earn more.</div>
              <ul class="plan-features">
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Everything in Free</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Full route planner</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Return-route backload alerts</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Full JUDD AI support</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Higher base rate &amp; lower fee</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Driver landing page</li>
                <li><span class="plan-check"><svg viewBox="0 0 10 10"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg></span>Full earnings visibility</li>
              </ul>
              <button class="btn" style="width:100%;justify-content:center">Manage billing</button>
            </div>
          </div>

          <div class="billing-note">Framework preview &mdash; prices are placeholder / pending confirmation.</div>
        </div>

      </div>
    </div>
  </div>
</div>

`;

// Billing toggle
var billingAnnual = false;
function toggleBilling() {
  billingAnnual = !billingAnnual;
  var t = document.getElementById('billingToggle');
  if(t) t.classList.toggle('annual', billingAnnual);
  if(document.getElementById('plusPrice')) document.getElementById('plusPrice').innerHTML = billingAnnual ? '&pound;8' : '&pound;10';
  if(document.getElementById('proPrice')) document.getElementById('proPrice').innerHTML = billingAnnual ? '&pound;42' : '&pound;50';
  document.querySelectorAll('.billing-period').forEach(function(el,i){
    el.classList.toggle('active', billingAnnual ? i===1 : i===0);
  });
}
function setBillingPeriod(period) {
  if ((period==='annual') !== billingAnnual) toggleBilling();
}
