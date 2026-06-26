/**
 * Nexus Admin Dashboard - JavaScript Logic
 * Contains dynamic routes, mock database state, ApexCharts,
 * and comprehensive features for a premium dashboard UI/UX.
 */

// ==================== MOCK APPLICATION STATE (DATABASE) ====================
let appState = {
    theme: 'dark', // 'dark' | 'light'
    adminUser: {
        name: 'Dhanush',
        email: 'dhanush@nexus.com',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256',
        role: 'Super Admin'
    },
    users: [
        { id: 1, name: 'Aarav Mehta', email: 'aarav@nexus.com', role: 'Admin', status: 'Active', joined: 'Jan 12, 2026', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 2, name: 'Ananya Sen', email: 'ananya@nexus.com', role: 'Editor', status: 'Active', joined: 'Feb 18, 2026', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 3, name: 'Vikram Singh', email: 'vikram@nexus.com', role: 'User', status: 'Active', joined: 'Mar 05, 2026', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 4, name: 'Kabir Dev', email: 'kabir@nexus.com', role: 'User', status: 'Inactive', joined: 'Apr 22, 2026', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 5, name: 'Dia Reddy', email: 'dia@nexus.com', role: 'Editor', status: 'Active', joined: 'May 09, 2026', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 6, name: 'Rohan Sharma', email: 'rohan@nexus.com', role: 'User', status: 'Active', joined: 'May 20, 2026', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 7, name: 'Meera Nair', email: 'meera@nexus.com', role: 'User', status: 'Inactive', joined: 'Jun 02, 2026', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 8, name: 'Aditya Rao', email: 'aditya@nexus.com', role: 'Admin', status: 'Active', joined: 'Jun 10, 2026', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 9, name: 'Sanya Gupta', email: 'sanya@nexus.com', role: 'Editor', status: 'Active', joined: 'Jun 15, 2026', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=100&h=100' },
        { id: 10, name: 'Ishaan Patel', email: 'ishaan@nexus.com', role: 'User', status: 'Active', joined: 'Jun 20, 2026', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100' }
    ],
    products: [
        { id: 1, name: 'Wireless Pro Headset', category: 'electronics', price: 8999, stock: 24, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400&h=300' },
        { id: 2, name: 'Mechanical RGB Keyboard', category: 'electronics', price: 4499, stock: 4, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=400&h=300' },
        { id: 3, name: 'Classic Leather Jacket', category: 'clothing', price: 5999, stock: 15, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400&h=300' },
        { id: 4, name: 'Minimalist Office Desk', category: 'furniture', price: 12499, stock: 0, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400&h=300' },
        { id: 5, name: 'Ergonomic Mesh Chair', category: 'furniture', price: 18999, stock: 8, image: 'https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&q=80&w=400&h=300' },
        { id: 6, name: 'Cotton Summer Hoodie', category: 'clothing', price: 2199, stock: 32, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400&h=300' }
    ],
    inventory: [
        { id: 1, name: 'Nexus Smart Watch Pro', sku: 'NX-SMW-01', qty: 45, supplier: 'Nexus Corp Ltd.' },
        { id: 2, name: 'Wireless Charger Pad', sku: 'NX-WCP-04', qty: 8, supplier: 'Electro-Supply Inc.' },
        { id: 3, name: 'Noise-Cancelling Earbuds', sku: 'NX-NCE-10', qty: 72, supplier: 'AudioTech Labs' },
        { id: 4, name: 'LED Monitor 27-inch', sku: 'NX-LED-27', qty: 5, supplier: 'Vision Solutions' },
        { id: 5, name: 'High-Speed USB-C Cable', sku: 'NX-USBC-02', qty: 150, supplier: 'Electro-Supply Inc.' }
    ],
    transactions: [
        { id: 'TXN-90812', name: 'Aarav Mehta', date: 'Jun 26, 2026', method: 'Credit Card', amount: 14999, status: 'Completed' },
        { id: 'TXN-90811', name: 'Dia Reddy', date: 'Jun 25, 2026', method: 'UPI', amount: 2199, status: 'Completed' },
        { id: 'TXN-90810', name: 'Kabir Dev', date: 'Jun 25, 2026', method: 'Net Banking', amount: 18999, status: 'Pending' },
        { id: 'TXN-90809', name: 'Rohan Sharma', date: 'Jun 24, 2026', method: 'Debit Card', amount: 5999, status: 'Failed' },
        { id: 'TXN-90808', name: 'Sanya Gupta', date: 'Jun 24, 2026', method: 'UPI', amount: 8999, status: 'Completed' },
        { id: 'TXN-90807', name: 'Ankit Sharma', date: 'Jun 23, 2026', method: 'Credit Card', amount: 4499, status: 'Completed' }
    ],
    chats: [
        {
            user: { name: 'Vikram Singh', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100', active: true },
            messages: [
                { sender: 'them', text: 'Hey Dhanush, did you verify the database updates?' },
                { sender: 'me', text: 'Yes, Vikram. The Q2 database tables have been backed up and indexed.' },
                { sender: 'them', text: 'Excellent! Let\'s sync up on the sales report files tomorrow morning.' }
            ]
        },
        {
            user: { name: 'Ananya Sen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100', active: false },
            messages: [
                { sender: 'them', text: 'Hi Dhanush! Is the design system updated with the new color themes?' },
                { sender: 'me', text: 'Working on it. Toggling the dark/light variables is fully completed.' }
            ]
        },
        {
            user: { name: 'Dia Reddy', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100', active: false },
            messages: [
                { sender: 'them', text: 'Did you approve the payment refund for Transaction #TXN-90809?' },
                { sender: 'me', text: 'Not yet. Checking the failure code first.' }
            ]
        }
    ],
    calendar: {
        year: 2026,
        month: 5, // June (0-indexed)
        events: [
            { date: '2026-06-10', title: 'Q2 Strategy Meet', color: 'primary' },
            { date: '2026-06-15', title: 'Product Launch', color: 'success' },
            { date: '2026-06-22', title: 'Server Maintenance', color: 'danger' },
            { date: '2026-06-26', title: 'Final Project Submission', color: 'warning' }
        ]
    }
};

// Global handles for instantiated charts
let charts = {};

// ==================== INITIALIZATION & LOADERS ====================
document.addEventListener('DOMContentLoaded', () => {
    // Hide Skeleton loader after simulation
    setTimeout(() => {
        const loader = document.getElementById('skeleton-loader');
        if (loader) {
            loader.style.opacity = 0;
            setTimeout(() => loader.remove(), 500);
        }
    }, 1200);

    // Run core modules
    initTheme();
    initRouting();
    initNavbarUtilities();
    initDashboardCharts();
    initUsersModule();
    initEcommerceModule();
    initInventoryModule();
    initTransactionsModule();
    initMessagesModule();
    initCalendarModule();
    initSettingsModule();
    initBackToTop();
});

// ==================== THEME MANAGEMENT ====================
function initTheme() {
    const themeSwitch = document.getElementById('settings-theme-switch');
    const themeBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-toggle-icon');

    // Sync switch state
    if (themeSwitch) themeSwitch.checked = (appState.theme === 'dark');

    // Toggle logic function
    window.toggleGlobalTheme = (forcedTheme) => {
        let nextTheme = forcedTheme || (appState.theme === 'dark' ? 'light' : 'dark');
        appState.theme = nextTheme;
        document.body.setAttribute('data-theme', nextTheme);
        
        // Update Icons & States
        if (themeIcon) {
            themeIcon.className = nextTheme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
        }
        if (themeSwitch) {
            themeSwitch.checked = (nextTheme === 'dark');
        }

        // ApexCharts Native Dark/Light Sync
        syncChartsTheme(nextTheme);
    };

    if (themeSwitch) {
        themeSwitch.addEventListener('change', () => toggleGlobalTheme());
    }
    if (themeBtn) {
        themeBtn.addEventListener('click', () => toggleGlobalTheme());
    }
}

// Update ApexCharts dynamically for premium experience
function syncChartsTheme(themeMode) {
    Object.keys(charts).forEach(key => {
        if (charts[key] && typeof charts[key].updateOptions === 'function') {
            charts[key].updateOptions({
                theme: {
                    mode: themeMode
                },
                grid: {
                    borderColor: themeMode === 'dark' ? '#334155' : '#e2e8f0'
                }
            });
        }
    });
}

// ==================== ROUTING SYSTEM (SPA) ====================
function initRouting() {
    const menuLinks = document.querySelectorAll('.sidebar-menu-link');
    const sections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('navbar-page-title');

    window.navigateToSection = (sectionId) => {
        // Toggle links
        menuLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Toggle sections with fade effect
        sections.forEach(sec => {
            if (sec.id === sectionId) {
                sec.classList.remove('d-none');
            } else {
                sec.classList.add('d-none');
            }
        });

        // Update Title & Location Hash
        if (pageTitle) {
            pageTitle.textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
        }
        
        // Scroll content back to top on navigation change
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    // Bind link clicks
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            window.location.hash = section;
            navigateToSection(section);
            
            // Close mobile menu if open
            closeMobileSidebar();
        });
    });

    // Check Hash on page load
    if (window.location.hash) {
        const hashSection = window.location.hash.substring(1);
        const sectionExists = Array.from(sections).some(s => s.id === hashSection);
        if (sectionExists) {
            navigateToSection(hashSection);
        }
    }
}

// Mobile sidebar controls
function initNavbarUtilities() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');
    const overlay = document.getElementById('sidebar-overlay');

    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    window.closeMobileSidebar = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    };

    if (toggleBtn) toggleBtn.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', closeMobileSidebar);
}

// ==================== APEXCHARTS BUILDER ====================
function initDashboardCharts() {
    // 1. Revenue Chart (Dashboard overview)
    const revOptions = {
        series: [
            { name: 'Revenue', data: [31000, 40000, 28000, 51000, 42000, 109000, 100000] },
            { name: 'Sales Count', data: [1100, 3200, 4500, 3200, 3400, 5200, 4100] }
        ],
        chart: {
            height: 350,
            type: 'area',
            toolbar: { show: false },
            background: 'transparent',
            fontFamily: 'Inter, sans-serif'
        },
        colors: ['#3b82f6', '#10b981'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2 },
        grid: {
            borderColor: '#334155',
            xaxis: { lines: { show: false } }
        },
        xaxis: {
            categories: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            labels: { style: { colors: '#94a3b8' } }
        },
        yaxis: {
            labels: { style: { colors: '#94a3b8' } }
        },
        tooltip: { theme: 'dark' },
        theme: { mode: 'dark' },
        legend: { labels: { colors: '#94a3b8' } }
    };

    if (document.getElementById('revenue-chart')) {
        charts.revenue = new ApexCharts(document.getElementById('revenue-chart'), revOptions);
        charts.revenue.render();
    }

    // 2. Monthly Sales Bar Chart (Analytics)
    const salesOptions = {
        series: [{
            name: 'Total Sales',
            data: [440, 550, 410, 670, 220, 430, 210, 410, 560, 270, 430, 510]
        }],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: { show: false },
            background: 'transparent',
            fontFamily: 'Inter, sans-serif'
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
                columnWidth: '55%',
            }
        },
        colors: ['#3b82f6'],
        dataLabels: { enabled: false },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: { style: { colors: '#94a3b8' } }
        },
        yaxis: {
            labels: { style: { colors: '#94a3b8' } }
        },
        grid: { borderColor: '#334155' },
        tooltip: { theme: 'dark' },
        theme: { mode: 'dark' }
    };

    if (document.getElementById('monthly-sales-chart')) {
        charts.sales = new ApexCharts(document.getElementById('monthly-sales-chart'), salesOptions);
        charts.sales.render();
    }

    // 3. Visitor Device Usage Donut Chart (Analytics)
    const deviceOptions = {
        series: [60, 25, 15],
        chart: {
            type: 'donut',
            height: 350,
            background: 'transparent',
            fontFamily: 'Inter, sans-serif'
        },
        labels: ['Mobile Phones', 'Desktops', 'Tablets'],
        colors: ['#3b82f6', '#10b981', '#f59e0b'],
        legend: {
            position: 'bottom',
            labels: { colors: '#94a3b8' }
        },
        dataLabels: { enabled: true },
        tooltip: { theme: 'dark' },
        theme: { mode: 'dark' }
    };

    if (document.getElementById('device-usage-chart')) {
        charts.devices = new ApexCharts(document.getElementById('device-usage-chart'), deviceOptions);
        charts.devices.render();
    }

    // 4. Demographics Demographics Radar (Analytics)
    const demoOptions = {
        series: [{
            name: 'Visitors Rate',
            data: [80, 50, 30, 40, 100, 20]
        }],
        chart: {
            height: 250,
            type: 'radar',
            toolbar: { show: false },
            background: 'transparent',
            fontFamily: 'Inter, sans-serif'
        },
        colors: ['#3b82f6'],
        xaxis: {
            categories: ['India', 'USA', 'Germany', 'UK', 'Canada', 'Japan'],
            labels: {
                style: { colors: ['#94a3b8', '#94a3b8', '#94a3b8', '#94a3b8', '#94a3b8', '#94a3b8'] }
            }
        },
        tooltip: { theme: 'dark' },
        theme: { mode: 'dark' }
    };

    if (document.getElementById('demographics-chart')) {
        charts.demo = new ApexCharts(document.getElementById('demographics-chart'), demoOptions);
        charts.demo.render();
    }
}

// ==================== USERS MODULE ====================
let userPage = 1;
const itemsPerPage = 5;

function initUsersModule() {
    const tableBody = document.getElementById('user-table-body');
    const searchInput = document.getElementById('user-search-input');
    const addUserForm = document.getElementById('add-user-modal-form');

    // Rendering Table logic
    window.renderUsersTable = () => {
        if (!tableBody) return;
        tableBody.innerHTML = '';
        
        let filteredUsers = appState.users;
        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

        // Filter search query
        if (searchQuery !== '') {
            filteredUsers = appState.users.filter(u => 
                u.name.toLowerCase().includes(searchQuery) ||
                u.email.toLowerCase().includes(searchQuery) ||
                u.role.toLowerCase().includes(searchQuery)
            );
        }

        // Apply pagination offsets
        const startIndex = (userPage - 1) * itemsPerPage;
        const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

        if (paginatedUsers.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted-custom">No matching users found.</td></tr>`;
            updateUserPaginationUI(0, 0);
            return;
        }

        paginatedUsers.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <div class="d-flex align-items-center gap-2">
                        <img src="${user.avatar}" class="rounded-circle" style="width: 32px; height: 32px; object-fit: cover;" alt="${user.name}">
                        <span class="fw-bold">${user.name}</span>
                    </div>
                </td>
                <td>${user.email}</td>
                <td><span class="badge bg-secondary">${user.role}</span></td>
                <td><span class="badge-custom ${user.status.toLowerCase()}">${user.status}</span></td>
                <td>${user.joined}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-outline-info me-1 rounded-circle" onclick="toggleUserStatus(${user.id})" title="Toggle Status"><i class="bi bi-arrow-repeat"></i></button>
                    <button class="btn btn-sm btn-outline-danger rounded-circle" onclick="deleteUser(${user.id})" title="Delete"><i class="bi bi-trash"></i></button>
                </td>
            `;
            tableBody.appendChild(tr);
        });

        updateUserPaginationUI(filteredUsers.length, paginatedUsers.length);
    };

    // Add User submit handler
    if (addUserForm) {
        addUserForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('modal-username').value;
            const email = document.getElementById('modal-useremail').value;
            const role = document.getElementById('modal-userrole').value;
            const status = document.getElementById('modal-userstatus').value;
            
            const newUser = {
                id: Date.now(),
                name,
                email,
                role,
                status,
                joined: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 900000)}?auto=format&fit=crop&q=80&w=100&h=100`
            };

            appState.users.unshift(newUser);
            
            // Hide bootstrap modal
            const modalEl = document.getElementById('addUserModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
            
            // Reset and refresh
            addUserForm.reset();
            userPage = 1;
            renderUsersTable();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            userPage = 1;
            renderUsersTable();
        });
    }

    // Toggle Status click handler
    window.toggleUserStatus = (id) => {
        appState.users = appState.users.map(u => {
            if (u.id === id) {
                u.status = u.status === 'Active' ? 'Inactive' : 'Active';
            }
            return u;
        });
        renderUsersTable();
    };

    // Delete user handler
    window.deleteUser = (id) => {
        if (confirm('Are you sure you want to delete this user?')) {
            appState.users = appState.users.filter(u => u.id !== id);
            renderUsersTable();
        }
    };

    renderUsersTable();
}

// User list pagination builder
function updateUserPaginationUI(totalFiltered, currentCount) {
    const info = document.getElementById('user-pagination-info');
    const paginationLinks = document.getElementById('user-pagination-links');
    if (!info || !paginationLinks) return;

    const totalPages = Math.ceil(totalFiltered / itemsPerPage);
    const startRange = totalFiltered === 0 ? 0 : (userPage - 1) * itemsPerPage + 1;
    const endRange = Math.min(userPage * itemsPerPage, totalFiltered);
    
    info.textContent = `Showing ${startRange} to ${endRange} of ${totalFiltered} users`;
    paginationLinks.innerHTML = '';

    if (totalPages <= 1) return;

    // Previous Button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${userPage === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link bg-card border-color text-main" href="#" onclick="changeUserPage(${userPage - 1}); return false;">Prev</a>`;
    paginationLinks.appendChild(prevLi);

    // Number Buttons
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${userPage === i ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link ${userPage === i ? 'bg-primary text-white border-primary' : 'bg-card border-color text-main'}" href="#" onclick="changeUserPage(${i}); return false;">${i}</a>`;
        paginationLinks.appendChild(li);
    }

    // Next Button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${userPage === totalPages ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link bg-card border-color text-main" href="#" onclick="changeUserPage(${userPage + 1}); return false;">Next</a>`;
    paginationLinks.appendChild(nextLi);
}

window.changeUserPage = (pageNum) => {
    userPage = pageNum;
    renderUsersTable();
};

// ==================== E-COMMERCE PRODUCTS ====================
function initEcommerceModule() {
    const productsGrid = document.getElementById('ecommerce-products-container');
    const filters = document.querySelectorAll('#ecommerce-filter-container button');

    window.renderProducts = (categoryFilter = 'all') => {
        if (!productsGrid) return;
        productsGrid.innerHTML = '';

        const items = categoryFilter === 'all' 
            ? appState.products 
            : appState.products.filter(p => p.category === categoryFilter);

        items.forEach(product => {
            // Determine stock badge status
            let badgeClass = 'active';
            let statusText = 'In Stock';
            if (product.stock === 0) {
                badgeClass = 'inactive';
                statusText = 'Out of Stock';
            } else if (product.stock < 10) {
                badgeClass = 'pending';
                statusText = 'Low Stock';
            }

            const col = document.createElement('div');
            col.innerHTML = `
                <div class="custom-card h-100">
                    <div class="product-img-wrapper">
                        <img src="${product.image}" class="product-img" alt="${product.name}">
                        <span class="product-category-badge text-uppercase">${product.category}</span>
                    </div>
                    <div class="p-4 d-flex flex-column h-100">
                        <h6 class="fw-bold mb-2 text-main">${product.name}</h6>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <span class="fw-bold text-primary" style="font-size: 1.15rem;">₹${product.price.toLocaleString()}</span>
                            <span class="badge-custom ${badgeClass}">${statusText} (${product.stock} items)</span>
                        </div>
                    </div>
                </div>
            `;
            productsGrid.appendChild(col);
        });
    };

    // Event binding filters
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active-filter', 'btn-primary'));
            filters.forEach(b => b.classList.add('btn-outline-primary'));
            
            btn.classList.add('active-filter', 'btn-primary');
            btn.classList.remove('btn-outline-primary');

            const filter = btn.getAttribute('data-filter');
            renderProducts(filter);
        });
    });

    renderProducts();
}

// ==================== INVENTORY DATABASE MODULE ====================
function initInventoryModule() {
    const tableBody = document.getElementById('inventory-table-body');
    const addProductForm = document.getElementById('add-product-modal-form');
    const editProductForm = document.getElementById('edit-product-modal-form');

    window.renderInventoryTable = () => {
        if (!tableBody) return;
        tableBody.innerHTML = '';
        
        let lowStockCounter = 0;

        appState.inventory.forEach((item, index) => {
            // progress bar calculation
            let barColor = 'bg-primary';
            if (item.qty < 10) {
                barColor = 'bg-danger';
                lowStockCounter++;
            } else if (item.qty < 30) {
                barColor = 'bg-warning';
            }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><span class="fw-bold text-muted">${item.sku}</span></td>
                <td><span class="fw-bold text-main">${item.name}</span></td>
                <td>${item.supplier}</td>
                <td>${item.qty} units</td>
                <td style="width: 200px;">
                    <div class="d-flex align-items-center gap-2">
                        <div class="progress w-100" style="height: 6px; background-color: var(--border-color);">
                            <div class="progress-bar ${barColor}" role="progressbar" style="width: ${Math.min(item.qty, 100)}%;"></div>
                        </div>
                        <span class="small fw-semibold text-muted">${item.qty < 10 ? 'Low' : 'OK'}</span>
                    </div>
                </td>
                <td class="text-end">
                    <button class="btn btn-sm btn-outline-info rounded-circle me-1" onclick="openEditProductModal(${index})" title="Edit"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-outline-danger rounded-circle" onclick="deleteProduct(${index})" title="Delete"><i class="bi bi-trash"></i></button>
                </td>
            `;
            tableBody.appendChild(tr);
        });

        // Sync low stock counts alert banner
        const alertBanner = document.getElementById('inventory-low-stock-alert');
        if (alertBanner) {
            if (lowStockCounter > 0) {
                alertBanner.classList.remove('d-none');
                alertBanner.querySelector('span').textContent = `Low Stock Alert: ${lowStockCounter} items are running below threshold (10 units).`;
            } else {
                alertBanner.classList.add('d-none');
            }
        }
    };

    // Add inventory product trigger
    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('modal-prodname').value;
            const sku = document.getElementById('modal-prodsku').value;
            const qty = parseInt(document.getElementById('modal-prodqty').value);
            const supplier = document.getElementById('modal-prodsupplier').value;

            appState.inventory.push({ name, sku, qty, supplier });
            
            // Hide Modal
            const modalEl = document.getElementById('addProductModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
            
            addProductForm.reset();
            renderInventoryTable();
        });
    }

    // Open Edit modal loader
    window.openEditProductModal = (index) => {
        const item = appState.inventory[index];
        document.getElementById('edit-prod-index').value = index;
        document.getElementById('edit-modal-prodname').value = item.name;
        document.getElementById('edit-modal-prodsku').value = item.sku;
        document.getElementById('edit-modal-prodqty').value = item.qty;
        document.getElementById('edit-modal-prodsupplier').value = item.supplier;

        const editModal = new bootstrap.Modal(document.getElementById('editProductModal'));
        editModal.show();
    };

    // Edit submit product handler
    if (editProductForm) {
        editProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const index = parseInt(document.getElementById('edit-prod-index').value);
            const name = document.getElementById('edit-modal-prodname').value;
            const sku = document.getElementById('edit-modal-prodsku').value;
            const qty = parseInt(document.getElementById('edit-modal-prodqty').value);
            const supplier = document.getElementById('edit-modal-prodsupplier').value;

            appState.inventory[index] = { name, sku, qty, supplier };

            // Hide Modal
            const modalEl = document.getElementById('editProductModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();

            renderInventoryTable();
        });
    }

    // Delete item
    window.deleteProduct = (index) => {
        if (confirm('Delete this inventory product item?')) {
            appState.inventory.splice(index, 1);
            renderInventoryTable();
        }
    };

    renderInventoryTable();
}

// ==================== TRANSACTIONS & CSV EXPORTER ====================
function initTransactionsModule() {
    const tableBody = document.getElementById('transactions-table-body');
    const searchInput = document.getElementById('transaction-search-input');
    const statusFilter = document.getElementById('transaction-status-filter');
    const exportBtn = document.getElementById('export-csv-btn');

    window.renderTransactionsTable = () => {
        if (!tableBody) return;
        tableBody.innerHTML = '';

        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const selectedStatus = statusFilter ? statusFilter.value : 'all';

        const filtered = appState.transactions.filter(txn => {
            const matchesSearch = txn.name.toLowerCase().includes(searchQuery) || txn.id.toLowerCase().includes(searchQuery);
            const matchesStatus = selectedStatus === 'all' || txn.status.toLowerCase() === selectedStatus.toLowerCase();
            return matchesSearch && matchesStatus;
        });

        if (filtered.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted-custom">No transaction history logs found.</td></tr>`;
            return;
        }

        filtered.forEach(txn => {
            let statusBadge = 'active';
            if (txn.status === 'Pending') statusBadge = 'pending';
            if (txn.status === 'Failed') statusBadge = 'inactive';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><span class="fw-bold">${txn.id}</span></td>
                <td><span class="fw-bold text-main">${txn.name}</span></td>
                <td>${txn.date}</td>
                <td>${txn.method}</td>
                <td><span class="fw-bold text-primary">₹${txn.amount.toLocaleString()}</span></td>
                <td><span class="badge-custom ${statusBadge}">${txn.status}</span></td>
            `;
            tableBody.appendChild(tr);
        });
    };

    if (searchInput) searchInput.addEventListener('input', renderTransactionsTable);
    if (statusFilter) statusFilter.addEventListener('change', renderTransactionsTable);

    // CSV Data Generator and Downloader
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            let csvRows = ['Transaction ID,Customer Name,Payment Date,Payment Method,Amount,Status'];
            
            appState.transactions.forEach(t => {
                csvRows.push(`"${t.id}","${t.name}","${t.date}","${t.method}",${t.amount},"${t.status}"`);
            });

            const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', `Transactions_Log_${Date.now()}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    renderTransactionsTable();
}

// ==================== MESSAGES INBOX CHAT SYSTEM ====================
let activeChatIndex = 0;

function initMessagesModule() {
    const listContainer = document.getElementById('chat-users-list');
    const msgInput = document.getElementById('chat-message-input');
    const chatForm = document.getElementById('chat-message-form');
    const searchInput = document.getElementById('chat-search-input');

    // Build chat conversation lists on the sidebar
    window.renderChatUsers = () => {
        if (!listContainer) return;
        listContainer.innerHTML = '';

        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

        appState.chats.forEach((chat, index) => {
            if (searchQuery !== '' && !chat.user.name.toLowerCase().includes(searchQuery)) {
                return;
            }

            const latestMsg = chat.messages[chat.messages.length - 1];
            const activeClass = index === activeChatIndex ? 'active' : '';
            const unreadBadge = (index === 0 && !chat.user.active) ? '<span class="badge bg-danger rounded-pill ms-auto">1</span>' : '';

            const item = document.createElement('div');
            item.className = `chat-item ${activeClass} d-flex align-items-center gap-3`;
            item.onclick = () => selectChatUser(index);
            item.innerHTML = `
                <img src="${chat.user.avatar}" class="rounded-circle" style="width: 40px; height: 40px; object-fit: cover;" alt="avatar">
                <div class="w-100 text-truncate">
                    <div class="d-flex justify-content-between">
                        <span class="fw-bold text-main small">${chat.user.name}</span>
                        <span class="text-muted-custom" style="font-size: 0.65rem;">Recent</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="text-muted-custom small text-truncate" style="max-width: 150px;">${latestMsg ? latestMsg.text : ''}</span>
                        ${unreadBadge}
                    </div>
                </div>
            `;
            listContainer.appendChild(item);
        });
    };

    // Load actual message thread bubble window
    window.renderChatWindow = () => {
        const body = document.getElementById('chat-conversation-body');
        const headerName = document.getElementById('chat-header-name');
        const headerAvatar = document.getElementById('chat-header-avatar');
        
        if (!body) return;

        const chat = appState.chats[activeChatIndex];
        if (!chat) return;

        headerName.textContent = chat.user.name;
        headerAvatar.src = chat.user.avatar;
        body.innerHTML = '';

        chat.messages.forEach(msg => {
            const wrapper = document.createElement('div');
            const bubble = document.createElement('div');
            
            bubble.className = `chat-bubble ${msg.sender === 'me' ? 'sent' : 'received'}`;
            bubble.textContent = msg.text;

            wrapper.className = `d-flex w-100 ${msg.sender === 'me' ? 'justify-content-end' : 'justify-content-start'}`;
            wrapper.appendChild(bubble);
            body.appendChild(wrapper);
        });

        // Scroll to chat bottom
        setTimeout(() => body.scrollTop = body.scrollHeight, 50);
    };

    window.selectChatUser = (index) => {
        activeChatIndex = index;
        renderChatUsers();
        renderChatWindow();
    };

    // Chat text submission + simulated user reply!
    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = msgInput.value.trim();
            if (text === '') return;

            // Save text message to model
            appState.chats[activeChatIndex].messages.push({ sender: 'me', text: text });
            msgInput.value = '';
            
            renderChatWindow();
            renderChatUsers();

            // MOCK BOT AUTO REPLY
            setTimeout(() => {
                const replies = [
                    "Got it! Let me review the metrics and get back to you shortly.",
                    "Sounds good to me! Shall we schedule a brief video sync-up?",
                    "Thanks for the details! I will coordinate this with the engineering department.",
                    "I am currently reviewing this. Let me verify the server outputs."
                ];
                const botMessage = replies[Math.floor(Math.random() * replies.length)];
                appState.chats[activeChatIndex].messages.push({ sender: 'them', text: botMessage });
                
                renderChatWindow();
                renderChatUsers();
            }, 1200);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', renderChatUsers);
    }

    // Load initial Inbox UI
    renderChatUsers();
    renderChatWindow();
}

// ==================== CALENDAR GRID GENERATOR ====================
function initCalendarModule() {
    const monthLabel = document.getElementById('calendar-month-year-label');
    const prevBtn = document.getElementById('calendar-prev-month-btn');
    const nextBtn = document.getElementById('calendar-next-month-btn');
    const eventForm = document.getElementById('add-event-modal-form');

    const monthsNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    window.renderCalendar = () => {
        const daysGrid = document.getElementById('calendar-days-grid');
        if (!daysGrid) return;

        daysGrid.innerHTML = '';
        const y = appState.calendar.year;
        const m = appState.calendar.month;

        if (monthLabel) monthLabel.textContent = `${monthsNames[m]} ${y}`;

        // Header days mapping
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        days.forEach(d => {
            const el = document.createElement('div');
            el.className = 'calendar-header-day';
            el.textContent = d;
            daysGrid.appendChild(el);
        });

        // Calculate visual padding blocks
        const firstDayIndex = new Date(y, m, 1).getDay();
        const totalDays = new Date(y, m + 1, 0).getDate();
        const prevMonthTotalDays = new Date(y, m, 0).getDate();

        // Previous month overflow cells
        for (let i = firstDayIndex - 1; i >= 0; i--) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell inactive';
            cell.innerHTML = `<div class="calendar-date-num text-muted-custom">${prevMonthTotalDays - i}</div>`;
            daysGrid.appendChild(cell);
        }

        // Active current month cells grid
        const today = new Date();
        for (let day = 1; day <= totalDays; day++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell';
            
            // Format check
            const formattedDate = `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            
            // Highlight today
            const isToday = today.getFullYear() === y && today.getMonth() === m && today.getDate() === day;
            if (isToday) cell.classList.add('active-day');

            // Render Events list within cell
            const dayEvents = appState.calendar.events.filter(e => e.date === formattedDate);
            let eventsHtml = '';
            dayEvents.forEach(e => {
                eventsHtml += `<div class="calendar-event-pill bg-${e.color} text-white">${e.title}</div>`;
            });

            cell.innerHTML = `
                <div class="calendar-date-num">${day}</div>
                <div class="calendar-events-container">${eventsHtml}</div>
            `;

            // Click cell loads modal with selected date
            cell.addEventListener('click', () => {
                document.getElementById('modal-eventdate').value = formattedDate;
                const addModal = new bootstrap.Modal(document.getElementById('addEventModal'));
                addModal.show();
            });

            daysGrid.appendChild(cell);
        }

        // Next month overflow cells padding
        const totalRendered = firstDayIndex + totalDays;
        const remainingCells = 42 - totalRendered; // Standard 6-row layout
        for (let i = 1; i <= remainingCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell inactive';
            cell.innerHTML = `<div class="calendar-date-num text-muted-custom">${i}</div>`;
            daysGrid.appendChild(cell);
        }

        renderScheduleLog();
    };

    // Render Events sidebar listing
    function renderScheduleLog() {
        const scheduleList = document.getElementById('calendar-schedule-list');
        if (!scheduleList) return;

        scheduleList.innerHTML = '';
        
        // Sort chronologically
        const sortedEvents = [...appState.calendar.events].sort((a,b) => new Date(a.date) - new Date(b.date));

        if (sortedEvents.length === 0) {
            scheduleList.innerHTML = `<div class="text-muted-custom text-center py-3">No upcoming events on schedule.</div>`;
            return;
        }

        sortedEvents.forEach((ev, idx) => {
            const d = new Date(ev.date);
            const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            const card = document.createElement('div');
            card.className = `p-3 bg-secondary rounded-3 border-left-highlight border-color d-flex justify-content-between align-items-center`;
            card.style.borderLeft = `4px solid var(--${ev.color === 'primary' ? 'accent-blue' : ev.color})`;
            card.innerHTML = `
                <div>
                    <h6 class="fw-bold mb-1 text-main small">${ev.title}</h6>
                    <small class="text-muted-custom"><i class="bi bi-calendar-check"></i> ${dateStr}</small>
                </div>
                <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteCalendarEvent(${idx})" title="Remove"><i class="bi bi-x-circle"></i></button>
            `;
            scheduleList.appendChild(card);
        });
    }

    // Modal submit event additions
    if (eventForm) {
        eventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('modal-eventtitle').value;
            const date = document.getElementById('modal-eventdate').value;
            const color = document.getElementById('modal-eventcolor').value;

            appState.calendar.events.push({ title, date, color });

            // Hide Modal
            const modalEl = document.getElementById('addEventModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();

            eventForm.reset();
            renderCalendar();
        });
    }

    window.deleteCalendarEvent = (idx) => {
        if (confirm('Are you sure you want to remove this event scheduling?')) {
            appState.calendar.events.splice(idx, 1);
            renderCalendar();
        }
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            appState.calendar.month--;
            if (appState.calendar.month < 0) {
                appState.calendar.month = 11;
                appState.calendar.year--;
            }
            renderCalendar();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            appState.calendar.month++;
            if (appState.calendar.month > 11) {
                appState.calendar.month = 0;
                appState.calendar.year++;
            }
            renderCalendar();
        });
    }

    renderCalendar();
}

// ==================== REPORTS DOWNLOAD SIMULATION ====================
window.triggerReportDownload = (reportName, formatType) => {
    alert(`Initiating download for ${reportName.replace(/_/g, ' ')} in ${formatType} format...`);
    
    // Create text file representing data logs
    const reportData = `
========================================
NEXUS ADMIN SYSTEM AUTO-GENERATED REPORT
========================================
Report Type: ${reportName.toUpperCase()}
Export Format: ${formatType}
Generated On: ${new Date().toString()}
Generated By: Administrator Dhanush
========================================
STATUS: APPROVED & VERIFIED
DATABASE CONNECTION: ONLINE SECURE
========================================
* Simulation metrics logs processed.
* All data points checked and authenticated.
EOF
    `;

    const blob = new Blob([reportData], { type: 'text/plain;charset=utf-8;' });
    const extension = formatType === 'PDF' ? 'pdf' : 'xlsx';
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `${reportName}_Export.${extension}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// ==================== SETTINGS PROFILE CONTROLS ====================
function initSettingsModule() {
    const profileForm = document.getElementById('profile-settings-form');
    const fileSelector = document.getElementById('profile-avatar-select');
    const avatarPreview = document.getElementById('settings-avatar-preview');
    const passwordForm = document.getElementById('password-settings-form');

    // Handle avatar upload local preview
    if (fileSelector && avatarPreview) {
        fileSelector.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    avatarPreview.src = event.target.result;
                    appState.adminUser.avatar = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Save profile metadata
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = document.getElementById('profile-fullname-input').value;
            const email = document.getElementById('profile-email-input').value;

            appState.adminUser.name = fullName;
            appState.adminUser.email = email;

            // Sync user UI details globally
            updateGlobalAdminUIElements();
            alert('Profile configuration settings updated successfully!');
        });
    }

    // Reset Password checker
    if (passwordForm) {
        passwordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const current = document.getElementById('current-pwd-input').value;
            const newPwd = document.getElementById('new-pwd-input').value;
            const confirmPwd = document.getElementById('confirm-pwd-input').value;

            if (newPwd !== confirmPwd) {
                alert('Validation Failure: New passwords do not match!');
                return;
            }

            alert('Security Update: Admin password changed successfully!');
            passwordForm.reset();
        });
    }
}

// Sync admin information throughout layout elements
function updateGlobalAdminUIElements() {
    const uNameText = document.getElementById('sidebar-user-name');
    const uNavbarText = document.getElementById('navbar-user-name');
    const footerName = document.getElementById('footer-admin-name');
    const sidebarAvatar = document.getElementById('sidebar-avatar-img');
    const navbarAvatar = document.getElementById('navbar-avatar-img');

    if (uNameText) uNameText.textContent = appState.adminUser.name;
    if (uNavbarText) uNavbarText.textContent = appState.adminUser.name;
    if (footerName) footerName.textContent = appState.adminUser.name;
    
    if (sidebarAvatar) sidebarAvatar.src = appState.adminUser.avatar;
    if (navbarAvatar) navbarAvatar.src = appState.adminUser.avatar;
}

// ==================== BACK TO TOP UTILITY ====================
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
