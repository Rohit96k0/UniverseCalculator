const calculatorData = [
  {
    id: "date-time",
    category: "Date and Time",
    icon: "calendar",
    items: ["Age Calculator", "Date Calculator", "Time Calculator", "Hours Calculator", "Time Card Calculator", "Time Zone Calculator", "Time Duration Calculator", "Day Counter", "Day of the Week Calculator"]
  },
  {
    id: "housing-building",
    category: "Housing/Building",
    icon: "home",
    items: ["Concrete Calculator", "BTU Calculator", "Square Footage Calculator", "Stair Calculator", "Roofing Calculator", "Tile Calculator", "Mulch Calculator", "Gravel Calculator"]
  },
  {
    id: "measurements-units",
    category: "Various Measurements/Units",
    icon: "scale",
    items: ["Height Calculator", "Conversion Calculator", "GDP Calculator", "Density Calculator", "Mass Calculator", "Weight Calculator", "Speed Calculator", "Molarity Calculator", "Molecular Weight Calculator", "Roman Numeral Converter"]
  },
  {
    id: "electronics",
    category: "Electronics/Circuits",
    icon: "cpu",
    items: ["Voltage Drop Calculator", "Resistor Calculator", "Ohms Law Calculator", "Electricity Calculator"]
  },
  {
    id: "internet",
    category: "Internet",
    icon: "wifi",
    items: ["IP Subnet Calculator", "Password Generator", "Bandwidth Calculator", "Base64 Encode / Decode", "URL Encode / Decode"]
  },
  {
    id: "everyday-utility",
    category: "Everyday Utility",
    icon: "coffee",
    items: ["GPA Calculator", "Grade Calculator", "Bra Size Calculator", "Shoe Size Conversion", "Tip Calculator", "Golf Handicap Calculator", "Sleep Calculator"]
  },
  {
    id: "weather",
    category: "Weather",
    icon: "cloud",
    items: ["Wind Chill Calculator", "Heat Index Calculator", "Dew Point Calculator"]
  },
  {
    id: "transportation",
    category: "Transportation",
    icon: "car",
    items: ["Fuel Cost Calculator", "Gas Mileage Calculator", "Horsepower Calculator", "Engine Horsepower Calculator", "Mileage Calculator", "Tire Size Calculator"]
  },
  {
    id: "entertainment",
    category: "Entertainment/Anecdotes",
    icon: "gamepad-2",
    items: ["Dice Roller", "Love Calculator"]
  },
  {
    id: "math",
    category: "Math Calculators",
    icon: "calculator",
    items: ["Scientific Calculator", "Fraction Calculator", "Percentage Calculator", "Random Number Generator", "Percent Error Calculator", "Exponent Calculator", "Binary Calculator", "Hex Calculator", "Half-Life Calculator", "Quadratic Formula Calculator", "Log Calculator", "Ratio Calculator", "Root Calculator", "Least Common Multiple Calculator", "Greatest Common Factor Calculator", "Factor Calculator", "Rounding Calculator", "Matrix Calculator", "Scientific Notation Calculator", "Big Number Calculator"]
  },
  {
    id: "statistics",
    category: "Statistics",
    icon: "bar-chart",
    items: ["Standard Deviation Calculator", "Number Sequence Calculator", "Sample Size Calculator", "Probability Calculator", "Statistics Calculator", "Mean, Median, Mode, Range Calculator", "Permutation and Combination Calculator", "Z-score Calculator", "Confidence Interval Calculator"]
  },
  {
    id: "geometry",
    category: "Geometry",
    icon: "shapes",
    items: ["Triangle Calculator", "Volume Calculator", "Slope Calculator", "Area Calculator", "Distance Calculator", "Circle Calculator", "Surface Area Calculator", "Pythagorean Theorem Calculator", "Right Triangle Calculator"]
  },
  {
    id: "fitness",
    category: "Fitness",
    icon: "activity",
    items: ["BMI Calculator", "Calorie Calculator", "Body Fat Calculator", "BMR Calculator", "Ideal Weight Calculator", "Pace Calculator", "Army Body Fat Calculator", "Lean Body Mass Calculator", "Healthy Weight Calculator", "Calories Burned Calculator", "One Rep Max Calculator", "Target Heart Rate Calculator"]
  },
  {
    id: "pregnancy",
    category: "Pregnancy",
    icon: "baby",
    items: ["Pregnancy Calculator", "Pregnancy Weight Gain Calculator", "Pregnancy Conception Calculator", "Due Date Calculator", "Ovulation Calculator", "Conception Calculator", "Period Calculator"]
  },
  {
    id: "health-other",
    category: "Health & Nutrition",
    icon: "apple",
    items: ["Macro Calculator", "Carbohydrate Calculator", "Protein Calculator", "Fat Intake Calculator", "TDEE Calculator", "GFR Calculator", "Body Type Calculator", "Body Surface Area Calculator", "BAC Calculator"]
  },
  {
    id: "mortgage-realestate",
    category: "Mortgage and Real Estate",
    icon: "building",
    items: ["Mortgage Calculator", "Amortization Calculator", "Mortgage Payoff Calculator", "House Affordability Calculator", "Rent Calculator", "Debt-to-Income Ratio Calculator", "Real Estate Calculator", "Refinance Calculator", "Rental Property Calculator", "APR Calculator", "FHA Loan Calculator", "VA Mortgage Calculator", "Home Equity Loan Calculator", "HELOC Calculator", "Down Payment Calculator", "Rent vs. Buy Calculator"]
  },
  {
    id: "auto",
    category: "Auto",
    icon: "car-front",
    items: ["Auto Loan Calculator", "Cash Back or Low Interest Calculator", "Auto Lease Calculator"]
  },
  {
    id: "investment",
    category: "Investment",
    icon: "trending-up",
    items: ["Interest Calculator", "Investment Calculator", "Finance Calculator", "Compound Interest Calculator", "Interest Rate Calculator", "Savings Calculator", "Simple Interest Calculator", "CD Calculator", "Bond Calculator", "Mutual Fund Calculator", "Average Return Calculator", "IRR Calculator", "ROI Calculator", "Payback Period Calculator", "Present Value Calculator", "Future Value Calculator"]
  },
  {
    id: "retirement",
    category: "Retirement",
    icon: "wallet",
    items: ["Retirement Calculator", "401K Calculator", "Pension Calculator", "Social Security Calculator", "Annuity Calculator", "Annuity Payout Calculator", "Roth IRA Calculator", "IRA Calculator", "RMD Calculator"]
  },
  {
    id: "tax-salary",
    category: "Tax and Salary",
    icon: "landmark",
    items: ["Income Tax Calculator", "Salary Calculator", "Marriage Tax Calculator", "Estate Tax Calculator", "Take-Home-Paycheck Calculator"]
  },
  {
    id: "finance-other",
    category: "Other Financial",
    icon: "coins",
    items: ["Loan Calculator", "Payment Calculator", "Currency Calculator", "Inflation Calculator", "Sales Tax Calculator", "Credit Card Calculator", "Credit Cards Payoff Calculator", "Debt Payoff Calculator", "Debt Consolidation Calculator", "Repayment Calculator", "Student Loan Calculator", "College Cost Calculator", "VAT Calculator", "Depreciation Calculator", "Margin Calculator", "Discount Calculator", "Business Loan Calculator", "Personal Loan Calculator", "Boat Loan Calculator", "Lease Calculator", "Budget Calculator", "Commission Calculator"]
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const sidebarNav = document.getElementById('sidebar-nav');
    const calculatorsContainer = document.getElementById('calculators-container');
    const searchInput = document.getElementById('search-input');
    const searchInputTop = document.getElementById('search-input-top');

    // Generate Sidebar Nav
    const renderSidebar = () => {
        sidebarNav.innerHTML = '';
        calculatorData.forEach(cat => {
            const navItem = document.createElement('a');
            navItem.href = `#${cat.id}`;
            navItem.className = 'nav-item';
            navItem.innerHTML = `
                <i data-lucide="${cat.icon}"></i>
                <span>${toTitleCase(cat.category)}</span>
            `;
            // Add click event for smooth scrolling
            navItem.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(cat.id);
                if(target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Update active state
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                navItem.classList.add('active');
            });
            sidebarNav.appendChild(navItem);
        });
    };

    // Generate Main Content
    const renderCalculators = (searchQuery = '') => {
        calculatorsContainer.innerHTML = '';
        let hasResults = false;

        calculatorData.forEach(cat => {
            const filteredItems = cat.items.filter(item => 
                item.toLowerCase().includes(searchQuery.toLowerCase()) ||
                cat.category.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredItems.length > 0) {
                hasResults = true;
                
                const section = document.createElement('div');
                section.className = 'category-section';
                section.id = cat.id;
                
                const header = document.createElement('div');
                header.className = 'category-header';
                header.innerHTML = `
                    <i data-lucide="${cat.icon}"></i>
                    <h2>${toTitleCase(cat.category)}</h2>
                `;
                
                const grid = document.createElement('div');
                grid.className = 'cards-grid';
                
                filteredItems.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'calc-card';
                    card.innerHTML = `
                        <div class="calc-card-icon">
                            <i data-lucide="${getSpecificIcon(item, cat.icon)}"></i>
                        </div>
                        <div class="calc-info">
                            <h3 class="calc-card-name">${item}</h3>
                            <p>Calculate your ${item.toLowerCase().replace('calculator', '').trim()}</p>
                        </div>
                    `;
                    // Add click listener to open modal
                    card.addEventListener('click', () => openModal(item, cat.icon));
                    grid.appendChild(card);
                });
                
                section.appendChild(header);
                section.appendChild(grid);
                calculatorsContainer.appendChild(section);
            }
        });

        if (!hasResults) {
            calculatorsContainer.innerHTML = `
                <div class="empty-state">
                    <i data-lucide="search-x"></i>
                    <h3>No calculators found</h3>
                    <p>Try adjusting your search terms</p>
                </div>
            `;
        }

        // Re-initialize lucide icons for newly added elements
        lucide.createIcons();
    };

    // Helper: Title Case Category Names
    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(word => {
            if(word === '&') return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }

    // Helper: Provide slightly more varied icons based on keyword matching
    function getSpecificIcon(itemName, defaultIcon) {
        const lower = itemName.toLowerCase();
        if (lower.includes('time') || lower.includes('stopwatch') || lower.includes('timer')) return 'clock';
        if (lower.includes('loan') || lower.includes('emi') || lower.includes('interest')) return 'landmark';
        if (lower.includes('salary') || lower.includes('income')) return 'wallet';
        if (lower.includes('password')) return 'key';
        if (lower.includes('file') || lower.includes('storage')) return 'file-digit';
        if (lower.includes('love') || lower.includes('pregnancy')) return 'heart-pulse';
        if (lower.includes('temperature')) return 'thermometer';
        if (lower.includes('weight') || lower.includes('bmi')) return 'scale';
        if (lower.includes('speed')) return 'gauge';
        return defaultIcon;
    }

    // Initialize
    renderSidebar();
    renderCalculators();

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            if (searchInputTop) searchInputTop.value = e.target.value;
            renderCalculators(e.target.value);
        });
    }
    if (searchInputTop) {
        searchInputTop.addEventListener('input', (e) => {
            if (searchInput) searchInput.value = e.target.value;
            renderCalculators(e.target.value);
        });
    }

    // Handle scroll spy to highlight active sidebar nav item
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.category-section');
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollPos >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        if (current) {
            document.querySelectorAll('.nav-item').forEach(li => {
                li.classList.remove('active');
                if (li.getAttribute('href') === `#${current}`) {
                    li.classList.add('active');
                }
            });
        }
    });

    // Modal Handling Logic
    const modal = document.getElementById('calc-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalIcon = document.getElementById('modal-icon');
    const closeModalBtn = document.getElementById('close-modal');
    const calcBtn = document.getElementById('calc-btn');
    const modalResult = document.getElementById('modal-result');
    const resultValue = document.getElementById('result-value');

    window.adjustGeometryInputs = function(shape) {
        const wrap2 = document.getElementById('wrap-num2');
        const wrap3 = document.getElementById('wrap-num3');
        const lbl1 = document.getElementById('lbl-num1');
        const inp1 = document.getElementById('input-num1');
        const inp2 = document.getElementById('input-num2');
        const inp3 = document.getElementById('input-num3');

        if (!lbl1 || !inp1) return;

        if (shape === 'sphere') {
            lbl1.textContent = 'Radius';
            inp1.placeholder = 'e.g. 5';
            if (wrap2) wrap2.style.display = 'none';
            if (wrap3) wrap3.style.display = 'none';
            if (inp2) inp2.removeAttribute('required');
            if (inp3) inp3.removeAttribute('required');
        } else if (shape === 'cylinder' || shape === 'cone') {
            lbl1.textContent = 'Radius';
            inp1.placeholder = 'e.g. 5';
            if (wrap2) {
                wrap2.style.display = 'block';
                wrap2.querySelector('label').textContent = 'Height';
            }
            if (inp2) inp2.setAttribute('required', 'true');
            if (wrap3) wrap3.style.display = 'none';
            if (inp3) inp3.removeAttribute('required');
        } else if (shape === 'circle') {
            lbl1.textContent = 'Radius';
            inp1.placeholder = 'e.g. 5';
            if (wrap2) wrap2.style.display = 'none';
            if (wrap3) wrap3.style.display = 'none';
            if (inp2) inp2.removeAttribute('required');
            if (inp3) inp3.removeAttribute('required');
        } else {
            lbl1.textContent = 'Length / Size';
            inp1.placeholder = 'e.g. 10';
            if (wrap2) {
                wrap2.style.display = 'block';
                wrap2.querySelector('label').textContent = 'Width';
            }
            if (wrap3) {
                wrap3.style.display = 'block';
                wrap3.querySelector('label').textContent = 'Height';
            }
            if (inp2) inp2.setAttribute('required', 'true');
            if (inp3) inp3.setAttribute('required', 'true');
        }
    };

    window.adjustMatrixInputs = function(dimension) {
        const grid = document.getElementById('matrix-grid');
        if (!grid) return;

        if (dimension === '3') {
            grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
            grid.innerHTML = `
                <input type="number" id="m00" value="1" style="padding:6px; text-align:center;">
                <input type="number" id="m01" value="2" style="padding:6px; text-align:center;">
                <input type="number" id="m02" value="3" style="padding:6px; text-align:center;">
                <input type="number" id="m10" value="0" style="padding:6px; text-align:center;">
                <input type="number" id="m11" value="1" style="padding:6px; text-align:center;">
                <input type="number" id="m12" value="4" style="padding:6px; text-align:center;">
                <input type="number" id="m20" value="5" style="padding:6px; text-align:center;">
                <input type="number" id="m21" value="6" style="padding:6px; text-align:center;">
                <input type="number" id="m22" value="0" style="padding:6px; text-align:center;">
            `;
        } else {
            grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            grid.innerHTML = `
                <input type="number" id="m00" value="1" style="padding:6px; text-align:center;">
                <input type="number" id="m01" value="2" style="padding:6px; text-align:center;">
                <input type="number" id="m10" value="3" style="padding:6px; text-align:center;">
                <input type="number" id="m11" value="4" style="padding:6px; text-align:center;">
            `;
        }
    };

    function openModal(calcName, icon) {
        modalTitle.textContent = calcName;
        if(modalIcon) {
            modalIcon.setAttribute('data-lucide', getSpecificIcon(calcName, icon));
        }
        lucide.createIcons();
        
        modalBody.innerHTML = window.generateFormInputs(calcName);
        
        const shapeSelect = document.getElementById('input-select1');
        if (shapeSelect) {
            const type = window.getCalcType(calcName);
            if (type === 'volume-geometry') {
                window.adjustGeometryInputs(shapeSelect.value);
            } else if (type === 'matrix') {
                window.adjustMatrixInputs(shapeSelect.value);
            }
        }
        
        modalResult.classList.add('hidden');
        resultValue.textContent = '--';
        
        modal.classList.remove('hidden');
    }

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    calcBtn.addEventListener('click', () => {
        const calcName = modalTitle.textContent.toLowerCase();
        
        try {
            const getVal = (id) => {
                const el = document.getElementById(id);
                if (!el) return NaN;
                const v = parseFloat(el.value);
                return isNaN(v) ? NaN : v;
            };
            const getText = (id) => {
                const el = document.getElementById(id);
                return el ? el.value : '';
            };

            const result = window.calculateResult(calcName, getVal, getText);
            
            let resultHTML = `
                <div class="result-value" style="font-size:1.8rem; font-weight:800; color:var(--primary); text-shadow:0 0 20px var(--primary-glow); margin-bottom:12px;">
                    ${result.mainVal}
                </div>
            `;
            
            if (result.subVal) {
                resultHTML += `
                    <div style="font-size:0.9rem; color:var(--text-2); font-weight:500; margin-bottom:16px;">
                        ${result.subVal}
                    </div>
                `;
            }
            
            if (result.formula) {
                resultHTML += `
                    <div style="margin-top:16px; padding-top:16px; border-top:1px solid var(--border); text-align:left;">
                        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; color:var(--text-2); font-weight:600; margin-bottom:6px;">Formula & Theory</div>
                        <code style="font-family:monospace; background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:4px; font-size:0.85rem; color:var(--cyan); display:block; word-break:break-all;">
                            ${result.formula}
                        </code>
                    </div>
                `;
            }

            if (result.substitution) {
                resultHTML += `
                    <div style="margin-top:12px; text-align:left;">
                        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; color:var(--text-2); font-weight:600; margin-bottom:4px;">Substitution</div>
                        <code style="font-family:monospace; background:rgba(255,255,255,0.02); padding:4px 8px; border-radius:4px; font-size:0.85rem; color:var(--text-2); display:block; word-break:break-all;">
                            ${result.substitution}
                        </code>
                    </div>
                `;
            }

            if (result.stepsHTML) {
                resultHTML += `
                    <div style="margin-top:16px; padding-top:12px; border-top:1px dashed var(--border); text-align:left;">
                        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; color:var(--text-2); font-weight:600; margin-bottom:6px;">Step-by-step Solution</div>
                        <ol style="margin:0; padding-left:20px; font-size:0.85rem; color:var(--text); line-height:1.6;">
                            ${result.stepsHTML}
                        </ol>
                    </div>
                `;
            }

            if (result.insightsHTML) {
                resultHTML += `
                    <div style="margin-top:16px; padding:12px; background:rgba(139,92,246,0.08); border:1px solid rgba(139,92,246,0.2); border-radius:8px; text-align:left; font-size:0.85rem; color:var(--text); line-height:1.5;">
                        <div style="font-weight:700; color:var(--primary); margin-bottom:6px; font-size:0.8rem; text-transform:uppercase; letter-spacing:1px;">Deep Insights</div>
                        ${result.insightsHTML}
                    </div>
                `;
            }

            resultValue.innerHTML = resultHTML;
            modalResult.classList.remove('hidden');
        } catch(err) {
            resultValue.innerHTML = `<div style="font-size:1rem; color:#ef4444; font-weight:600; text-align:center; padding:10px;">⚠️ Calculation Error: ${err}</div>`;
            modalResult.classList.remove('hidden');
        }
    });

    // Hero Dashboard Calculator Logic
    const calcDisplay = document.getElementById('calc-display');
    const calcHistory = document.getElementById('calc-history');
    let evalExpr = '';
    let displayExpr = '';

    document.querySelectorAll('.calc-widget .key').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            const val = btn.getAttribute('data-val');
            const text = btn.textContent.trim();

            if (action === 'clear') {
                evalExpr = '';
                displayExpr = '';
                calcDisplay.textContent = '0';
                calcHistory.textContent = '';
            } 
            else if (action === 'del') {
                // If ending with function call, delete the whole function string
                if (evalExpr.endsWith('Math.sin(Math.PI/180*')) {
                    evalExpr = evalExpr.slice(0, -21);
                    displayExpr = displayExpr.slice(0, -4);
                } else if (evalExpr.endsWith('Math.cos(Math.PI/180*')) {
                    evalExpr = evalExpr.slice(0, -21);
                    displayExpr = displayExpr.slice(0, -4);
                } else if (evalExpr.endsWith('Math.tan(Math.PI/180*')) {
                    evalExpr = evalExpr.slice(0, -21);
                    displayExpr = displayExpr.slice(0, -4);
                } else if (evalExpr.endsWith('Math.sqrt(')) {
                    evalExpr = evalExpr.slice(0, -10);
                    displayExpr = displayExpr.slice(0, -2);
                } else if (evalExpr.endsWith('Math.PI')) {
                    evalExpr = evalExpr.slice(0, -7);
                    displayExpr = displayExpr.slice(0, -1);
                } else {
                    evalExpr = evalExpr.slice(0, -1);
                    displayExpr = displayExpr.slice(0, -1);
                }
                calcDisplay.textContent = displayExpr || '0';
                calcHistory.textContent = '';
            } 
            else if (action === 'num') {
                evalExpr += val;
                displayExpr += val;
                calcDisplay.textContent = displayExpr;
            } 
            else if (action === 'op') {
                evalExpr += val;
                displayExpr += ' ' + text + ' ';
                calcDisplay.textContent = displayExpr;
            } 
            else if (action === 'pct') {
                evalExpr += '/100';
                displayExpr += '%';
                calcDisplay.textContent = displayExpr;
            }
            else if (action === 'fn') {
                if (val === '(') {
                    // Smart parenthesis toggler
                    let openCount = (evalExpr.match(/\(/g) || []).length;
                    let closeCount = (evalExpr.match(/\)/g) || []).length;
                    if (openCount > closeCount && !isNaN(evalExpr.slice(-1)) && evalExpr.slice(-1) !== '') {
                        evalExpr += ')';
                        displayExpr += ')';
                    } else {
                        evalExpr += '(';
                        displayExpr += '(';
                    }
                } else {
                    evalExpr += val;
                    displayExpr += text + '(';
                }
                calcDisplay.textContent = displayExpr;
            }
            else if (action === 'equals') {
                if (!evalExpr) return;
                try {
                    // Auto-close open parentheses
                    let openCount = (evalExpr.match(/\(/g) || []).length;
                    let closeCount = (evalExpr.match(/\)/g) || []).length;
                    while (openCount > closeCount) {
                        evalExpr += ')';
                        displayExpr += ')';
                        closeCount++;
                    }

                    // Replace visual symbols if any left
                    let sanitized = evalExpr.replace(/×/g, '*').replace(/÷/g, '/');
                    const result = new Function('return ' + sanitized)();
                    
                    if (result === undefined || isNaN(result)) {
                        throw new Error('Invalid expression');
                    }
                    
                    const formattedResult = Number.isInteger(result) ? result : parseFloat(result.toFixed(6));
                    calcHistory.textContent = displayExpr + ' =';
                    calcDisplay.textContent = formattedResult;
                    
                    // Allow chaining off result
                    evalExpr = formattedResult.toString();
                    displayExpr = formattedResult.toString();
                } catch (e) {
                    calcDisplay.textContent = 'Error';
                    calcHistory.textContent = displayExpr;
                    evalExpr = '';
                    displayExpr = '';
                }
            }
        });
    });
});

/* ===== DARK / LIGHT THEME TOGGLE ===== */
(function() {
    const body = document.body;
    const STORAGE_KEY = 'universe-calc-theme';

    // Apply saved theme on load
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light') {
        body.classList.add('light-mode');
    }

    function updateButtons(isLight) {
        const icon  = isLight ? '☀️' : '🌙';
        const label = isLight ? 'Light' : 'Dark';
        document.querySelectorAll('.theme-icon').forEach(el => el.textContent = icon);
        document.querySelectorAll('.theme-label').forEach(el => el.textContent = label);
    }

    // Set initial state
    updateButtons(body.classList.contains('light-mode'));

    function toggleTheme() {
        const isLight = body.classList.toggle('light-mode');
        localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');
        updateButtons(isLight);
        // Animate transition with brief flash
        body.style.transition = 'background 0.8s ease, color 0.4s ease';
    }

    // Desktop toggle
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);

    // Mobile toggle
    const mobileBtn = document.getElementById('mobile-theme-toggle');
    if (mobileBtn) mobileBtn.addEventListener('click', toggleTheme);

    /* ===== STAR CANVAS (Night Sky) ===== */
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let raf;

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        buildStars();
    }

    function buildStars() {
        stars = [];
        const count = Math.floor((canvas.width * canvas.height) / 8000);
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.5 + 0.2,
                alpha: Math.random(),
                delta: (Math.random() * 0.008 + 0.003) * (Math.random() < 0.5 ? 1 : -1),
                color: Math.random() < 0.08 ? '#a78bfa' : Math.random() < 0.08 ? '#67e8f9' : '#ffffff'
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
            s.alpha += s.delta;
            if (s.alpha <= 0 || s.alpha >= 1) s.delta *= -1;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = s.color;
            ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        drawShootingStarFrame();
        // Shooting star occasionally
        if (Math.random() < 0.0015) drawShootingStar();
        raf = requestAnimationFrame(drawStars);
    }

    let shooting = null;
    function drawShootingStar() {
        shooting = {
            x: Math.random() * canvas.width * 0.6,
            y: Math.random() * canvas.height * 0.4,
            len: 120 + Math.random() * 80,
            angle: Math.PI / 5,
            progress: 0
        };
    }

    function drawShootingStarFrame() {
        if (!shooting) return;
        shooting.progress += 6;
        const x2 = shooting.x + Math.cos(shooting.angle) * shooting.progress;
        const y2 = shooting.y + Math.sin(shooting.angle) * shooting.progress;
        const grad = ctx.createLinearGradient(shooting.x, shooting.y, x2, y2);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(1, 'rgba(255,255,255,0.9)');
        ctx.beginPath();
        ctx.moveTo(shooting.x, shooting.y);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        if (shooting.progress > shooting.len) shooting = null;
    }

    resize();
    window.addEventListener('resize', resize);
    drawStars();

    /* ===== LIVE CLOCK ===== */
    const clock = document.getElementById('live-clock');
    function updateClock() {
        if (!clock) return;
        const now  = new Date();
        const hh   = String(now.getHours()).padStart(2, '0');
        const mm   = String(now.getMinutes()).padStart(2, '0');
        const ss   = String(now.getSeconds()).padStart(2, '0');
        clock.textContent = `${hh}:${mm}:${ss}`;
    }
    updateClock();
    setInterval(updateClock, 1000);

    /* ===== MOBILE HAMBURGER & SEARCH ===== */
    const hamburger = document.getElementById('hamburger-btn');
    const sidebar   = document.getElementById('sidebar');
    const overlay   = document.getElementById('sidebar-overlay');
    const sideClose = document.getElementById('sidebar-close');
    const mobileSearchBtn = document.getElementById('mobile-search-btn');

    function openSidebar() {
        sidebar && sidebar.classList.add('open');
        overlay && overlay.classList.add('show');
        hamburger && hamburger.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
        sidebar && sidebar.classList.remove('open');
        overlay && overlay.classList.remove('show');
        hamburger && hamburger.classList.remove('open');
        document.body.style.overflow = '';
    }
    function toggleSidebar() {
        if (sidebar && sidebar.classList.contains('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    if (hamburger) hamburger.addEventListener('click', toggleSidebar);
    if (overlay)   overlay.addEventListener('click', closeSidebar);
    if (sideClose) sideClose.addEventListener('click', closeSidebar);

    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            openSidebar();
            setTimeout(() => {
                const searchInput = document.getElementById('search-input');
                if (searchInput) searchInput.focus();
            }, 100);
        });
    }

    /* ===== FLOATING MATH SYMBOLS ===== */
    const symbolContainer = document.getElementById('floating-symbols');
    const symbols = ['∑','∫','π','∞','√','Δ','sin','cos'];
    if (symbolContainer) {
        symbols.forEach((sym, i) => {
            const el = document.createElement('div');
            el.className = 'math-symbol';
            el.textContent = sym;
            el.style.cssText = `
                left:${Math.random()*95}%;
                animation-duration:${12 + Math.random()*18}s;
                animation-delay:-${Math.random()*20}s;
                font-size:${0.9+Math.random()*1.2}rem;
            `;
            symbolContainer.appendChild(el);
        });
    }
})();

