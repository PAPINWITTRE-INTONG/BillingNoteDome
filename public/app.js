/* ============================= CONSTANTS ============================= */
let docSettings = {
  companyName: 'บริษัท อินโคซอร์ส จำกัด',
  addressLine1: '31/2 หมู่ 3 ถนนบางนา-ตราด ต.บางเสาธง อ.บางเสาธง',
  addressLine2: 'จ.สมุทรปราการ 10570',
  taxId: '0115564025074 (สำนักงานใหญ่)',
  contact: 'โทร : Email : icsfinance@toagroup.com',
  titleTh: 'ใบวางบิล',
  titleEn: 'Billing Note / Invoice',
  bankAccountName: 'บริษัท อินโคซอร์ส จำกัด',
  bankName: 'ธนาคารกรุงเทพ',
  bankAccountType: 'ประเภทบัญชีออมทรัพย์',
  bankAccountNumber: '216-4-33151-0',
  signLeftLabel: 'ผู้รับวางบิล / Biller',
  signRightLabel: 'ผู้มีอำนาจลงนาม / Authorized Signature'
};

function companyBlockHtml(){
  return `<b>${escapeHtml(docSettings.companyName)}</b><br>${escapeHtml(docSettings.addressLine1)}<br>${escapeHtml(docSettings.addressLine2)}<br>Tax ID : ${escapeHtml(docSettings.taxId)}<br>${escapeHtml(docSettings.contact)}`;
}
function companyBlockPlain(){
  return `${docSettings.companyName}\n${docSettings.addressLine1}\n${docSettings.addressLine2}\nTax ID : ${docSettings.taxId}\n${docSettings.contact}`;
}
function paymentTextHtml(){
  return `<b>ชำระเงิน :</b> &nbsp;ชื่อบัญชี : ${escapeHtml(docSettings.bankAccountName)} &nbsp;${escapeHtml(docSettings.bankName)} &nbsp;${escapeHtml(docSettings.bankAccountType)} &nbsp;เลขที่บัญชี ${escapeHtml(docSettings.bankAccountNumber)}`;
}
function paymentTextPlain(){
  return `ชำระเงิน : ชื่อบัญชี : ${docSettings.bankAccountName} ${docSettings.bankName} ${docSettings.bankAccountType} เลขที่บัญชี ${docSettings.bankAccountNumber}`;
}

const LOGO_DATA_URI = "data:image/jpeg;base64,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";

let customers = [];      // {name, items[], total, address, seller, blNumber, docDate, dueDate}
let currentIndex = -1;

/* ============================= THAI BAHT TEXT ============================= */
const THAI_DIGIT = ['ศูนย์','หนึ่ง','สอง','สาม','สี่','ห้า','หก','เจ็ด','แปด','เก้า'];
const THAI_POS   = ['','สิบ','ร้อย','พัน','หมื่น','แสน'];

function convertChunk(chunk){
  let res = '';
  const len = chunk.length;
  for(let i=0;i<len;i++){
    const digit = parseInt(chunk[i],10);
    const pos = len-1-i;
    if(digit===0) continue;
    if(pos===0){
      res += (digit===1 && len>1) ? 'เอ็ด' : THAI_DIGIT[digit];
    } else if(pos===1){
      if(digit===1) res += 'สิบ';
      else if(digit===2) res += 'ยี่สิบ';
      else res += THAI_DIGIT[digit] + 'สิบ';
    } else {
      res += THAI_DIGIT[digit] + THAI_POS[pos];
    }
  }
  return res;
}

function numberToThaiText(numStr){
  numStr = numStr.replace(/^0+/,'');
  if(numStr === '') return '';
  const chunks = [];
  while(numStr.length > 0){
    chunks.unshift(numStr.slice(-6));
    numStr = numStr.slice(0,-6);
  }
  let out = '';
  for(let c=0;c<chunks.length;c++){
    out += convertChunk(chunks[c]);
    if(c < chunks.length-1) out += 'ล้าน';
  }
  return out;
}

function thaiBahtText(amount){
  if(isNaN(amount)) amount = 0;
  const negative = amount < 0;
  amount = Math.abs(Math.round(amount*100)/100);
  const bahtInt = Math.floor(amount);
  const satang = Math.round((amount - bahtInt)*100);
  let bahtText = numberToThaiText(String(bahtInt));
  if(bahtText === '') bahtText = 'ศูนย์';
  let out = bahtText + 'บาท';
  if(satang > 0){
    out += numberToThaiText(String(satang)) + 'สตางค์';
  } else {
    out += 'ถ้วน';
  }
  return (negative ? 'ลบ' : '') + out;
}

/* ============================= HELPERS ============================= */
const DAY_MS = 86400000;
/** Source files sometimes encode a date as a UTC timestamp a few seconds shy of local
 *  midnight (e.g. 16:59:56Z instead of 17:00:00Z) rather than a clean date. Rounding to
 *  the nearest UTC day recovers the intended calendar date regardless of that drift. */
function roundToUtcDay(dt){
  return new Date(Math.round(dt.getTime()/DAY_MS)*DAY_MS);
}
function fmtDate(d){
  if(!d) return '';
  let dt = d instanceof Date ? d : new Date(d);
  if(isNaN(dt)) return String(d);
  dt = roundToUtcDay(dt);
  const dd = String(dt.getUTCDate()).padStart(2,'0');
  const mm = String(dt.getUTCMonth()+1).padStart(2,'0');
  return `${dd}/${mm}/${dt.getUTCFullYear()}`;
}
function fmtAmount(n){
  n = Number(n)||0;
  return n.toLocaleString('en-US',{minimumFractionDigits:2, maximumFractionDigits:2});
}
function sanitizeFilename(s){
  return (s||'untitled').replace(/[\\/:*?"<>|]/g,'').trim().slice(0,80);
}
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._tm);
  showToast._tm = setTimeout(()=>t.classList.remove('show'), 2600);
}
function setProgress(pct, label, etaText){
  const ov = document.getElementById('progressOverlay');
  ov.classList.add('show');
  document.getElementById('progressFill').style.width = pct+'%';
  document.getElementById('progressPct').textContent = Math.round(pct)+'%';
  document.getElementById('progressEta').textContent = etaText || '';
  if(label) document.getElementById('progressLabel').textContent = label;
  if(pct>=100) setTimeout(()=>ov.classList.remove('show'), 400);
}
function hideProgress(){ document.getElementById('progressOverlay').classList.remove('show'); }

function formatDuration(sec){
  sec = Math.max(0, Math.round(sec));
  if(sec < 60) return `~${sec} วินาที`;
  const m = Math.floor(sec/60), s = sec%60;
  return s>0 ? `~${m} นาที ${s} วิ` : `~${m} นาที`;
}

/** Tracks elapsed time across repeated units of work to estimate time remaining. */
function createProgressTracker(){
  const t0 = performance.now();
  return {
    update(done, total, label){
      const elapsedSec = (performance.now() - t0) / 1000;
      const pct = total > 0 ? Math.min(99, (done/total)*100) : 0;
      let eta = '';
      if(done > 0 && done < total){
        const rate = elapsedSec / done;
        eta = `เหลืออีก ${formatDuration(rate * (total - done))}`;
      }
      setProgress(pct, label, eta);
    }
  };
}

/* ---- Export cancellation ---- */
let exportCancelRequested = false;
class ExportCancelledError extends Error {}
function throwIfCancelled(){
  if(exportCancelRequested) throw new ExportCancelledError('cancelled');
}
document.getElementById('cancelExportBtn').addEventListener('click', ()=>{
  exportCancelRequested = true;
  document.getElementById('progressLabel').textContent = 'กำลังยกเลิก…';
});

/* ============================= FILE PARSING ============================= */
const fileInput = document.getElementById('fileInput');
const dropzone = document.getElementById('dropzone');
dropzone.addEventListener('click', ()=> fileInput.click());
fileInput.addEventListener('change', e => { if(e.target.files[0]) handleFile(e.target.files[0]); });
['dragover'].forEach(ev => dropzone.addEventListener(ev, e=>{ e.preventDefault(); dropzone.classList.add('drag'); }));
['dragleave','drop'].forEach(ev => dropzone.addEventListener(ev, e=>{ e.preventDefault(); dropzone.classList.remove('drag'); }));
dropzone.addEventListener('drop', e=>{
  e.preventDefault();
  const f = e.dataTransfer.files[0];
  if(f) handleFile(f);
});

function handleFile(file){
  const reader = new FileReader();
  reader.onload = (e) => {
    try{
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, {type:'array', cellDates:true});
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws, {defval:null});
      parseRows(rows);
    }catch(err){
      console.error(err);
      showToast('อ่านไฟล์ไม่สำเร็จ: ตรวจสอบว่าเป็นไฟล์ Excel ที่ถูกต้อง');
    }
  };
  reader.readAsArrayBuffer(file);
}

function pick(row, keys){
  for(const k of keys){
    if(row[k] !== undefined && row[k] !== null && row[k] !== '') return row[k];
  }
  return null;
}

const THAI_MONTHS = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
function monthKey(d){
  let dt = d instanceof Date ? d : new Date(d);
  if(isNaN(dt)) return 'ไม่ทราบวันที่';
  dt = roundToUtcDay(dt);
  return `${dt.getUTCFullYear()}-${String(dt.getUTCMonth()+1).padStart(2,'0')}`;
}
function monthLabel(key){
  if(key === 'ไม่ทราบวันที่') return key;
  const [y,m] = key.split('-');
  return `${THAI_MONTHS[parseInt(m,10)-1]} ${y}`;
}
function extractSellerName(saleTag){
  if(!saleTag) return '';
  const s = String(saleTag).trim();
  const idx = s.indexOf(' - ');
  return idx >= 0 ? s.slice(0, idx).trim() : s;
}
function modeSeller(rawItems){
  const counts = {};
  rawItems.forEach(r => {
    const tag = pick(r, ['Sale Tags','sale tags','SaleTags']);
    const name = extractSellerName(tag);
    if(!name) return;
    counts[name] = (counts[name]||0) + 1;
  });
  let best = '', bestCount = 0;
  Object.keys(counts).forEach(k=>{
    if(counts[k] > bestCount){ bestCount = counts[k]; best = k; }
  });
  return best;
}

let rawSourceRows = [];

function buildCustomersFromRows(rows){
  if(rows.length === 0) return [];
  const hasBillingNumber = rows.some(r => pick(r, ['Billing Number','billing number']) !== null);
  return hasBillingNumber ? buildCustomersByBillingNumber(rows) : buildCustomersByPartnerOnly(rows);
}

/** New format: source file already carries the real Billing Number, billing date/due date,
 *  and invoice address per row. Group by COMPANY; each distinct Billing Number becomes its
 *  own chunk (= its own page/BL), newest billing date first. */
function buildCustomersByBillingNumber(rows){
  const custOrder = [];
  const custBlMap = {}; // name -> { blKey -> rawRows[] }
  rows.forEach(r => {
    const name = String(pick(r, ['Partner/Name','Partner','partner']) || '').trim();
    if(!name) return;
    const bl = pick(r, ['Billing Number','billing number']);
    if(!bl) return;
    const blKey = String(bl).trim();
    if(!blKey) return;
    if(!custBlMap[name]){ custBlMap[name] = {}; custOrder.push(name); }
    if(!custBlMap[name][blKey]) custBlMap[name][blKey] = [];
    custBlMap[name][blKey].push(r);
  });

  if(custOrder.length === 0) return [];

  const customers = custOrder.map(name => {
    const blMap = custBlMap[name];
    const chunks = Object.keys(blMap).map(blKey => {
      const rawItems = blMap[blKey];
      const first = rawItems[0];
      const address = String(pick(first, ['Invoice Address/Address','Invoice Address','Address','address']) || '').trim();
      const docDateRaw = pick(first, ['Billing Date','billing date']);
      const dueDateRaw = pick(first, ['Billing Due date','Billing Due Date','billing due date']);
      const items = rawItems.map((r, i) => ({
        seq: i+1,
        docNumber: pick(r, ['Number','number']) || '',
        date: pick(r, ['Invoice/Bill Date','Bill Date','Date','date']),
        dueDate: pick(r, ['Due Date','due date','DueDate']),
        amount: parseFloat(pick(r, ['Total Signed','Total in Currency Signed'])) || 0
      }));
      return {
        blKey, blNumber: blKey,
        docDate: fmtDate(docDateRaw), dueDate: fmtDate(dueDateRaw),
        address, seller: modeSeller(rawItems),
        items
      };
    }).sort((a,b) => a.blNumber.localeCompare(b.blNumber, undefined, {numeric:true, sensitivity:'base'})); // lowest BL number first
    const total = chunks.reduce((s,ch) => s + ch.items.reduce((s2,it)=>s2+it.amount,0), 0);
    return { name, total, chunks };
  });

  return customers.sort((a, b) => a.chunks[0].blNumber.localeCompare(b.chunks[0].blNumber, undefined, {numeric:true, sensitivity:'base'}));
}

/** Old format: no real Billing Number in the source — group by customer, then by month
 *  (newest month first), leaving BL Number / address / billing dates blank for manual entry. */
function buildCustomersByPartnerOnly(rows){
  const groups = {};
  const order = [];
  rows.forEach(r => {
    const partner = pick(r, ['Partner','partner']);
    if(!partner) return;
    const name = String(partner).trim();
    if(!name) return;
    if(!groups[name]){ groups[name] = []; order.push(name); }
    groups[name].push(r);
  });

  if(order.length === 0) return [];

  return order.map(name => {
    const rawItems = groups[name];
    const monthGroups = {};
    rawItems.forEach(r => {
      const mk = monthKey(pick(r, ['Date','date']));
      if(!monthGroups[mk]) monthGroups[mk] = [];
      monthGroups[mk].push(r);
    });
    const seller = modeSeller(rawItems);

    const chunks = Object.keys(monthGroups).map(mk => {
      const items = monthGroups[mk].map((r,i) => ({
        seq: i+1,
        docNumber: pick(r, ['Number','number']) || '',
        date: pick(r, ['Date','date']),
        dueDate: pick(r, ['Due Date','due date','DueDate']),
        amount: parseFloat(pick(r, ['Total in Currency Signed','Total Signed'])) || 0
      }));
      return { blKey: mk, blNumber:'', docDate:'', dueDate:'', address:'', seller, items };
    }).sort((a,b) => b.blKey.localeCompare(a.blKey)); // newest month first ("yyyy-mm" sorts lexically)

    const total = chunks.reduce((s,ch) => s + ch.items.reduce((s2,it)=>s2+it.amount,0), 0);
    return { name, total, chunks };
  }).sort((a, b) => a.name.localeCompare(b.name, 'th'));
}

function parseRows(rows){
  rawSourceRows = rows;
  customers = buildCustomersFromRows(rows);

  if(customers.length === 0){
    showToast('ไม่พบข้อมูลลูกค้าในไฟล์ — ตรวจสอบว่ามีคอลัมน์ "Partner"');
    return;
  }

  currentIndex = 0;
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('sheetWrap').style.display = 'block';
  document.getElementById('topbar').style.display = 'flex';
  renderSidebar();
  renderSheet();
  showToast(`พบลูกค้า ${customers.length} ราย จากไฟล์ต้นทาง`);
}

/* ============================= RENDER SIDEBAR ============================= */
function renderSidebar(){
  const list = document.getElementById('customerList');
  document.getElementById('sidebarSub').textContent = `พบลูกค้า ${customers.length} ราย`;
  const term = (document.getElementById('customerSearch')?.value || '').trim().toLowerCase();

  const visibleEntries = customers
    .map((c, i) => ({ c, i }))
    .filter(({c}) => !term || c.name.toLowerCase().includes(term));

  if(visibleEntries.length === 0){
    list.innerHTML = `<div class="no-results">ไม่พบบริษัทที่ตรงกับ "${escapeHtml(term)}"</div>`;
    return;
  }

  list.innerHTML = visibleEntries.map(({c, i}) => {
    const incomplete = c.chunks.some(ch => !ch.blNumber || !ch.docDate);
    const itemCount = c.chunks.reduce((s,ch)=>s+ch.items.length, 0);
    const pageNote = c.chunks.length > 1 ? ` · ${c.chunks.length} BL` : '';
    return `<div class="customer-item ${i===currentIndex?'active':''} ${incomplete?'incomplete':''}" data-idx="${i}">
      <div class="name">${escapeHtml(c.name)}</div>
      <div class="meta">${itemCount} รายการ${pageNote} · ${fmtAmount(c.total)} บาท</div>
    </div>`;
  }).join('');
  list.querySelectorAll('.customer-item').forEach(el=>{
    el.addEventListener('click', ()=>{
      currentIndex = parseInt(el.dataset.idx,10);
      currentPageIndex = 0;
      renderSidebar();
      renderSheet();
    });
  });
  document.getElementById('sidebarFoot').textContent = '● = ยังไม่กรอกเลขที่เอกสาร/วันที่เอกสาร';
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

/* ============================= RENDER SHEET (EDIT VIEW, PAGINATED) ============================= */
let currentPages = [];       // pages for the currently selected customer: [{items, includeFooter}, ...]
let currentPageIndex = 0;
let renderToken = 0;         // guards against out-of-order async renders

async function renderSheet(){
  if(currentIndex < 0) return;
  const myToken = ++renderToken;
  const c = customers[currentIndex];
  document.getElementById('topTitle').textContent = c.name;

  const paperKey = currentPaperKey();
  applyPaperDimensions(paperKey);
  const pageH = pageHeightPx(paperKey);
  const metrics = await measureMetrics(c, paperKey);
  if(myToken !== renderToken) return; // a newer render started meanwhile — abandon this one

  currentPages = paginateItems(c.chunks, metrics, pageH);
  currentPageIndex = Math.min(currentPageIndex, currentPages.length - 1);
  if(currentPageIndex < 0) currentPageIndex = 0;

  const itemCount = c.chunks.reduce((s,ch)=>s+ch.items.length, 0);
  document.getElementById('topSub').textContent = `ลูกค้า ${currentIndex+1} / ${customers.length} — ${itemCount} รายการ`;
  document.getElementById('prevCustomerBtn').disabled = currentIndex === 0;
  document.getElementById('nextCustomerBtn').disabled = currentIndex === customers.length-1;

  renderCurrentPage();
}

function renderCurrentPage(){
  const c = customers[currentIndex];
  const pg = currentPages[currentPageIndex];
  document.getElementById('sheet').innerHTML = buildPageTable(c, pg.chunk, pg.items, pg.includeFooter, pg.pageNum, pg.pageCount, true, pg.fillerCount);
  bindEditableInputs();
  document.getElementById('pageIndicator').textContent = `หน้า ${currentPageIndex+1}/${currentPages.length}`;
  document.getElementById('prevBtn').disabled = currentPageIndex === 0;
  document.getElementById('nextBtn').disabled = currentPageIndex === currentPages.length - 1;
}

/* ============================= SHARED TEMPLATE PIECES ============================= */
function settingInput(key, cls, placeholder){
  return `<input class="doc-input setting-input ${cls||''}" data-setting="${key}" placeholder="${placeholder||''}" value="${escapeHtml(docSettings[key])}">`;
}

function headerRowsHtml(c, chunk, io){
  const docDateCell = io
    ? `<input class="doc-input center" type="text" data-field="docDate" placeholder="วว/ดด/ปปปป" value="${escapeHtml(chunk.docDate)}">`
    : `${escapeHtml(chunk.docDate)}`;
  const dueDateCell = io
    ? `<input class="doc-input center" type="text" data-field="dueDate" placeholder="วว/ดด/ปปปป" value="${escapeHtml(chunk.dueDate)}">`
    : `${escapeHtml(chunk.dueDate)}`;
  const sellerCell = io
    ? `<input class="doc-input" data-field="seller" placeholder="ชื่อผู้ขาย" value="${escapeHtml(chunk.seller)}">`
    : `${escapeHtml(chunk.seller)}`;
  const blCell = io
    ? `<input class="doc-input center bl-box" data-field="blNumber" placeholder="เช่น BL/2026/07/0660" value="${escapeHtml(chunk.blNumber)}">`
    : `${escapeHtml(chunk.blNumber)}`;
  const addressCell = io
    ? `<textarea class="doc-input" rows="1" data-field="address" placeholder="กรอกที่อยู่ลูกค้า (ไม่บังคับ)">${escapeHtml(chunk.address)}</textarea>`
    : `${escapeHtml(chunk.address).replace(/\n/g,'<br>')}`;

  return `
      <tr>
        <td colspan="3" class="logo-cell"><img src="${LOGO_DATA_URI}" alt="logo" class="company-logo"></td>
        <td colspan="2" class="company-cell ta-right b-b">${companyBlockHtml()}</td>
      </tr>
      <tr>
        <td colspan="3" class="b-b"></td>
        <td class="ta-center b-t b-b b-l title-th">${escapeHtml(docSettings.titleTh)}<br><span class="title-en">${escapeHtml(docSettings.titleEn)}</span></td>
        <td class="ta-center b-t b-b b-l b-r bl-box">${blCell}</td>
      </tr>
      <tr>
        <td colspan="3" class="b-t b-l">ลูกค้า : &nbsp;<b>${escapeHtml(c.name)}</b></td>
        <td class="ta-right b-t b-l">วันที่เอกสาร :</td>
        <td class="b-t b-r">${docDateCell}</td>
      </tr>
      <tr>
        <td colspan="3" class="b-l"><div class="inline-field">ที่อยู่ : ${addressCell}</div></td>
        <td class="ta-right b-l">ครบกำหนด :</td>
        <td class="b-r">${dueDateCell}</td>
      </tr>
      <tr>
        <td colspan="3" class="b-l b-b"></td>
        <td class="ta-right b-l b-b">ผู้ขาย :</td>
        <td class="b-b b-r">${sellerCell}</td>
      </tr>
      <tr class="items-head">
        <td class="b-l b-b">ลำดับที่</td>
        <td class="b-b">เลขที่เอกสาร</td>
        <td class="b-b">เอกสารวันที่</td>
        <td class="b-b">วันครบกำหนด</td>
        <td class="b-b b-r">มูลค่าที่ต้องชำระ</td>
      </tr>`;
}

function itemRowHtml(it, isFirstOfPage){
  const topCls = isFirstOfPage ? 'b-t' : '';
  return `
    <tr class="items-row">
      <td class="${topCls} b-l b-r">${it.seq}</td>
      <td class="${topCls} b-l b-r">${escapeHtml(it.docNumber)}</td>
      <td class="${topCls} b-l">${fmtDate(it.date)}</td>
      <td class="${topCls} b-l b-r">${fmtDate(it.dueDate)}</td>
      <td class="${topCls} b-l b-r amt">${fmtAmount(it.amount)}</td>
    </tr>`;
}

function fillerRowHtml(isFirstOfPage){
  const topCls = isFirstOfPage ? 'b-t' : '';
  return `
    <tr class="items-row filler-row">
      <td class="${topCls} b-l b-r">&nbsp;</td>
      <td class="${topCls} b-l b-r">&nbsp;</td>
      <td class="${topCls} b-l">&nbsp;</td>
      <td class="${topCls} b-l b-r">&nbsp;</td>
      <td class="${topCls} b-l b-r">&nbsp;</td>
    </tr>`;
}

function footerRowsHtml(chunk){
  const total = chunk.items.reduce((s,it)=>s+it.amount,0);
  return `
      <tr>
        <td class="b-l b-r b-b">&nbsp;</td>
        <td class="b-l b-r b-b">&nbsp;</td>
        <td class="b-l b-b">&nbsp;</td>
        <td class="b-l b-r b-b">&nbsp;</td>
        <td class="b-l b-r b-b">&nbsp;</td>
      </tr>
      <tr>
        <td colspan="3" class="total-words-cell b-t">${thaiBahtText(total)}</td>
        <td class="total-label-cell b-t b-b b-l">จำนวนเงินทั้งสิ้น</td>
        <td class="total-amt-cell b-t b-l b-r b-b">${fmtAmount(total)}</td>
      </tr>
      <tr><td colspan="5" class="payment-cell">${paymentTextHtml()}</td></tr>
      <tr>
        <td colspan="3" class="sign-cell">
          <div class="sign-line"></div>
          ${escapeHtml(docSettings.signLeftLabel)}<br>วันที่ / Date _______________
        </td>
        <td colspan="2" class="sign-cell">
          <div class="sign-line"></div>
          ${escapeHtml(docSettings.signRightLabel)}<br>วันที่ / Date _______________
        </td>
      </tr>`;
}

function pageFootnoteHtml(pageNum, totalPages){
  if(totalPages <= 1) return '';
  return `<tr><td colspan="5" class="page-footnote">หน้า ${pageNum} / ${totalPages}${pageNum<totalPages ? ' — มีต่อหน้าถัดไป' : ''}</td></tr>`;
}

/** Full single continuous document (used for the interactive edit view — all items, always with footer) */
/** One paginated page (always non-editable unless told otherwise, used for both the live view and PDF export) */
function buildPageTable(c, chunk, pageItems, includeFooter, pageNum, totalPages, editable, fillerCount){
  const itemRows = pageItems.map((it, idx) => itemRowHtml(it, idx===0)).join('');
  const fillers = [];
  for(let i=0; i<(fillerCount||0); i++){
    fillers.push(fillerRowHtml(pageItems.length===0 && i===0));
  }
  return `
  <table class="formtable">
    <colgroup><col class="c-a"><col class="c-b"><col class="c-c"><col class="c-d"><col class="c-e"></colgroup>
    <tbody>
      ${headerRowsHtml(c, chunk, !!editable)}
      ${itemRows}
      ${fillers.join('')}
      ${includeFooter ? footerRowsHtml(chunk) : ''}
      ${pageFootnoteHtml(pageNum, totalPages)}
    </tbody>
  </table>`;
}

function autoSizeTextarea(el){
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

function bindEditableInputs(){
  const chunk = currentPages[currentPageIndex]?.chunk;
  document.querySelectorAll('#sheet [data-field]').forEach(el => {
    if(el.tagName === 'TEXTAREA') autoSizeTextarea(el);
    el.addEventListener('input', () => {
      const field = el.dataset.field;
      if(chunk) chunk[field] = el.value;
      if(el.tagName === 'TEXTAREA') autoSizeTextarea(el);
      if(field === 'blNumber' || field === 'docDate'){
        renderSidebar(); // update completeness dot without losing focus elsewhere
      }
    });
  });
  document.querySelectorAll('#sheet [data-setting]').forEach(el => {
    el.addEventListener('input', () => {
      docSettings[el.dataset.setting] = el.value;
    });
  });
}

/* ============================= NAV ============================= */
document.getElementById('prevBtn').addEventListener('click', ()=>{
  if(currentPageIndex > 0){ currentPageIndex--; renderCurrentPage(); }
});
document.getElementById('nextBtn').addEventListener('click', ()=>{
  if(currentPageIndex < currentPages.length-1){ currentPageIndex++; renderCurrentPage(); }
});
document.getElementById('prevCustomerBtn').addEventListener('click', ()=>{
  if(currentIndex>0){ currentIndex--; currentPageIndex = 0; renderSidebar(); renderSheet(); }
});
document.getElementById('nextCustomerBtn').addEventListener('click', ()=>{
  if(currentIndex<customers.length-1){ currentIndex++; currentPageIndex = 0; renderSidebar(); renderSheet(); }
});
document.getElementById('paperSizeSelect').addEventListener('change', (e)=>{
  document.getElementById('customSizeBox').style.display = e.target.value === 'custom' ? 'flex' : 'none';
  currentPageIndex = 0;
  if(currentIndex >= 0) renderSheet();
});
['customWidthInput','customHeightInput'].forEach(id=>{
  document.getElementById(id).addEventListener('input', ()=>{
    currentPageIndex = 0;
    if(currentIndex >= 0) renderSheet();
  });
});
/* ---- Document settings modal ---- */
const DOC_SETTINGS_FIELDS = ['companyName','addressLine1','addressLine2','taxId','contact','titleTh','titleEn','bankAccountName','bankName','bankAccountType','bankAccountNumber','signLeftLabel','signRightLabel'];
function openDocSettingsModal(){
  DOC_SETTINGS_FIELDS.forEach(f => {
    document.getElementById('set-'+f).value = docSettings[f];
  });
  document.getElementById('docSettingsOverlay').classList.add('show');
}
function closeDocSettingsModal(){
  document.getElementById('docSettingsOverlay').classList.remove('show');
}
document.getElementById('docSettingsBtn').addEventListener('click', openDocSettingsModal);
document.getElementById('docSettingsCancelBtn').addEventListener('click', closeDocSettingsModal);
document.getElementById('docSettingsOverlay').addEventListener('click', (e)=>{
  if(e.target.id === 'docSettingsOverlay') closeDocSettingsModal();
});
document.getElementById('docSettingsSaveBtn').addEventListener('click', ()=>{
  DOC_SETTINGS_FIELDS.forEach(f => {
    docSettings[f] = document.getElementById('set-'+f).value;
  });
  closeDocSettingsModal();
  if(currentIndex >= 0) renderSheet();
  showToast('บันทึกการตั้งค่าเอกสารแล้ว');
});

document.getElementById('uploadNewBtn').addEventListener('click', ()=>{
  if(!confirm('อัปโหลดไฟล์ใหม่จะล้างข้อมูลที่แก้ไขไว้ทั้งหมด ต้องการดำเนินการต่อหรือไม่?')) return;
  customers = [];
  rawSourceRows = [];
  currentIndex = -1;
  currentPages = [];
  currentPageIndex = 0;
  document.getElementById('emptyState').style.display = 'flex';
  document.getElementById('sheetWrap').style.display = 'none';
  document.getElementById('topbar').style.display = 'none';
  document.getElementById('customerSearch').value = '';
  document.getElementById('customerList').innerHTML = `<div style="padding:30px 14px;color:rgba(255,255,255,.4);font-size:12.5px;text-align:center;">ลากไฟล์ Excel ต้นทางเพื่อเริ่มต้น</div>`;
  document.getElementById('sidebarSub').textContent = 'ยังไม่มีข้อมูล';
  document.getElementById('sidebarFoot').textContent = '';
  fileInput.value = '';
});
document.getElementById('customerSearch').addEventListener('input', () => renderSidebar());

/* ============================= PAGINATION ============================= */
const PX_PER_MM = 3.6; // preview scale — A4 (210mm) renders at ~756px wide
const PAGE_SIZES_MM = {
  a2: {w:420, h:594}, a3: {w:297, h:420}, a4: {w:210, h:297}, a5: {w:148, h:210}, a6: {w:105, h:148},
  b4: {w:250, h:353}, b5: {w:176, h:250},
  letter: {w:215.9, h:279.4}, legal: {w:215.9, h:355.6}, tabloid: {w:279.4, h:431.8}, executive: {w:184.15, h:266.7},
  folio: {w:210, h:330},
};
function currentPaperKey(){ return document.getElementById('paperSizeSelect')?.value || 'a4'; }
function getPaperDims(paperKey){
  if(paperKey === 'custom'){
    const w = parseFloat(document.getElementById('customWidthInput')?.value) || 210;
    const h = parseFloat(document.getElementById('customHeightInput')?.value) || 297;
    return { w: Math.max(20, w), h: Math.max(20, h) };
  }
  return PAGE_SIZES_MM[paperKey] || PAGE_SIZES_MM.a4;
}
function paperWidthPx(paperKey){ return getPaperDims(paperKey).w * PX_PER_MM; }
function pageHeightPx(paperKey){ return getPaperDims(paperKey).h * PX_PER_MM; }
function applyPaperDimensions(paperKey){
  const w = paperWidthPx(paperKey);
  const h = pageHeightPx(paperKey);
  document.getElementById('sheetWrap').style.width = w + 'px';
  document.getElementById('captureHost').style.width = w + 'px';
  document.getElementById('sheet').style.minHeight = h + 'px';
}

async function measureMetrics(c, paperKey){
  const host = document.getElementById('captureHost');
  host.style.width = paperWidthPx(paperKey) + 'px';
  const sampleChunk = c.chunks[0] || { blNumber:'', docDate:'', dueDate:'', address:'', seller:'', items:[] };
  const sampleItem = sampleChunk.items[0] || {seq:1, docNumber:'SAMPLE', date:new Date(), dueDate:new Date(), amount:0};
  host.innerHTML = `<div class="sheet">${buildPageTable(c, sampleChunk, [sampleItem], true, 1, 1)}</div>`;
  if(document.fonts && document.fonts.ready) await document.fonts.ready;
  await new Promise(r => requestAnimationFrame(()=>requestAnimationFrame(r)));
  const table = host.querySelector('table.formtable');
  const itemRow = table.querySelector('tr.items-row');
  const headerHeight = itemRow.offsetTop;
  const itemRowHeight = itemRow.offsetHeight;
  const footerHeight = table.offsetHeight - (itemRow.offsetTop + itemRow.offsetHeight);
  return { headerHeight, itemRowHeight, footerHeight };
}


/** Each chunk (BL / month) always ends with its own footer (subtotal + signature).
 *  A chunk only spans multiple pages when its own items don't fit on one page.
 *  Page numbers restart at 1 within each chunk — they must never count across
 *  chunk boundaries, since each BL/month is its own printed document. */
function paginateItems(chunks, metrics, pageH){
  const { headerHeight, itemRowHeight, footerHeight } = metrics;
  const maxWithFooter = Math.max(1, Math.floor((pageH - headerHeight - footerHeight) / itemRowHeight));
  const maxNoFooter = Math.max(1, Math.floor((pageH - headerHeight) / itemRowHeight));

  if(!chunks || chunks.length === 0){
    return [{ items: [], includeFooter: true, fillerCount: maxWithFooter, chunk: null, pageNum:1, pageCount:1 }];
  }

  const pages = [];
  chunks.forEach(chunk => {
    const chunkPages = [];
    const chunkItems = chunk.items;
    if(chunkItems.length === 0){
      chunkPages.push({ items: [], includeFooter: true, fillerCount: maxWithFooter, chunk });
    } else {
      let idx = 0;
      while(idx < chunkItems.length){
        const remaining = chunkItems.length - idx;
        if(remaining <= maxWithFooter){
          const pageItems = chunkItems.slice(idx, idx+remaining);
          chunkPages.push({ items: pageItems, includeFooter: true, fillerCount: Math.max(0, maxWithFooter - pageItems.length), chunk });
          idx += remaining;
        } else {
          let take = Math.min(maxNoFooter, remaining);
          // Reserve at least one item for the trailing footer page instead of
          // leaving it an empty page with only the subtotal/signature block.
          if(take === remaining) take -= 1;
          const pageItems = chunkItems.slice(idx, idx+take);
          chunkPages.push({ items: pageItems, includeFooter: false, fillerCount: Math.max(0, maxNoFooter - pageItems.length), chunk });
          idx += take;
        }
      }
    }
    chunkPages.forEach((pg, i) => { pg.pageNum = i+1; pg.pageCount = chunkPages.length; });
    pages.push(...chunkPages);
  });
  return pages;
}

/* ============================= PDF GENERATION ============================= */

async function capturePageToCanvas(c, chunk, pageItems, includeFooter, pageNum, totalPages, paperKey, fillerCount){
  const host = document.getElementById('captureHost');
  host.style.width = paperWidthPx(paperKey || currentPaperKey()) + 'px';
  host.innerHTML = `<div class="sheet">${buildPageTable(c, chunk, pageItems, includeFooter, pageNum, totalPages, false, fillerCount)}</div>`;
  if(document.fonts && document.fonts.ready) await document.fonts.ready;
  await new Promise(r => requestAnimationFrame(()=>requestAnimationFrame(r)));
  const node = host.querySelector('.sheet');
  return html2canvas(node, {scale:2, backgroundColor:'#ffffff', useCORS:true});
}

async function customerToPdfBlob(c, onPage){
  const paperKey = currentPaperKey();
  const dims = getPaperDims(paperKey);
  const pageH = pageHeightPx(paperKey);
  const metrics = await measureMetrics(c, paperKey);
  const pages = paginateItems(c.chunks, metrics, pageH);
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({unit:'mm', format:[dims.w, dims.h]});
  const pageWmm = pdf.internal.pageSize.getWidth();
  const pageHmm = pdf.internal.pageSize.getHeight();

  for(let p=0; p<pages.length; p++){
    throwIfCancelled();
    const pg = pages[p];
    const canvas = await capturePageToCanvas(c, pg.chunk, pg.items, pg.includeFooter, pg.pageNum, pg.pageCount, paperKey, pg.fillerCount);
    throwIfCancelled();
    const imgData = canvas.toDataURL('image/png');
    const imgW = pageWmm;
    const imgH = canvas.height * imgW / canvas.width;
    let renderH = imgH, renderW = imgW;
    if(imgH > pageHmm){ renderH = pageHmm; renderW = canvas.width * renderH / canvas.height; }
    const x = (pageWmm - renderW)/2;
    if(p > 0) pdf.addPage([dims.w, dims.h]);
    pdf.addImage(imgData, 'PNG', x, 0, renderW, renderH);
    if(onPage) onPage(p+1, pages.length);
  }
  return pdf.output('blob');
}

/* ============================= EXCEL GENERATION ============================= */
function parseDdMmYyyy(s){
  if(!s) return null;
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(String(s).trim());
  if(!m) return null;
  const d = parseInt(m[1],10), mo = parseInt(m[2],10)-1, y = parseInt(m[3],10);
  const dt = new Date(y, mo, d);
  return isNaN(dt.getTime()) ? null : dt;
}

function flattenChunksWithName(customerList){
  return customerList.flatMap(c => c.chunks.map(ch => ({ ...ch, name: c.name })));
}

function buildOdooRows(customerList){
  const rows = [['Name','Customer','Bill Date','Bill Date Due','Billing Line/Invoices']];
  const chunks = flattenChunksWithName(customerList);
  chunks.forEach(ch => {
    const dateObj = parseDdMmYyyy(ch.docDate);
    const dueObj = parseDdMmYyyy(ch.dueDate);
    if(ch.items.length === 0){
      rows.push([ch.blNumber||'', ch.name, dateObj, dueObj, '']);
      return;
    }
    ch.items.forEach((it, idx) => {
      if(idx === 0){
        rows.push([ch.blNumber||'', ch.name, dateObj, dueObj, it.docNumber]);
      } else {
        rows.push([null, null, null, null, it.docNumber]);
      }
    });
  });
  return rows;
}

function odooWorkbookArray(customerList){
  const rows = buildOdooRows(customerList);
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{wch:18},{wch:34},{wch:14},{wch:14},{wch:22}];
  for(let r=1; r<rows.length; r++){
    ['C','D'].forEach(col => {
      const ref = col + (r+1);
      if(ws[ref] && ws[ref].v instanceof Date){
        ws[ref].t = 'd';
        ws[ref].z = 'dd/mm/yyyy';
      }
    });
  }
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Billing Note Import');
  return XLSX.write(wb, {type:'array', bookType:'xlsx'});
}

function addBillingSheet(workbook, customerName, chunk, sheetName){
  const ws = workbook.addWorksheet(sheetName, {
    views: [{ showGridLines: false }],
    pageSetup: {
      paperSize: 9, orientation: 'portrait',
      fitToPage: true, fitToWidth: 1, fitToHeight: 0,
      margins: { left:0.35, right:0.35, top:0.4, bottom:0.4, header:0.2, footer:0.2 }
    }
  });
  ws.columns = [{width:8},{width:23},{width:13},{width:15},{width:20}];

  const FONT = 'Angsana New';
  const thin = { style: 'thin', color: { argb: 'FF000000' } };
  function setBorder(cell, sides){
    const cur = cell.border || {};
    cell.border = {
      top: sides.top ? thin : cur.top,
      bottom: sides.bottom ? thin : cur.bottom,
      left: sides.left ? thin : cur.left,
      right: sides.right ? thin : cur.right,
    };
  }

  // Row 1 — logo + company block (D1:E1)
  ws.mergeCells('D1:E1');
  const companyCell = ws.getCell('D1');
  companyCell.value = companyBlockPlain();
  companyCell.alignment = { horizontal:'right', vertical:'top', wrapText:true };
  companyCell.font = { name:FONT, size:13 };
  setBorder(companyCell, { bottom:true });
  ws.getRow(1).height = 92;
  try{
    const logoId = workbook.addImage({ base64: LOGO_DATA_URI.split(',')[1], extension:'jpeg' });
    ws.addImage(logoId, { tl:{col:0,row:0}, ext:{width:170,height:26} });
  }catch(e){ console.error('logo embed failed', e); }

  // Row 2 — title box + BL number box
  ws.mergeCells('A2:C2');
  setBorder(ws.getCell('A2'), { bottom:true });
  const titleCell = ws.getCell('D2');
  titleCell.value = `${docSettings.titleTh}\n${docSettings.titleEn}`;
  titleCell.alignment = { horizontal:'center', vertical:'middle', wrapText:true };
  titleCell.font = { name:FONT, size:13, bold:true };
  setBorder(titleCell, { top:true, bottom:true, left:true });
  const blCell = ws.getCell('E2');
  blCell.value = chunk.blNumber || '';
  blCell.alignment = { horizontal:'center', vertical:'middle', wrapText:true };
  blCell.font = { name:FONT, size:12, bold:true };
  setBorder(blCell, { top:true, bottom:true, left:true, right:true });
  ws.getRow(2).height = 48;

  // Row 3 — ลูกค้า / วันที่เอกสาร
  const custCell = ws.getCell('A3');
  custCell.value = 'ลูกค้า : ' + customerName;
  custCell.font = { name:FONT, size:14 };
  setBorder(custCell, { top:true, left:true });
  setBorder(ws.getCell('B3'), { top:true });
  setBorder(ws.getCell('C3'), { top:true });
  const docDateLabel = ws.getCell('D3');
  docDateLabel.value = 'วันที่เอกสาร : ' + (chunk.docDate||'');
  docDateLabel.alignment = { horizontal:'right' };
  docDateLabel.font = { name:FONT, size:14 };
  setBorder(docDateLabel, { top:true, left:true });
  setBorder(ws.getCell('E3'), { top:true, right:true });

  // Row 4 — ที่อยู่ / ครบกำหนด
  const addrCell = ws.getCell('A4');
  addrCell.value = 'ที่อยู่ : ' + (chunk.address||'');
  addrCell.font = { name:FONT, size:14 };
  setBorder(addrCell, { left:true });
  const dueDateLabel = ws.getCell('D4');
  dueDateLabel.value = 'ครบกำหนด : ' + (chunk.dueDate||'');
  dueDateLabel.alignment = { horizontal:'right' };
  dueDateLabel.font = { name:FONT, size:14 };
  setBorder(dueDateLabel, { left:true });
  setBorder(ws.getCell('E4'), { right:true });

  // Row 5 — ผู้ขาย (closes the info box)
  setBorder(ws.getCell('A5'), { bottom:true, left:true });
  setBorder(ws.getCell('B5'), { bottom:true });
  setBorder(ws.getCell('C5'), { bottom:true });
  const sellerLabel = ws.getCell('D5');
  sellerLabel.value = 'ผู้ขาย : ' + (chunk.seller||'');
  sellerLabel.alignment = { horizontal:'right' };
  sellerLabel.font = { name:FONT, size:14 };
  setBorder(sellerLabel, { bottom:true, left:true });
  setBorder(ws.getCell('E5'), { bottom:true, right:true });

  // Row 6 — table header
  ['ลำดับที่','เลขที่เอกสาร','เอกสารวันที่','วันครบกำหนด','มูลค่าที่ต้องชำระ'].forEach((h,i)=>{
    const cell = ws.getRow(6).getCell(i+1);
    cell.value = h;
    cell.font = { name:FONT, size:14, bold:true };
    cell.alignment = { horizontal:'center' };
  });
  setBorder(ws.getCell('A6'), { bottom:true, left:true });
  setBorder(ws.getCell('B6'), { bottom:true });
  setBorder(ws.getCell('C6'), { bottom:true });
  setBorder(ws.getCell('D6'), { bottom:true });
  setBorder(ws.getCell('E6'), { bottom:true, right:true });

  // Item rows
  let r = 7;
  const items = chunk.items;
  const total = items.reduce((s,it)=>s+it.amount, 0);
  items.forEach((it, idx) => {
    const row = ws.getRow(r);
    row.getCell(1).value = it.seq;
    row.getCell(2).value = it.docNumber;
    row.getCell(3).value = fmtDate(it.date);
    row.getCell(4).value = fmtDate(it.dueDate);
    row.getCell(5).value = Number(it.amount.toFixed(2));
    row.getCell(5).numFmt = '#,##0.00';
    [1,2,3,4,5].forEach(ci => row.getCell(ci).font = { name:FONT, size:13 });
    row.getCell(1).alignment = { horizontal:'center' };
    row.getCell(3).alignment = { horizontal:'center' };
    row.getCell(4).alignment = { horizontal:'center' };
    row.getCell(5).alignment = { horizontal:'right' };
    const top = idx === 0;
    setBorder(row.getCell(1), { top, left:true, right:true });
    setBorder(row.getCell(2), { top, left:true, right:true });
    setBorder(row.getCell(3), { top, left:true });
    setBorder(row.getCell(4), { top, left:true, right:true });
    setBorder(row.getCell(5), { top, left:true, right:true });
    r++;
  });

  // Spacer row — closes the table box at the bottom
  setBorder(ws.getCell(`A${r}`), { left:true, right:true, bottom:true });
  setBorder(ws.getCell(`B${r}`), { left:true, right:true, bottom:true });
  setBorder(ws.getCell(`C${r}`), { left:true, bottom:true });
  setBorder(ws.getCell(`D${r}`), { left:true, right:true, bottom:true });
  setBorder(ws.getCell(`E${r}`), { left:true, right:true, bottom:true });
  r++;

  // Total row
  const totalRow = r;
  ws.mergeCells(`A${totalRow}:C${totalRow}`);
  const wordsCell = ws.getCell(`A${totalRow}`);
  wordsCell.value = thaiBahtText(total);
  wordsCell.font = { name:FONT, size:11, italic:true };
  wordsCell.alignment = { wrapText:true, vertical:'middle' };
  setBorder(wordsCell, { top:true });
  const totalLabel = ws.getCell(`D${totalRow}`);
  totalLabel.value = 'จำนวนเงินทั้งสิ้น';
  totalLabel.font = { name:FONT, size:14, bold:true };
  totalLabel.alignment = { horizontal:'center' };
  setBorder(totalLabel, { top:true, bottom:true, left:true });
  const totalAmt = ws.getCell(`E${totalRow}`);
  totalAmt.value = Number(total.toFixed(2));
  totalAmt.numFmt = '#,##0.00';
  totalAmt.font = { name:FONT, size:14, bold:true };
  totalAmt.alignment = { horizontal:'right' };
  setBorder(totalAmt, { top:true, bottom:true, left:true, right:true });
  ws.getRow(totalRow).height = 34;
  r++;

  // Payment row
  const payRow = r;
  ws.mergeCells(`A${payRow}:E${payRow}`);
  const payCell = ws.getCell(`A${payRow}`);
  payCell.value = paymentTextPlain();
  payCell.font = { name:FONT, size:13, bold:true };
  payCell.alignment = { wrapText:true, vertical:'middle' };
  ws.getRow(payRow).height = 30;
  r++;

  // Signature row
  const sigRow = r;
  ws.mergeCells(`A${sigRow}:C${sigRow}`);
  ws.mergeCells(`D${sigRow}:E${sigRow}`);
  const leftSig = ws.getCell(`A${sigRow}`);
  leftSig.value = `_____________________________\n${docSettings.signLeftLabel}\nวันที่ / Date _______________`;
  leftSig.alignment = { horizontal:'center', wrapText:true };
  leftSig.font = { name:FONT, size:13 };
  const rightSig = ws.getCell(`D${sigRow}`);
  rightSig.value = `_____________________________\n${docSettings.signRightLabel}\nวันที่ / Date _______________`;
  rightSig.alignment = { horizontal:'center', wrapText:true };
  rightSig.font = { name:FONT, size:13 };
  ws.getRow(sigRow).height = 60;
}

function uniqueSheetName(usedNames, base){
  let name = base.replace(/[\\/*?:\[\]]/g, '').slice(0, 31) || 'Sheet';
  let n = 1;
  let candidate = name;
  while(usedNames.has(candidate)){
    n++;
    const suffix = ` (${n})`;
    candidate = name.slice(0, 31 - suffix.length) + suffix;
  }
  usedNames.add(candidate);
  return candidate;
}

/** One customer may now have multiple real BLs (chunks) — each becomes its own worksheet tab. */
async function customerToWorkbookBuffer(c){
  const workbook = new ExcelJS.Workbook();
  const usedNames = new Set();
  c.chunks.forEach(chunk => {
    const sheetName = uniqueSheetName(usedNames, chunk.blNumber || chunk.blKey || 'Billing Note');
    addBillingSheet(workbook, c.name, chunk, sheetName);
  });
  return await workbook.xlsx.writeBuffer();
}

/* ============================= EXPORT ACTIONS ============================= */
function downloadBlob(blob, filename){
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

let exportFormats = { pdf: true, xlsx: true, odoo: false };
const FORMAT_NAMES = { pdf: 'PDF', xlsx: 'Excel', odoo: 'Odoo Import' };

function formatLabelText(){
  const active = ['pdf','xlsx','odoo'].filter(k => exportFormats[k]).map(k => FORMAT_NAMES[k]);
  return active.length ? active.join(' + ') : 'ยังไม่เลือกไฟล์';
}
function syncFormatLabels(){
  const text = formatLabelText();
  document.getElementById('exportOneFormatLabel').textContent = text;
  document.getElementById('exportAllFormatLabel').textContent = text;
}

function setupFormatDropdown(caretId, menuId, wrapId){
  const caret = document.getElementById(caretId);
  const menu = document.getElementById(menuId);

  const syncCheckboxes = () => {
    menu.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.checked = !!exportFormats[cb.dataset.format];
    });
  };
  syncCheckboxes();

  caret.addEventListener('click', (e)=>{
    e.stopPropagation();
    document.querySelectorAll('.dropdown-menu.show').forEach(m => { if(m!==menu) m.classList.remove('show'); });
    syncCheckboxes();
    menu.classList.toggle('show');
  });
  // keep the menu open while checking multiple boxes — only clicks outside close it
  menu.addEventListener('click', (e)=> e.stopPropagation());
  menu.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', ()=>{
      exportFormats[cb.dataset.format] = cb.checked;
      // mirror the change into the other menu (single shared state for both export buttons)
      document.querySelectorAll(`.dropdown-menu input[data-format="${cb.dataset.format}"]`).forEach(other => {
        other.checked = cb.checked;
      });
      syncFormatLabels();
    });
  });
}
setupFormatDropdown('exportOneCaret', 'exportOneMenu', 'exportOneWrap');
setupFormatDropdown('exportAllCaret', 'exportAllMenu', 'exportAllWrap');
syncFormatLabels();
document.addEventListener('click', ()=>{
  document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
});

document.getElementById('exportOneBtn').addEventListener('click', async () => {
  if(currentIndex < 0) return;
  const c = customers[currentIndex];
  const wantPdf = exportFormats.pdf, wantXlsx = exportFormats.xlsx, wantOdoo = exportFormats.odoo;
  if(!wantPdf && !wantXlsx && !wantOdoo){ showToast('เลือกไฟล์ที่จะ export ก่อนครับ'); return; }
  exportCancelRequested = false;

  const tracker = createProgressTracker();
  setProgress(2, `กำลังเตรียมไฟล์สำหรับ ${c.name}…`);
  try{
    const base = sanitizeFilename(`ใบวางบิล_${c.name}`);
    if(wantPdf){
      const pdfBlob = await customerToPdfBlob(c, (done, total) => {
        const scale = (wantXlsx || wantOdoo) ? 0.7 : 0.95;
        tracker.update(done * scale, total, `กำลังสร้าง PDF: หน้า ${done}/${total} — ${c.name}`);
      });
      throwIfCancelled();
      setProgress(75, (wantXlsx || wantOdoo) ? 'กำลังสร้างไฟล์ Excel…' : 'กำลังดาวน์โหลด…');
      downloadBlob(pdfBlob, base + '.pdf');
    }
    if(wantXlsx){
      const xlsxBuf = await customerToWorkbookBuffer(c);
      throwIfCancelled();
      setProgress(90, 'กำลังดาวน์โหลด…');
      downloadBlob(new Blob([xlsxBuf], {type:'application/octet-stream'}), base + '.xlsx');
    }
    if(wantOdoo){
      const odooArr = odooWorkbookArray([c]);
      throwIfCancelled();
      setProgress(96, 'กำลังดาวน์โหลด…');
      downloadBlob(new Blob([odooArr], {type:'application/octet-stream'}), `Odoo_Import_${base}.xlsx`);
    }
    setProgress(100, 'สร้างไฟล์สำเร็จ');
    showToast('สร้างไฟล์สำเร็จ');
  }catch(err){
    hideProgress();
    if(err instanceof ExportCancelledError){
      showToast('ยกเลิกการสร้างไฟล์แล้ว');
    } else {
      console.error(err);
      showToast('เกิดข้อผิดพลาดระหว่างสร้างไฟล์');
    }
  }
});

document.getElementById('printBtn').addEventListener('click', async () => {
  if(currentIndex < 0) return;
  const c = customers[currentIndex];
  exportCancelRequested = false;
  const tracker = createProgressTracker();
  setProgress(2, `กำลังเตรียมพิมพ์ ${c.name}…`);
  try{
    const pdfBlob = await customerToPdfBlob(c, (done, total) => {
      tracker.update(done, total, `กำลังเตรียมพิมพ์: หน้า ${done}/${total} — ${c.name}`);
    });
    throwIfCancelled();
    setProgress(100, 'พร้อมพิมพ์');
    const url = URL.createObjectURL(pdfBlob);
    const printWin = window.open(url, '_blank');
    if(!printWin){
      showToast('เบราว์เซอร์บล็อกหน้าต่างพิมพ์ — กรุณาอนุญาต popup แล้วลองใหม่');
      return;
    }
    printWin.addEventListener('load', () => {
      printWin.focus();
      printWin.print();
    });
  }catch(err){
    hideProgress();
    if(err instanceof ExportCancelledError){
      showToast('ยกเลิกการพิมพ์แล้ว');
    } else {
      console.error(err);
      showToast('เกิดข้อผิดพลาดระหว่างเตรียมพิมพ์');
    }
  }
});

document.getElementById('exportAllBtn').addEventListener('click', async () => {
  if(customers.length === 0) return;
  const wantPdf = exportFormats.pdf, wantXlsx = exportFormats.xlsx, wantOdoo = exportFormats.odoo;
  if(!wantPdf && !wantXlsx && !wantOdoo){ showToast('เลือกไฟล์ที่จะ export ก่อนครับ'); return; }
  exportCancelRequested = false;

  if(wantOdoo && !wantPdf && !wantXlsx){
    if(!confirm(`สร้างไฟล์ Odoo Import รวม ${customers.length} ลูกค้า เป็นไฟล์เดียว ต้องการดำเนินการต่อหรือไม่?`)) return;
    setProgress(50, `กำลังสร้างไฟล์ Odoo Import (${customers.length} ลูกค้า)…`);
    try{
      const arr = odooWorkbookArray(customers);
      downloadBlob(new Blob([arr], {type:'application/octet-stream'}), 'Odoo_Import_ทั้งหมด.xlsx');
      setProgress(100, 'สร้างไฟล์สำเร็จ');
      showToast('สร้างไฟล์สำเร็จ');
    }catch(err){
      hideProgress();
      console.error(err);
      showToast('เกิดข้อผิดพลาดระหว่างสร้างไฟล์');
    }
    return;
  }

  if(!confirm(`สร้างไฟล์ทั้งหมด ${customers.length} ลูกค้า เป็น .zip เดียว ต้องการดำเนินการต่อหรือไม่?`)) return;
  const zip = new JSZip();
  const used = {};
  let cancelled = false;
  const tracker = createProgressTracker();
  for(let i=0;i<customers.length;i++){
    if(exportCancelRequested){ cancelled = true; break; }
    const c = customers[i];
    tracker.update(i, customers.length, `กำลังสร้างไฟล์ (${i+1}/${customers.length}) — ${c.name}`);
    try{
      let base = sanitizeFilename(`ใบวางบิล_${c.name}`);
      if(used[base]){ used[base]++; base = base + '_' + used[base]; } else { used[base] = 1; }
      if(wantPdf){
        const pdfBlob = await customerToPdfBlob(c, (done, total) => {
          if(total > 1) tracker.update(i, customers.length, `กำลังสร้างไฟล์ (${i+1}/${customers.length}) — ${c.name} · หน้า ${done}/${total}`);
        });
        zip.file(base + '.pdf', pdfBlob);
      }
      if(wantXlsx){
        const xlsxBuf = await customerToWorkbookBuffer(c);
        zip.file(base + '.xlsx', xlsxBuf);
      }
    }catch(err){
      if(err instanceof ExportCancelledError){ cancelled = true; break; }
      console.error('Failed for', c.name, err);
    }
  }
  if(cancelled){
    hideProgress();
    showToast('ยกเลิกการสร้างไฟล์แล้ว');
    return;
  }
  if(wantOdoo){
    setProgress(93, 'กำลังสร้างไฟล์ Odoo Import…');
    const odooArr = odooWorkbookArray(customers);
    zip.file('Odoo_Import_ทั้งหมด.xlsx', odooArr);
  }
  setProgress(96, 'กำลังบีบอัดไฟล์…');
  const zipBlob = await zip.generateAsync({type:'blob'});
  downloadBlob(zipBlob, 'ใบวางบิล_ทั้งหมด.zip');
  setProgress(100);
  showToast('สร้างไฟล์ทั้งหมดสำเร็จ');
});
