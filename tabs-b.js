// PLNA tab content — Calendar, Routes, Diary, Planned, POD
document.getElementById('tab-calendar').innerHTML = `
        <!-- CALENDAR -->
        <div id="tab-calendar" style="display:none">
          <div class="greet">
            <h2>Calendar</h2>
            <div class="greet-sub">Week of 6 &ndash; 12 July 2026</div>
          </div>
          <div class="cal-nav">
            <button class="btn btn-ghost btn-sm">
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
              Prev
            </button>
            <div class="cal-nav-title">July 2026</div>
            <button class="btn btn-ghost btn-sm">
              Next
              <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          <div class="cal-week">
            <div class="cal-day today">
              <div class="cal-day-label">Sun</div>
              <div class="cal-day-num">6</div>
              <div class="cal-dots"><span class="cal-dot green"></span><span class="cal-dot amber"></span><span class="cal-dot"></span></div>
            </div>
            <div class="cal-day">
              <div class="cal-day-label">Mon</div>
              <div class="cal-day-num">7</div>
              <div class="cal-dots"><span class="cal-dot green"></span></div>
            </div>
            <div class="cal-day">
              <div class="cal-day-label">Tue</div>
              <div class="cal-day-num">8</div>
              <div class="cal-dots"><span class="cal-dot green"></span><span class="cal-dot green"></span></div>
            </div>
            <div class="cal-day">
              <div class="cal-day-label">Wed</div>
              <div class="cal-day-num">9</div>
              <div class="cal-dots"></div>
              <div class="cal-avail">Available</div>
            </div>
            <div class="cal-day">
              <div class="cal-day-label">Thu</div>
              <div class="cal-day-num">10</div>
              <div class="cal-dots"><span class="cal-dot amber"></span></div>
            </div>
            <div class="cal-day">
              <div class="cal-day-label">Fri</div>
              <div class="cal-day-num">11</div>
              <div class="cal-dots"></div>
              <div class="cal-avail">Available</div>
            </div>
            <div class="cal-day off">
              <div class="cal-day-label">Sat</div>
              <div class="cal-day-num">12</div>
              <div class="cal-dots"></div>
            </div>
          </div>
          <div class="section-head">
            <div class="section-title">This week &mdash; 6 jobs planned</div>
            <div class="section-actions">
              <button class="btn btn-ghost btn-sm">
                <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                WhatsApp KNECT
              </button>
            </div>
          </div>
          <div class="job-card done">
            <div class="job-row-1">
              <span class="job-time">Sun 6 &middot; 07:00</span>
              <span class="job-ref">KN-D1001</span>
              <span class="badge badge-green">Delivered</span>
              <span class="job-amount">£55.50</span>
            </div>
            <div class="job-route">B2 4AA <span class="job-route-arr">&rarr;</span> CV1 3RZ</div>
            <div class="job-route-meta"><span>22 mi</span><span>SWB Van</span></div>
          </div>
          <div class="job-card">
            <div class="job-row-1">
              <span class="job-time">Mon 7 &middot; 08:30</span>
              <span class="job-ref">KN-D1004</span>
              <span class="badge badge-grey">Accepted</span>
              <span class="job-amount">£78.00</span>
            </div>
            <div class="job-route">B4 2AG <span class="job-route-arr">&rarr;</span> ST4 7EH</div>
            <div class="job-route-meta"><span>38 mi</span><span>SWB Van</span></div>
          </div>
          <div class="job-card">
            <div class="job-row-1">
              <span class="job-time">Tue 8 &middot; 07:30</span>
              <span class="job-ref">KN-D1005</span>
              <span class="badge badge-grey">Accepted</span>
              <span class="job-amount">£92.00</span>
            </div>
            <div class="job-route">CV3 1LF <span class="job-route-arr">&rarr;</span> NG1 5DX</div>
            <div class="job-route-meta"><span>47 mi</span><span>SWB Van</span></div>
          </div>
        </div>

`;
document.getElementById('tab-routes').innerHTML = `
        <!-- ROUTE PLANNER -->
        <div id="tab-routes" style="display:none">
          <div class="greet">
            <h2>Route Planner</h2>
            <div class="greet-sub">Calculate distance, time and recommended rate</div>
          </div>
          <div class="route-form">
            <div class="route-stops">
              <div class="route-input-row">
                <span class="route-lbl">From</span>
                <input class="route-field" type="text" placeholder="Collection postcode" value="B2 4AA">
              </div>
              <div class="route-conn"></div>
              <div class="route-input-row">
                <span class="route-lbl">To</span>
                <input class="route-field" type="text" placeholder="Delivery postcode" value="M1 4WB">
              </div>
            </div>
            <div style="display:flex;gap:10px;align-items:center;margin-bottom:16px;flex-wrap:wrap">
              <select class="route-field" style="flex:1;max-width:220px">
                <option>SWB Van (up to 3.5T)</option>
                <option>LWB Van (up to 3.5T)</option>
                <option>Luton Box Van</option>
              </select>
              <button class="btn" style="flex:none" onclick="showRouteResult()">Calculate Route</button>
            </div>
          </div>
          <div class="route-result" id="routeResult">
            <div class="route-res-grid">
              <div class="route-res-stat">
                <div class="route-res-n">84 mi</div>
                <div class="route-res-l">Distance</div>
              </div>
              <div class="route-res-stat">
                <div class="route-res-n">1h 42m</div>
                <div class="route-res-l">Drive Time</div>
              </div>
              <div class="route-res-stat">
                <div class="route-res-n">£94.50</div>
                <div class="route-res-l">HAF Rate</div>
              </div>
            </div>
          </div>
        </div>

`;
document.getElementById('tab-diary').innerHTML = `
        <!-- DRIVER DIARY -->
        <div id="tab-diary" style="display:none">
          <div class="greet"><h2>Driver Diary</h2><div class="greet-sub">Your personal log</div></div>
          <div class="placeholder"><h3>Driver Diary</h3>Personal daily log, notes per job, and incident records. Coming in the next phase.</div>
        </div>

`;
document.getElementById('tab-planned').innerHTML = `
        <!-- PLANNED JOBS -->
        <div id="tab-planned" style="display:none">
          <div class="greet">
            <h2>Planned Jobs</h2>
            <div class="greet-sub">Confirmed upcoming work</div>
          </div>
          <div class="section-head">
            <div class="section-title">Next 7 days &mdash; 4 jobs</div>
          </div>
          <div class="job-card">
            <div class="job-row-1">
              <span class="job-time">Mon 7 &middot; 08:30</span>
              <span class="job-ref">KN-D1004</span>
              <span class="badge badge-grey">Accepted</span>
              <span class="job-amount">£78.00</span>
            </div>
            <div class="job-route">B4 2AG <span class="job-route-arr">&rarr;</span> ST4 7EH</div>
            <div class="job-route-meta"><span>38 mi</span><span>SWB Van</span><span>deliver by 10:30</span></div>
            <div class="job-foot"><div></div><div class="job-actions"><button class="btn btn-ghost btn-sm"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>Calendar</button></div></div>
          </div>
          <div class="job-card">
            <div class="job-row-1">
              <span class="job-time">Tue 8 &middot; 07:30</span>
              <span class="job-ref">KN-D1005</span>
              <span class="badge badge-grey">Accepted</span>
              <span class="job-amount">£92.00</span>
            </div>
            <div class="job-route">CV3 1LF <span class="job-route-arr">&rarr;</span> NG1 5DX</div>
            <div class="job-route-meta"><span>47 mi</span><span>SWB Van</span><span>deliver by 09:30</span></div>
            <div class="job-foot"><div></div><div class="job-actions"><button class="btn btn-ghost btn-sm"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>Calendar</button></div></div>
          </div>
          <div class="job-card">
            <div class="job-row-1">
              <span class="job-time">Tue 8 &middot; 13:00</span>
              <span class="job-ref">KN-D1006</span>
              <span class="badge badge-grey">Accepted</span>
              <span class="job-amount">£61.20</span>
            </div>
            <div class="job-route">NG1 2AA <span class="job-route-arr">&rarr;</span> DE1 3FT</div>
            <div class="job-route-meta"><span>18 mi</span><span>SWB Van</span><span>deliver by 14:30</span></div>
            <div class="job-foot"><div></div><div class="job-actions"><button class="btn btn-ghost btn-sm"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>Calendar</button></div></div>
          </div>
          <div class="job-card">
            <div class="job-row-1">
              <span class="job-time">Thu 10 &middot; 09:00</span>
              <span class="job-ref">KN-D1007</span>
              <span class="badge badge-amber">Pending confirm</span>
              <span class="job-amount">£110.40</span>
            </div>
            <div class="job-route">B2 4AA <span class="job-route-arr">&rarr;</span> LS1 4HE</div>
            <div class="job-route-meta"><span>98 mi</span><span>SWB Van</span><span>deliver by 12:00</span></div>
            <div class="job-foot"><div></div><div class="job-actions"><button class="btn btn-sm">Confirm</button><button class="btn btn-ghost btn-sm"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>Calendar</button></div></div>
          </div>
        </div>
`;
document.getElementById('tab-return').innerHTML = `
        <!-- RETURN-ROUTE -->
        <div id="tab-return" style="display:none">
          <div class="greet"><h2>Return-Route</h2><div class="greet-sub">Backload alerts on your way home</div></div>
          <div class="placeholder"><h3>Return-Route</h3>PLNA Pro &mdash; backload matching on your return leg. Alerts when a job is available near your route home.</div>
        </div>

`;
document.getElementById('tab-empty').innerHTML = `
        <!-- EMPTY DAYS -->
        <div id="tab-empty" style="display:none">
          <div class="greet"><h2>Empty Days</h2><div class="greet-sub">Flag availability and attract more work</div></div>
          <div class="placeholder"><h3>Empty Days</h3>Flag days with no jobs to appear in the KNECT available driver pool. Operators see you and can offer direct bookings.</div>
        </div>

`;
document.getElementById('tab-notes').innerHTML = `
        <!-- NOTES -->
        <div id="tab-notes" style="display:none">
          <div class="greet"><h2>Notes</h2><div class="greet-sub">Private notes &mdash; only visible to you</div></div>
          <div class="placeholder"><h3>Notes</h3>Quick notes per job, per day, or general. Private and attached to your driver record.</div>
        </div>

`;
