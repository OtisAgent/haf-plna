// PLNA tab content — Money, Reports, Placeholders
document.getElementById('tab-money').innerHTML = `
        <!-- MONEY & PAYOUTS -->
        <div id="tab-money" style="display:none">
          <div class="greet">
            <h2>Money &amp; Payouts</h2>
            <div class="greet-sub">July 2026 &middot; PLNA Pro</div>
          </div>
          <div class="kpi-row">
            <div class="kpi-card">
              <div class="kpi-n">£1,847</div>
              <div class="kpi-l">Month to date</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-n">£2,340</div>
              <div class="kpi-l">Expected this month</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-n">£0.22</div>
              <div class="kpi-l">Cost per mile</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-n">£67.30</div>
              <div class="kpi-l">Avg profit per drive</div>
            </div>
          </div>
          <div class="payout-bar">
            <div class="payout-info">
              <div class="payout-label">Next payout</div>
              <div class="payout-date">15 July 2026</div>
              <div style="font-size:12px;color:var(--muted);margin-top:3px">Paid via CleverPay to registered account</div>
            </div>
            <div class="payout-amount">£1,847.20</div>
          </div>
          <div class="earn-card">
            <div class="earn-head">
              <div class="earn-head-title">July 2026 &mdash; job breakdown</div>
              <button class="btn btn-ghost btn-sm">Download CSV</button>
            </div>
            <table class="earn-table">
              <thead><tr><th>Date</th><th>Job Ref</th><th>Route</th><th>Miles</th><th>Gross</th><th>HAF Fee</th><th>Net</th></tr></thead>
              <tbody>
                <tr><td>Sun 6</td><td style="color:var(--muted)">KN-D1001</td><td>B2 &rarr; CV1</td><td>22</td><td>£55.50</td><td style="color:var(--red)">-£5.55</td><td class="earn-amount">£49.95</td></tr>
                <tr><td>Sun 6</td><td style="color:var(--muted)">KN-D1002</td><td>B2 &rarr; M1</td><td>84</td><td>£94.50</td><td style="color:var(--red)">-£9.45</td><td class="earn-amount">£85.05</td></tr>
                <tr><td>Sat 5</td><td style="color:var(--muted)">KN-D0998</td><td>CV3 &rarr; LE3</td><td>31</td><td>£68.00</td><td style="color:var(--red)">-£6.80</td><td class="earn-amount">£61.20</td></tr>
                <tr><td>Fri 4</td><td style="color:var(--muted)">KN-D0994</td><td>B4 &rarr; WV1</td><td>19</td><td>£44.10</td><td style="color:var(--red)">-£4.41</td><td class="earn-amount">£39.69</td></tr>
              </tbody>
              <tfoot>
                <tr class="earn-total"><td colspan="4"><strong>Total (July so far)</strong></td><td><strong>£1,847.20</strong></td><td style="color:var(--red)"><strong>-£184.72</strong></td><td class="earn-amount" style="color:var(--green)">£1,662.48</td></tr>
              </tfoot>
            </table>
          </div>
          <div style="font-size:11.5px;color:var(--muted);line-height:1.6">HAF network fee is 10% of the gross job rate. Deducted before CleverPay settlement. Your net figure is what lands in your account.</div>
        </div>
`;
document.getElementById('tab-reports').innerHTML = `
        <!-- REPORTS & ANALYTICS -->
        <div id="tab-reports" style="display:none">
          <div class="greet">
            <h2>Reports &amp; Analytics</h2>
            <div class="greet-sub">Profit trends, mileage and earnings breakdown</div>
          </div>
          <div class="chip-row">
            <span class="chip chip-orange">This month</span>
            <span class="chip">Last month</span>
            <span class="chip">Last 90 days</span>
            <span class="chip">All time</span>
          </div>
          <div class="kpi-row" style="margin-bottom:22px">
            <div class="kpi-card">
              <div class="kpi-n">£1,847</div>
              <div class="kpi-l">Gross earnings</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-n">28</div>
              <div class="kpi-l">Jobs completed</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-n">1,842 mi</div>
              <div class="kpi-l">Loaded miles</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-n">£65.97</div>
              <div class="kpi-l">Avg per job</div>
            </div>
          </div>
          <div class="earn-card">
            <div class="earn-head"><div class="earn-head-title">Earnings by week &mdash; July 2026</div></div>
            <div style="padding:18px 20px">
              <div class="stat-bar-row">
                <div class="stat-bar-labels"><span>Wk 1 &mdash; 1&ndash;6 Jul</span><span>£487.20</span></div>
                <div class="stat-bar-track"><div class="stat-bar-fill" style="width:82%"></div></div>
              </div>
              <div class="stat-bar-row">
                <div class="stat-bar-labels"><span>Wk 2 &mdash; 7&ndash;13 Jul (in progress)</span><span>£218.40</span></div>
                <div class="stat-bar-track"><div class="stat-bar-fill" style="width:37%;background:var(--amber)"></div></div>
              </div>
              <div class="stat-bar-row" style="opacity:.35">
                <div class="stat-bar-labels"><span>Wk 3 &mdash; 14&ndash;20 Jul</span><span>&mdash;</span></div>
                <div class="stat-bar-track"><div class="stat-bar-fill" style="width:0%"></div></div>
              </div>
              <div class="stat-bar-row" style="opacity:.35">
                <div class="stat-bar-labels"><span>Wk 4 &mdash; 21&ndash;27 Jul</span><span>&mdash;</span></div>
                <div class="stat-bar-track"><div class="stat-bar-fill" style="width:0%"></div></div>
              </div>
            </div>
          </div>
          <div class="earn-card">
            <div class="earn-head"><div class="earn-head-title">Month vs. last month</div></div>
            <div style="padding:18px 20px">
              <div class="stat-bar-row">
                <div class="stat-bar-labels"><span>July 2026 (to date)</span><span>£1,847.20</span></div>
                <div class="stat-bar-track"><div class="stat-bar-fill" style="width:88%"></div></div>
              </div>
              <div class="stat-bar-row">
                <div class="stat-bar-labels"><span>June 2026</span><span>£2,103.80</span></div>
                <div class="stat-bar-track"><div class="stat-bar-fill" style="width:100%;background:var(--muted);opacity:.4"></div></div>
              </div>
            </div>
          </div>
        </div>

`;
document.getElementById('tab-ai').innerHTML = `
        <!-- JUDD AI -->
        <div id="tab-ai" style="display:none">
          <div class="greet"><h2>JUDD AI</h2><div class="greet-sub">Your AI planning assistant &mdash; PLNA Pro</div></div>
          <div class="placeholder"><h3>JUDD AI</h3>Route optimisation, earnings forecasting, backload suggestions and job prioritisation. Available on PLNA Pro.</div>
        </div>

`;
document.getElementById('tab-landing').innerHTML = `
        <!-- DRIVER LANDING PAGE -->
        <div id="tab-landing" style="display:none">
          <div class="greet"><h2>Driver Landing Page</h2><div class="greet-sub">Your public profile &mdash; visible to shippers on HAF KNECT</div></div>
          <div class="placeholder"><h3>Driver Landing Page</h3>Your public-facing profile showing vehicle type, area, CleverCheck status and availability. Shippers can request you directly.</div>
        </div>

`;
document.getElementById('tab-rewards').innerHTML = `
        <!-- MY REWARDS -->
        <div id="tab-rewards" style="display:none">
          <div class="greet"><h2>My Rewards</h2><div class="greet-sub">HAF points, referrals and perks</div></div>
          <div class="placeholder"><h3>My Rewards</h3>Earn HAF points for every completed delivery. Redeem against your PLNA plan or HAF Shop products. Refer drivers to earn bonus points.</div>
        </div>

`;
document.getElementById('tab-pass').innerHTML = `
        <!-- NETWORK PASS -->
        <div id="tab-pass" style="display:none">
          <div class="greet"><h2>Network Pass</h2><div class="greet-sub">Multi-carrier access &mdash; PLNA Pro</div></div>
          <div class="placeholder"><h3>Network Pass</h3>Your digital pass for access across the HAF network and connected carrier partners. Managed through your HAF username and CleverCheck approval.</div>
        </div>

`;
