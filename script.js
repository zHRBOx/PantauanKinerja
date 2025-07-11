// --- Inisialisasi Awal ---
let takenLeaves = [];
let managementData = [];
let masinisData = [];
let allEmployeeData = [];
let kinerjaData = {};

const validPasswords = ['44662', '42003', '44726', '48552', '54706', '65933'];
let isEditMode = false;

const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const dayNames = ["M", "S", "S", "R", "K", "J", "S"];

let calendarCurrentDate = new Date();
let tempSelectedDates = [];

// --- Dropbox Inisialisasi ---
const DEFAULT_DROPBOX_TOKEN = 'sl.u.AF3Q09E2PLjQDZPx5gMEDjhS6yGx67soBHsfWGYcUpjOJ8PvPq7TxXKnytdbZI3R_b3YqWEf495XtqbX9xt0xssudSTB1sf4uc68Jf0IMmgNQmsKkgJugRs0AfhdFN5GfIAJASfiQFSDhRsdSpK1E3IKp_niTczAHD3EwizTxuEdCD6Yzmz9aV-7yve0rd5Z6D_FK2UBRmZfXHN_9GZ5DyMQTuQ2-Ihh2T_xcD63y6CXNPFvZqLX1R-ExiDE6ib_xqUk2Enm8LzbdmFtWGnz9L1XmopM51aa65Vcm3AFgSkWkdKfPrbbfoN5r1e8rWpSj2-i4LBVtnJ0jFI1iBVr0OImusLyHCIwUq7dSUbDTpWsqQKutT411tUruRTHk4imDytQWLQBg9weAqtUOD39XpZ_2zvN8lCsxQZMDu7xTmvb7SbD5DD1I_JuYpvnqA8JGwlkhrASiv5Dgpk_8F7gJt7FPhEgl_-57KMzLPfe67Zv8vdzrSqkfqI1UMLgpGP4xrBTHuaCDKunGfnwjQOnD59skFbf0D6YJ5sjrGZTVJ-87BzGE5IKfZj5tc9xlU68H4Ta_peX0tJdcaaeFc6mc7jH_muu63V7UK3nDTGYF7Qetgy7qtzBBlbNdKcOfB-uTkX2E6vHxnAfjawpwV3v8nX6WWv3yJAtCc3LY83clnxwZSgaUktbmgVVu19UZnE56AmP4MW6nPSOo2a_oCr-7nznsHMsshD5m6WR5iWXg-y8dVSZxT1t1ZpN1ZKsXRUHkRNnVQfS8Z7KG-lExwik4q6hl4aH0I6Ofc8dDk4fRbA5ZR0E_GaO9uX-j9sXo2Mt-77qYgWq4Cia3nnGFpE-ZDDe14rcY2yrZWset74iPMfNToY2bJylU0TO_Eb9RiBrbtCF-BW7NnE4ThTs176sojUZxIlTD8dHs4iwkVX_x6GZyYyZQf9kVHmWVA78gew7BW3fmBSD9OgGGNPZmprZ8r47o5pHnxmrj-fYWD6j0a3DKATjrq6jtAs47J8RB2ukj8xvT-7Orp_eFjnZGsxhZc_cqnGROkNj24-znvp2F62sKg_JszMRQA-NZ2zHAEYDssF4GWdX744sSQQK_GSjXTbVzkvcA8t_MBnboo1Ji0NIQIYGmHXdxJjnuftx4dXSZ4JcJSS-hIwnEGd6K08Uh9DiUvgaSI5YZmCQbxggnrhAzZ2e0_DfVS8A4yZ21vagPPGYLrUkIYGcxtcEPGvBBRylYE_oX6A1xTuyxr7wjA5cN4NKjd4B8EcpyQfrM_LgAE14RWYuq54l2yU2vUgN4Se8Qt6mYhidl-KGPcK17f7fOg';
let dropboxToken = null;
const DROPBOX_DATA_PATH = '/kinerja_app_data.json';


// --- Elemen DOM ---
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
const managementYearFilter = document.getElementById('managementYearFilter');
const masinisYearFilter = document.getElementById('masinisYearFilter');
const editButton = document.getElementById('editButton');
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
const nippWrapper = document.getElementById('nipp-wrapper');
const nameWrapper = document.getElementById('name-wrapper');
const dateWrapper = document.getElementById('date-wrapper');
const buttonWrapper = document.getElementById('button-wrapper');

// Elemen DOM Dropbox
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


// Elemen dasbor
const summaryLeaveToday = document.getElementById('summary-leave-today');
const summaryCTMonth = document.getElementById('summary-ct-month');
const summaryCPMonth = document.getElementById('summary-cp-month');
const summaryCSKMonth = document.getElementById('summary-csk-month');

// Elemen rekap bulanan
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


// --- Fungsi-Fungsi ---
function formatIndonesianDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString + 'T00:00:00');
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

function showMessage(message, type, duration = 5000) {
    messageContainer.innerHTML = '';
    const div = document.createElement('div');
    div.textContent = message;
    let classes = 'p-4 mb-4 text-sm rounded-lg font-medium';
    if (type === 'error') {
        div.className = `${classes} bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300`;
    } else if (type === 'info') {
        div.className = `${classes} bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300`;
    } else {
        div.className = `${classes} bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300`;
    }
    messageContainer.appendChild(div);
    if(duration > 0) {
      setTimeout(() => { messageContainer.innerHTML = ''; }, duration);
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

    [yearFilter, managementYearFilter, masinisYearFilter, kinerjaYearFilter].forEach(select => {
        select.innerHTML = '';
        if (select.id === 'yearFilter' || select.id === 'kinerjaYearFilter') {
            select.add(new Option("-- Pilih Tahun --", ""));
        }
        sortedYears.forEach(year => select.add(new Option(year, year)));
        select.value = currentYear;
    });
    
    [monthFilter, kinerjaMonthFilter].forEach(select => {
        select.innerHTML = '';
        select.add(new Option("-- Pilih Bulan --", ""));
        monthNames.forEach((month, index) => select.add(new Option(month, index)));
        select.value = currentMonth;
    });
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

function updateSummaryCards() {
    const today = new Date();
    const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    summaryLeaveToday.textContent = takenLeaves.filter(l => l.date === todayString).length;

    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    const leavesThisMonth = takenLeaves.filter(l => {
        const leaveDate = new Date(l.date + 'T00:00:00');
        return leaveDate.getMonth() === currentMonth && leaveDate.getFullYear() === currentYear;
    });

    summaryCTMonth.textContent = leavesThisMonth.filter(l => l.type === 'CT').length;
    summaryCPMonth.textContent = leavesThisMonth.filter(l => l.type === 'CP').length;
    summaryCSKMonth.textContent = leavesThisMonth.filter(l => l.type === 'CSK').length;
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

    const masinisNipps = new Set(masinisData.map(m => m.nipp));
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
    actionHeader.classList.toggle('hidden', !isEditMode);
    const colspan = isEditMode ? 5 : 4;

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
                <td class="py-3 px-3 text-center ${isEditMode ? '' : 'hidden'}">
                    <button data-date="${leave.date}" data-nipp="${leave.nipp}" class="delete-btn text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </td>
            `;
        });
    }
}

function renderEmployeeCutiTable(tbody, data, yearFilterElement) {
    tbody.innerHTML = '';
    const selectedYearValue = yearFilterElement.value;

    data.forEach((emp, index) => {
        const row = tbody.insertRow();
        row.className = 'hover:bg-slate-50 dark:hover:bg-white/5';
        row.dataset.index = index;

        // Menggunakan 'index + 1' untuk penomoran yang selalu berurutan
        const sequentialNo = index + 1;

        if (isEditMode) {
            row.innerHTML = `
                <td class="py-2 px-2 text-center text-slate-500 dark:text-slate-400">${sequentialNo}</td>
                <td class="p-1"><input type="text" value="${emp.nama}" class="w-full bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded p-1.5" data-field="nama"></td>
                <td class="p-1"><input type="text" value="${emp.nipp}" class="w-full bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded p-1.5" data-field="nipp"></td>
                <td class="p-1"><input type="text" value="${emp.jabatan}" class="w-full bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded p-1.5" data-field="jabatan"></td>
                <td class="p-1"><input type="number" value="${emp.jumlahCuti}" class="w-full bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded p-1.5" data-field="jumlahCuti"></td>
                <td class="py-2 px-3 text-center font-semibold text-slate-500 dark:text-slate-400">-</td>
            `;
        } else {
            let totalCutiText = '-';
            if (selectedYearValue !== "") {
                const selectedYear = parseInt(selectedYearValue, 10);
                const takenThisYear = takenLeaves.filter(leave => 
                    new Date(leave.date + 'T00:00:00').getFullYear() === selectedYear && leave.nipp === emp.nipp && leave.type === 'CT'
                ).length;
                totalCutiText = takenThisYear;
            }
            row.innerHTML = `
                <td class="py-2 px-2 text-center text-slate-500 dark:text-slate-400">${sequentialNo}</td>
                <td class="py-2 px-3 text-left font-medium text-slate-800 dark:text-slate-100">${emp.nama}</td>
                <td class="py-2 px-3 text-center text-slate-600 dark:text-slate-300">${emp.nipp}</td>
                <td class="py-2 px-3 text-center text-slate-600 dark:text-slate-300">${emp.jabatan}</td>
                <td class="py-2 px-3 text-center text-slate-600 dark:text-slate-300">${emp.jumlahCuti}</td>
                <td class="py-2 px-3 text-center font-semibold text-slate-800 dark:text-slate-100">${totalCutiText}</td>
            `;
        }
    });
}
function updateAllEmployeeCutiTables() {
    renderEmployeeCutiTable(managementTableBody, managementData, managementYearFilter);
    renderEmployeeCutiTable(masinisTableBody, masinisData, masinisYearFilter);
}

function renderKinerjaTable(tableElement, data) {
    const thead = tableElement.querySelector('thead');
    const tbody = tableElement.querySelector('tbody');
    thead.innerHTML = '';
    tbody.innerHTML = '';

    const year = parseInt(kinerjaYearFilter.value, 10);
    const month = parseInt(kinerjaMonthFilter.value, 10);

    if (isNaN(year) || isNaN(month)) {
        tbody.innerHTML = `<tr><td colspan="35" class="text-center p-4 text-slate-500 dark:text-slate-400">Pilih tahun dan bulan untuk melihat data kinerja.</td></tr>`;
        return;
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const headerRow = thead.insertRow();
    headerRow.innerHTML = `
        <th class="py-2 px-2 text-center font-semibold text-slate-600 dark:text-slate-300 sticky left-0 bg-slate-100 dark:bg-slate-700">NO</th>
        <th class="py-2 px-3 text-center font-semibold text-slate-600 dark:text-slate-300 sticky left-[40px] bg-slate-100 dark:bg-slate-700 min-w-[150px]">NAMA</th>
        <th class="py-2 px-3 text-center font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 min-w-[100px]">NIPP</th>
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

    data.forEach((emp, index) => {
        const bodyRow = tbody.insertRow();
        bodyRow.className = 'hover:bg-slate-50 dark:hover:bg-white/5';
        
        // Menggunakan 'index + 1' untuk penomoran yang selalu berurutan
        const sequentialNo = index + 1;
        
        bodyRow.innerHTML = `
            <td class="py-2 px-2 text-center sticky left-0 bg-white dark:bg-slate-800/50 text-slate-500 dark:text-slate-400">${sequentialNo}</td>
            <td class="py-2 px-3 text-left sticky left-[40px] bg-white dark:bg-slate-800/50 font-medium text-slate-800 dark:text-slate-100">${emp.nama || ''}</td>
            <td class="py-2 px-3 text-center bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">${emp.nipp || ''}</td>
            <td class="py-2 px-3 text-center bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300">${emp.jabatan || ''}</td>
        `;
        for (let i = 1; i <= daysInMonth; i++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            const leaveRecord = takenLeaves.find(leave => leave.nipp === emp.nipp && leave.date === dateStr);
            const td = document.createElement('td');
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
    });
}

function updateAllKinerjaTables() {
    renderKinerjaTable(kinerjaManajemenTable, managementData);
    renderKinerjaTable(kinerjaMasinisTable, masinisData);
}

function saveEmployeeDataFromTable(tbody, dataArray) {
    const rows = tbody.querySelectorAll('tr');
    const updatedData = [];
    let maxNo = 0;

    allEmployeeData.forEach(emp => {
        if (emp.no && emp.no > maxNo) maxNo = emp.no;
    });

    rows.forEach(row => {
        const nameInput = row.querySelector('input[data-field="nama"]');
        if (!nameInput) return;

        const nameValue = nameInput.value.trim();
        if (nameValue) {
            const nippInput = row.querySelector('input[data-field="nipp"]');
            const jabatanInput = row.querySelector('input[data-field="jabatan"]');
            const jatahInput = row.querySelector('input[data-field="jumlahCuti"]');
            const index = parseInt(row.dataset.index, 10);
            let currentNo = dataArray[index]?.no;

            if (!currentNo) {
                maxNo++;
                currentNo = maxNo;
            }

            updatedData.push({
                no: currentNo,
                nama: nameValue.toUpperCase(),
                nipp: nippInput.value.trim(),
                jabatan: jabatanInput.value.trim().toUpperCase(),
                jumlahCuti: parseInt(jatahInput.value, 10) || 0
            });
        }
    });
    return updatedData.sort((a, b) => a.no - b.no);
}

function toggleEditMode(enable) {
    if (!enable) {
        managementData = saveEmployeeDataFromTable(managementTableBody, managementData);
        masinisData = saveEmployeeDataFromTable(masinisTableBody, masinisData);
        allEmployeeData = [...managementData, ...masinisData];
        saveData(); // Save to Dropbox/LocalStorage
    }
    isEditMode = enable;
    const editButtonLabel = editButton.querySelector('span');
    const editButtonIcon = editButton.querySelector('i');
    
    if (enable) {
        editButton.classList.remove('bg-slate-800', 'dark:bg-slate-200', 'hover:bg-slate-700', 'dark:hover:bg-slate-300');
        editButton.classList.add('bg-green-600', 'dark:bg-green-500', 'hover:bg-green-700', 'dark:hover:bg-green-600', 'text-white', 'dark:text-white');
        if (editButtonLabel) editButtonLabel.textContent = "Selesai Edit";
        if (editButtonIcon) editButtonIcon.setAttribute('data-lucide', 'check-circle');
    } else {
        editButton.classList.remove('bg-green-600', 'dark:bg-green-500', 'hover:bg-green-700', 'dark:hover:bg-green-600');
        editButton.classList.add('bg-slate-800', 'dark:bg-slate-500', 'hover:bg-slate-700', 'dark:hover:bg-slate-300', 'text-white', 'dark:text-slate-900');
        if (editButtonLabel) editButtonLabel.textContent = "Edit Data";
        if (editButtonIcon) editButtonIcon.setAttribute('data-lucide', 'pencil');
    }
    
    addManagementRowButton.classList.toggle('hidden', !enable);
    addMasinisRowButton.classList.toggle('hidden', !enable);

    const topFormElements = [leaveDateDisplay, nameInput, nippInput, submitLeaveButton, leaveType];
    topFormElements.forEach(el => {
        el.disabled = enable;
        el.classList.toggle('opacity-50', enable);
        el.classList.toggle('cursor-not-allowed', enable);
    });

    if (enable) {
        passwordModal.classList.replace('modal-visible', 'modal-hidden');
    } else {
        toggleLeaveFormDetails(leaveType.value !== "");
    }
    updateAllUI();
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
        const applicantIsManagement = managementData.some(emp => emp.nipp === applicantNipp);

        const ctOnDate = takenLeaves.filter(l => l.date === dateStr && l.type === 'CT');
        const managementCtCount = ctOnDate.filter(l => managementData.some(m => m.nipp === l.nipp)).length;
        const masinisCtCount = ctOnDate.filter(l => masinisData.some(m => m.nipp === l.nipp)).length;

        if (applicantIsManagement && managementCtCount >= 1) {
            dayEl.classList.add('taken');
            dayEl.disabled = true;
        } else if (!applicantIsManagement && masinisCtCount >= 2) {
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

// --- Funsi Penyimpanan Data (Lokal & Dropbox) ---

function saveData() {
    // Selalu simpan ke local storage sebagai backup
    saveDataToLocalStorage();
    // Jika ada token, simpan ke Dropbox
    if (dropboxToken) {
        saveDataToDropbox();
    }
}

function saveDataToLocalStorage() {
    const dataToSave = {
        takenLeaves,
        managementData,
        masinisData,
        kinerjaData
    };
    localStorage.setItem('kinerjaAppData', JSON.stringify(dataToSave));
}

async function saveDataToDropbox() {
    if (!dropboxToken) {
        showMessage('Token Dropbox tidak diatur. Silakan atur di menu Sinkronisasi.', 'error');
        return;
    }

    const dataToSave = {
        takenLeaves,
        managementData,
        masinisData,
        kinerjaData
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

        if (response.ok) {
            console.log('Data successfully saved to Dropbox.');
            // Optional: Beri notifikasi sukses yang tidak mengganggu
            // showMessage('Data berhasil disinkronkan ke Dropbox.', 'success');
        } else {
            const errorData = await response.json();
            console.error('Dropbox save error:', errorData);
            showMessage(`Gagal menyimpan ke Dropbox: ${errorData.error_summary}`, 'error');
        }
    } catch (error) {
        console.error('Network error during Dropbox save:', error);
        showMessage('Gagal menyimpan ke Dropbox. Periksa koneksi internet Anda.', 'error');
    }
}


async function loadDataFromDropbox() {
    if (!dropboxToken) {
        showMessage('Token Dropbox tidak diatur.', 'error');
        return;
    }
    
    showMessage('Memuat data dari Dropbox...', 'info', 0); // Pesan loading

    try {
        const response = await fetch('https://content.dropboxapi.com/2/files/download', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${dropboxToken}`,
                'Dropbox-API-Arg': JSON.stringify({
                    path: DROPBOX_DATA_PATH,
                }),
            },
        });

        if (response.ok) {
            const loadedData = await response.json();
            takenLeaves = loadedData.takenLeaves || [];
            managementData = loadedData.managementData || [];
            masinisData = loadedData.masinisData || [];
            kinerjaData = loadedData.kinerjaData || {};
            allEmployeeData = [...managementData, ...masinisData];
            
            saveDataToLocalStorage(); // Simpan data yang berhasil dimuat ke local storage
            updateAllUI();
            showMessage('Data berhasil dimuat dari Dropbox.', 'success');
        } else {
            const errorText = await response.text();
            try {
                const errorData = JSON.parse(errorText);
                if (errorData.error_summary && errorData.error_summary.startsWith('path/not_found')) {
                    showMessage('File data tidak ditemukan di Dropbox. Simpan data terlebih dahulu.', 'error');
                } else {
                    showMessage(`Gagal memuat dari Dropbox: ${errorData.error_summary}`, 'error');
                }
            } catch (e) {
                showMessage(`Gagal memuat dari Dropbox. Status: ${response.status}`, 'error');
            }
        }
    } catch (error) {
        console.error('Network error during Dropbox load:', error);
        showMessage('Gagal memuat dari Dropbox. Periksa koneksi internet Anda.', 'error');
    }
}


function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem('kinerjaAppData');
    if (savedData) {
        const loadedData = JSON.parse(savedData);
        takenLeaves = loadedData.takenLeaves || [];
        managementData = loadedData.managementData || [];
        masinisData = loadedData.masinisData || [];
        kinerjaData = loadedData.kinerjaData || {};
        allEmployeeData = [...managementData, ...masinisData];
    } else {
        loadDefaultData();
    }
}

function loadDefaultData() {
    // Default data
    takenLeaves = [
        { date: '2025-07-25', name: 'RIYAD FIRDAUS', nipp: '47335', type: 'CT' },
        { date: '2025-08-17', name: 'PUTUT RESTU WIBOWO', nipp: '50298', type: 'CT' },
        { date: '2025-07-15', name: 'UJANG SURYA', nipp: '50162', type: 'CP' },
        { date: '2024-12-24', name: 'APEP ANDRIANTO', nipp: '55037', type: 'CSK' },
    ];
    managementData = [
        { no: 1, nama: 'YADI SUPRIADI', nipp: '44662', jabatan: 'KUPT', jumlahCuti: 16 },
        { no: 2, nama: 'ROFI NOVIYANUS', nipp: '54706', jabatan: 'P.INSTRUKTUR', jumlahCuti: 14 },
        { no: 3, nama: 'ARIEF KURNIAWAN', nipp: '42003', jabatan: 'P.DINASAN', jumlahCuti: 16 },
        { no: 4, nama: 'SUHADI ASMARA', nipp: '44726', jabatan: 'P.DINASAN', jumlahCuti: 16 },
        { no: 5, nama: 'FAZHAR SEPTIA ILLHAM', nipp: '48552', jabatan: 'P.DINASAN', jumlahCuti: 15 },
        { no: 6, nama: 'MUHAMAD FITRA', nipp: '65933', jabatan: 'P.DINASAN', jumlahCuti: 12 },
    ];
    masinisData = [
        { no: 1, nama: 'RIYAD FIRDAUS', nipp: '47335', jabatan: 'MASINIS MUDA', jumlahCuti: 15 },
        { no: 2, nama: 'UJANG SURYA', nipp: '50162', jabatan: 'MASINIS MUDA', jumlahCuti: 14 },
        { no: 3, nama: 'PUTUT RESTU WIBOWO', nipp: '50298', jabatan: 'MASINIS MUDA', jumlahCuti: 14 },
        { no: 4, nama: 'UNGGUL HENDRA EKA PRATAMA', nipp: '54730', jabatan: 'MASinis MUDA', jumlahCuti: 14 },
        { no: 5, nama: 'APEP ANDRIANTO', nipp: '55037', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { no: 6, nama: 'HERI ISKANDAR', nipp: '55042', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { no: 7, nama: 'MURDANI', nipp: '55045', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { no: 8, nama: 'ALIF SUHARDIMAN', nipp: '60567', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { no: 9, nama: 'NOPIYANA', nipp: '60676', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { no: 10, nama: 'JUNAEDI', nipp: '60722', jabatan: 'MASINIS MUDA', jumlahCuti: 13 },
        { no: 11, nama: 'ANDRI NURJANA', nipp: '64928', jabatan: 'MASINIS MUDA', jumlahCuti: 12 },
        { no: 12, nama: 'ANDRIANA', nipp: '65975', jabatan: 'MASINIS MUDA', jumlahCuti: 12 },
        { no: 13, nama: 'ANTO KRISTANTO', nipp: '67833', jabatan: 'MASINIS MUDA', jumlahCuti: 12 },
        { no: 14, nama: 'CECEP ARI NUGRAHA', nipp: '68089', jabatan: 'MASINIS MUDA', jumlahCuti: 12 },
        { no: 15, nama: 'ARIS SETIAWAN', nipp: '69943', jabatan: 'MASINIS MUDA', jumlahCuti: 12 },
        { no: 16, nama: 'ANTONIUS TRI SETYANTO', nipp: '73829', jabatan: 'MASINIS PERTAMA', jumlahCuti: 12 },
        { no: 17, nama: 'MAHESA BIMA ADI PANGESTU', nipp: '73831', jabatan: 'MASINIS PERTAMA', jumlahCuti: 12 },
        { no: 18, nama: 'FAYZA HAFIZH ARDIANSYAH', nipp: '74162', jabatan: 'MASINIS PERTAMA', jumlahCuti: 12 },
    ];
    allEmployeeData = [...managementData, ...masinisData];
    kinerjaData = {};
}

function handleCutiTableInput(event) {
    if (isEditMode && event.target.tagName === 'INPUT') {
        const input = event.target;
        const field = input.dataset.field;
        const value = input.value;
        const row = input.closest('tr');
        if (!row) return;
        
        const index = parseInt(row.dataset.index, 10);
        if (isNaN(index)) return;

        let targetKinerjaTable, dataArray;

        if (managementTableBody.contains(row)) {
            targetKinerjaTable = kinerjaManajemenTable;
            dataArray = managementData;
        } else if (masinisTableBody.contains(row)) {
            targetKinerjaTable = kinerjaMasinisTable;
            dataArray = masinisData;
        } else {
            return;
        }

        if (dataArray[index]) {
            dataArray[index][field] = (field === 'nama' || field === 'jabatan') ? value.toUpperCase() : value;
        }
        
        const kinerjaTbody = targetKinerjaTable.querySelector('tbody');
        if (!kinerjaTbody) return;
        const kinerjaRows = kinerjaTbody.querySelectorAll('tr');
        const kinerjaRow = kinerjaRows[index];

        if (kinerjaRow) {
            let cellIndexToUpdate;
            switch (field) {
                case 'nama': cellIndexToUpdate = 1; break;
                case 'nipp': cellIndexToUpdate = 2; break;
                case 'jabatan': cellIndexToUpdate = 3; break;
                default: return;
            }
            
            const cellToUpdate = kinerjaRow.querySelectorAll('td')[cellIndexToUpdate];
            if (cellToUpdate) {
                cellToUpdate.textContent = value.toUpperCase();
            }
        }
    }
}

function updateDropboxModalState(showEdit = false) {
    dropboxToken = localStorage.getItem('dropboxToken');

    if (dropboxToken && !showEdit) {
        dropboxStatusSynced.classList.remove('hidden');
        dropboxTokenEdit.classList.add('hidden');
        saveToDropboxBtn.disabled = false;
        loadFromDropboxBtn.disabled = false;
        saveToDropboxBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        loadFromDropboxBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        dropboxStatusSynced.classList.add('hidden');
        dropboxTokenEdit.classList.remove('hidden');
        dropboxTokenInput.value = dropboxToken || '';
        saveToDropboxBtn.disabled = !dropboxToken;
        loadFromDropboxBtn.disabled = !dropboxToken;

        if (dropboxToken) {
            saveToDropboxBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            loadFromDropboxBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            saveToDropboxBtn.classList.add('opacity-50', 'cursor-not-allowed');
            loadFromDropboxBtn.classList.add('opacity-50', 'cursor-not-allowed');
        }
    }
}


// --- Event Listener ---
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
    if (isEditMode || leaveType.value === "" || nippInput.value.trim() === "") {
        if(nippInput.value.trim() === "") {
            showMessage('Silakan isi NIPP terlebih dahulu.', 'error');
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
    if (tempSelectedDates.length > 0) {
        selectedDatesText.textContent = `${tempSelectedDates.length} hari dipilih`;
        selectedDatesText.classList.remove('text-slate-500');
    } else {
        selectedDatesText.textContent = 'Pilih satu atau lebih tanggal';
        selectedDatesText.classList.add('text-slate-500');
    }
    calendarModal.classList.replace('modal-visible', 'modal-hidden');
});

cancelCalendarBtn.addEventListener('click', () => {
    calendarModal.classList.replace('modal-visible', 'modal-hidden');
});

editButton.addEventListener('click', () => {
    if (isEditMode) {
        toggleEditMode(false);
    } else {
        passwordModal.classList.replace('modal-hidden', 'modal-visible');
        passwordInput.focus();
        passwordInput.value = '';
        passwordError.classList.add('hidden');
    }
});

addManagementRowButton.addEventListener('click', () => {
    managementData.push({ no: '', nama: '', nipp: '', jabatan: '', jumlahCuti: '' });
    updateAllUI();
});
addMasinisRowButton.addEventListener('click', () => {
    masinisData.push({ no: '', nama: '', nipp: '', jabatan: '', jumlahCuti: '' });
    updateAllUI();
});

cancelButton.addEventListener('click', () => passwordModal.classList.replace('modal-visible', 'modal-hidden'));

submitPassword.addEventListener('click', () => {
    if (validPasswords.includes(passwordInput.value)) {
        toggleEditMode(true);
    } else {
        const passwordError = document.getElementById('passwordError');
        passwordError.textContent = 'Kata sandi salah. Coba lagi.';
        passwordError.classList.remove('hidden');
    }
});

passwordInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') submitPassword.click(); });

tableBody.addEventListener('click', (e) => {
    const deleteButton = e.target.closest('.delete-btn');
    if (deleteButton && isEditMode) {
        const dateToDelete = deleteButton.dataset.date;
        const nippToDelete = deleteButton.dataset.nipp;
        showMessage(`Data cuti tanggal ${formatIndonesianDate(dateToDelete)} berhasil dihapus.`, 'success');
        takenLeaves = takenLeaves.filter(leave => !(leave.date === dateToDelete && leave.nipp === nippToDelete));
        saveData();
        updateAllUI();
    }
});

nippInput.addEventListener('input', (e) => {
    const nippValue = e.target.value.trim();
    const employee = allEmployeeData.find(emp => emp.nipp === nippValue);

    if (employee) {
        nameInput.value = employee.nama;
    } else {
        nameInput.value = '';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const currentLeaveType = leaveType.value;
    const name = nameInput.value.trim();
    const nipp = nippInput.value.trim();
    const selectedDatesValue = leaveDateInput.value;

    if (!selectedDatesValue || !name || !nipp || !currentLeaveType) {
        showMessage('Semua kolom wajib diisi.', 'error');
        return;
    }

    const selectedDates = selectedDatesValue.split(',');
    
    const employee = allEmployeeData.find(emp => emp.nipp === nipp);
    if (!employee) {
        showMessage(`NIPP ${nipp} tidak ditemukan dalam data pegawai.`, 'error');
        return;
    }
    const isManagement = managementData.some(m => m.nipp === nipp);

    if (currentLeaveType === 'CT') {
        const fullDates = selectedDates.filter(date => {
            const ctOnDate = takenLeaves.filter(l => l.date === date && l.type === 'CT');
            const managementOnDate = ctOnDate.filter(l => managementData.some(m => m.nipp === l.nipp)).length;
            const masinisOnDate = ctOnDate.filter(l => masinisData.some(m => m.nipp === l.nipp)).length;
            
            if (isManagement && managementOnDate >= 1) return true;
            if (!isManagement && masinisOnDate >= 2) return true;
            return false;
        });

        if (fullDates.length > 0) {
            showMessage(`Tanggal berikut sudah penuh untuk Cuti Tahunan: ${fullDates.map(formatIndonesianDate).join(', ')}`, 'error');
            return;
        }
    }

    if (currentLeaveType === 'CT') {
        const jatahCuti = employee.jumlahCuti;
        const applicationYear = new Date(selectedDates[0] + 'T00:00:00').getFullYear();
        const leavesTakenThisYear = takenLeaves.filter(leave => {
            const leaveYear = new Date(leave.date + 'T00:00:00').getFullYear();
            return leave.nipp === nipp && leaveYear === applicationYear && leave.type === 'CT';
        }).length;

        if ((leavesTakenThisYear + selectedDates.length) > jatahCuti) {
            showMessage(`Pengajuan ${selectedDates.length} hari akan melebihi jatah cuti tahun ${applicationYear}. Sisa cuti: ${jatahCuti - leavesTakenThisYear}`, 'error');
            return;
        }
    }

    selectedDates.forEach(date => {
        takenLeaves.push({ date: date, name: name.toUpperCase(), nipp: nipp, type: currentLeaveType });
    });
    
    showMessage(`Pengajuan ${currentLeaveType} untuk ${selectedDates.length} hari berhasil ditambahkan.`, 'success');
    
    leaveDateInput.value = '';
    selectedDatesText.textContent = 'Pilih satu atau lebih tanggal';
    selectedDatesText.classList.add('text-slate-500');
    toggleLeaveFormDetails(false);
    leaveType.value = "";
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
            cell.classList.remove('bg-green-200', 'dark:bg-green-900/70', 'bg-red-200', 'dark:bg-red-900/70');
            if (value === 'H') cell.classList.add('bg-green-200', 'dark:bg-green-900/70');
            else if (value === 'L' || value === 'LP') cell.classList.add('bg-red-200', 'dark:bg-red-900/70');
            saveData();
            updateMonthlySummary();
        }
    });
});

[monthFilter, yearFilter, managementYearFilter, masinisYearFilter, kinerjaYearFilter, kinerjaMonthFilter].forEach(filter => {
    filter.addEventListener('change', updateAllUI);
});

summaryMonthFilter.addEventListener('change', updateMonthlySummary);
summaryYearFilter.addEventListener('change', updateMonthlySummary);

managementTableBody.addEventListener('input', handleCutiTableInput);
masinisTableBody.addEventListener('input', handleCutiTableInput);

// --- Event Listener Dropbox ---
dropboxSyncButton.addEventListener('click', () => {
    updateDropboxModalState();
    dropboxModal.classList.replace('modal-hidden', 'modal-visible');
});

closeDropboxModalBtn.addEventListener('click', () => {
    dropboxModal.classList.replace('modal-visible', 'modal-hidden');
});

changeTokenBtn.addEventListener('click', () => {
    updateDropboxModalState(true); // Tampilkan mode edit
    dropboxTokenInput.focus();
});

saveDropboxTokenBtn.addEventListener('click', () => {
    const token = dropboxTokenInput.value.trim();
    if (token) {
        localStorage.setItem('dropboxToken', token);
        showMessage('Token Dropbox berhasil disimpan.', 'success');
    } else {
        localStorage.removeItem('dropboxToken');
        showMessage('Token Dropbox dihapus.', 'info');
    }
    updateDropboxModalState();
    // Coba muat data setelah token disimpan atau dihapus
    if(token) {
        loadDataFromDropbox();
    }
});

saveToDropboxBtn.addEventListener('click', () => {
    showMessage('Menyimpan data ke Dropbox...', 'info', 0);
    saveDataToDropbox().then(() => {
       showMessage('Data berhasil disimpan ke Dropbox.', 'success');
    });
});

loadFromDropboxBtn.addEventListener('click', loadDataFromDropbox);


// --- Inisialisasi Aplikasi ---
document.addEventListener('DOMContentLoaded', async () => {
    let userToken = localStorage.getItem('dropboxToken');

    if (userToken) {
        // Jika pengguna sudah pernah menyimpan token, gunakan token itu
        dropboxToken = userToken;
        await loadDataFromDropbox();
    } else {
        // Jika tidak ada token tersimpan, gunakan token default dan coba muat data
        dropboxToken = DEFAULT_DROPBOX_TOKEN;
        localStorage.setItem('dropboxToken', dropboxToken); // Simpan token default ke localStorage
        
        const savedData = localStorage.getItem('kinerjaAppData');
        if (savedData) {
            // Jika ada data lokal, muat itu dulu
            loadDataFromLocalStorage();
        } else {
            // Jika tidak ada data lokal sama sekali, coba muat dari dropbox dengan token default
            await loadDataFromDropbox();
        }
    }
    
    // Jika setelah semua usaha, data masih kosong (misal: dropbox kosong & local storage kosong), muat data default
    if (takenLeaves.length === 0 && managementData.length === 0) {
        loadDefaultData();
    }

    populateFilters();
    populateSummaryFilters();
    updateAllUI();
    toggleLeaveFormDetails(false);
});
