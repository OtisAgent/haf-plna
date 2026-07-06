// PLNA tab content — Today
document.getElementById('tab-today').innerHTML = `
        <!-- TODAY -->
        <div id="tab-today">
          <div class="greet">
            <h2>Good morning, Jake.</h2>
            <div class="greet-sub">Sunday, 6 July 2026</div>
          </div>

          <div class="chip-row">
            <span class="chip"><span class="cdot"></span>Clever Checked</span>
            <span class="chip">PLNA Plus</span>
            <span class="chip">SWB 3.5T</span>
            <span class="chip">Base B90 4AA</span>
          </div>

          <div class="active-card">
            <div class="active-card-head">
              <div>
                <div class="active-title">Active today</div>
                <div class="active-sub">Visible to KNECT for new jobs</div>
              </div>
              <button class="active-toggle"><span class="knob"></span></button>
            </div>
            <div class="loc-meta">
              <button class="loc-tab sel">Last location</button>
              <span class="loc-status">Near Coventry &mdash; heading to LE3 &middot; updated 12 min ago via WhatsApp</span>
            </div>
            <div class="map-placeholder">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Live map will render here
            </div>
            <div class="loc-actions">
              <button class="btn btn-green btn-sm">
                <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                Go active on WhatsApp
              </button>
              <button class="btn btn-ghost btn-sm">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
                Update from this phone
              </button>
            </div>
            <div class="loc-note">
              Going active is your choice: send the pin from WhatsApp and your position shows here so jobs can find you. Stop sharing any time &mdash; you&rsquo;re only tracked while you choose to be.
            </div>
          </div>

          <div class="kpi-row">
            <div class="kpi-card">
              <div class="kpi-n">3</div>
              <div class="kpi-l">Jobs today</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-n">1 / 3</div>
              <div class="kpi-l">Delivered</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-n">142 mi</div>
              <div class="kpi-l">Loaded miles today</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-n">£218.40</div>
              <div class="kpi-l">Expected pay today</div>
            </div>
          </div>

          <div class="section-head">
            <div class="section-title">Today&rsquo;s run &middot; Mon 6</div>
            <div class="section-actions">
              <button class="btn btn-green btn-sm">
                <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                WhatsApp KNECT
              </button>
              <button class="btn btn-ghost btn-sm">
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                Add day to calendar
              </button>
            </div>
          </div>

          <!-- Job 1 — done -->
          <div class="job-card done">
            <div class="job-row-1">
              <span class="job-time">07:00</span>
              <span class="job-ref">KN-D1001</span>
              <span class="badge badge-green">Delivered</span>
              <span class="job-amount">£55.50</span>
            </div>
            <div class="job-route">B2 4AA <span class="job-route-arr">&rarr;</span> CV1 3RZ</div>
            <div class="job-route-meta">
              <span>22 mi</span><span>SWB Van</span><span>deliver by 09:00</span>
            </div>
            <div class="job-track">
              <div class="track-bar">
                <div class="track-dot done"></div>
                <div class="track-line done"></div>
                <div class="track-dot done"></div>
                <div class="track-line done"></div>
                <div class="track-dot done"></div>
              </div>
              <div class="track-labels">
                <span class="track-label done">Accepted</span>
                <span class="track-label done">Collected</span>
                <span class="track-label done">Delivered</span>
              </div>
            </div>
            <div class="job-foot">
              <div class="job-done-note">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Done 08:52
              </div>
              <div class="job-actions">
                <button class="btn btn-ghost btn-sm">
                  <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          <!-- Job 2 — current / in transit -->
          <div class="job-card current">
            <div class="job-row-1">
              <span class="job-time">09:00</span>
              <span class="job-ref">KN-D1002</span>
              <span class="badge badge-amber">In transit</span>
              <span class="job-amount">£94.50</span>
            </div>
            <div class="job-route">B2 <span class="job-route-arr">&rarr;</span> M1 4WB</div>
            <div class="job-route-meta">
              <span>84 mi</span><span>SWB Van</span><span>deliver by 12:30</span>
            </div>
            <div class="job-track">
              <div class="track-bar">
                <div class="track-dot done"></div>
                <div class="track-line done"></div>
                <div class="track-dot active"></div>
                <div class="track-line"></div>
                <div class="track-dot"></div>
              </div>
              <div class="track-labels">
                <span class="track-label done">Accepted</span>
                <span class="track-label active">Collected</span>
                <span class="track-label">Delivered</span>
              </div>
            </div>
            <div class="job-foot">
              <div></div>
              <div class="job-actions">
                <button class="btn btn-sm">Mark delivered</button>
                <button class="btn btn-ghost btn-sm">
                  <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  WhatsApp
                </button>
                <button class="btn btn-ghost btn-sm">
                  <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  Calendar
                </button>
              </div>
            </div>
          </div>

          <!-- Job 3 — upcoming -->
          <div class="job-card">
            <div class="job-row-1">
              <span class="job-time">13:30</span>
              <span class="job-ref">KN-D1003</span>
              <span class="badge badge-grey">Accepted</span>
              <span class="job-amount">£68.40</span>
            </div>
            <div class="job-route">S1 <span class="job-route-arr">&rarr;</span> LS1 4HE</div>
            <div class="job-route-meta">
              <span>36 mi</span><span>SWB Van</span><span>deliver by 15:00</span>
            </div>
            <div class="job-track">
              <div class="track-bar">
                <div class="track-dot done"></div>
                <div class="track-line"></div>
                <div class="track-dot"></div>
                <div class="track-line"></div>
                <div class="track-dot"></div>
              </div>
              <div class="track-labels">
                <span class="track-label done">Accepted</span>
                <span class="track-label">Collected</span>
                <span class="track-label">Delivered</span>
              </div>
            </div>
            <div class="job-foot">
              <div></div>
              <div class="job-actions">
                <button class="btn btn-sm">Mark collected</button>
                <button class="btn btn-ghost btn-sm">
                  <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  WhatsApp
                </button>
                <button class="btn btn-ghost btn-sm">
                  <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  Calendar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- PLACEHOLDER TABS -->
`;
