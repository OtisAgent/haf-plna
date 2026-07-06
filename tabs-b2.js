document.getElementById('tab-pod').innerHTML = `
        <!-- PROOF OF DELIVERY -->
        <div id="tab-pod" style="display:none">
          <div class="greet">
            <h2>Proof of Delivery</h2>
            <div class="greet-sub">Photos, signatures and delivery records</div>
          </div>
          <div class="section-head">
            <div class="section-title">Today &mdash; 3 deliveries</div>
            <div class="section-actions">
              <button class="btn btn-ghost btn-sm">All records</button>
            </div>
          </div>
          <div class="pod-list">
            <div class="pod-card">
              <div class="pod-head">
                <span class="job-time">07:00</span>
                <span class="job-ref">KN-D1001</span>
                <span class="badge badge-green">Delivered</span>
                <span class="job-amount" style="margin-left:auto">£55.50</span>
              </div>
              <div class="pod-route">B2 4AA <span class="job-route-arr">&rarr;</span> CV1 3RZ</div>
              <div class="pod-meta">Done 08:52 &middot; 22 mi &middot; SWB Van</div>
              <div class="pod-inds">
                <span class="pod-ind done"><svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>Photo</span>
                <span class="pod-ind done"><svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>Signature</span>
                <span class="pod-ind done"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>POD Sent</span>
              </div>
            </div>
            <div class="pod-card">
              <div class="pod-head">
                <span class="job-time">09:00</span>
                <span class="job-ref">KN-D1002</span>
                <span class="badge badge-amber">In transit</span>
                <span class="job-amount" style="margin-left:auto">£94.50</span>
              </div>
              <div class="pod-route">B2 <span class="job-route-arr">&rarr;</span> M1 4WB</div>
              <div class="pod-meta">In progress &middot; 84 mi &middot; SWB Van</div>
              <div class="pod-inds">
                <span class="pod-ind miss"><svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>Photo pending</span>
                <span class="pod-ind miss"><svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>Signature pending</span>
              </div>
            </div>
            <div class="pod-card">
              <div class="pod-head">
                <span class="job-time">13:30</span>
                <span class="job-ref">KN-D1003</span>
                <span class="badge badge-grey">Accepted</span>
                <span class="job-amount" style="margin-left:auto">£68.40</span>
              </div>
              <div class="pod-route">S1 <span class="job-route-arr">&rarr;</span> LS1 4HE</div>
              <div class="pod-meta">Not started yet &middot; 36 mi &middot; SWB Van</div>
              <div class="pod-inds">
                <span class="pod-ind miss"><svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>Photo pending</span>
                <span class="pod-ind miss"><svg viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>Signature pending</span>
              </div>
            </div>
          </div>
        </div>

`;
