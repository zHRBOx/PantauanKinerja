// --- Inisialisasi Awal ---
let takenLeaves = [];
let cutiPegawai = {}; 
let kinerjaPegawai = {};

let allEmployeeData = [];
let kinerjaData = {};

let isCutiListEditMode = false;
let isKinerjaListEditMode = false;
let editTarget = null;

const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const dayNames = ["M", "S", "S", "R", "K", "J", "S"];

let calendarCurrentDate = new Date();
let tempSelectedDates = [];

const DEFAULT_DROPBOX_TOKEN = 'sl.u.AF10KZMGx-Cqjwg-0-U-wjbADfNq55AM9AWBtszYJHTAdieG2MqPlmmHLFtcrsDOsyhtG495ClK5X3Y8h0ivnEEDqid7buFHCAK-7vy2cJljfxBIxHNO5Hniun4zXWvuMRQsdCoutC3_DYeTlo866gE5oH9LpCq_V2lDmwh0ylsfXzgbpjVvk9GwyTkDJg_lYV9-vg5L_jLPcWjMndpTENrVaTStkr3fepq6xT7Y7kMpJKqEt9EuaP7c25pn0jiJTtwoI0x6ekQn2qLAn8ajX3MD_9hmfDTalpJH1I_D72ftt5UW-eU2sOZetnXAd7ycG_r_fpTrITBkQrDRiUNlB0o8p1mq5_urIQwvl2FgXupdxP_Dlc7g5Sx_t17enp-3PexHiZBJrKyD2um8glBG9Gg5nVg2tnFibY9YNz4LM-yaUK3GS01kOlTtE-sZ2I1A8vqTdtwRaw7u-WOU9LaE2_BBNGOe2byWNW_ZSNbcEnR54UY7ug4uXKMpG6DJ7CA6yaHnrYz_FQLyDNs_XdCXEGcvQEluLEnlXz2IW4dCxzkeojSOzh_s2p2XZtZOSHRPHGhbpn2HIuzJlkUKws0dw_WuvxyMJ-RqboAf_gGBam8pmaOOGi8KmLwSTz7Ec0sBd4EiVVcazgTJZaAYneijNOL8Je8GVxStvYZ5PQaEDybzbXnIXOtW2hibWhTzeUAcVHXXdMIRclU2DFfYGTzkWEnyUmM1rm_pHPwyorlo7Dpbr4qxpVlp4LiLtSzBlQYXqoCVSkWKMipNIAzgQkKHX-lJ2fmYGOzb-Z5TCe0AQFBzeg1IAHR3_IuhA-pHCc6C3RrqNwc9tPAWjQZNIMip_Y7SWpB_cA57lqT5c5pQth5sD3TfE6G7M8yFyHvfsIoHzpfohAUJ02RFuW7ULJwtmMoCTEbVr25IakB1Gp0T0a0CAax59qsoJ6EOvErW9ifMO-6qcPX74YlfkV5pLreE44cDxBA1-5oano50pR1pwqkTZ5Ses4h2Ev8fkl_UOd60rmFP_RuEud5Y1iSVix1prsOCv-B_JjM4Kq9WRzztlihhXt3wn0MH-lLJsu2NlXgHcHL7mMVeddEjcMPhb4yV5e-3alsJhhTOEu3YR18j8UF9mFJwuztBrAh0h6yU6noJvHIVvZFUeWjnBoYbbvhYlAdZamiaIV93tTbIExHjr6UKys4_K5W0QlnSdhbtrgL5hYu3M_u9_0BEYa1vI0l4_4r8EaFWaSab8hlREOQl3EIhd6UuTf4DVlZyJ2WvHBE1QxXud_lLpSs3Ow70FRXJ4lrC';
let dropboxToken = null;
const DROPBOX_DATA_PATH = '/kinerja_app_data.json';

const navMain = document.getElementById('nav-main');
const navLeave = document.getElementById('nav-leave');
const navPerformance = document.getElementById('nav-performance');
const contentMain = document.getElementById('content-main');
const contentLeave = document.getElementById('content-leave');
const contentPerformance = document.getElementById('content-performance');
const pageTitle = document.getElementById('page-title');

const form = document.getElementById('leaveForm');
const leaveType = document.getElementById('leaveType');
const leaveDateInput = document.getElementById('leaveDate');
const leaveDateDisplay = document.getElementById('leaveDateDisplay');
const selectedDatesText = document.getElementById('selectedDatesText');
const nameInput = document.getElementById('employeeName');
const nippInput = document.getElementById('employeeNipp');
const submitLeaveButton = document.getElementById('submitLeaveButton');
const tableBody = document.getElementById('takenDatesTableBody');
const managementTableBody = document.getElementById('managementTableBody');
const masinisTableBody = document.getElementById('masinisTableBody');
const messageContainer = document.getElementById('message-container');
const monthFilter = document.getElementById('monthFilter');
const yearFilter = document.getElementById('yearFilter');
const employeeCutiYearFilter = document.getElementById('employeeCutiYearFilter');
const employeeCutiMonthFilter = document.getElementById('employeeCutiMonthFilter');

const editButton = document.getElementById('editButton');
const editKinerjaButton = document.getElementById('editKinerjaButton');
const actionHeader = document.getElementById('actionHeader');
const addManagementRowButton = document.getElementById('addManagementRowButton');
const addMasinisRowButton = document.getElementById('addMasinisRowButton');
const passwordModal = document.getElementById('passwordModal');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const cancelButton = document.getElementById('cancelButton');
const calendarModal = document.getElementById('calendarModal');
const monthYearText = document.getElementById('monthYearText');
const calendarGrid = document.getElementById('calendarGrid');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const cancelCalendarBtn = document.getElementById('cancelCalendarBtn');
const confirmCalendarBtn = document.getElementById('confirmCalendarBtn');
const kinerjaYearFilter = document.getElementById('kinerjaYearFilter');
const kinerjaMonthFilter = document.getElementById('kinerjaMonthFilter');
const kinerjaManajemenTable = document.getElementById('kinerjaManajemenTable');
const kinerjaMasinisTable = document.getElementById('kinerjaMasinisTable');
const kinerjaManajemenTableBody = document.getElementById('kinerjaManajemenTableBody');
const kinerjaMasinisTableBody = document.getElementById('kinerjaMasinisTableBody');
const nippWrapper = document.getElementById('nipp-wrapper');
const nameWrapper = document.getElementById('name-wrapper');
const dateWrapper = document.getElementById('date-wrapper');
const buttonWrapper = document.getElementById('button-wrapper');

const addKinerjaManagementRowButton = document.getElementById('addKinerjaManagementRowButton');
const addKinerjaMasinisRowButton = document.getElementById('addKinerjaMasinisRowButton');

const dropboxSyncButton = document.getElementById('dropboxSyncButton');
const dropboxModal = document.getElementById('dropboxModal');
const closeDropboxModalBtn = document.getElementById('closeDropboxModalBtn');
const dropboxTokenInput = document.getElementById('dropboxTokenInput');
const saveDropboxTokenBtn = document.getElementById('saveDropboxTokenBtn');
const loadFromDropboxBtn = document.getElementById('loadFromDropboxBtn');
const saveToDropboxBtn = document.getElementById('saveToDropboxBtn');
const dropboxStatusSynced = document.getElementById('dropboxStatusSynced');
const dropboxTokenEdit = document.getElementById('dropboxTokenEdit');
const changeTokenBtn = document.getElementById('changeTokenBtn');

// Elemen Statistik Cuti Hari Ini (Baru)
const todayCtManajemenCount = document.getElementById('today-ct-manajemen-count');
const todayCtManajemenNames = document.getElementById('today-ct-manajemen-names');
const todayCtMasinisCount = document.getElementById('today-ct-masinis-count');
const todayCtMasinisNames = document.getElementById('today-ct-masinis-names');
const todayCpManajemenCount = document.getElementById('today-cp-manajemen-count');
const todayCpManajemenNames = document.getElementById('today-cp-manajemen-names');
const todayCpMasinisCount = document.getElementById('today-cp-masinis-count');
const todayCpMasinisNames = document.getElementById('today-cp-masinis-names');
const todayCskManajemenCount = document.getElementById('today-csk-manajemen-count');
const todayCskManajemenNames = document.getElementById('today-csk-manajemen-names');
const todayCskMasinisCount = document.getElementById('today-csk-masinis-count');
const todayCskMasinisNames = document.getElementById('today-csk-masinis-names');


const summaryMonthFilter = document.getElementById('summaryMonthFilter');
const summaryYearFilter = document.getElementById('summaryYearFilter');
const summaryHCount = document.getElementById('summary-h-count');
const summaryCTCount = document.getElementById('summary-ct-count');
const summaryCPCount = document.getElementById('summary-cp-count');
const summaryCSKCount = document.getElementById('summary-csk-count');
const summaryHName = document.getElementById('summary-h-name');
const summaryCTName = document.getElementById('summary-ct-name');
const summaryCPName = document.getElementById('summary-cp-name');
const summaryCSKName = document.getElementById('summary-csk-name');


function switchMenu(menu) {
    contentMain.classList.add('hidden');
    contentLeave.classList.add('hidden');
    contentPerformance.classList.add('hidden');

    editButton.classList.add('hidden');
    editKinerjaButton.classList.add('hidden');
    dropboxSyncButton.classList.add('hidden');
    if (isCutiListEditMode) {
        toggleCutiListEditMode(false);
    }
    if (isKinerjaListEditMode) {
        toggleKinerjaListEditMode(false);
    }

    [navMain, navLeave, navPerformance].forEach(nav => nav.classList.remove('active-nav'));

    if (menu === 'main') {
        contentMain.classList.remove('hidden');
        navMain.classList.add('active-nav');
        pageTitle.textContent = "Menu Utama";
        dropboxSyncButton.classList.remove('hidden');
    } else if (menu === 'leave') {
        contentLeave.classList.remove('hidden');
        navLeave.classList.add('active-nav');
        pageTitle.textContent = "Formulir dan Data Cuti";
        editButton.classList.remove('hidden');
    } else if (menu === 'performance') {
        contentPerformance.classList.remove('hidden');
        navPerformance.classList.add('active-nav');
        pageTitle.textContent = "Pantauan Kinerja Pegawai";
        editKinerjaButton.classList.remove('hidden');
    }
    lucide.createIcons();
}

function formatIndonesianDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString + 'T00:00:00');
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

function showMessage(message, type, duration = 2000) {
    messageContainer.innerHTML = '';
    const div = document.createElement('div');
    
    let iconHtml = '';
    const iconClasses = 'w-8 h-8'; 
    let baseClasses = 'p-3 rounded-lg inline-flex items-center justify-center';

    if (type === 'error') {
        div.className = `${baseClasses} bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300`;
        iconHtml = `<i data-lucide="x-circle" class="${iconClasses}"></i>`;
    } else if (type === 'info') {
        div.className = 'p-4 text-sm rounded-lg font-medium flex items-center gap-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
        iconHtml = `<i data-lucide="alert-circle" class="w-5 h-5"></i><span>${message}</span>`;
    } else { // success
        div.className = `${baseClasses} bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300`;
        iconHtml = `<i data-lucide="check-circle-2" class="${iconClasses}"></i>`;
    }

    div.innerHTML = iconHtml;
    
    if (type !== 'info') {
        messageContainer.className = 'w-full flex justify-end';
        div.className += " animate-pulse";
    } else {
        messageContainer.className = '';
    }
    
    messageContainer.appendChild(div);
    lucide.createIcons();

    if(duration > 0) {
      setTimeout(() => { 
          messageContainer.innerHTML = '';
          messageContainer.className = '';
      }, duration);
    }
}


function populateFilters() {
    const allYears = new Set();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    allYears.add(currentYear + 1);
    allYears.add(currentYear);
    allYears.add(currentYear - 1);
    takenLeaves.forEach(leave => allYears.add(new Date(leave.date).getFullYear()));
    
    const sortedYears = Array.from(allYears).sort((a, b) => b - a);

    [yearFilter, kinerjaYearFilter].forEach(select => {
        const existingValue = select.value;
        select.innerHTML = '';
        select.add(new Option("-- Pilih Tahun --", ""));
        sortedYears.forEach(year => select.add(new Option(year, year)));
        select.value = existingValue && existingValue !== "" ? existingValue : currentYear;
    });
    
    [monthFilter, kinerjaMonthFilter].forEach(select => {
        const existingValue = select.value;
        select.innerHTML = '';
        select.add(new Option("-- Pilih Bulan --", ""));
        monthNames.forEach((month, index) => select.add(new Option(month, index)));
        select.value = existingValue && existingValue !== "" ? existingValue : currentMonth;
    });
}

function populateCutiTableFilters() {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const monthSelect = employeeCutiMonthFilter;
    const yearSelect = employeeCutiYearFilter;

    const existingMonthValue = monthSelect.value;
    monthSelect.innerHTML = '';
    monthSelect.add(new Option("-- Pilih Bulan --", ""));
    monthNames.forEach((month, index) => monthSelect.add(new Option(month, index)));
    monthSelect.value = existingMonthValue && existingMonthValue !== "" ? existingMonthValue : currentMonth;
    
    const existingYearValue = yearSelect.value;
    yearSelect.innerHTML = '';
    yearSelect.add(new Option("-- Pilih Tahun --", ""));
    const allYears = new Set(Object.keys(cutiPegawai).map(key => key.substring(0, 4)));
    allYears.add(String(currentYear + 1));
    allYears.add(String(currentYear));
    allYears.add(String(currentYear - 1));
    const sortedYears = Array.from(allYears).sort((a, b) => b - a);
    sortedYears.forEach(year => yearSelect.add(new Option(year, year)));
    yearSelect.value = existingYearValue && existingYearValue !== "" ? existingYearValue : currentYear;
}

function populateSummaryFilters() {
    const allYears = new Set();
    const currentYear = new Date().getFullYear();
    allYears.add(currentYear + 1);
    allYears.add(currentYear);
    allYears.add(currentYear - 1);
    takenLeaves.forEach(leave => allYears.add(new Date(leave.date).getFullYear()));
    
    const sortedYears = Array.from(allYears).sort((a, b) => b - a);

    summaryYearFilter.innerHTML = '';
    sortedYears.forEach(year => summaryYearFilter.add(new Option(year, year)));
    summaryYearFilter.value = currentYear;
    
    summaryMonthFilter.innerHTML = '';
    monthNames.forEach((month, index) => summaryMonthFilter.add(new Option(month, index)));
    summaryMonthFilter.value = new Date().getMonth();
}

function updateTodayStats(countEl, namesEl, namesArray) {
    countEl.textContent = namesArray.length;
    namesEl.innerHTML = '';
    if (namesArray.length === 0) {
        const li = document.createElement('li');
        li.textContent = '-';
        li.className = 'list-none italic text-slate-500 dark:text-slate-400';
        namesEl.appendChild(li);
    } else {
        namesArray.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            namesEl.appendChild(li);
        });
    }
}

function updateSummaryCards() {
    const today = new Date();
    const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const todaysLeaves = takenLeaves.filter(l => l.date === todayString);

    const employeeData = getKinerjaPegawaiForMonth(today.getFullYear(), today.getMonth());
    const manajemenNipps = new Set(employeeData.management.map(e => e.nipp));
    const masinisNipps = new Set(employeeData.masinis.map(e => e.nipp));

    const ctManajemen = [], cpManajemen = [], cskManajemen = [];
    const ctMasinis = [], cpMasinis = [], cskMasinis = [];

    todaysLeaves.forEach(leave => {
        if (manajemenNipps.has(leave.nipp)) {
            if (leave.type === 'CT') ctManajemen.push(leave.name);
            if (leave.type === 'CP') cpManajemen.push(leave.name);
            if (leave.type === 'CSK') cskManajemen.push(leave.name);
        } else if (masinisNipps.has(leave.nipp)) {
            if (leave.type === 'CT') ctMasinis.push(leave.name);
            if (leave.type === 'CP') cpMasinis.push(leave.name);
            if (leave.type === 'CSK') cskMasinis.push(leave.name);
        }
    });

    updateTodayStats(todayCtManajemenCount, todayCtManajemenNames, ctManajemen);
    updateTodayStats(todayCpManajemenCount, todayCpManajemenNames, cpManajemen);
    updateTodayStats(todayCskManajemenCount, todayCskManajemenNames, cskManajemen);
    updateTodayStats(todayCtMasinisCount, todayCtMasinisNames, ctMasinis);
    updateTodayStats(todayCpMasinisCount, todayCpMasinisNames, cpMasinis);
    updateTodayStats(todayCskMasinisCount, todayCskMasinisNames, cskMasinis);
}


function getSummary(countsObject) {
    const entries = Object.entries(countsObject);
    if (entries.length === 0) {
        return { total: 0, topName: '-', topCount: 0 };
    }

    const total = entries.reduce((sum, entry) => sum + entry[1], 0);
    const [topNipp, topCount] = entries.reduce((max, current) => current[1] > max[1] ? current : max, ['', 0]);
    
    const employee = allEmployeeData.find(emp => emp.nipp === topNipp);
    const topName = employee ? employee.nama : 'N/A';

    return { total, topName, topCount };
}

function updateMonthlySummary() {
    const selectedMonth = parseInt(summaryMonthFilter.value, 10);
    const selectedYear = parseInt(summaryYearFilter.value, 10);

    if (isNaN(selectedMonth) || isNaN(selectedYear)) return;

    const kinerjaForMonth = getKinerjaPegawaiForMonth(selectedYear, selectedMonth);
    const masinisNipps = new Set(kinerjaForMonth.masinis.map(m => m.nipp));
    const hCounts = {}, ctCounts = {}, cpCounts = {}, cskCounts = {};

    takenLeaves.forEach(leave => {
        if (masinisNipps.has(leave.nipp)) {
            const leaveDate = new Date(leave.date + 'T00:00:00');
            if (leaveDate.getMonth() === selectedMonth && leaveDate.getFullYear() === selectedYear) {
                if (leave.type === 'CT') ctCounts[leave.nipp] = (ctCounts[leave.nipp] || 0) + 1;
                if (leave.type === 'CP') cpCounts[leave.nipp] = (cpCounts[leave.nipp] || 0) + 1;
                if (leave.type === 'CSK') cskCounts[leave.nipp] = (cskCounts[leave.nipp] || 0) + 1;
            }
        }
    });

    for (const key in kinerjaData) {
        const nipp = key.substring(0, key.indexOf('-'));
        if (masinisNipps.has(nipp) && kinerjaData[key] === 'H') {
            const dateStr = key.substring(key.indexOf('-') + 1);
            const kinerjaDate = new Date(dateStr + 'T00:00:00');
            if (kinerjaDate.getMonth() === selectedMonth && kinerjaDate.getFullYear() === selectedYear) {
                hCounts[nipp] = (hCounts[nipp] || 0) + 1;
            }
        }
    }
    
    const hSummary = getSummary(hCounts);
    const ctSummary = getSummary(ctCounts);
    const cpSummary = getSummary(cpCounts);
    const cskSummary = getSummary(cskCounts);

    summaryHCount.textContent = hSummary.total;
    summaryHName.textContent = hSummary.topCount > 0 ? `${hSummary.topName} (${hSummary.topCount})` : '-';
    summaryHName.title = summaryHName.textContent;

    summaryCTCount.textContent = ctSummary.total;
    summaryCTName.textContent = ctSummary.topCount > 0 ? `${ctSummary.topName} (${ctSummary.topCount})` : '-';
    summaryCTName.title = summaryCTName.textContent;

    summaryCPCount.textContent = cpSummary.total;
    summaryCPName.textContent = cpSummary.topCount > 0 ? `${cpSummary.topName} (${cpSummary.topCount})` : '-';
    summaryCPName.title = summaryCPName.textContent;

    summaryCSKCount.textContent = cskSummary.total;
    summaryCSKName.textContent = cskSummary.topCount > 0 ? `${cskSummary.topName} (${cskSummary.topCount})` : '-';
    summaryCSKName.title = summaryCSKName.textContent;
}

function updateAllUI() {
    updateTableDisplay();
    updateAllEmployeeCutiTables();
    updateAllKinerjaTables();
    updateSummaryCards();
    updateMonthlySummary();
    lucide.createIcons();
}

function updateTableDisplay() {
    tableBody.innerHTML = '';
    actionHeader.classList.toggle('hidden', !isCutiListEditMode);
    const colspan = isCutiListEditMode ? 5 : 4;

    if (monthFilter.value === "" || yearFilter.value === "") {
        tableBody.innerHTML = `<tr><td colspan="${colspan}" class="text-center text-slate-500 dark:text-slate-400 py-10 px-4"><div class="flex flex-col items-center gap-2"><i data-lucide="search-x" class="w-12 h-12 text-slate-400 dark:text-slate-500"></i><span class="font-semibold">Pilih bulan dan tahun</span><span class="text-sm">untuk melihat data cuti.</span></div></td></tr>`;
        lucide.createIcons();
        return;
    }

    const displayMonth = parseInt(monthFilter.value, 10);
    const displayYear = parseInt(yearFilter.value, 10);
    const filteredLeaves = takenLeaves
        .filter(l => new Date(l.date + 'T00:00:00').getMonth() === displayMonth && new Date(l.date + 'T00:00:00').getFullYear() === displayYear)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (filteredLeaves.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="${colspan}" class="text-center text-slate-500 dark:text-slate-400 py-10 px-4"><div class="flex flex-col items-center gap-2"><i data-lucide="info" class="w-12 h-12 text-slate-400 dark:text-slate-500"></i><span class="font-semibold">Tidak ada data cuti</span><span class="text-sm">untuk periode ini.</span></div></td></tr>`;
        lucide.createIcons();
    } else {
        filteredLeaves.forEach(leave => {
            const row = tableBody.insertRow();
            row.className = 'hover:bg-slate-50 dark:hover:bg-white/5';
            row.innerHTML = `
                <td class="py-3 px-3 text-center text-slate-600 dark:text-slate-300">${formatIndonesianDate(leave.date)}</td>
                <td class="py-3 px-3 text-left font-medium text-slate-800 dark:text-slate-100">${leave.name}</td>
                <td class="py-3 px-3 text-center text-slate-600 dark:text-slate-300">${leave.nipp}</td>
                <td class="py-3 px-3 text-center"><span class="px-2 py-1 text-xs font-semibold rounded-full ${leave.type === 'CT' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' : leave.type === 'CP' ? 'bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'}">${leave.type}</span></td>
                <td class="py-3 px-3 text-center ${isCutiListEditMode ? '' : 'hidden'}">
                    <button data-date="${leave.date}" data-nipp="${leave.nipp}" class="delete-btn text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </td>
            `;
        });
    }
}

function getEmployeeDataByMonth(dataSource, year, month) {
    if (!year || month === "" || month === null) {
        return { management: [], masinis: [] };
    }
    const targetKey = `${year}-${String(parseInt(month, 10) + 1).padStart(2, '0')}`;

    if (dataSource[targetKey]) {
        return JSON.parse(JSON.stringify(dataSource[targetKey]));
    }

    const sortedKeys = Object.keys(dataSource).sort().reverse();
    const latestKey = sortedKeys.find(k => k <= targetKey);

    if (latestKey) {
        return JSON.parse(JSON.stringify(dataSource[latestKey]));
    }
    return { management: [], masinis: [] };
}

const getCutiPegawaiForMonth = (year, month) => getEmployeeDataByMonth(cutiPegawai, year, month);
const getKinerjaPegawaiForMonth = (year, month) => getEmployeeDataByMonth(kinerjaPegawai, year, month);


function renderEmployeeCutiTable(tbody, data, yearFilterElement, monthFilterElement) {
    tbody.innerHTML = '';
    const selectedYear = yearFilterElement.value;
    const selectedMonth = monthFilterElement.value;
    
    if (!selectedYear || selectedMonth === "") {
        const colspan = isCutiListEditMode ? 8 : 7;
        tbody.innerHTML = `<tr><td colspan="${colspan}" class="text-center text-slate-500 dark:text-slate-400 py-10 px-4">
            <div class="flex flex-col items-center gap-2">
                <i data-lucide="search-x" class="w-12 h-12 text-slate-400 dark:text-slate-500"></i>
                <span class="font-semibold">Pilih bulan dan tahun</span>
                <span class="text-sm">untuk melihat atau mengedit data pegawai.</span>
            </div>
        </td></tr>`;
        lucide.createIcons();
        return;
    }

    data.forEach((emp, index) => {
        const row = tbody.insertRow();
        row.className = 'hover:bg-slate-50 dark:hover:bg-white/5';
        row.dataset.index = index;

        const sequentialNo = index + 1;

        if (isCutiListEditMode) {
            row.innerHTML = `
                <td class="py-2 px-2 text-center text-slate-500 dark:text-slate-400">${sequentialNo}</td>
                <td class="p-1"><input type="text" value="${emp.nama}" class="w-full bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded p-1.5" data-field="nama"></td>
                <td class="p-1"><input type="text" value="${emp.nipp}" class="w-full bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded p-1.5" data-field="nipp"></td>
                <td class="p-1"><input type="text" value="${emp.jabatan}" class="w-full bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded p-1.5" data-field="jabatan"></td>
                <td class="p-1"><input type="number" value="${emp.jumlahCuti}" class="w-full bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded p-1.5" data-field="jumlahCuti"></td>
                <td class="py-2 px-3 text-center font-semibold text-slate-500 dark:text-slate-400">-</td>
                <td class="py-2 px-3 text-center font-semibold text-slate-500 dark:text-slate-400">-</td>
                <td class="p-1 text-center">
                    <button type="button" class="delete-employee-btn text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </td>
            `;
        } else {
            const leavesTakenMonthly = takenLeaves.filter(leave => {
                const leaveDate = new Date(leave.date + 'T00:00:00');
                return leave.nipp === emp.nipp && leaveDate.getFullYear() === parseInt(selectedYear, 10) && leaveDate.getMonth() === parseInt(selectedMonth, 10) && leave.type === 'CT';
            }).length;
            
            const leavesTakenYearly = takenLeaves.filter(leave => {
                const leaveDate = new Date(leave.date + 'T00:00:00');
                return leave.nipp === emp.nipp && leaveDate.getFullYear() === parseInt(selectedYear, 10) && leave.type === 'CT';
            }).length;

            row.innerHTML = `
                <td class="py-2 px-2 text-center text-slate-500 dark:text-slate-400">${sequentialNo}</td>
                <td class="py-2 px-3 text-left font-medium text-slate-800 dark:text-slate-100">${emp.nama}</td>
                <td class="py-2 px-3 text-center text-slate-600 dark:text-slate-300">${emp.nipp}</td>
                <td class="py-2 px-3 text-center text-slate-600 dark:text-slate-300">${emp.jabatan}</td>
                <td class="py-2 px-3 text-center text-slate-600 dark:text-slate-300">${emp.jumlahCuti}</td>
                <td class="py-2 px-3 text-center font-semibold text-slate-800 dark:text-slate-100">${leavesTakenMonthly > 0 ? leavesTakenMonthly : '0'}</td>
                <td class="py-2 px-3 text-center font-bold text-blue-600 dark:text-blue-400">${leavesTakenYearly > 0 ? leavesTakenYearly : '0'}</td>
            `;
        }
    });
    lucide.createIcons();
}

function updateAllEmployeeCutiTables() {
    const selectedYear = employeeCutiYearFilter.value;
    const selectedMonth = employeeCutiMonthFilter.value;
    
    const employeeData = getCutiPegawaiForMonth(selectedYear, selectedMonth);
    
    renderEmployeeCutiTable(managementTableBody, employeeData.management, employeeCutiYearFilter, employeeCutiMonthFilter);
    renderEmployeeCutiTable(masinisTableBody, employeeData.masinis, employeeCutiYearFilter, employeeCutiMonthFilter);
}


function renderKinerjaTable(tableElement, data, isEditingList) {
    const thead = tableElement.querySelector('thead');
    const tbody = tableElement.querySelector('tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    const year = parseInt(kinerjaYearFilter.value, 10);
    const month = parseInt(kinerjaMonthFilter.value, 10);

    if (isNaN(year) || isNaN(month)) {
        tbody.innerHTML = `<tr><td colspan="35" class="text-center p-4 text-slate-500 dark:text-slate-400">
             <div class="flex flex-col items-center gap-2">
                <i data-lucide="search-x" class="w-12 h-12 text-slate-400 dark:text-slate-500"></i>
                <span class="font-semibold">Pilih bulan dan tahun</span>
                <span class="text-sm">untuk melihat atau mengedit data pegawai.</span>
            </div>
        </td></tr>`;
        lucide.createIcons();
        return;
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const headerRow = thead.insertRow();
    headerRow.innerHTML = `
        <th class="py-2 px-2 text-center font-semibold text-slate-600 dark:text-slate-300 sticky left-0 z-20 bg-slate-100 dark:bg-slate-700" style="width: 40px;">NO</th>
        <th class="py-2 px-3 text-center font-semibold text-slate-600 dark:text-slate-300 sticky left-[40px] z-20 bg-slate-100 dark:bg-slate-700 min-w-[150px]">NAMA</th>
        <th class="py-2 px-3 text-center font-semibold text-slate-600 dark:text-slate-300 sticky left-[190px] z-20 bg-slate-100 dark:bg-slate-700 min-w-[100px]">NIPP</th>
        <th class="py-2 px-3 text-center font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 min-w-[120px]">JABATAN</th>
    `;

    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i);
        const dayIndex = date.getDay();
        const dayInitial = dayNames[dayIndex];
        const th = document.createElement('th');
        th.className = 'py-2 px-1 text-center font-semibold text-slate-500 dark:text-slate-400 min-w-[35px]';
        if (dayIndex === 0 || dayIndex === 6) {
            th.classList.add('text-red-500');
        }
        th.innerHTML = `<div class="text-xs">${dayInitial}</div><div>${i}</div>`;
        headerRow.appendChild(th);
    }
    
    if (isEditingList) {
        const th = document.createElement('th');
        th.className = 'py-2 px-3 text-center font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700';
        th.textContent = 'AKSI';
        headerRow.appendChild(th);
    }

    data.forEach((emp, index) => {
        const bodyRow = tbody.insertRow();
        bodyRow.className = 'hover:bg-slate-50 dark:hover:bg-white/5';
        bodyRow.dataset.index = index;
        
        const sequentialNo = index + 1;
        
        if (isEditingList) {
            bodyRow.innerHTML = `
                <td class="py-2 px-2 text-center sticky left-0 bg-yellow-50 dark:bg-yellow-900/40 text-slate-500 dark:text-slate-400" style="width: 40px;">${sequentialNo}</td>
                <td class="p-1 sticky left-[40px] bg-yellow-50 dark:bg-yellow-900/40"><input type="text" value="${emp.nama || ''}" class="w-full bg-transparent border-b border-yellow-500 focus:outline-none focus:ring-0 p-1.5" data-field="nama"></td>
                <td class="p-1 sticky left-[190px] bg-yellow-50 dark:bg-yellow-900/40"><input type="text" value="${emp.nipp || ''}" class="w-full bg-transparent border-b border-yellow-500 focus:outline-none focus:ring-0 p-1.5" data-field="nipp"></td>
                <td class="p-1 bg-yellow-50 dark:bg-yellow-900/40"><input type="text" value="${emp.jabatan || ''}" class="w-full bg-transparent border-b border-yellow-500 focus:outline-none focus:ring-0 p-1.5" data-field="jabatan"></td>
            `;
        } else {
             bodyRow.innerHTML = `
                <td class="py-2 px-2 text-center sticky left-0 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400" style="width: 40px;">${sequentialNo}</td>
                <td class="py-2 px-3 text-left sticky left-[40px] bg-white dark:bg-slate-800 font-medium text-slate-800 dark:text-slate-100">${emp.nama || ''}</td>
                <td class="py-2 px-3 text-center sticky left-[190px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300">${emp.nipp || ''}</td>
                <td class="py-2 px-3 text-center bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300">${emp.jabatan || ''}</td>
            `;
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            const leaveRecord = takenLeaves.find(leave => leave.nipp === emp.nipp && leave.date === dateStr);
            const td = document.createElement('td');

            if (isEditingList) {
                td.className = 'border-l border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 cursor-not-allowed';
                bodyRow.appendChild(td);
                continue;
            }

            td.className = 'border-l border-slate-200 dark:border-slate-700';

            if (leaveRecord) {
                td.classList.add('text-center', 'font-bold', 'text-xs');
                td.textContent = leaveRecord.type;
                if(leaveRecord.type === 'CT') td.classList.add('bg-blue-200', 'dark:bg-blue-900/70', 'text-blue-900', 'dark:text-blue-200');
                if(leaveRecord.type === 'CP') td.classList.add('bg-slate-200', 'dark:bg-slate-600/70', 'text-slate-900', 'dark:text-slate-200');
                if(leaveRecord.type === 'CSK') td.classList.add('bg-yellow-200', 'dark:bg-yellow-900/70', 'text-yellow-900', 'dark:text-yellow-200');
            } else {
                const kinerjaKey = `${emp.nipp}-${dateStr}`;
                const savedKinerja = kinerjaData[kinerjaKey] || "";
                
                let bgColor = 'bg-transparent';
                if (savedKinerja === 'H') bgColor = 'bg-green-200 dark:bg-green-900/70';
                else if (savedKinerja === 'L' || savedKinerja === 'LP') bgColor = 'bg-red-200 dark:bg-red-900/70';

                td.className = `p-0 border-l border-slate-200 dark:border-slate-700 text-center font-semibold ${bgColor}`;
                
                td.innerHTML = `
                    <select data-key="${kinerjaKey}" class="kinerja-select w-full h-full border-none text-center bg-transparent focus:bg-blue-600 focus:text-white dark:focus:bg-blue-500 focus:ring-0 p-1 text-xs appearance-none cursor-pointer font-semibold">
                        <option value="" class="text-black bg-white dark:text-white dark:bg-slate-800"></option>
                        <option value="H" class="text-black bg-white dark:text-white dark:bg-slate-800" ${savedKinerja === 'H' ? 'selected' : ''}>H</option>
                        <option value="L" class="text-black bg-white dark:text-white dark:bg-slate-800" ${savedKinerja === 'L' ? 'selected' : ''}>L</option>
                        <option value="LP" class="text-black bg-white dark:text-white dark:bg-slate-800" ${savedKinerja === 'LP' ? 'selected' : ''}>LP</option>
                    </select>
                `;
            }
            bodyRow.appendChild(td);
        }

        if (isEditingList) {
             const actionCell = bodyRow.insertCell();
             actionCell.className = "p-1 text-center bg-yellow-50 dark:bg-yellow-900/40";
             actionCell.innerHTML = `
                <button type="button" class="delete-employee-btn text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
             `;
        }
    });
    lucide.createIcons();
}


function updateAllKinerjaTables() {
    const year = kinerjaYearFilter.value;
    const month = kinerjaMonthFilter.value;
    const dataForMonth = getKinerjaPegawaiForMonth(year, month);
    
    allEmployeeData = [...dataForMonth.management, ...dataForMonth.masinis];

    renderKinerjaTable(kinerjaManajemenTable, dataForMonth.management, isKinerjaListEditMode);
    renderKinerjaTable(kinerjaMasinisTable, dataForMonth.masinis, isKinerjaListEditMode);
}

function saveEmployeeDataFromTable(tbody) {
    const rows = tbody.querySelectorAll('tr');
    const updatedData = [];

    rows.forEach(row => {
        const nameInput = row.querySelector('input[data-field="nama"]');
        if (!nameInput) return;

        const nameValue = nameInput.value.trim();
        if (nameValue) {
            const nippInput = row.querySelector('input[data-field="nipp"]');
            const jabatanInput = row.querySelector('input[data-field="jabatan"]');
            const jatahInput = row.querySelector('input[data-field="jumlahCuti"]');
            
            const record = {
                nama: nameValue.toUpperCase(),
                nipp: nippInput.value.trim(),
                jabatan: jabatanInput.value.trim().toUpperCase(),
            };

            if(jatahInput) {
                record.jumlahCuti = parseInt(jatahInput.value, 10) || 0;
            }

            updatedData.push(record);
        }
    });
    return updatedData;
}


function toggleCutiListEditMode(enable) {
    if (enable) {
        employeeCutiYearFilter.value = "";
        employeeCutiMonthFilter.value = "";
    } else {
        const year = employeeCutiYearFilter.value;
        const month = employeeCutiMonthFilter.value;

        if (year && month !== "") {
            const key = `${year}-${String(parseInt(month, 10) + 1).padStart(2, '0')}`;
            const savedManagement = saveEmployeeDataFromTable(managementTableBody);
            const savedMasinis = saveEmployeeDataFromTable(masinisTableBody);
            
            cutiPegawai[key] = {
                management: savedManagement,
                masinis: savedMasinis
            };
            saveData();
            showMessage('Data Cuti Pegawai berhasil diperbarui.', 'success', 5000);
        }
    }
    isCutiListEditMode = enable;
    
    const editButtonLabel = editButton.querySelector('span');
    const editButtonIcon = editButton.querySelector('i');
    
    if (enable) {
        editButton.classList.replace('bg-slate-800', 'bg-green-600');
        if (editButtonLabel) editButtonLabel.textContent = "Selesai Edit";
        if (editButtonIcon) editButtonIcon.setAttribute('data-lucide', 'check-circle');
    } else {
        editButton.classList.replace('bg-green-600', 'bg-slate-800');
        if (editButtonLabel) editButtonLabel.textContent = "Edit Data";
        if (editButtonIcon) editButtonIcon.setAttribute('data-lucide', 'pencil');
    }
    
    addManagementRowButton.classList.toggle('hidden', !enable);
    addMasinisRowButton.classList.toggle('hidden', !enable);

    document.querySelectorAll('#managementTableBody, #masinisTableBody').forEach(tbody => {
        const thead = tbody.previousElementSibling;
        const headerRow = thead.querySelector('tr');
        let actionHeader = headerRow.querySelector('.employee-action-header');
        if (enable) {
            if (!actionHeader) {
                actionHeader = document.createElement('th');
                actionHeader.className = 'employee-action-header py-2.5 px-3 text-center font-semibold text-slate-600 dark:text-slate-300 rounded-tr-lg';
                actionHeader.textContent = 'AKSI';
                if(headerRow.lastElementChild) {
                    headerRow.lastElementChild.classList.remove('rounded-tr-lg');
                }
                headerRow.appendChild(actionHeader);
            }
        } else {
            if (actionHeader) {
                actionHeader.remove();
                 if(headerRow.lastElementChild) {
                    headerRow.lastElementChild.classList.add('rounded-tr-lg');
                }
            }
        }
    });

    passwordModal.classList.replace('modal-visible', 'modal-hidden');

    if (!enable) {
        employeeCutiMonthFilter.value = '';
        employeeCutiYearFilter.value = '';
        populateCutiTableFilters();
    }
    
    updateAllUI();
}

function toggleKinerjaListEditMode(enable) {
    if (enable) {
        kinerjaYearFilter.value = "";
        kinerjaMonthFilter.value = "";
    } else {
        const year = kinerjaYearFilter.value;
        const month = kinerjaMonthFilter.value;

        if (year && month !== "") {
            const key = `${year}-${String(parseInt(month, 10) + 1).padStart(2, '0')}`;
            const savedManagement = saveEmployeeDataFromTable(kinerjaManajemenTableBody);
            const savedMasinis = saveEmployeeDataFromTable(kinerjaMasinisTableBody); // PERBAIKAN BUG DI SINI

            kinerjaPegawai[key] = {
                management: savedManagement,
                masinis: savedMasinis
            };
            saveData();
            showMessage('Data Kinerja Pegawai berhasil diperbarui.', 'success', 5000);
        }
    }
    isKinerjaListEditMode = enable;

    const editButtonLabel = editKinerjaButton.querySelector('span');
    const editButtonIcon = editKinerjaButton.querySelector('i');

    if (enable) {
        editKinerjaButton.classList.remove('bg-slate-800', 'dark:bg-slate-200', 'text-white', 'dark:text-slate-900');
        editKinerjaButton.classList.add('bg-green-600', 'dark:bg-green-500', 'text-white', 'dark:text-white');
        if (editButtonLabel) editButtonLabel.textContent = "Selesai Edit";
        if (editButtonIcon) editButtonIcon.setAttribute('data-lucide', 'check-circle');
    } else {
        editKinerjaButton.classList.remove('bg-green-600', 'dark:bg-green-500', 'text-white', 'dark:text-white');
        editKinerjaButton.classList.add('bg-slate-800', 'dark:bg-slate-200', 'text-white', 'dark:text-slate-900');
        if (editButtonLabel) editButtonLabel.textContent = "Edit Data";
        if (editButtonIcon) editButtonIcon.setAttribute('data-lucide', 'pencil');
    }

    addKinerjaManagementRowButton.classList.toggle('hidden', !enable);
    addKinerjaMasinisRowButton.classList.toggle('hidden', !enable);
    passwordModal.classList.replace('modal-visible', 'modal-hidden');
    
    if(!enable){
        populateFilters();
    }

    updateAllKinerjaTables();
}

function renderCalendar() {
    const year = calendarCurrentDate.getFullYear();
    const month = calendarCurrentDate.getMonth();
    monthYearText.textContent = `${monthNames[month]} ${year}`;
    calendarGrid.innerHTML = '';

    dayNames.forEach(day => {
        const dayEl = document.createElement('div');
        dayEl.className = 'font-semibold text-sm text-slate-600 dark:text-slate-400';
        dayEl.textContent = day;
        calendarGrid.appendChild(dayEl);
    });

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    for (let i = 0; i < startOffset; i++) {
        calendarGrid.appendChild(document.createElement('div'));
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayEl = document.createElement('button');
        dayEl.type = 'button';
        dayEl.className = 'calendar-day w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700';
        dayEl.textContent = i;
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        dayEl.dataset.date = dateStr;

        const today = new Date();
        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            dayEl.classList.add('today');
        }
        
        const applicantNipp = nippInput.value;
        const kinerjaForDate = getKinerjaPegawaiForMonth(year, month);
        const applicantIsManagement = kinerjaForDate.management.some(emp => emp.nipp === applicantNipp);

        const ctOnDate = takenLeaves.filter(l => l.date === dateStr && l.type === 'CT');
        const managementCtCount = ctOnDate.filter(l => kinerjaForDate.management.some(m => m.nipp === l.nipp)).length;
        const masinisCtCount = ctOnDate.filter(l => kinerjaForDate.masinis.some(m => m.nipp === l.nipp)).length;

        if (applicantIsManagement && managementCtCount >= 2) {
            dayEl.classList.add('taken');
            dayEl.disabled = true;
        } else if (!applicantIsManagement && masinisCtCount >= 3) {
            dayEl.classList.add('taken');
            dayEl.disabled = true;
        }

        if (tempSelectedDates.includes(dateStr)) {
            dayEl.classList.add('selected');
        }
        calendarGrid.appendChild(dayEl);
    }
}

function toggleLeaveFormDetails(show) {
    const wrappers = [nippWrapper, nameWrapper, dateWrapper, buttonWrapper];
    wrappers.forEach(el => el.classList.toggle('hidden', !show));
}

function saveDataToLocalFile() {
    const dataToSave = {
        takenLeaves,
        kinerjaData,
        cutiPegawai,
        kinerjaPegawai
    };
    const dataStr = JSON.stringify(dataToSave, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kinerja_app_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showMessage('Gagal terhubung ke Dropbox. Data disimpan ke perangkat Anda.', 'info', 5000);
}

function loadDataFromLocalFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const loadedData = JSON.parse(event.target.result);
                const baseKey = `${new Date().getFullYear() - 1}-01`;
                cutiPegawai = migrateOldData(loadedData.cutiPegawai, baseKey);
                kinerjaPegawai = migrateOldData(loadedData.kinerjaPegawai, baseKey);
                takenLeaves = loadedData.takenLeaves || [];
                kinerjaData = loadedData.kinerjaData || {};
                
                saveDataToLocalStorage();
                populateCutiTableFilters();
                updateAllUI();
                showMessage('Data berhasil dimuat dari file lokal.', 'success', 5000);
            } catch (err) {
                showMessage('File tidak valid atau rusak.', 'error', 5000);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}


function saveData() {
    saveDataToLocalStorage();
    if (dropboxToken) {
        saveDataToDropbox();
    }
}

function saveDataToLocalStorage() {
    const dataToSave = {
        takenLeaves,
        kinerjaData,
        cutiPegawai,
        kinerjaPegawai
    };
    localStorage.setItem('kinerjaAppData', JSON.stringify(dataToSave));
}

async function saveDataToDropbox() {
    if (!dropboxToken) {
        showMessage('', 'error');
        saveDataToLocalFile();
        return;
    }

    const dataToSave = {
        takenLeaves,
        kinerjaData,
        cutiPegawai,
        kinerjaPegawai
    };
    
    try {
        const response = await fetch('https://content.dropboxapi.com/2/files/upload', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${dropboxToken}`,
                'Dropbox-API-Arg': JSON.stringify({
                    path: DROPBOX_DATA_PATH,
                    mode: 'overwrite',
                    autorename: false,
                    mute: true,
                }),
                'Content-Type': 'application/octet-stream',
            },
            body: JSON.stringify(dataToSave, null, 2)
        });

        if (!response.ok) {
            showMessage('', 'error');
            saveDataToLocalFile();
        } else {
            showMessage('', 'success');
        }
    } catch (error) {
        showMessage('', 'error');
        saveDataToLocalFile();
    }
}

function migrateOldData(loadedData, baseKey) {
    const migratedData = {};
    if (loadedData && Object.keys(loadedData).length > 0 && loadedData.constructor === Object && !Array.isArray(loadedData.management)) {
        return migratedData;
    } else {
        const oldData = loadedData || { management: [], masinis: [] };
        migratedData[baseKey] = oldData;
        return migratedData;
    }
}

async function loadDataFromDropbox() {
    if (!dropboxToken) { 
        showMessage('Token Dropbox tidak diatur. Silakan pilih file lokal.', 'info', 5000);
        loadDataFromLocalFile();
        return; 
    }
    showMessage('Memuat data dari Dropbox...', 'info', 0);
    try {
        const response = await fetch('https://content.dropboxapi.com/2/files/download', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${dropboxToken}`, 'Dropbox-API-Arg': JSON.stringify({ path: DROPBOX_DATA_PATH }), },
        });
        if (response.ok) {
            const loadedData = await response.json();
            const baseKey = `${new Date().getFullYear() - 1}-01`;
            cutiPegawai = migrateOldData(loadedData.cutiPegawai, baseKey);
            kinerjaPegawai = migrateOldData(loadedData.kinerjaPegawai, baseKey);
            takenLeaves = loadedData.takenLeaves || [];
            kinerjaData = loadedData.kinerjaData || {};
            saveDataToLocalStorage();
            populateCutiTableFilters();
            updateAllUI();
            showMessage('', 'success');
        } else {
             showMessage('Gagal memuat dari Dropbox. Silakan pilih file lokal.', 'info', 5000);
             loadDataFromLocalFile();
        }
    } catch (error) { 
        showMessage('Gagal memuat. Periksa koneksi & pilih file lokal.', 'info', 5000); 
        loadDataFromLocalFile();
    }
}

function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem('kinerjaAppData');
    if (savedData) {
        const loadedData = JSON.parse(savedData);
        const baseKey = `${new Date().getFullYear() - 1}-01`;
        cutiPegawai = migrateOldData(loadedData.cutiPegawai, baseKey);
        kinerjaPegawai = migrateOldData(loadedData.kinerjaPegawai, baseKey);
        takenLeaves = loadedData.takenLeaves || [];
        kinerjaData = loadedData.kinerjaData || {};
    } else {
        loadDefaultData();
    }
}

function loadDefaultData() {
    takenLeaves = [
        { date: '2025-07-25', name: 'RIYAD FIRDAUS', nipp: '47335', type: 'CT' },
        { date: '2025-08-17', name: 'PUTUT RESTU WIBOWO', nipp: '50298', type: 'CT' },
        { date: '2025-07-15', name: 'UJANG SURYA', nipp: '50162', type: 'CP' },
        { date: '2024-12-24', name: 'APEP ANDRIANTO', nipp: '55037', type: 'CSK' },
    ];
    const defaultManagement = [
        { nama: 'YADI SUPRIADI', nipp: '44662', jabatan: 'KUPT', jumlahCuti: 16 },
        { nama: 'ROFI NOVIYANUS', nipp: '54706', jabatan: 'P.INSTRUKTUR', jumlahCuti: 14 },
        { nama: 'ARIEF KURNIAWAN', nipp: '42003', jabatan: 'P.DINASAN', jumlahCuti: 16 },
        { nama: 'SUHADI ASMARA', nipp: '44726', jabatan: 'P.DINASAN', jumlahCuti: 16 },
        { nama: 'FAZHAR SEPTIA ILLHAM', nipp: '48552', jabatan: 'P.DINASAN', jumlahCuti: 15 },
        { nama: 'MUHAMAD FITRA', nipp: '65933', jabatan: 'P.DINASAN', jumlahCuti: 12 },
    ];
    const defaultMasinis = [
        { nama: 'RIYAD FIRDAUS', nipp: '47335', jabatan: 'MASINIS MUDA', jumlahCuti: 15 },
        { nama: 'UJANG SURYA', nipp: '50162', jabatan: 'MASINIS MUDA', jumlahCuti: 14 },
        { nama: 'PUTUT RESTU WIBOWO', nipp: '50298', jabatan: 'MASINIS MUDA', jumlahCuti: 14 },
        { nama: 'UNGGUL HENDRA EKA PRATAMA', nipp: '54730', jabatan: 'MASINIS MUDA', jumlahCuti: 14 },
        { nama: 'APEP ANDRIANTO', nipp: '55037', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { nama: 'HERI ISKANDAR', nipp: '55042', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { nama: 'MURDANI', nipp: '55045', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { nama: 'ALIF SUHARDIMAN', nipp: '60567', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { nama: 'NOPIYANA', nipp: '60676', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { nama: 'JUNAEDI', nipp: '60722', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { nama: 'ANDRI NURJANA', nipp: '64928', jabatan: 'MASINIS MUDA', jumlahCuti: 12 },
        { nama: 'ANDRIANA', nipp: '65975', jabatan: 'MASINIS MUDA', jumlahCuti: 12 },
        { nama: 'ANTO KRISTANTO', nipp: '67833', jabatan: 'MASINIS MUDA', jumlahCuti: 12 },
        { nama: 'CECEP ARI NUGRAHA', nipp: '68089', jabatan: 'MASINIS MUDA', jumlahCuti: 12 },
        { nama: 'ARIS SETIAWAN', nipp: '69943', jabatan: 'MASINIS MUDA', jumlahCuti: 12 },
        { nama: 'ANTONIUS TRI SETYANTO', nipp: '73829', jabatan: 'MASINIS PERTAMA', jumlahCuti: 12 },
        { nama: 'MAHESA BIMA ADI PANGESTU', nipp: '73831', jabatan: 'MASINIS PERTAMA', jumlahCuti: 12 },
        { nama: 'FAYZA HAFIZH ARDIANSYAH', nipp: '74162', jabatan: 'MASINIS PERTAMA', jumlahCuti: 12 },
    ];
    
    const baseKey = `${new Date().getFullYear() - 1}-01`;
    const defaultData = {
        management: JSON.parse(JSON.stringify(defaultManagement)),
        masinis: JSON.parse(JSON.stringify(defaultMasinis))
    };
    cutiPegawai = {};
    cutiPegawai[baseKey] = JSON.parse(JSON.stringify(defaultData));
    kinerjaPegawai = {};
    kinerjaPegawai[baseKey] = JSON.parse(JSON.stringify(defaultData));

    kinerjaData = {};
}

function handleEmployeeTableClick(event) {
    const deleteButton = event.target.closest('.delete-employee-btn');
    if (!deleteButton || (!isCutiListEditMode && !isKinerjaListEditMode)) return;

    const row = deleteButton.closest('tr');
    if (!row) return;

    const tableBody = row.parentNode;
    const index = parseInt(row.dataset.index, 10);
    
    let dataSource, yearFilter, monthFilter, employeeName;
    
    if (isCutiListEditMode) {
        dataSource = cutiPegawai;
        yearFilter = employeeCutiYearFilter;
        monthFilter = employeeCutiMonthFilter;
    } else if (isKinerjaListEditMode) {
        dataSource = kinerjaPegawai;
        yearFilter = kinerjaYearFilter;
        monthFilter = kinerjaMonthFilter;
    } else {
        return;
    }
    
    const currentData = getEmployeeDataByMonth(dataSource, yearFilter.value, monthFilter.value);
    let dataArray = tableBody.id.includes('Manajemen') ? currentData.management : currentData.masinis;
    
    if (!dataArray || isNaN(index) || index < 0 || index >= dataArray.length) return;
    
    employeeName = dataArray[index]?.nama;
    dataArray.splice(index, 1);
    
    const key = `${yearFilter.value}-${String(parseInt(monthFilter.value, 10) + 1).padStart(2, '0')}`;
    dataSource[key] = currentData; 

    showMessage(`Pegawai "${employeeName}" berhasil dihapus.`, 'success', 5000);
    saveData();
    isCutiListEditMode ? updateAllEmployeeCutiTables() : updateAllKinerjaTables();
}

function updateDropboxModalState(showEdit = false) {
    dropboxToken = localStorage.getItem('dropboxToken');
    const hasToken = !!dropboxToken;

    dropboxStatusSynced.classList.toggle('hidden', !hasToken || showEdit);
    dropboxTokenEdit.classList.toggle('hidden', hasToken && !showEdit);
    
    if(!hasToken || showEdit) {
         dropboxTokenInput.value = dropboxToken || '';
    }

    saveToDropboxBtn.disabled = !hasToken;
    loadFromDropboxBtn.disabled = !hasToken;
    [saveToDropboxBtn, loadFromDropboxBtn].forEach(btn => {
        btn.classList.toggle('opacity-50', !hasToken);
        btn.classList.toggle('cursor-not-allowed', !hasToken);
    });
}

function addNewRowAndFocus(tbody, renderFunction, dataSource, yearFilter, monthFilter) {
    const year = yearFilter.value;
    const month = monthFilter.value;
    const currentData = getEmployeeDataByMonth(dataSource, year, month);
    
    let targetArray = tbody.id.includes('Manajemen') ? currentData.management : currentData.masinis;
    const newRecord = tbody.id.includes('Cuti') ? { nama: '', nipp: '', jabatan: '', jumlahCuti: 12 } : { nama: '', nipp: '', jabatan: '' };
    targetArray.push(newRecord);
    
    const key = `${year}-${String(parseInt(month, 10) + 1).padStart(2, '0')}`;
    dataSource[key] = currentData;
    
    renderFunction();

    setTimeout(() => {
        const newRow = tbody.lastElementChild;
        if (newRow) {
            newRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const nameInput = newRow.querySelector('input[data-field="nama"]');
            if (nameInput) {
                nameInput.focus();
            }
        }
    }, 50);
}

// --- Event Listeners ---
navMain.addEventListener('click', () => switchMenu('main'));
navLeave.addEventListener('click', () => switchMenu('leave'));
navPerformance.addEventListener('click', () => switchMenu('performance'));

leaveType.addEventListener('change', () => {
    const show = leaveType.value !== "";
    toggleLeaveFormDetails(show);
    if (!show) {
        nippInput.value = '';
        nameInput.value = '';
        leaveDateInput.value = '';
        selectedDatesText.textContent = 'Pilih tanggal';
        selectedDatesText.classList.add('text-slate-500');
    }
});

leaveDateDisplay.addEventListener('click', () => {
    if (isCutiListEditMode || leaveType.value === "" || nippInput.value.trim() === "") {
        if(nippInput.value.trim() === "") {
            showMessage('Silakan isi NIPP terlebih dahulu.', 'error', 5000);
        }
        return;
    }
    const dates = leaveDateInput.value.split(',').filter(Boolean);
    tempSelectedDates = [...dates];
    calendarModal.classList.replace('modal-hidden', 'modal-visible');
    renderCalendar();
});

prevMonthBtn.addEventListener('click', () => {
    calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() - 1);
    renderCalendar();
});
nextMonthBtn.addEventListener('click', () => {
    calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() + 1);
    renderCalendar();
});

calendarGrid.addEventListener('click', (e) => {
    const dayEl = e.target.closest('.calendar-day');
    if (dayEl && !dayEl.disabled) {
        const date = dayEl.dataset.date;
        const index = tempSelectedDates.indexOf(date);
        if (index > -1) {
            tempSelectedDates.splice(index, 1);
        } else {
            tempSelectedDates.push(date);
        }
        dayEl.classList.toggle('selected');
    }
});

confirmCalendarBtn.addEventListener('click', () => {
    tempSelectedDates.sort();
    leaveDateInput.value = tempSelectedDates.join(',');
    selectedDatesText.textContent = tempSelectedDates.length > 0 ? `${tempSelectedDates.length} hari dipilih` : 'Pilih satu atau lebih tanggal';
    selectedDatesText.classList.toggle('text-slate-500', tempSelectedDates.length === 0);
    calendarModal.classList.replace('modal-visible', 'modal-hidden');
});

cancelCalendarBtn.addEventListener('click', () => {
    calendarModal.classList.replace('modal-visible', 'modal-hidden');
});

editButton.addEventListener('click', () => {
    if (isCutiListEditMode) {
        toggleCutiListEditMode(false);
    } else {
        editTarget = 'cuti';
        passwordModal.classList.replace('modal-hidden', 'modal-visible');
        passwordInput.focus();
        passwordInput.value = '';
        document.getElementById('passwordError').classList.add('hidden');
    }
});

editKinerjaButton.addEventListener('click', () => {
    if (isKinerjaListEditMode) {
        toggleKinerjaListEditMode(false);
    } else {
        editTarget = 'kinerja';
        passwordModal.classList.replace('modal-hidden', 'modal-visible');
        passwordInput.focus();
        passwordInput.value = '';
        document.getElementById('passwordError').classList.add('hidden');
    }
});

addManagementRowButton.addEventListener('click', () => {
    addNewRowAndFocus(managementTableBody, updateAllEmployeeCutiTables, cutiPegawai, employeeCutiYearFilter, employeeCutiMonthFilter);
});
addMasinisRowButton.addEventListener('click', () => {
    addNewRowAndFocus(masinisTableBody, updateAllEmployeeCutiTables, cutiPegawai, employeeCutiYearFilter, employeeCutiMonthFilter);
});

addKinerjaManagementRowButton.addEventListener('click', () => {
    addNewRowAndFocus(kinerjaManajemenTableBody, updateAllKinerjaTables, kinerjaPegawai, kinerjaYearFilter, kinerjaMonthFilter);
});

addKinerjaMasinisRowButton.addEventListener('click', () => {
    addNewRowAndFocus(kinerjaMasinisTableBody, updateAllKinerjaTables, kinerjaPegawai, kinerjaYearFilter, kinerjaMonthFilter);
});

cancelButton.addEventListener('click', () => passwordModal.classList.replace('modal-visible', 'modal-hidden'));

submitPassword.addEventListener('click', () => {
    const latestKinerjaData = getKinerjaPegawaiForMonth(new Date().getFullYear(), new Date().getMonth());
    const managementForAuth = latestKinerjaData.management;
    const isValidPassword = managementForAuth.some(manager => manager.nipp === passwordInput.value);

    if (isValidPassword) {
        if (editTarget === 'cuti') {
            toggleCutiListEditMode(true);
        } else if (editTarget === 'kinerja') {
            toggleKinerjaListEditMode(true);
        }
        editTarget = null;
    } else {
        const passwordError = document.getElementById('passwordError');
        passwordError.textContent = 'Kata sandi salah. Gunakan NIPP Manajemen.';
        passwordError.classList.remove('hidden');
    }
});

passwordInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') submitPassword.click(); });

tableBody.addEventListener('click', (e) => {
    const deleteButton = e.target.closest('.delete-btn');
    if (deleteButton && isCutiListEditMode) {
        const dateToDelete = deleteButton.dataset.date;
        const nippToDelete = deleteButton.dataset.nipp;
        showMessage(`Data cuti tanggal ${formatIndonesianDate(dateToDelete)} berhasil dihapus.`, 'success', 5000);
        takenLeaves = takenLeaves.filter(leave => !(leave.date === dateToDelete && leave.nipp === nippToDelete));
        saveData();
        updateAllUI();
    }
});

nippInput.addEventListener('input', (e) => {
    const nippValue = e.target.value.trim();
    const employee = allEmployeeData.find(emp => emp.nipp === nippValue);
    nameInput.value = employee ? employee.nama : '';
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const currentLeaveType = leaveType.value;
    const name = nameInput.value.trim();
    const nipp = nippInput.value.trim();
    const selectedDatesValue = leaveDateInput.value;

    if (!selectedDatesValue || !name || !nipp || !currentLeaveType) {
        showMessage('Semua kolom wajib diisi.', 'error', 5000);
        return;
    }

    const selectedDates = selectedDatesValue.split(',');
    
    const employee = allEmployeeData.find(emp => emp.nipp === nipp);
    if (!employee) {
        showMessage(`NIPP ${nipp} tidak ditemukan.`, 'error', 5000);
        return;
    }

    const year = new Date(selectedDates[0]).getFullYear();
    const month = new Date(selectedDates[0]).getMonth();
    const kinerjaForDate = getKinerjaPegawaiForMonth(year, month);
    const isManagement = kinerjaForDate.management.some(m => m.nipp === nipp);

    if (currentLeaveType === 'CT') {
        const cutiForDate = getCutiPegawaiForMonth(year, month);
        const employeeCutiData = [...cutiForDate.management, ...cutiForDate.masinis].find(e => e.nipp === nipp);
        const jatahCuti = employeeCutiData ? employeeCutiData.jumlahCuti : 12;

        const leavesTakenThisYear = takenLeaves.filter(l => l.nipp === nipp && new Date(l.date).getFullYear() === year && l.type === 'CT').length;

        if ((leavesTakenThisYear + selectedDates.length) > jatahCuti) {
            const sisaCuti = Math.max(0, jatahCuti - leavesTakenThisYear);
            showMessage(`Pengajuan melebihi jatah cuti. Sisa cuti: ${sisaCuti} hari.`, 'error', 5000);
            return;
        }

        const fullDates = selectedDates.filter(date => {
            const ctOnDate = takenLeaves.filter(l => l.date === date && l.type === 'CT');
            const managementOnDate = ctOnDate.filter(l => kinerjaForDate.management.some(m => m.nipp === l.nipp)).length;
            const masinisOnDate = ctOnDate.filter(l => kinerjaForDate.masinis.some(m => m.nipp === l.nipp)).length;
            return (isManagement && managementOnDate >= 2) || (!isManagement && masinisOnDate >= 3);
        });

        if (fullDates.length > 0) {
            showMessage(`Tanggal berikut sudah penuh: ${fullDates.map(formatIndonesianDate).join(', ')}`, 'error', 5000);
            return;
        }
    }

    selectedDates.forEach(date => {
        takenLeaves.push({ date: date, name: name.toUpperCase(), nipp: nipp, type: currentLeaveType });
    });
    
    showMessage(`Pengajuan ${selectedDates.length} hari berhasil.`, 'success', 5000);
    
    form.reset();
    selectedDatesText.textContent = 'Pilih tanggal';
    selectedDatesText.classList.add('text-slate-500');
    toggleLeaveFormDetails(false);
    saveData();
    updateAllUI();
});

[kinerjaManajemenTable, kinerjaMasinisTable].forEach(table => {
    table.addEventListener('change', (e) => {
        if (e.target.classList.contains('kinerja-select')) {
            const key = e.target.dataset.key;
            const value = e.target.value;
            if (value) {
                kinerjaData[key] = value;
            } else {
                delete kinerjaData[key];
            }
            
            const cell = e.target.closest('td');
            cell.className = 'p-0 border-l border-slate-200 dark:border-slate-700 text-center font-semibold';
            if (value === 'H') cell.classList.add('bg-green-200', 'dark:bg-green-900/70');
            else if (value === 'L' || value === 'LP') cell.classList.add('bg-red-200', 'dark:bg-red-900/70');
            saveData();
            updateMonthlySummary();
        }
    });
});

[monthFilter, yearFilter, employeeCutiYearFilter, employeeCutiMonthFilter, kinerjaYearFilter, kinerjaMonthFilter, summaryMonthFilter, summaryYearFilter].forEach(filter => {
    filter.addEventListener('change', () => {
        updateAllUI();
    });
});

document.getElementById('content-leave').addEventListener('click', handleEmployeeTableClick);
document.getElementById('content-performance').addEventListener('click', handleEmployeeTableClick);

dropboxSyncButton.addEventListener('click', () => {
    updateDropboxModalState();
    dropboxModal.classList.replace('modal-hidden', 'modal-visible');
});
closeDropboxModalBtn.addEventListener('click', () => dropboxModal.classList.replace('modal-visible', 'modal-hidden'));
changeTokenBtn.addEventListener('click', () => {
    updateDropboxModalState(true);
    dropboxTokenInput.focus();
});
saveDropboxTokenBtn.addEventListener('click', () => {
    const token = dropboxTokenInput.value.trim();
    if (token) {
        localStorage.setItem('dropboxToken', token);
        showMessage('Token berhasil disimpan.', 'success', 5000);
        dropboxToken = token;
        loadDataFromDropbox();
    } else {
        localStorage.removeItem('dropboxToken');
        dropboxToken = null;
        showMessage('Token Dropbox dihapus.', 'info', 5000);
    }
    updateDropboxModalState();
});

saveToDropboxBtn.addEventListener('click', () => {
    showMessage('Menyimpan data...', 'info', 0);
    saveDataToDropbox();
});

loadFromDropboxBtn.addEventListener('click', loadDataFromDropbox);

document.addEventListener('DOMContentLoaded', async () => {
    let userToken = localStorage.getItem('dropboxToken');

    if (userToken) {
        dropboxToken = userToken;
        await loadDataFromDropbox();
    } else {
        const savedData = localStorage.getItem('kinerjaAppData');
        if (savedData) {
            loadDataFromLocalStorage();
        } else {
            dropboxToken = DEFAULT_DROPBOX_TOKEN;
            localStorage.setItem('dropboxToken', dropboxToken);
            await loadDataFromDropbox();
        }
    }
    
    if (Object.keys(cutiPegawai).length === 0 || Object.keys(kinerjaPegawai).length === 0) {
        loadDefaultData();
    }

    populateFilters();
    populateSummaryFilters();
    populateCutiTableFilters();
    updateAllUI();
    toggleLeaveFormDetails(false);
    switchMenu('main');
});
