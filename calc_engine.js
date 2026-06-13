// Universal Calculator Engine
(function() {
    // 1. Roman conversions
    function romanToInt(s) {
        const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        let total = 0;
        for (let i = 0; i < s.length; i++) {
            let current = map[s[i].toUpperCase()];
            let next = map[s[i+1]?.toUpperCase()];
            if (current < next) { total += next - current; i++; }
            else { total += current; }
        }
        return total;
    }
    function intToRoman(num) {
        const lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
        let roman = '';
        for (let i in lookup) {
            while (num >= lookup[i]) { roman += i; num -= lookup[i]; }
        }
        return roman;
    }

    // 2. GCD & LCM
    function gcd2(x, y) { return y === 0 ? Math.abs(x) : gcd2(y, x % y); }
    function lcm2(x, y) { return (x * y) / gcd2(x, y); }

    // 3. getCalcType
    window.getCalcType = function(calcName) {
        const lower = calcName.toLowerCase();
        if (lower.includes('concrete')) return 'concrete';
        if (lower.includes('stair')) return 'stair';
        if (lower.includes('tile')) return 'tile';
        if (lower.includes('btu')) return 'btu';
        if (lower.includes('mulch') || lower.includes('gravel')) return 'mulch-gravel';
        if (lower.includes('square footage') || lower.includes('roofing')) return 'sqft-roofing';
        if (lower.includes('gdp')) return 'gdp';
        if (lower.includes('molarity') || lower.includes('molecular weight')) return 'molarity';
        if (lower.includes('roman')) return 'roman';
        if (lower.includes('voltage drop')) return 'voltage-drop';
        if (lower.includes('resistor')) return 'resistor';
        if (lower.includes('ohms law') || lower.includes('electricity') || lower.includes('voltage') || lower.includes('current') || lower.includes('power') || lower.includes('resistance')) return 'ohms-law';
        if (lower.includes('ip subnet') || lower.includes('subnet')) return 'subnet';
        if (lower.includes('password')) return 'pwd-gen';
        if (lower.includes('bandwidth') || lower.includes('download') || lower.includes('upload')) return 'bandwidth';
        if (lower.includes('base64') || lower.includes('url encode') || lower.includes('url decode')) return 'base64-url';
        if (lower.includes('gpa') || lower.includes('grade')) return 'gpa-grade';
        if (lower.includes('bra size') || lower.includes('shoe size')) return 'bra-shoe';
        if (lower.includes('tip')) return 'tip';
        if (lower.includes('golf')) return 'golf';
        if (lower.includes('sleep')) return 'sleep';
        if (lower.includes('wind chill') || lower.includes('heat index') || lower.includes('dew point')) return 'weather-index';
        if (lower.includes('fuel') || lower.includes('gas mileage') || lower.includes('mileage')) return 'fuel-mileage';
        if (lower.includes('horsepower') || lower.includes('engine')) return 'horsepower';
        if (lower.includes('tire size')) return 'tire-size';
        if (lower.includes('dice')) return 'dice';
        if (lower.includes('love')) return 'love';
        if (lower.includes('scientific calculator') || lower.includes('scientific notation') || lower.includes('big number')) return 'math-scientific';
        if (lower.includes('fraction')) return 'fraction';
        if (lower.includes('percentage') || lower.includes('percent')) return 'percentage';
        if (lower.includes('random number')) return 'random-gen';
        if (lower.includes('exponent') || lower.includes('log') || lower.includes('root')) return 'exponent-log-root';
        if (lower.includes('binary') || lower.includes('hex') || lower.includes('base conversion')) return 'base-conversions';
        if (lower.includes('half-life')) return 'half-life';
        if (lower.includes('quadratic')) return 'quadratic';
        if (lower.includes('ratio')) return 'ratio';
        if (lower.includes('lcm') || lower.includes('gcf') || lower.includes('factor') || lower.includes('multiple')) return 'lcm-gcf-factor';
        if (lower.includes('rounding')) return 'rounding';
        if (lower.includes('matrix')) return 'matrix';
        if (lower.includes('standard deviation') || lower.includes('statistics') || lower.includes('mean, median') || lower.includes('z-score') || lower.includes('confidence interval')) return 'stats-list';
        if (lower.includes('sequence')) return 'number-sequence';
        if (lower.includes('sample size')) return 'sample-size';
        if (lower.includes('probability')) return 'probability';
        if (lower.includes('permutation') || lower.includes('combination')) return 'permutation-combination';
        if (lower.includes('triangle') || lower.includes('pythagorean') || lower.includes('right triangle')) return 'triangle-pythagoras';
        if (lower.includes('volume') || lower.includes('area') || lower.includes('circle') || lower.includes('surface area')) return 'volume-geometry';
        if (lower.includes('slope') || lower.includes('distance')) return 'slope-distance';
        if (lower.includes('pregnancy') || lower.includes('due date') || lower.includes('ovulation') || lower.includes('conception') || lower.includes('period')) return 'pregnancy';
        if (lower.includes('bmi') || lower.includes('bmr') || lower.includes('calorie') || lower.includes('fat') || lower.includes('ideal weight') || lower.includes('healthy weight') || lower.includes('lean body mass') || lower.includes('macro') || lower.includes('tdee') || lower.includes('gfr') || lower.includes('body surface') || lower.includes('body type') || lower.includes('bac')) return 'health-profile';
        if (lower.includes('height') || lower.includes('conversion') || lower.includes('density') || lower.includes('mass') || lower.includes('weight') || lower.includes('speed')) return 'conversion';
        if (lower.includes('loan') || lower.includes('mortgage') || lower.includes('amortization') || lower.includes('payoff') || lower.includes('refinance') || lower.includes('apr') || lower.includes('fha') || lower.includes('va') || lower.includes('heloc') || lower.includes('down payment') || lower.includes('rent vs') || lower.includes('auto loan') || lower.includes('lease') || lower.includes('interest') || lower.includes('compound') || lower.includes('simple') || lower.includes('cd') || lower.includes('bond') || lower.includes('mutual') || lower.includes('savings') || lower.includes('sip') || lower.includes('fd') || lower.includes('rd') || lower.includes('ppf') || lower.includes('epf') || lower.includes('payout') || lower.includes('annuity')) return 'amortization-loan';
        if (lower.includes('retirement') || lower.includes('401k') || lower.includes('pension') || lower.includes('social security') || lower.includes('ira') || lower.includes('rmd')) return 'retirement-profile';
        if (lower.includes('tax') || lower.includes('salary') || lower.includes('paycheck') || lower.includes('take-home') || lower.includes('vat')) return 'tax-salary-filing';
        if (lower.includes('roi') || lower.includes('irr') || lower.includes('profit') || lower.includes('loss') || lower.includes('margin') || lower.includes('markup') || lower.includes('discount') || lower.includes('commission') || lower.includes('budget')) return 'finance-irr-roi';
        if (lower.includes('date') || lower.includes('birthday') || lower.includes('age') || lower.includes('anniversary')) return 'date-age';
        if (lower.includes('time') || lower.includes('hour') || lower.includes('duration') || lower.includes('day')) return 'date-duration';
        return 'generic';
    };

    // 4. generateFormInputs
    window.generateFormInputs = function(calcName) {
        const type = window.getCalcType(calcName);
        let html = '';
        switch (type) {
            case 'date-age':
                html = `
                    <div class="input-group">
                        <label>Start Date / Date of Birth</label>
                        <input type="date" id="input-date1" required>
                    </div>
                    <div class="input-group">
                        <label>End Date / Target Date (Optional, defaults to today)</label>
                        <input type="date" id="input-date2">
                    </div>
                `;
                break;
            case 'date-duration':
                html = `
                    <div class="input-group">
                        <label>Start Date & Time</label>
                        <input type="datetime-local" id="input-date1" required>
                    </div>
                    <div class="input-group">
                        <label>End Date & Time</label>
                        <input type="datetime-local" id="input-date2" required>
                    </div>
                `;
                break;
            case 'concrete':
                html = `
                    <div class="input-group">
                        <label>Length (Feet)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 10" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Width (Feet)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 10" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Thickness / Depth (Inches)</label>
                        <input type="number" id="input-num3" placeholder="e.g. 4" step="any" required>
                    </div>
                `;
                break;
            case 'stair':
                html = `
                    <div class="input-group">
                        <label>Total Rise (Inches)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 100" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Target Riser Height (Inches)</label>
                        <input type="number" id="input-num2" value="7.5" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Target Tread Depth (Inches)</label>
                        <input type="number" id="input-num3" value="10" step="any" required>
                    </div>
                `;
                break;
            case 'tile':
                html = `
                    <div class="input-group">
                        <label>Room Length (Feet)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 15" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Room Width (Feet)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 12" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Tile Width (Inches)</label>
                        <input type="number" id="input-num3" value="12" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Tile Length (Inches)</label>
                        <input type="number" id="input-num4" value="12" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Waste Margin (%)</label>
                        <input type="number" id="input-num5" value="10" step="any">
                    </div>
                `;
                break;
            case 'btu':
                html = `
                    <div class="input-group">
                        <label>Room Length (Feet)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 15" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Room Width (Feet)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 15" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Ceiling Height (Feet)</label>
                        <input type="number" id="input-num3" value="8" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Insulation Quality</label>
                        <select id="input-select1">
                            <option value="good">Good (Well Insulated)</option>
                            <option value="average" selected>Average</option>
                            <option value="poor">Poor (Drafty / Older house)</option>
                        </select>
                    </div>
                `;
                break;
            case 'mulch-gravel':
                html = `
                    <div class="input-group">
                        <label>Length (Feet)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 20" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Width (Feet)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 10" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Desired Depth (Inches)</label>
                        <input type="number" id="input-num3" placeholder="e.g. 3" step="any" required>
                    </div>
                `;
                break;
            case 'sqft-roofing':
                html = `
                    <div class="input-group">
                        <label>Length (Feet)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 40" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Width (Feet)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 30" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Roof Pitch (optional, e.g. 4 for 4/12 pitch)</label>
                        <input type="number" id="input-num3" value="0" step="any">
                    </div>
                `;
                break;
            case 'gdp':
                html = `
                    <div class="input-group">
                        <label>Consumption (C)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 12000" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Private Investment (I)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 3500" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Government Spending (G)</label>
                        <input type="number" id="input-num3" placeholder="e.g. 4000" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Exports (X)</label>
                        <input type="number" id="input-num4" placeholder="e.g. 2500" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Imports (M)</label>
                        <input type="number" id="input-num5" placeholder="e.g. 2800" step="any" required>
                    </div>
                `;
                break;
            case 'molarity':
                html = `
                    <div class="input-group">
                        <label>Solute Mass (Grams)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 58.44" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Solute Molar Mass (g/mol)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 58.44" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Solution Volume (Liters)</label>
                        <input type="number" id="input-num3" placeholder="e.g. 1" step="any" required>
                    </div>
                `;
                break;
            case 'roman':
                html = `
                    <div class="input-group">
                        <label>Roman Numeral or Decimal Integer</label>
                        <input type="text" id="input-text" placeholder="e.g. MCMXCIV or 1994" required>
                    </div>
                `;
                break;
            case 'conversion':
                html = `
                    <div class="input-group">
                        <label>Value to Convert</label>
                        <input type="number" id="input-num1" placeholder="Enter value..." step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Conversion Category</label>
                        <select id="input-select1">
                            <option value="length">Length</option>
                            <option value="weight">Weight / Mass</option>
                            <option value="speed">Speed</option>
                            <option value="temp">Temperature</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>From Unit</label>
                        <input type="text" id="input-text1" placeholder="e.g. meters, feet, kg, lbs, mph, C" required>
                    </div>
                    <div class="input-group">
                        <label>To Unit</label>
                        <input type="text" id="input-text2" placeholder="e.g. feet, meters, lbs, kg, kph, F" required>
                    </div>
                `;
                break;
            case 'voltage-drop':
                html = `
                    <div class="input-group">
                        <label>Voltage (Volts)</label>
                        <input type="number" id="input-num1" value="120" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Current (Amps)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 15" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>One-way Distance (Feet)</label>
                        <input type="number" id="input-num3" placeholder="e.g. 100" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Wire Size (AWG)</label>
                        <select id="input-select1">
                            <option value="14">14 AWG</option>
                            <option value="12" selected>12 AWG</option>
                            <option value="10">10 AWG</option>
                            <option value="8">8 AWG</option>
                            <option value="6">6 AWG</option>
                        </select>
                    </div>
                `;
                break;
            case 'resistor':
                html = `
                    <div class="input-group">
                        <label>Resistor 1 (Ohms)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 100" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Resistor 2 (Ohms)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 220" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Connection Mode</label>
                        <select id="input-select1">
                            <option value="series">Series</option>
                            <option value="parallel">Parallel</option>
                        </select>
                    </div>
                `;
                break;
            case 'ohms-law':
                html = `
                    <div class="input-group">
                        <label>Select Value 1 to Enter</label>
                        <select id="input-select1">
                            <option value="V" selected>Voltage (V)</option>
                            <option value="I">Current (I)</option>
                            <option value="R">Resistance (R)</option>
                            <option value="P">Power (P)</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Value 1 Amount</label>
                        <input type="number" id="input-num1" placeholder="e.g. 220" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Select Value 2 to Enter</label>
                        <select id="input-select2">
                            <option value="V">Voltage (V)</option>
                            <option value="I" selected>Current (I)</option>
                            <option value="R">Resistance (R)</option>
                            <option value="P">Power (P)</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Value 2 Amount</label>
                        <input type="number" id="input-num2" placeholder="e.g. 10" step="any" required>
                    </div>
                `;
                break;
            case 'subnet':
                html = `
                    <div class="input-group">
                        <label>IP Address</label>
                        <input type="text" id="input-text" value="192.168.1.1" required>
                    </div>
                    <div class="input-group">
                        <label>Subnet Mask / CIDR Prefix</label>
                        <select id="input-select1">
                            <option value="30">/30 (255.255.255.252) - 2 Usable Hosts</option>
                            <option value="29">/29 (255.255.255.248) - 6 Usable Hosts</option>
                            <option value="28">/28 (255.255.255.240) - 14 Usable Hosts</option>
                            <option value="27">/27 (255.255.255.224) - 30 Usable Hosts</option>
                            <option value="26">/26 (255.255.255.192) - 62 Usable Hosts</option>
                            <option value="25">/25 (255.255.255.128) - 126 Usable Hosts</option>
                            <option value="24" selected>/24 (255.255.255.0) - 254 Usable Hosts</option>
                            <option value="16">/16 (255.255.0.0) - 65534 Usable Hosts</option>
                            <option value="8">/8 (255.0.0.0) - 16777214 Usable Hosts</option>
                        </select>
                    </div>
                `;
                break;
            case 'pwd-gen':
                html = `
                    <div class="input-group">
                        <label>Password Length</label>
                        <input type="number" id="input-num1" value="16" min="6" max="128" required>
                    </div>
                    <div class="input-group" style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
                        <label style="display: flex; align-items: center; gap: 8px; font-weight: normal; cursor: pointer;">
                            <input type="checkbox" id="check-upper" checked style="width: auto; margin: 0;"> Include Uppercase (A-Z)
                        </label>
                        <label style="display: flex; align-items: center; gap: 8px; font-weight: normal; cursor: pointer;">
                            <input type="checkbox" id="check-lower" checked style="width: auto; margin: 0;"> Include Lowercase (a-z)
                        </label>
                        <label style="display: flex; align-items: center; gap: 8px; font-weight: normal; cursor: pointer;">
                            <input type="checkbox" id="check-numbers" checked style="width: auto; margin: 0;"> Include Numbers (0-9)
                        </label>
                        <label style="display: flex; align-items: center; gap: 8px; font-weight: normal; cursor: pointer;">
                            <input type="checkbox" id="check-symbols" checked style="width: auto; margin: 0;"> Include Symbols (!@#$)
                        </label>
                    </div>
                `;
                break;
            case 'bandwidth':
                html = `
                    <div class="input-group">
                        <label>File Size</label>
                        <input type="number" id="input-num1" placeholder="e.g. 10" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>File Size Unit</label>
                        <select id="input-select1">
                            <option value="MB">Megabytes (MB)</option>
                            <option value="GB" selected>Gigabytes (GB)</option>
                            <option value="TB">Terabytes (TB)</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Internet Speed</label>
                        <input type="number" id="input-num2" placeholder="e.g. 100" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Speed Unit</label>
                        <select id="input-select2">
                            <option value="Kbps">Kbps</option>
                            <option value="Mbps" selected>Mbps</option>
                            <option value="Gbps">Gbps</option>
                        </select>
                    </div>
                `;
                break;
            case 'base64-url':
                html = `
                    <div class="input-group">
                        <label>Action</label>
                        <select id="input-select1">
                            <option value="encode">Encode</option>
                            <option value="decode">Decode</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Input Text</label>
                        <textarea id="input-textarea" placeholder="Type here..." style="width:100%; height:80px; padding:8px; border-radius:8px; background:var(--input-bg); border:1px solid var(--border); color:var(--text); outline:none;" required></textarea>
                    </div>
                `;
                break;
            case 'gpa-grade':
                html = `
                    <div class="input-group">
                        <label>Obtained Score</label>
                        <input type="number" id="input-num1" placeholder="e.g. 85" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Maximum Scale</label>
                        <input type="number" id="input-num2" value="100" step="any" required>
                    </div>
                `;
                break;
            case 'bra-shoe':
                html = `
                    <div class="input-group">
                        <label>Size / Measurement Value</label>
                        <input type="number" id="input-num1" placeholder="e.g. 9" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>System</label>
                        <select id="input-select1">
                            <option value="us">US</option>
                            <option value="uk">UK</option>
                            <option value="eu">EU</option>
                        </select>
                    </div>
                `;
                break;
            case 'tip':
                html = `
                    <div class="input-group">
                        <label>Bill Amount (₹)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 1500" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Tip Percentage (%)</label>
                        <input type="number" id="input-num2" value="15" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Split Between</label>
                        <input type="number" id="input-num3" value="1" min="1" step="1" required>
                    </div>
                `;
                break;
            case 'golf':
                html = `
                    <div class="input-group">
                        <label>Gross Score</label>
                        <input type="number" id="input-num1" placeholder="e.g. 85" required>
                    </div>
                    <div class="input-group">
                        <label>Course Rating</label>
                        <input type="number" id="input-num2" placeholder="e.g. 71.2" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Slope Rating</label>
                        <input type="number" id="input-num3" placeholder="e.g. 117" step="any" required>
                    </div>
                `;
                break;
            case 'sleep':
                html = `
                    <div class="input-group">
                        <label>I want to wake up at:</label>
                        <input type="time" id="input-time" value="07:00" required>
                    </div>
                `;
                break;
            case 'weather-index':
                html = `
                    <div class="input-group">
                        <label>Temperature</label>
                        <input type="number" id="input-num1" placeholder="e.g. 30" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Unit</label>
                        <select id="input-select1">
                            <option value="C" selected>Celsius (°C)</option>
                            <option value="F">Fahrenheit (°F)</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Relative Humidity (%) OR Wind Speed (mph)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 65" step="any" required>
                    </div>
                `;
                break;
            case 'fuel-mileage':
                html = `
                    <div class="input-group">
                        <label>Distance</label>
                        <input type="number" id="input-num1" placeholder="e.g. 250" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Distance Unit</label>
                        <select id="input-select1">
                            <option value="km" selected>km</option>
                            <option value="mi">miles</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Efficiency / Mileage</label>
                        <input type="number" id="input-num2" placeholder="e.g. 15" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Efficiency Unit</label>
                        <select id="input-select2">
                            <option value="kml" selected>km/L</option>
                            <option value="mpg">mpg</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Fuel Price (per Liter / Gallon)</label>
                        <input type="number" id="input-num3" placeholder="e.g. 100" step="any" required>
                    </div>
                `;
                break;
            case 'horsepower':
                html = `
                    <div class="input-group">
                        <label>Vehicle Weight (lbs)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 3000" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Quarter-Mile Time (Secs)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 12.5" step="any" required>
                    </div>
                `;
                break;
            case 'tire-size':
                html = `
                    <div class="input-group">
                        <label>Original Width (mm) / Ratio / Rim (in)</label>
                        <div style="display:flex; gap:6px;">
                            <input type="number" id="input-num1" value="215" style="flex:1;">
                            <input type="number" id="input-num2" value="55" style="flex:1;">
                            <input type="number" id="input-num3" value="17" style="flex:1;">
                        </div>
                    </div>
                    <div class="input-group">
                        <label>New Width (mm) / Ratio / Rim (in)</label>
                        <div style="display:flex; gap:6px;">
                            <input type="number" id="input-num4" value="225" style="flex:1;">
                            <input type="number" id="input-num5" value="50" style="flex:1;">
                            <input type="number" id="input-num6" value="18" style="flex:1;">
                        </div>
                    </div>
                `;
                break;
            case 'dice':
                html = `
                    <div class="input-group">
                        <label>Number of Dice</label>
                        <input type="number" id="input-num1" value="2" min="1" max="50" required>
                    </div>
                    <div class="input-group">
                        <label>Dice Sides</label>
                        <select id="input-select1">
                            <option value="6" selected>6-sided</option>
                            <option value="10">10-sided</option>
                            <option value="20">20-sided</option>
                        </select>
                    </div>
                `;
                break;
            case 'love':
                html = `
                    <div class="input-group">
                        <label>Your Name</label>
                        <input type="text" id="input-text1" placeholder="Enter name..." required>
                    </div>
                    <div class="input-group">
                        <label>Partner's Name</label>
                        <input type="text" id="input-text2" placeholder="Enter partner name..." required>
                    </div>
                `;
                break;
            case 'math-scientific':
                html = `
                    <div class="input-group">
                        <label>Expression (e.g. sin(30) + sqrt(16))</label>
                        <input type="text" id="input-text" placeholder="Type expression..." required>
                    </div>
                `;
                break;
            case 'fraction':
                html = `
                    <div style="display:flex; gap:8px; align-items:center; margin-bottom:12px;">
                        <div class="input-group" style="margin:0; flex:1;">
                            <input type="number" id="input-num1" placeholder="Num 1" required>
                            <div style="border-top:1px solid var(--border); margin:4px 0;"></div>
                            <input type="number" id="input-num2" placeholder="Den 1" required>
                        </div>
                        <select id="input-select1" style="width:auto; padding:10px; font-weight:bold;">
                            <option value="+">+</option>
                            <option value="-">−</option>
                            <option value="*">×</option>
                            <option value="/">÷</option>
                        </select>
                        <div class="input-group" style="margin:0; flex:1;">
                            <input type="number" id="input-num3" placeholder="Num 2" required>
                            <div style="border-top:1px solid var(--border); margin:4px 0;"></div>
                            <input type="number" id="input-num4" placeholder="Den 2" required>
                        </div>
                    </div>
                `;
                break;
            case 'percentage':
                html = `
                    <div class="input-group">
                        <label>Value 1 (Part / Start)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 50" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Value 2 (Whole / End)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 200" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Type</label>
                        <select id="input-select1">
                            <option value="part">What % is Value 1 of Value 2?</option>
                            <option value="change">Percent change from Value 1 to Value 2?</option>
                            <option value="amount">Value 1 % of Value 2</option>
                        </select>
                    </div>
                `;
                break;
            case 'random-gen':
                html = `
                    <div class="input-group">
                        <label>Min</label>
                        <input type="number" id="input-num1" value="1" required>
                    </div>
                    <div class="input-group">
                        <label>Max</label>
                        <input type="number" id="input-num2" value="100" required>
                    </div>
                    <div class="input-group">
                        <label>Count</label>
                        <input type="number" id="input-num3" value="5" min="1" max="1000" required>
                    </div>
                `;
                break;
            case 'exponent-log-root':
                html = `
                    <div class="input-group">
                        <label>Base / Value</label>
                        <input type="number" id="input-num1" placeholder="e.g. 10" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Exponent / Root Power (Optional)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 2" step="any">
                    </div>
                    <div class="input-group">
                        <label>Operation</label>
                        <select id="input-select1">
                            <option value="exponent">Exponent (Base^Exp)</option>
                            <option value="log">Logarithm (Log_base(Value))</option>
                            <option value="root">Root (nth Root of Base)</option>
                        </select>
                    </div>
                `;
                break;
            case 'base-conversions':
                html = `
                    <div class="input-group">
                        <label>Value</label>
                        <input type="text" id="input-text" placeholder="e.g. 10101 or 4A" required>
                    </div>
                    <div class="input-group">
                        <label>From Base</label>
                        <select id="input-select1">
                            <option value="2">Binary (2)</option>
                            <option value="8">Octal (8)</option>
                            <option value="10" selected>Decimal (10)</option>
                            <option value="16">Hex (16)</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>To Base</label>
                        <select id="input-select2">
                            <option value="2" selected>Binary (2)</option>
                            <option value="8">Octal (8)</option>
                            <option value="10">Decimal (10)</option>
                            <option value="16">Hex (16)</option>
                        </select>
                    </div>
                `;
                break;
            case 'half-life':
                html = `
                    <div class="input-group">
                        <label>Initial Quantity (N₀)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 100" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Half-Life Duration (t₁/₂)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 5" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Time Elapsed (t)</label>
                        <input type="number" id="input-num3" placeholder="e.g. 15" step="any" required>
                    </div>
                `;
                break;
            case 'quadratic':
                html = `
                    <div class="input-group">
                        <label>Coefficient A (ax²)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 1" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Coefficient B (bx)</label>
                        <input type="number" id="input-num2" placeholder="e.g. -5" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Coefficient C (c)</label>
                        <input type="number" id="input-num3" placeholder="e.g. 6" step="any" required>
                    </div>
                `;
                break;
            case 'ratio':
                html = `
                    <div class="input-group">
                        <label>Ratio (Format A:B, e.g. 3:2)</label>
                        <input type="text" id="input-text" placeholder="e.g. 3:2" required>
                    </div>
                    <div class="input-group">
                        <label>Total Value (Optional)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 500" step="any">
                    </div>
                `;
                break;
            case 'lcm-gcf-factor':
                html = `
                    <div class="input-group">
                        <label>Comma-separated Numbers</label>
                        <input type="text" id="input-text" placeholder="e.g. 12, 18, 30" required>
                    </div>
                `;
                break;
            case 'rounding':
                html = `
                    <div class="input-group">
                        <label>Number to Round</label>
                        <input type="number" id="input-num1" placeholder="e.g. 12.3456" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Round To</label>
                        <select id="input-select1">
                            <option value="0">Nearest Integer</option>
                            <option value="1">1 Decimal Place</option>
                            <option value="2" selected>2 Decimal Places</option>
                            <option value="3">3 Decimal Places</option>
                            <option value="10">Nearest 10</option>
                            <option value="100">Nearest 100</option>
                        </select>
                    </div>
                `;
                break;
            case 'matrix':
                html = `
                    <div class="input-group">
                        <label>Matrix Dimension</label>
                        <select id="input-select1" onchange="window.adjustMatrixInputs && window.adjustMatrixInputs(this.value)">
                            <option value="2">2 x 2</option>
                            <option value="3">3 x 3</option>
                        </select>
                    </div>
                    <label>Values</label>
                    <div id="matrix-grid" style="display:grid; grid-template-columns: repeat(2, 1fr); gap:6px; margin-bottom:12px;">
                        <input type="number" id="m00" value="1" style="padding:6px; text-align:center;">
                        <input type="number" id="m01" value="2" style="padding:6px; text-align:center;">
                        <input type="number" id="m10" value="3" style="padding:6px; text-align:center;">
                        <input type="number" id="m11" value="4" style="padding:6px; text-align:center;">
                    </div>
                `;
                break;
            case 'stats-list':
                html = `
                    <div class="input-group">
                        <label>Data Points (Comma-separated)</label>
                        <input type="text" id="input-text" value="10, 20, 20, 40, 50" required>
                    </div>
                `;
                break;
            case 'number-sequence':
                html = `
                    <div class="input-group">
                        <label>First Term (a)</label>
                        <input type="number" id="input-num1" value="1" required>
                    </div>
                    <div class="input-group">
                        <label>Difference / Ratio (d or r)</label>
                        <input type="number" id="input-num2" value="2" required>
                    </div>
                    <div class="input-group">
                        <label>Number of Terms (n)</label>
                        <input type="number" id="input-num3" value="10" min="1" step="1" required>
                    </div>
                    <div class="input-group">
                        <label>Sequence Type</label>
                        <select id="input-select1">
                            <option value="arithmetic">Arithmetic</option>
                            <option value="geometric">Geometric</option>
                        </select>
                    </div>
                `;
                break;
            case 'sample-size':
                html = `
                    <div class="input-group">
                        <label>Population Size (Optional)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 100000">
                    </div>
                    <div class="input-group">
                        <label>Confidence Level (%)</label>
                        <select id="input-select1">
                            <option value="90">90%</option>
                            <option value="95" selected>95%</option>
                            <option value="99">99%</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Margin of Error (%)</label>
                        <input type="number" id="input-num2" value="5" step="any" required>
                    </div>
                `;
                break;
            case 'probability':
                html = `
                    <div class="input-group">
                        <label>Successes / Favorable outcomes</label>
                        <input type="number" id="input-num1" placeholder="e.g. 5" required>
                    </div>
                    <div class="input-group">
                        <label>Total Trials / Possibilities</label>
                        <input type="number" id="input-num2" placeholder="e.g. 20" required>
                    </div>
                `;
                break;
            case 'permutation-combination':
                html = `
                    <div class="input-group">
                        <label>Total Items (n)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 10" min="0" required>
                    </div>
                    <div class="input-group">
                        <label>Selected Items (r)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 3" min="0" required>
                    </div>
                `;
                break;
            case 'triangle-pythagoras':
                html = `
                    <div class="input-group">
                        <label>Side A (Base)</label>
                        <input type="number" id="input-num1" placeholder="Leave blank to solve" step="any">
                    </div>
                    <div class="input-group">
                        <label>Side B (Height)</label>
                        <input type="number" id="input-num2" placeholder="Leave blank to solve" step="any">
                    </div>
                    <div class="input-group">
                        <label>Side C (Hypotenuse)</label>
                        <input type="number" id="input-num3" placeholder="Leave blank to solve" step="any">
                    </div>
                `;
                break;
            case 'volume-geometry':
                html = `
                    <div class="input-group">
                        <label>Shape</label>
                        <select id="input-select1" onchange="window.adjustGeometryInputs && window.adjustGeometryInputs(this.value)">
                            <option value="sphere">Sphere</option>
                            <option value="cylinder">Cylinder</option>
                            <option value="box" selected>Rectangular Box</option>
                            <option value="cone">Cone</option>
                            <option value="circle">Circle (2D)</option>
                        </select>
                    </div>
                    <div id="geometry-fields">
                        <div class="input-group">
                            <label id="lbl-num1">Length / Radius</label>
                            <input type="number" id="input-num1" placeholder="e.g. 10" step="any" required>
                        </div>
                        <div class="input-group" id="wrap-num2">
                            <label>Width</label>
                            <input type="number" id="input-num2" placeholder="e.g. 5" step="any">
                        </div>
                        <div class="input-group" id="wrap-num3">
                            <label>Height</label>
                            <input type="number" id="input-num3" placeholder="e.g. 2" step="any">
                        </div>
                    </div>
                `;
                break;
            case 'slope-distance':
                html = `
                    <div style="display:flex; gap:6px;">
                        <div class="input-group" style="flex:1;">
                            <label>Point 1 X (x₁)</label>
                            <input type="number" id="input-num1" value="0" step="any" required>
                        </div>
                        <div class="input-group" style="flex:1;">
                            <label>Point 1 Y (y₁)</label>
                            <input type="number" id="input-num2" value="0" step="any" required>
                        </div>
                    </div>
                    <div style="display:flex; gap:6px;">
                        <div class="input-group" style="flex:1;">
                            <label>Point 2 X (x₂)</label>
                            <input type="number" id="input-num3" value="3" step="any" required>
                        </div>
                        <div class="input-group" style="flex:1;">
                            <label>Point 2 Y (y₂)</label>
                            <input type="number" id="input-num4" value="4" step="any" required>
                        </div>
                    </div>
                `;
                break;
            case 'health-profile':
                html = `
                    <div class="input-group">
                        <label>Age (Years)</label>
                        <input type="number" id="input-num1" value="25" min="1" max="120" required>
                    </div>
                    <div class="input-group">
                        <label>Gender</label>
                        <select id="input-select1">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label>Weight (kg)</label>
                        <input type="number" id="input-num2" value="70" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Height (cm)</label>
                        <input type="number" id="input-num3" value="175" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Activity Level</label>
                        <select id="input-select2">
                            <option value="1.2">Sedentary</option>
                            <option value="1.375" selected>Light Activity</option>
                            <option value="1.55">Moderate Activity</option>
                            <option value="1.725">Very Active</option>
                        </select>
                    </div>
                `;
                break;
            case 'pregnancy':
                html = `
                    <div class="input-group">
                        <label>Last Period Date (LMP)</label>
                        <input type="date" id="input-date1" required>
                    </div>
                    <div class="input-group">
                        <label>Menstrual Cycle Length (Days)</label>
                        <input type="number" id="input-num1" value="28" min="20" max="45" required>
                    </div>
                `;
                break;
            case 'amortization-loan':
                html = `
                    <div class="input-group">
                        <label>Principal Amount (₹)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 500000" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Annual Interest Rate (%)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 8.5" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Term (Years)</label>
                        <input type="number" id="input-num3" placeholder="e.g. 15" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Compounding Frequency</label>
                        <select id="input-select1">
                            <option value="12">Monthly</option>
                            <option value="1">Yearly</option>
                        </select>
                    </div>
                `;
                break;
            case 'retirement-profile':
                html = `
                    <div class="input-group">
                        <label>Current Age / Retirement Age</label>
                        <div style="display:flex; gap:6px;">
                            <input type="number" id="input-num1" value="30" style="flex:1;">
                            <input type="number" id="input-num2" value="60" style="flex:1;">
                        </div>
                    </div>
                    <div class="input-group">
                        <label>Current Savings (₹)</label>
                        <input type="number" id="input-num3" value="100000" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Annual Contribution / Expected Return (%)</label>
                        <div style="display:flex; gap:6px;">
                            <input type="number" id="input-num4" value="50000" style="flex:1;">
                            <input type="number" id="input-num5" value="8" style="flex:1;">
                        </div>
                    </div>
                `;
                break;
            case 'tax-salary-filing':
                html = `
                    <div class="input-group">
                        <label>Gross Salary / Deductions (₹)</label>
                        <div style="display:flex; gap:6px;">
                            <input type="number" id="input-num1" placeholder="Gross" style="flex:1;" required>
                            <input type="number" id="input-num2" value="150000" style="flex:1;" required>
                        </div>
                    </div>
                    <div class="input-group">
                        <label>Tax Rate (%)</label>
                        <input type="number" id="input-num3" value="15" step="any" required>
                    </div>
                `;
                break;
            case 'finance-irr-roi':
                html = `
                    <div class="input-group">
                        <label>Initial Investment / Cost (₹)</label>
                        <input type="number" id="input-num1" placeholder="e.g. 10000" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Final Value / Revenue (₹)</label>
                        <input type="number" id="input-num2" placeholder="e.g. 15000" step="any" required>
                    </div>
                `;
                break;
            default:
                html = `
                    <div class="input-group">
                        <label>Value 1</label>
                        <input type="number" id="input-num1" placeholder="Enter value..." step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Value 2 (Optional)</label>
                        <input type="number" id="input-num2" placeholder="Enter value..." step="any">
                    </div>
                `;
                break;
        }
        return html;
    };

    // 5. calculateResult
    window.calculateResult = function(calcName, getVal, getText) {
        const type = window.getCalcType(calcName);
        let mainVal = '';
        let subVal = '';
        let formula = '';
        let substitution = '';
        let stepsHTML = '';
        let insightsHTML = '';

        switch (type) {
            case 'date-age': {
                const d1 = getText('input-date1');
                const d2 = getText('input-date2');
                if (!d1) throw "Please select a start date.";
                const date1 = new Date(d1);
                const date2 = d2 ? new Date(d2) : new Date();

                let years = date2.getFullYear() - date1.getFullYear();
                let months = date2.getMonth() - date1.getMonth();
                let days = date2.getDate() - date1.getDate();
                if (days < 0) {
                    months--;
                    let prevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
                    days += prevMonth.getDate();
                }
                if (months < 0) { years--; months += 12; }
                const diffMs = Math.abs(date2 - date1);
                const totalDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

                mainVal = `${years} Years, ${months} Months, ${days} Days`;
                subVal = `${totalDays.toLocaleString()} Total Days`;
                formula = "Age = Target Date - Start Date";
                substitution = `Start: ${date1.toLocaleDateString()} | Target: ${date2.toLocaleDateString()}`;
                stepsHTML = `
                    <li>Calculate difference in years: ${years}</li>
                    <li>Calculate remaining months: ${months}</li>
                    <li>Calculate remaining days: ${days}</li>
                `;
                const month = date1.getMonth() + 1;
                const day = date1.getDate();
                let zodiac = "Unknown";
                if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) zodiac = "Aquarius";
                else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) zodiac = "Pisces";
                else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) zodiac = "Aries";
                else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) zodiac = "Taurus";
                else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) zodiac = "Gemini";
                else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) zodiac = "Cancer";
                else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) zodiac = "Leo";
                else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) zodiac = "Virgo";
                else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) zodiac = "Libra";
                else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) zodiac = "Scorpio";
                else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) zodiac = "Sagittarius";
                else zodiac = "Capricorn";

                insightsHTML = `
                    • Zodiac Sign: <strong>${zodiac}</strong><br>
                    • Total Weeks: ${(totalDays / 7).toFixed(1)} weeks<br>
                    • Total Hours: ${(totalDays * 24).toLocaleString()} hours
                `;
                break;
            }
            case 'date-duration': {
                const d1 = getText('input-date1');
                const d2 = getText('input-date2');
                if (!d1 || !d2) throw "Please enter both start and end times.";
                const date1 = new Date(d1);
                const date2 = new Date(d2);
                const diffMs = Math.abs(date2 - date1);
                const totalSecs = Math.floor(diffMs / 1000);
                const mins = Math.floor(totalSecs / 60);
                const hours = Math.floor(mins / 60);
                const days = Math.floor(hours / 24);

                mainVal = `${days} Days, ${hours % 24} Hours, ${mins % 60} Minutes`;
                subVal = `${totalSecs.toLocaleString()} Total Seconds`;
                formula = "Duration = End Date & Time - Start Date & Time";
                substitution = `${date2.toISOString()} - ${date1.toISOString()}`;
                stepsHTML = `
                    <li>Calculate absolute difference in milliseconds: ${diffMs} ms</li>
                    <li>Convert milliseconds to days, hours, and minutes</li>
                `;
                insightsHTML = `
                    • Total Hours: ${hours.toLocaleString()} hrs<br>
                    • Total Minutes: ${mins.toLocaleString()} mins
                `;
                break;
            }
            case 'concrete': {
                const length = getVal('input-num1');
                const width = getVal('input-num2');
                const thickness = getVal('input-num3');
                if (isNaN(length) || isNaN(width) || isNaN(thickness)) throw "Please fill in all inputs.";

                const thicknessFt = thickness / 12;
                const volCuFt = length * width * thicknessFt;
                const volCuYd = volCuFt / 27;

                mainVal = `${volCuYd.toFixed(2)} Cubic Yards`;
                subVal = `${volCuFt.toFixed(2)} Cubic Feet`;
                formula = "Volume = Length (ft) × Width (ft) × (Thickness (in) / 12) / 27";
                substitution = `${length} × ${width} × (${thickness} / 12) / 27`;
                stepsHTML = `
                    <li>Convert thickness from inches to feet: ${thickness} in / 12 = ${thicknessFt.toFixed(4)} ft</li>
                    <li>Calculate volume in cubic feet: ${length} × ${width} × ${thicknessFt.toFixed(4)} = ${volCuFt.toFixed(2)} cu ft</li>
                    <li>Convert cubic feet to cubic yards: ${volCuFt.toFixed(2)} / 27 = ${volCuYd.toFixed(2)} cu yd</li>
                `;
                const bags80 = Math.ceil(volCuFt / 0.6);
                const bags60 = Math.ceil(volCuFt / 0.45);
                insightsHTML = `
                    • 80 lb bags needed: <strong>${bags80}</strong> (at 0.6 cu ft per bag)<br>
                    • 60 lb bags needed: <strong>${bags60}</strong> (at 0.45 cu ft per bag)
                `;
                break;
            }
            case 'stair': {
                const rise = getVal('input-num1');
                const targetRiser = getVal('input-num2');
                const targetTread = getVal('input-num3');
                if (isNaN(rise) || isNaN(targetRiser) || isNaN(targetTread)) throw "Please fill in all inputs.";

                const risers = Math.round(rise / targetRiser);
                const riserHeight = rise / risers;
                const treads = risers - 1;
                const totalRun = treads * targetTread;
                const angle = Math.atan(riserHeight / targetTread) * 180 / Math.PI;

                mainVal = `${risers} Risers @ ${riserHeight.toFixed(2)} in`;
                subVal = `Treads: ${treads} | Total Run: ${totalRun.toFixed(2)} in`;
                formula = "Risers = Round(Total Rise / Target Riser) | Riser Height = Total Rise / Risers";
                substitution = `Risers = Round(${rise} / ${targetRiser}) = ${risers}`;
                stepsHTML = `
                    <li>Risers required: Round(${rise} / ${targetRiser}) = ${risers}</li>
                    <li>Actual Riser Height: ${rise} / ${risers} = ${riserHeight.toFixed(3)} inches</li>
                    <li>Number of treads: ${risers} - 1 = ${treads}</li>
                    <li>Total run length: ${treads} × ${targetTread} = ${totalRun.toFixed(2)} inches</li>
                    <li>Incline angle: atan(${riserHeight.toFixed(3)} / ${targetTread}) = ${angle.toFixed(1)}°</li>
                `;
                insightsHTML = `
                    • Incline Angle: <strong>${angle.toFixed(1)}°</strong> (Standard stair recommendation: 30° - 37°)<br>
                    • Total Run: ${totalRun.toFixed(2)} inches (${(totalRun/12).toFixed(2)} feet)
                `;
                break;
            }
            case 'tile': {
                const rL = getVal('input-num1');
                const rW = getVal('input-num2');
                const tW = getVal('input-num3');
                const tL = getVal('input-num4');
                const waste = getVal('input-num5') || 0;
                if (isNaN(rL) || isNaN(rW) || isNaN(tW) || isNaN(tL)) throw "Please fill in all inputs.";

                const roomArea = rL * rW;
                const tileArea = (tW * tL) / 144;
                const baseTiles = roomArea / tileArea;
                const totalTiles = Math.ceil(baseTiles * (1 + waste / 100));

                mainVal = `${totalTiles} Tiles`;
                subVal = `Room Area: ${roomArea.toFixed(1)} sq ft | Tile Area: ${tileArea.toFixed(3)} sq ft`;
                formula = "Total Tiles = Ceil((Room Area / Tile Area) × (1 + Waste % / 100))";
                substitution = `Room: ${rL}×${rW} = ${roomArea} | Tile: (${tW}×${tL})/144 = ${tileArea.toFixed(3)}`;
                stepsHTML = `
                    <li>Calculate room surface area: ${rL} × ${rW} = ${roomArea.toFixed(1)} sq ft</li>
                    <li>Calculate single tile area: (${tW} × ${tL}) / 144 = ${tileArea.toFixed(3)} sq ft</li>
                    <li>Divide Room Area by Tile Area: ${baseTiles.toFixed(2)} tiles</li>
                    <li>Adjust for waste margin (${waste}%): ${totalTiles} tiles</li>
                `;
                insightsHTML = `
                    • Standard base count: ${Math.ceil(baseTiles)} tiles (no waste)<br>
                    • Surplus margin tiles: ${totalTiles - Math.ceil(baseTiles)} tiles
                `;
                break;
            }
            case 'btu': {
                const bL = getVal('input-num1');
                const bW = getVal('input-num2');
                const bH = getVal('input-num3');
                const insulation = getText('input-select1');
                if (isNaN(bL) || isNaN(bW) || isNaN(bH)) throw "Please fill in all inputs.";

                const volume = bL * bW * bH;
                const factor = insulation === 'good' ? 3 : (insulation === 'poor' ? 5 : 4);
                const btu = volume * factor;

                mainVal = `${btu.toLocaleString()} BTU / Hr`;
                subVal = `Room Volume: ${volume.toLocaleString()} cu ft`;
                formula = "BTU Required = Volume × Insulation Factor";
                substitution = `${volume} × ${factor}`;
                stepsHTML = `
                    <li>Calculate volume of room: ${bL} × ${bW} × ${bH} = ${volume.toLocaleString()} cu ft</li>
                    <li>Multiply by insulation factor (${insulation} = ${factor}): ${btu.toLocaleString()} BTUs</li>
                `;
                insightsHTML = `
                    • Good Insulation factor: 3<br>
                    • Average factor: 4 | Poor factor: 5
                `;
                break;
            }
            case 'mulch-gravel': {
                const mL = getVal('input-num1');
                const mW = getVal('input-num2');
                const mD = getVal('input-num3');
                if (isNaN(mL) || isNaN(mW) || isNaN(mD)) throw "Please fill in all inputs.";

                const mDFt = mD / 12;
                const mVolCuFt = mL * mW * mDFt;
                const mVolCuYd = mVolCuFt / 27;

                mainVal = `${mVolCuYd.toFixed(2)} Cubic Yards`;
                subVal = `${mVolCuFt.toFixed(2)} Cubic Feet`;
                formula = "Volume = Length (ft) × Width (ft) × (Depth (in) / 12) / 27";
                substitution = `${mL} × ${mW} × (${mD} / 12) / 27`;
                stepsHTML = `
                    <li>Convert depth to feet: ${mD} in / 12 = ${mDFt.toFixed(4)} ft</li>
                    <li>Calculate cubic feet volume: ${mL} × ${mW} × ${mDFt.toFixed(4)} = ${mVolCuFt.toFixed(2)} cu ft</li>
                    <li>Convert to yards: ${mVolCuFt.toFixed(2)} / 27 = ${mVolCuYd.toFixed(2)} cu yd</li>
                `;
                insightsHTML = `
                    • Bags needed (assuming standard 2 cu ft bag): <strong>${Math.ceil(mVolCuFt / 2)} bags</strong>
                `;
                break;
            }
            case 'sqft-roofing': {
                const rL = getVal('input-num1');
                const rW = getVal('input-num2');
                const pitch = getVal('input-num3') || 0;
                if (isNaN(rL) || isNaN(rW)) throw "Please fill in length and width.";

                const flatArea = rL * rW;
                const pitchFactor = Math.sqrt(1 + Math.pow(pitch / 12, 2));
                const roofArea = flatArea * pitchFactor;

                mainVal = `${roofArea.toFixed(1)} Sq. Ft.`;
                subVal = `Flat footprint: ${flatArea} sq ft | Slope factor: ${pitchFactor.toFixed(3)}`;
                formula = "Roof Area = Flat Area × SquareRoot(1 + (Pitch / 12)²)";
                substitution = `${flatArea} × sqrt(1 + (${pitch}/12)²)`;
                stepsHTML = `
                    <li>Calculate flat footprint area: ${rL} × ${rW} = ${flatArea} sq ft</li>
                    <li>Calculate pitch slope multiplier: sqrt(1 + (${pitch/12})²) = ${pitchFactor.toFixed(3)}</li>
                    <li>Adjust flat area by slope multiplier: ${flatArea} × ${pitchFactor.toFixed(3)} = ${roofArea.toFixed(1)} sq ft</li>
                `;
                insightsHTML = `
                    • Roofing Squares: <strong>${(roofArea / 100).toFixed(2)} Squares</strong> (1 Square = 100 sq ft)
                `;
                break;
            }
            case 'gdp': {
                const c = getVal('input-num1');
                const iVal = getVal('input-num2');
                const g = getVal('input-num3');
                const x = getVal('input-num4');
                const m = getVal('input-num5');
                if (isNaN(c) || isNaN(iVal) || isNaN(g) || isNaN(x) || isNaN(m)) throw "Please fill in all GDP inputs.";

                const netExp = x - m;
                const gdp = c + iVal + g + netExp;

                mainVal = `₹${gdp.toLocaleString()}`;
                subVal = `Net Exports (NX): ₹${netExp.toLocaleString()}`;
                formula = "GDP = C + I + G + (X - M)";
                substitution = `${c} + ${iVal} + ${g} + (${x} - ${m})`;
                stepsHTML = `
                    <li>Calculate Net Exports (Exports - Imports): ₹${x} - ₹${m} = ₹${netExp}</li>
                    <li>Sum Consumption, Investment, Government, and Net Exports: ₹${c} + ₹${iVal} + ₹${g} + ₹${netExp} = ₹${gdp}</li>
                `;
                insightsHTML = `
                    • Consumption share: ${((c/gdp)*100).toFixed(1)}% of total economic activity.
                `;
                break;
            }
            case 'molarity': {
                const mass = getVal('input-num1');
                const molarMass = getVal('input-num2');
                const volume = getVal('input-num3');
                if (isNaN(mass) || isNaN(molarMass) || isNaN(volume) || volume === 0) throw "Please enter valid quantities.";

                const moles = mass / molarMass;
                const molarity = moles / volume;

                mainVal = `${molarity.toFixed(4)} M (mol/L)`;
                subVal = `Moles: ${moles.toFixed(4)} mol`;
                formula = "Molarity = (Mass / Molar Mass) / Volume";
                substitution = `(${mass} / ${molarMass}) / ${volume}`;
                stepsHTML = `
                    <li>Calculate moles of solute: ${mass} g / ${molarMass} g/mol = ${moles.toFixed(4)} mol</li>
                    <li>Divide moles by volume in liters: ${moles.toFixed(4)} / ${volume} = ${molarity.toFixed(4)} M</li>
                `;
                insightsHTML = `
                    • Solute Concentration: ${molarity.toFixed(4)} moles per liter.
                `;
                break;
            }
            case 'roman': {
                const valStr = getText('input-text').trim();
                if (!valStr) throw "Please enter a roman numeral or decimal integer.";

                if (/^\d+$/.test(valStr)) {
                    const num = parseInt(valStr);
                    if (num < 1 || num > 3999) throw "Integer must be between 1 and 3999.";
                    const result = intToRoman(num);
                    mainVal = result;
                    subVal = `Decimal integer: ${num}`;
                    formula = "Decimal to Roman Numeral";
                    substitution = `${num} -> ${result}`;
                } else {
                    const result = romanToInt(valStr);
                    if (isNaN(result) || result === 0) throw "Invalid Roman Numeral.";
                    mainVal = result.toString();
                    subVal = `Roman Numeral: ${valStr.toUpperCase()}`;
                    formula = "Roman Numeral to Decimal";
                    substitution = `${valStr.toUpperCase()} -> ${result}`;
                }
                stepsHTML = `<li>Convert digits by comparing characters to base representations.</li>`;
                insightsHTML = `• Successfully resolved base coordinates.`;
                break;
            }
            case 'conversion': {
                const val = getVal('input-num1');
                const cat = getText('input-select1');
                const from = getText('input-text1').toLowerCase().trim();
                const to = getText('input-text2').toLowerCase().trim();
                if (isNaN(val) || !from || !to) throw "Please fill in all inputs.";

                const lengthMap = { meters: 1, meter: 1, m: 1, feet: 3.28084, foot: 3.28084, ft: 3.28084, inches: 39.3701, inch: 39.3701, in: 39.3701, cm: 100, mm: 1000, km: 0.001, miles: 0.000621371, mile: 0.000621371, mi: 0.000621371 };
                const weightMap = { kg: 1, kilogram: 1, kilograms: 1, lbs: 2.20462, lb: 2.20462, pound: 2.20462, pounds: 2.20462, grams: 1000, gram: 1000, g: 1000, ounces: 35.274, ounce: 35.274, oz: 35.274 };
                const speedMap = { kph: 1, 'km/h': 1, mph: 0.621371, 'm/s': 0.277778 };

                let converted = 0;
                if (cat === 'temp') {
                    if (from.startsWith('c') && to.startsWith('f')) converted = (val * 9/5) + 32;
                    else if (from.startsWith('f') && to.startsWith('c')) converted = (val - 32) * 5/9;
                    else if (from.startsWith('c') && to.startsWith('k')) converted = val + 273.15;
                    else if (from.startsWith('k') && to.startsWith('c')) converted = val - 273.15;
                    else if (from.startsWith('f') && to.startsWith('k')) converted = (val - 32) * 5/9 + 273.15;
                    else if (from.startsWith('k') && to.startsWith('f')) converted = (val - 273.15) * 9/5 + 32;
                    else converted = val;
                } else if (cat === 'length') {
                    const fromFactor = lengthMap[from] || 1;
                    const toFactor = lengthMap[to] || 1;
                    converted = val * (toFactor / fromFactor);
                } else if (cat === 'weight') {
                    const fromFactor = weightMap[from] || 1;
                    const toFactor = weightMap[to] || 1;
                    converted = val * (toFactor / fromFactor);
                } else if (cat === 'speed') {
                    const fromFactor = speedMap[from] || 1;
                    const toFactor = speedMap[to] || 1;
                    converted = val * (toFactor / fromFactor);
                }

                mainVal = `${converted.toFixed(4)} ${to.toUpperCase()}`;
                subVal = `${val} ${from.toUpperCase()} converted successfully`;
                formula = `Conversion (${cat.toUpperCase()})`;
                substitution = `${val} ${from} -> ${to}`;
                stepsHTML = `
                    <li>Check multiplier factors: From = ${from}, To = ${to}</li>
                    <li>Apply math scaling ratios: ${converted.toFixed(4)}</li>
                `;
                insightsHTML = `• Precision metrics based on standard scientific metrics.`;
                break;
            }
            case 'voltage-drop': {
                const v = getVal('input-num1');
                const iVal = getVal('input-num2');
                const dist = getVal('input-num3');
                const awg = getText('input-select1');
                if (isNaN(v) || isNaN(iVal) || isNaN(dist)) throw "Please fill in all inputs.";

                const awgRes = { "14": 3.07, "12": 1.93, "10": 1.24, "8": 0.778, "6": 0.491 };
                const resPerFt = (awgRes[awg] || 1.93) / 1000;
                const drop = 2 * iVal * dist * resPerFt;
                const dropPerc = (drop / v) * 100;
                const endVolts = v - drop;

                mainVal = `${drop.toFixed(2)} Volts Drop (${dropPerc.toFixed(2)}%)`;
                subVal = `Load Voltage: ${endVolts.toFixed(2)} V`;
                formula = "Voltage Drop = 2 × I × D × R | % Drop = (Drop / V) × 100";
                substitution = `2 × ${iVal} A × ${dist} ft × ${resPerFt.toFixed(6)} Ω/ft`;
                stepsHTML = `
                    <li>AWG ${awg} copper wire resistance: ${resPerFt.toFixed(6)} Ω/ft</li>
                    <li>Calculate voltage drop: 2 × ${iVal} × ${dist} × ${resPerFt.toFixed(6)} = ${drop.toFixed(2)} V</li>
                    <li>Calculate percentage drop: (${drop.toFixed(2)} / ${v}) × 100 = ${dropPerc.toFixed(2)}%</li>
                `;
                insightsHTML = `
                    • **NEC Recommendations:** Keep voltage drop below **3%** for branch circuits.<br>
                    • Your current drop is <strong style="color:${dropPerc > 3 ? '#ef4444' : '#22c55e'}">${dropPerc.toFixed(2)}%</strong>.
                `;
                break;
            }
            case 'resistor': {
                const r1 = getVal('input-num1');
                const r2 = getVal('input-num2');
                const mode = getText('input-select1');
                if (isNaN(r1) || isNaN(r2)) throw "Please enter both values.";

                let totalR;
                if (mode === 'series') {
                    totalR = r1 + r2;
                    formula = "R_total = R₁ + R₂";
                } else {
                    totalR = (r1 * r2) / (r1 + r2);
                    formula = "R_total = (R₁ × R₂) / (R₁ + R₂)";
                }

                mainVal = `${totalR.toFixed(2)} Ω`;
                subVal = `Equivalent resistance in ${mode}`;
                substitution = `R1 = ${r1} Ω, R2 = ${r2} Ω`;
                stepsHTML = `<li>Add or parallel resolve resistor components: ${totalR.toFixed(2)} Ω</li>`;
                insightsHTML = `• Series layout increases resistance. Parallel layout decreases it.`;
                break;
            }
            case 'ohms-law': {
                const type1 = getText('input-select1');
                const val1 = getVal('input-num1');
                const type2 = getText('input-select2');
                const val2 = getVal('input-num2');
                if (isNaN(val1) || isNaN(val2)) throw "Please enter both values.";
                if (type1 === type2) throw "Please select two DIFFERENT parameter types.";

                let V, I, R, P;
                const inputs = {};
                inputs[type1] = val1;
                inputs[type2] = val2;

                if ('V' in inputs && 'I' in inputs) {
                    V = inputs.V; I = inputs.I; R = V / I; P = V * I;
                } else if ('V' in inputs && 'R' in inputs) {
                    V = inputs.V; R = inputs.R; I = V / R; P = (V * V) / R;
                } else if ('V' in inputs && 'P' in inputs) {
                    V = inputs.V; P = inputs.P; I = P / V; R = (V * V) / P;
                } else if ('I' in inputs && 'R' in inputs) {
                    I = inputs.I; R = inputs.R; V = I * R; P = I * I * R;
                } else if ('I' in inputs && 'P' in inputs) {
                    I = inputs.I; P = inputs.P; V = P / I; R = P / (I * I);
                } else if ('R' in inputs && 'P' in inputs) {
                    R = inputs.R; P = inputs.P; I = Math.sqrt(P / R); V = I * R;
                }

                mainVal = `V: ${V.toFixed(2)}V | I: ${I.toFixed(2)}A`;
                subVal = `R: ${R.toFixed(2)} Ω | P: ${P.toFixed(2)}W`;
                formula = "Ohm's Law: V = I × R | Power: P = V × I";
                substitution = `Given: ${type1}=${val1}, ${type2}=${val2}`;
                stepsHTML = `
                    <li>Solve voltage: ${V.toFixed(2)} V</li>
                    <li>Solve current: ${I.toFixed(2)} A | Resistance: ${R.toFixed(2)} Ω | Power: ${P.toFixed(2)} W</li>
                `;
                insightsHTML = `• Standard electrical relationship parameters.`;
                break;
            }
            case 'subnet': {
                const ip = getText('input-text');
                const cidr = parseInt(getVal('input-select1'));
                if (!ip) throw "Please enter IP address.";

                const totalHosts = Math.pow(2, 32 - cidr);
                const usableHosts = cidr <= 30 ? totalHosts - 2 : 0;
                const maskOctets = [];
                for (let i = 0; i < 4; i++) {
                    const bits = Math.max(0, Math.min(8, cidr - i * 8));
                    maskOctets.push(256 - Math.pow(2, 8 - bits));
                }
                const mask = maskOctets.join('.');

                mainVal = `Mask: ${mask}`;
                subVal = `CIDR: /${cidr} | Usable Hosts: ${usableHosts.toLocaleString()}`;
                formula = "Usable Hosts = 2^(32 - CIDR) - 2";
                substitution = `2^(32 - ${cidr}) - 2`;
                stepsHTML = `
                    <li>Generate subnet decimal octets: ${mask}</li>
                    <li>Calculate usable slots: ${usableHosts.toLocaleString()}</li>
                `;
                insightsHTML = `• Network: First address. Broadcast: Last address.`;
                break;
            }
            case 'pwd-gen': {
                const length = parseInt(getVal('input-num1')) || 16;
                const upper = document.getElementById('check-upper')?.checked;
                const lower = document.getElementById('check-lower')?.checked;
                const numbers = document.getElementById('check-numbers')?.checked;
                const symbols = document.getElementById('check-symbols')?.checked;

                let charset = '';
                if (upper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                if (lower) charset += 'abcdefghijklmnopqrstuvwxyz';
                if (numbers) charset += '0123456789';
                if (symbols) charset += '!@#$%^&*()_+=-';
                if (!charset) throw "Check at least one character set.";

                let pwd = '';
                for (let i = 0; i < length; i++) {
                    pwd += charset.charAt(Math.floor(Math.random() * charset.length));
                }

                mainVal = pwd;
                subVal = `Length: ${length} characters`;
                formula = "Secure Math Random selection";
                substitution = `Length = ${length}, pool size = ${charset.length}`;
                stepsHTML = `<li>Generate password characters.</li>`;
                const entropy = length * Math.log2(charset.length);
                insightsHTML = `• Strength Entropy: <strong>${entropy.toFixed(1)} bits</strong> (Secure if > 80 bits).`;
                break;
            }
            case 'bandwidth': {
                const size = getVal('input-num1');
                const sizeUnit = getText('input-select1');
                const speed = getVal('input-num2');
                const speedUnit = getText('input-select2');
                if (isNaN(size) || isNaN(speed) || speed === 0) throw "Please enter valid quantities.";

                let sizeInGb = size;
                if (sizeUnit === 'MB') sizeInGb = size / 1024;
                else if (sizeUnit === 'TB') sizeInGb = size * 1024;

                let speedInMbps = speed;
                if (speedUnit === 'Kbps') speedInMbps = speed / 1024;
                else if (speedUnit === 'Gbps') speedInMbps = speed * 1024;

                const totalBits = sizeInGb * 8 * 1024 * 1024 * 1024;
                const speedBits = speedInMbps * 1024 * 1024;
                const secs = totalBits / speedBits;

                let timeStr = `${secs.toFixed(1)} Secs`;
                if (secs > 3600) timeStr = `${(secs/3600).toFixed(2)} Hrs`;
                else if (secs > 60) timeStr = `${(secs/60).toFixed(1)} Mins`;

                mainVal = timeStr;
                subVal = `Total size: ${sizeInGb.toFixed(2)} GB | Speed: ${speedInMbps} Mbps`;
                formula = "Transfer Time = Total File Bits / Bandwidth Speed (bps)";
                substitution = `(${sizeInGb.toFixed(2)} GB × 8.589e9) / (${speedBits.toExponential(2)})`;
                stepsHTML = `
                    <li>Scale file size to bits: ${totalBits.toExponential(2)} bits</li>
                    <li>Scale speed to bits/sec: ${speedBits.toExponential(2)} bps</li>
                    <li>Divide: ${secs.toFixed(1)} seconds</li>
                `;
                insightsHTML = `• Network packet loss and congestion can add 10%-20% overhead.`;
                break;
            }
            case 'base64-url': {
                const action = getText('input-select1');
                const txt = getText('input-textarea');
                if (!txt) throw "Please enter text.";

                let out = '';
                if (action === 'encode') {
                    out = calcName.toLowerCase().includes('base64') ? btoa(txt) : encodeURIComponent(txt);
                } else {
                    try {
                        out = calcName.toLowerCase().includes('base64') ? atob(txt) : decodeURIComponent(txt);
                    } catch(e) { throw "Decoding failed: Invalid format."; }
                }

                mainVal = out;
                subVal = `Operation: ${action.toUpperCase()}`;
                formula = "Formatting character transformation";
                substitution = `length: ${txt.length}`;
                stepsHTML = `<li>Translate characters to target format.</li>`;
                insightsHTML = `• Translation complete.`;
                break;
            }
            case 'gpa-grade': {
                const score = getVal('input-num1');
                const scale = getVal('input-num2') || 100;
                if (isNaN(score) || scale === 0) throw "Please enter valid quantities.";

                const perc = (score / scale) * 100;
                let grade = 'F';
                if (perc >= 90) grade = 'A';
                else if (perc >= 80) grade = 'B';
                else if (perc >= 70) grade = 'C';
                else if (perc >= 60) grade = 'D';

                mainVal = `Grade: ${grade}`;
                subVal = `Percentage: ${perc.toFixed(1)}%`;
                formula = "Percentage = (Score / Max Scale) × 100";
                substitution = `(${score} / ${scale}) × 100`;
                stepsHTML = `
                    <li>Calculate percentage: ${perc.toFixed(1)}%</li>
                    <li>Map score boundary -> Grade ${grade}</li>
                `;
                insightsHTML = `• Standard scale grade classification.`;
                break;
            }
            case 'bra-shoe': {
                const val = getVal('input-num1');
                const region = getText('input-select1');
                if (isNaN(val)) throw "Please enter a value.";

                let converted = '';
                if (calcName.toLowerCase().includes('shoe')) {
                    if (region === 'us') converted = `UK: ${val - 1} | EU: ${Math.round(val + 33)}`;
                    else if (region === 'uk') converted = `US: ${val + 1} | EU: ${Math.round(val + 34)}`;
                    else converted = `US: ${(val - 33).toFixed(1)} | UK: ${(val - 34).toFixed(1)}`;
                } else {
                    converted = `Cup sizes calculated on regional system scales.`;
                }

                mainVal = converted;
                subVal = `Input: ${val} (${region.toUpperCase()})`;
                formula = "Apparel sizing chart offsets";
                substitution = `val = ${val}`;
                stepsHTML = `<li>Scale parameters by standard system offset rules: ${converted}</li>`;
                insightsHTML = `• Sizing can fluctuate across brands.`;
                break;
            }
            case 'tip': {
                const bill = getVal('input-num1');
                const tipPerc = getVal('input-num2');
                const split = getVal('input-num3') || 1;
                if (isNaN(bill) || isNaN(tipPerc) || split === 0) throw "Please enter valid quantities.";

                const tipAmt = bill * (tipPerc / 100);
                const total = bill + tipAmt;
                const perPerson = total / split;

                mainVal = `Per Person: ₹${perPerson.toFixed(2)}`;
                subVal = `Tip: ₹${tipAmt.toFixed(2)} | Total: ₹${total.toFixed(2)}`;
                formula = "Tip = Bill × (Tip % / 100) | Per Person = (Bill + Tip) / Split";
                substitution = `Tip = ${bill} × (${tipPerc}/100)`;
                stepsHTML = `
                    <li>Tip share: ₹${tipAmt.toFixed(2)}</li>
                    <li>Aggregate bill: ₹${total.toFixed(2)}</li>
                    <li>Split division: ₹${total.toFixed(2)} / ${split} = ₹${perPerson.toFixed(2)} per person</li>
                `;
                insightsHTML = `• Split summary details.`;
                break;
            }
            case 'golf': {
                const score = getVal('input-num1');
                const rating = getVal('input-num2');
                const slope = getVal('input-num3') || 113;
                if (isNaN(score) || isNaN(rating) || slope === 0) throw "Please fill in all inputs.";

                const diff = (score - rating) * 113 / slope;

                mainVal = `Diff: ${diff.toFixed(1)}`;
                subVal = `Course Rating: ${rating} | Slope: ${slope}`;
                formula = "Diff = (Gross - Rating) × 113 / Slope";
                substitution = `(${score} - ${rating}) × 113 / ${slope}`;
                stepsHTML = `<li>Subtract rating from gross, multiply by 113 and divide by slope: ${diff.toFixed(1)}</li>`;
                insightsHTML = `• Lower differentials mean better performance rounds.`;
                break;
            }
            case 'sleep': {
                const timeStr = getText('input-time');
                if (!timeStr) throw "Select wake time.";

                const [hh, mm] = timeStr.split(':').map(Number);
                const wakeDate = new Date();
                wakeDate.setHours(hh, mm, 0, 0);

                const times = [];
                for (let i = 6; i >= 3; i--) {
                    const cycleMs = i * 90 * 60 * 1000;
                    const bedTime = new Date(wakeDate.getTime() - cycleMs - (14 * 60 * 1000));
                    const hr = String(bedTime.getHours()).padStart(2, '0');
                    const mn = String(bedTime.getMinutes()).padStart(2, '0');
                    times.push(`${hr}:${mn} (${i} Cycles)`);
                }

                mainVal = times[0].split(' ')[0];
                subVal = `Best bedtimes to wake up refreshed at ${timeStr}`;
                formula = "Bedtime = Wake Time - (Cycles × 90 min) - 14 min";
                substitution = `Wake: ${timeStr} | cycles: 6, 5, 4, 3`;
                stepsHTML = `
                    <li>Adjust for 14 minutes average sleep latency</li>
                    <li>Subtract cycles (90 min each) from wake target</li>
                `;
                insightsHTML = `• **Optimal Options:**<br>• ${times.join('<br>• ')}`;
                break;
            }
            case 'weather-index': {
                const temp = getVal('input-num1');
                const unit = getText('input-select1');
                const humOrWind = getVal('input-num2');
                if (isNaN(temp) || isNaN(humOrWind)) throw "Please enter all values.";

                let tempF = temp;
                if (unit === 'C') tempF = (temp * 9/5) + 32;

                let result = 0;
                let label = 'Feel';
                if (calcName.toLowerCase().includes('wind chill')) {
                    result = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(humOrWind, 0.16) + 0.4275 * tempF * Math.pow(humOrWind, 0.16);
                    label = 'Wind Chill';
                } else {
                    result = 0.5 * (tempF + 61.0 + ((tempF - 68.0) * 1.2) + (humOrWind * 0.094));
                    label = 'Heat Index';
                }

                if (unit === 'C') result = (result - 32) * 5/9;

                mainVal = `${result.toFixed(1)} °${unit}`;
                subVal = `${label} temperature under conditions`;
                formula = calcName.toLowerCase().includes('wind chill') ? "Wind Chill equation" : "Heat Index NOAA equation";
                substitution = `T = ${temp}°${unit}, index = ${humOrWind}`;
                stepsHTML = `<li>Convert temperature units and solve index equation: ${result.toFixed(1)}°${unit}</li>`;
                insightsHTML = `• Represents sensory feel indexes.`;
                break;
            }
            case 'fuel-mileage': {
                const dist = getVal('input-num1');
                const dUnit = getText('input-select1');
                const mil = getVal('input-num2');
                const mUnit = getText('input-select2');
                const price = getVal('input-num3');
                if (isNaN(dist) || isNaN(mil) || isNaN(price)) throw "Please fill in all inputs.";

                let distKm = dist;
                if (dUnit === 'mi') distKm = dist * 1.60934;

                let mileageKml = mil;
                if (mUnit === 'mpg') mileageKml = mil * 0.425144;

                const fuelNeeded = distKm / mileageKml;
                const totalCost = fuelNeeded * price;

                mainVal = `Cost: ₹${totalCost.toFixed(2)}`;
                subVal = `Fuel Needed: ${fuelNeeded.toFixed(2)} Liters`;
                formula = "Fuel Needed = Distance / Mileage | Cost = Fuel × Price";
                substitution = `${distKm.toFixed(1)} km / ${mileageKml.toFixed(2)} km/L × ₹${price}`;
                stepsHTML = `
                    <li>Normalize Distance: ${distKm.toFixed(1)} km</li>
                    <li>Normalize Mileage: ${mileageKml.toFixed(2)} km/L</li>
                    <li>Calculate volume: ${fuelNeeded.toFixed(2)} L</li>
                    <li>Multiply by price: ₹${totalCost.toFixed(2)}</li>
                `;
                insightsHTML = `• Trip carbon emissions estimate: ${(fuelNeeded * 2.31).toFixed(1)} kg CO₂.`;
                break;
            }
            case 'horsepower': {
                const w = getVal('input-num1');
                const et = getVal('input-num2');
                if (isNaN(w) || isNaN(et) || et === 0) throw "Please enter weight and ET.";

                const hp = w / Math.pow(et / 5.825, 3);

                mainVal = `${Math.round(hp)} HP`;
                subVal = `Weight: ${w} lbs | ET: ${et} secs`;
                formula = "Horsepower = Weight / (ET / 5.825)³";
                substitution = `${w} / (${et} / 5.825)³`;
                stepsHTML = `
                    <li>Divide ET by constant 5.825: ${(et/5.825).toFixed(4)}</li>
                    <li>Cube divisor, then divide weight by it: ${Math.round(hp)} HP</li>
                `;
                insightsHTML = `• Wheel horsepower estimation.`;
                break;
            }
            case 'tire-size': {
                const w1 = getVal('input-num1');
                const a1 = getVal('input-num2');
                const r1 = getVal('input-num3');
                const w2 = getVal('input-num4');
                const a2 = getVal('input-num5');
                const r2 = getVal('input-num6');
                if (isNaN(w1) || isNaN(a1) || isNaN(r1) || isNaN(w2) || isNaN(a2) || isNaN(r2)) throw "Fill in all tire values.";

                const s1 = w1 * (a1 / 100) / 25.4;
                const d1 = (s1 * 2) + r1;
                const c1 = d1 * Math.PI;

                const s2 = w2 * (a2 / 100) / 25.4;
                const d2 = (s2 * 2) + r2;
                const c2 = d2 * Math.PI;

                const diff = ((d2 - d1) / d1) * 100;
                const speed = 60 * (d2 / d1);

                mainVal = `Diameter Diff: ${diff.toFixed(1)}%`;
                subVal = `Orig. Diam: ${d1.toFixed(2)}" | New Diam: ${d2.toFixed(2)}"`;
                formula = "Diameter = (Width × Aspect Ratio % × 2 / 25.4) + Rim";
                substitution = `T1: ${d1.toFixed(2)}" | T2: ${d2.toFixed(2)}"`;
                stepsHTML = `
                    <li>Original diameter: ${d1.toFixed(2)} in | New: ${d2.toFixed(2)} in</li>
                    <li>Circumference change: ${((c2-c1)/c1*100).toFixed(1)}%</li>
                `;
                insightsHTML = `• **Speedometer Deviation:** reading **60 mph** is actually **${speed.toFixed(1)} mph**.`;
                break;
            }
            case 'dice': {
                const count = parseInt(getVal('input-num1')) || 2;
                const sides = parseInt(getText('input-select1')) || 6;

                const rolls = [];
                let total = 0;
                for (let i = 0; i < count; i++) {
                    const r = Math.floor(Math.random() * sides) + 1;
                    rolls.push(r);
                    total += r;
                }

                mainVal = `Total: ${total}`;
                subVal = `Rolls: [${rolls.join(', ')}]`;
                formula = "Uniform distribution rolls sum";
                substitution = `${count}d${sides}`;
                stepsHTML = `<li>Roll individual outcomes: [${rolls.join(', ')}] -> Sum: ${total}</li>`;
                insightsHTML = `• Expected average value: ${(count * (sides + 1)/2).toFixed(1)}`;
                break;
            }
            case 'love': {
                const name1 = getText('input-text1').trim();
                const name2 = getText('input-text2').trim();
                if (!name1 || !name2) throw "Please enter both names.";

                let combined = (name1 + name2).toLowerCase();
                let sum = 0;
                for (let i = 0; i < combined.length; i++) { sum += combined.charCodeAt(i); }
                const percent = (sum % 51) + 50;

                mainVal = `${percent}% Match`;
                subVal = `Cosmic compatibility indicator`;
                formula = "ASCII matching algorithm modulo 51 + 50";
                substitution = `sum(ascii(${combined})) % 51 + 50`;
                stepsHTML = `<li>Sum ASCII indices, map coordinates to score range: ${percent}%</li>`;
                insightsHTML = `• Entertainment cosmic compatibility value.`;
                break;
            }
            case 'math-scientific': {
                const expr = getText('input-text');
                if (!expr) throw "Please enter expression.";

                let sanitized = expr.replace(/sin/g, 'Math.sin')
                                    .replace(/cos/g, 'Math.cos')
                                    .replace(/tan/g, 'Math.tan')
                                    .replace(/sqrt/g, 'Math.sqrt')
                                    .replace(/log/g, 'Math.log10')
                                    .replace(/pi/g, 'Math.PI')
                                    .replace(/pow/g, 'Math.pow');

                const result = new Function('return ' + sanitized)();
                if (result === undefined || isNaN(result)) throw "Evaluation failed.";

                mainVal = result.toFixed(6).replace(/\.?0+$/, "");
                subVal = `Expression: ${expr}`;
                formula = "Expression Compiler Parser";
                substitution = sanitized;
                stepsHTML = `<li>Compile and run math expression: ${mainVal}</li>`;
                insightsHTML = `• Successfully resolved calculation.`;
                break;
            }
            case 'fraction': {
                const n1 = getVal('input-num1');
                const d1 = getVal('input-num2');
                const op = getText('input-select1');
                const n2 = getVal('input-num3');
                const d2 = getVal('input-num4');
                if (isNaN(n1) || isNaN(d1) || isNaN(n2) || isNaN(d2) || d1 === 0 || d2 === 0) throw "Non-zero denominators required.";

                let resNum, resDen;
                if (op === '+') { resNum = n1*d2 + n2*d1; resDen = d1*d2; }
                else if (op === '-') { resNum = n1*d2 - n2*d1; resDen = d1*d2; }
                else if (op === '*') { resNum = n1*n2; resDen = d1*d2; }
                else { resNum = n1*d2; resDen = d1*n2; }

                const divisor = gcd2(resNum, resDen);
                const simplifiedNum = resNum / divisor;
                const simplifiedDen = resDen / divisor;

                mainVal = `${simplifiedNum} / ${simplifiedDen}`;
                subVal = `Decimal value: ${(simplifiedNum/simplifiedDen).toFixed(6).replace(/\.?0+$/, "")}`;
                formula = `Fraction₁ ${op} Fraction₂`;
                substitution = `(${n1}/${d1}) ${op} (${n2}/${d2})`;
                stepsHTML = `
                    <li>Resolve with cross-products: ${resNum}/${resDen}</li>
                    <li>Reduce using GCF divisor (${divisor}): ${simplifiedNum}/${simplifiedDen}</li>
                `;
                insightsHTML = `• Reduced fraction representation.`;
                break;
            }
            case 'percentage': {
                const v1 = getVal('input-num1');
                const v2 = getVal('input-num2');
                const pMode = getText('input-select1');
                if (isNaN(v1) || isNaN(v2)) throw "Please enter both values.";

                if (pMode === 'part') {
                    const res = (v1 / v2) * 100;
                    mainVal = `${res.toFixed(2)}%`;
                    subVal = `${v1} is ${res.toFixed(2)}% of ${v2}`;
                    formula = "Percentage = (Part / Whole) × 100";
                    substitution = `(${v1} / ${v2}) × 100`;
                    stepsHTML = `<li>Divide: ${(v1/v2).toFixed(4)} and multiply by 100: ${res.toFixed(2)}%</li>`;
                } else if (pMode === 'change') {
                    const diff = v2 - v1;
                    const res = (diff / Math.abs(v1)) * 100;
                    mainVal = `${res.toFixed(2)}%`;
                    subVal = `${res >= 0 ? 'Increase' : 'Decrease'} of ${Math.abs(diff).toFixed(2)}`;
                    formula = "Percent Change = ((End - Start) / |Start|) × 100";
                    substitution = `((${v2} - ${v1}) / |${v1}|) × 100`;
                    stepsHTML = `<li>Find difference: ${diff.toFixed(2)}, divide by start and scale: ${res.toFixed(2)}%</li>`;
                } else {
                    const res = (v1 / 100) * v2;
                    mainVal = `${res.toFixed(2)}`;
                    subVal = `${v1}% of ${v2} is ${res.toFixed(2)}`;
                    formula = "Amount = (Percent / 100) × Whole";
                    substitution = `(${v1} / 100) × ${v2}`;
                    stepsHTML = `<li>Scale: ${(v1/100).toFixed(4)} × ${v2} = ${res.toFixed(2)}</li>`;
                }
                insightsHTML = `• Percent logic processed.`;
                break;
            }
            case 'random-gen': {
                const min = parseInt(getVal('input-num1'));
                const max = parseInt(getVal('input-num2'));
                const count = parseInt(getVal('input-num3')) || 1;
                if (isNaN(min) || isNaN(max) || min > max) throw "Invalid limits. Min must be <= Max.";

                const arr = [];
                for (let i = 0; i < count; i++) {
                    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
                }

                mainVal = arr.join(', ');
                subVal = `Generated ${count} numbers`;
                formula = "Uniform random index selection";
                substitution = `Bounds [${min}, ${max}]`;
                stepsHTML = `<li>Draw indices using system entropy: ${arr.join(', ')}</li>`;
                insightsHTML = `• Complete bounds coverage.`;
                break;
            }
            case 'exponent-log-root': {
                const base = getVal('input-num1');
                const exp = getVal('input-num2');
                const op = getText('input-select1');
                if (isNaN(base)) throw "Enter base value.";

                let resVal = 0;
                if (op === 'exponent') {
                    if (isNaN(exp)) throw "Enter exponent.";
                    resVal = Math.pow(base, exp);
                    mainVal = `${resVal}`;
                    formula = "Base^Exp";
                    substitution = `${base}^${exp}`;
                } else if (op === 'log') {
                    resVal = Math.log(base) / (isNaN(exp) ? Math.log(10) : Math.log(exp));
                    mainVal = `${resVal.toFixed(6)}`;
                    formula = "Log_base(Value)";
                    substitution = `log(${base})/log(${isNaN(exp)?10:exp})`;
                } else {
                    const power = isNaN(exp) ? 2 : exp;
                    resVal = Math.pow(base, 1 / power);
                    mainVal = `${resVal.toFixed(6)}`;
                    formula = "nth Root";
                    substitution = `${base}^(1/${power})`;
                }
                stepsHTML = `<li>Compute numerical operation: ${resVal.toFixed(6)}</li>`;
                insightsHTML = `• Math operation executed.`;
                break;
            }
            case 'base-conversions': {
                const valStr = getText('input-text').trim();
                const from = parseInt(getText('input-select1'));
                const to = parseInt(getText('input-select2'));
                if (!valStr) throw "Please enter value.";

                const decVal = parseInt(valStr, from);
                if (isNaN(decVal)) throw `Invalid base ${from} input.`;

                const finalVal = decVal.toString(to).toUpperCase();

                mainVal = finalVal;
                subVal = `Base ${from} -> Base ${to}`;
                formula = "Base conversion logic";
                substitution = `${valStr} (Base ${from}) -> ${decVal} (Base 10) -> ${finalVal} (Base ${to})`;
                stepsHTML = `<li>Convert to base-10 decimal: ${decVal}, then to base-${to}: ${finalVal}</li>`;
                insightsHTML = `• Conversion complete.`;
                break;
            }
            case 'half-life': {
                const n0 = getVal('input-num1');
                const halfLife = getVal('input-num2');
                const elapsed = getVal('input-num3');
                if (isNaN(n0) || isNaN(halfLife) || isNaN(elapsed) || halfLife === 0) throw "Fill in all inputs.";

                const remaining = n0 * Math.pow(0.5, elapsed / halfLife);

                mainVal = `${remaining.toFixed(4)}`;
                subVal = `Remaining: ${((remaining/n0)*100).toFixed(2)}%`;
                formula = "N(t) = N₀ × (1/2)^(t / t₁/₂)";
                substitution = `${n0} × (0.5)^(${elapsed}/${halfLife})`;
                stepsHTML = `<li>Half life cycles: ${(elapsed/halfLife).toFixed(4)}, calculate decay: ${remaining.toFixed(4)}</li>`;
                insightsHTML = `• Decayed amount: ${(n0 - remaining).toFixed(4)}`;
                break;
            }
            case 'quadratic': {
                const a = getVal('input-num1');
                const b = getVal('input-num2');
                const c = getVal('input-num3');
                if (isNaN(a) || isNaN(b) || isNaN(c)) throw "Fill in all coefficients.";
                if (a === 0) throw "A cannot be 0.";

                const disc = b*b - 4*a*c;
                if (disc >= 0) {
                    const r1 = (-b + Math.sqrt(disc)) / (2*a);
                    const r2 = (-b - Math.sqrt(disc)) / (2*a);
                    mainVal = `x₁ = ${r1.toFixed(4)}, x₂ = ${r2.toFixed(4)}`;
                    subVal = `Real roots | Discriminant: ${disc}`;
                } else {
                    const real = -b / (2*a);
                    const imag = Math.sqrt(-disc) / (2*a);
                    mainVal = `x₁ = ${real.toFixed(4)} + ${imag.toFixed(4)}i, x₂ = ${real.toFixed(4)} - ${imag.toFixed(4)}i`;
                    subVal = `Complex roots | Discriminant: ${disc}`;
                }
                formula = "x = [-b ± √(b² - 4ac)] / 2a";
                substitution = `a=${a}, b=${b}, c=${c}`;
                stepsHTML = `<li>Discriminant: ${disc}, compute quad roots formula: ${mainVal}</li>`;
                insightsHTML = `• Vertex x: ${(-b/(2*a)).toFixed(4)}`;
                break;
            }
            case 'ratio': {
                const rStr = getText('input-text').trim();
                const total = getVal('input-num1');
                if (!rStr) throw "Enter ratio.";

                const parts = rStr.split(':').map(Number);
                if (parts.some(isNaN) || parts.length !== 2) throw "Use A:B format (e.g. 3:2).";

                const sumParts = parts[0] + parts[1];
                if (!isNaN(total) && total > 0) {
                    const shareA = total * parts[0] / sumParts;
                    const shareB = total * parts[1] / sumParts;
                    mainVal = `${shareA.toFixed(2)} : ${shareB.toFixed(2)}`;
                    subVal = `Share A: ₹${shareA.toFixed(2)} | Share B: ₹${shareB.toFixed(2)}`;
                } else {
                    mainVal = `${parts[0]} : ${parts[1]}`;
                    subVal = `Base fraction: ${(parts[0]/parts[1]).toFixed(4)}`;
                }
                formula = "Share = Total × (Part / Sum of Parts)";
                substitution = `Parts: ${parts[0]}, ${parts[1]}`;
                stepsHTML = `<li>Sum of parts: ${sumParts}, divide total shares</li>`;
                insightsHTML = `• A share: ${((parts[0]/sumParts)*100).toFixed(1)}% | B: ${((parts[1]/sumParts)*100).toFixed(1)}%`;
                break;
            }
            case 'lcm-gcf-factor': {
                const listStr = getText('input-text');
                if (!listStr) throw "Enter list.";

                const list = listStr.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
                if (list.length < 2) throw "Enter at least 2 numbers.";

                const gcf = list.reduce(gcd2);
                const lcm = list.reduce(lcm2);

                mainVal = `LCM: ${lcm} | GCF: ${gcf}`;
                subVal = `Inputs: [${list.join(', ')}]`;
                formula = "GCF (Euclidean) | LCM = (a×b)/GCF";
                substitution = `Set: ${list.join(', ')}`;
                stepsHTML = `<li>Find greatest common factor: ${gcf}, find lowest common multiple: ${lcm}</li>`;
                insightsHTML = `• Resolution completed.`;
                break;
            }
            case 'rounding': {
                const val = getVal('input-num1');
                const mode = parseInt(getText('input-select1'));
                if (isNaN(val)) throw "Enter value.";

                let rounded = 0;
                if (mode === 0) rounded = Math.round(val);
                else if (mode === 1) rounded = parseFloat(val.toFixed(1));
                else if (mode === 2) rounded = parseFloat(val.toFixed(2));
                else if (mode === 3) rounded = parseFloat(val.toFixed(3));
                else if (mode === 10) rounded = Math.round(val / 10) * 10;
                else if (mode === 100) rounded = Math.round(val / 100) * 100;

                mainVal = `${rounded}`;
                subVal = `Original: ${val}`;
                formula = `Round base`;
                substitution = `${val} rounding mode ${mode}`;
                stepsHTML = `<li>Apply truncate logic to targets: ${rounded}</li>`;
                insightsHTML = `• Complete.`;
                break;
            }
            case 'matrix': {
                const m00 = getVal('m00');
                const m01 = getVal('m01');
                const m10 = getVal('m10');
                const m11 = getVal('m11');
                const m02 = getVal('m02');
                const m12 = getVal('m12');
                const m20 = getVal('m20');
                const m21 = getVal('m21');
                const m22 = getVal('m22');

                let det = 0;
                if (!isNaN(m02)) {
                    det = m00*(m11*m22 - m12*m21) - m01*(m10*m22 - m12*m20) + m02*(m10*m21 - m11*m20);
                    mainVal = `Det = ${det}`;
                    subVal = `3x3 Matrix`;
                } else {
                    det = m00*m11 - m01*m10;
                    mainVal = `Det = ${det}`;
                    subVal = `2x2 Matrix`;
                }
                formula = "Matrix Determinant calculation";
                substitution = `det calculations`;
                stepsHTML = `<li>Solve determinant values: ${det}</li>`;
                insightsHTML = `• If det = 0, matrix has no inverse.`;
                break;
            }
            case 'stats-list': {
                const listStr = getText('input-text');
                if (!listStr) throw "Enter values.";

                const list = listStr.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
                if (list.length === 0) throw "Empty list.";

                const n = list.length;
                const sum = list.reduce((a,b)=>a+b,0);
                const mean = sum / n;
                const sorted = [...list].sort((a,b)=>a-b);
                const median = n % 2 !== 0 ? sorted[Math.floor(n/2)] : (sorted[n/2 - 1] + sorted[n/2]) / 2;
                const range = sorted[n-1] - sorted[0];

                const sqDiff = list.map(v => Math.pow(v - mean, 2));
                const stdDev = Math.sqrt(sqDiff.reduce((a,b)=>a+b,0)/n);

                mainVal = `Mean: ${mean.toFixed(2)} | Median: ${median.toFixed(2)}`;
                subVal = `Std Dev: ${stdDev.toFixed(2)} | Range: ${range.toFixed(2)}`;
                formula = "Mean = ∑x/n | Median = middle element | Std Dev = √(∑(x-μ)²/n)";
                substitution = `n = ${n}, sum = ${sum}`;
                stepsHTML = `
                    <li>Calculate mean average: ${mean.toFixed(2)}</li>
                    <li>Find median middle coordinate: ${median.toFixed(2)}</li>
                    <li>Calculate standard deviation: ${stdDev.toFixed(2)}</li>
                `;
                insightsHTML = `• Data set size: ${n} points.`;
                break;
            }
            case 'number-sequence': {
                const a = getVal('input-num1');
                const d = getVal('input-num2');
                const n = parseInt(getVal('input-num3'));
                const sType = getText('input-select1');
                if (isNaN(a) || isNaN(d) || isNaN(n) || n <= 0) throw "Fill in sequence details.";

                let nthTerm, sum;
                if (sType === 'arithmetic') {
                    nthTerm = a + (n - 1) * d;
                    sum = (n / 2) * (2 * a + (n - 1) * d);
                    formula = "a_n = a + (n-1)d | S_n = (n/2)(a + a_n)";
                } else {
                    nthTerm = a * Math.pow(d, n - 1);
                    sum = d === 1 ? a * n : a * (1 - Math.pow(d, n)) / (1 - d);
                    formula = "a_n = a × r^(n-1) | S_n = a(1 - r^n)/(1-r)";
                }

                mainVal = `a_n = ${nthTerm.toFixed(2)} | S_n = ${sum.toFixed(2)}`;
                subVal = `Arithmetic/Geometric terms`;
                substitution = `a=${a}, d/r=${d}, n=${n}`;
                stepsHTML = `<li>Find ${n}th term: ${nthTerm.toFixed(2)}, sum: ${sum.toFixed(2)}</li>`;
                insightsHTML = `• sequence resolved.`;
                break;
            }
            case 'sample-size': {
                const pop = getVal('input-num1');
                const conf = parseFloat(getText('input-select1'));
                const moe = getVal('input-num2') / 100;
                if (isNaN(moe) || moe === 0) throw "Margin of Error required.";

                const zMap = { 90: 1.645, 95: 1.96, 99: 2.576 };
                const z = zMap[conf] || 1.96;
                const p = 0.5;

                let sampleSize = (z*z * p * (1-p)) / (moe * moe);
                if (!isNaN(pop) && pop > 0) {
                    sampleSize = sampleSize / (1 + (sampleSize - 1) / pop);
                }
                sampleSize = Math.ceil(sampleSize);

                mainVal = `${sampleSize} respondents`;
                subVal = `Confidence: ${conf}% (z=${z}) | MOE: ±${(moe*100).toFixed(1)}%`;
                formula = "n = (z² × p × (1-p)) / e²";
                substitution = `z=${z}, e=${moe}, N=${pop || 'Infinite'}`;
                stepsHTML = `<li>Calculate sample size boundary constraints: ${sampleSize}</li>`;
                insightsHTML = `• Required sample count.`;
                break;
            }
            case 'probability': {
                const succ = getVal('input-num1');
                const trials = getVal('input-num2');
                if (isNaN(succ) || isNaN(trials) || trials === 0) throw "Enter successes and trials.";

                const prob = succ / trials;
                const percentage = prob * 100;

                mainVal = `${percentage.toFixed(2)}%`;
                subVal = `Probability: ${prob.toFixed(4)}`;
                formula = "P(A) = Successes / Trials";
                substitution = `${succ} / ${trials}`;
                stepsHTML = `<li>Divide favorable outcomes: ${succ}/${trials} = ${prob.toFixed(4)}</li>`;
                insightsHTML = `• Odds: ${succ} to ${(trials - succ)} against.`;
                break;
            }
            case 'permutation-combination': {
                const n = parseInt(getVal('input-num1'));
                const r = parseInt(getVal('input-num2'));
                if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) throw "Requirements: n >= r >= 0.";

                function fact(num) {
                    if (num <= 1) return 1;
                    let f = 1; for(let i=2; i<=num; i++) f *= i; return f;
                }

                const perm = fact(n) / fact(n - r);
                const comb = perm / fact(r);

                mainVal = `nPr = ${perm.toLocaleString()} | nCr = ${comb.toLocaleString()}`;
                subVal = `Permutations & Combinations (n=${n}, r=${r})`;
                formula = "nPr = n! / (n-r)! | nCr = n! / (r! × (n-r)!)";
                substitution = `${n}! / (${n}-${r})!`;
                stepsHTML = `
                    <li>Calculate permutations (order matters): ${perm.toLocaleString()}</li>
                    <li>Calculate combinations (order doesn't matter): ${comb.toLocaleString()}</li>
                `;
                insightsHTML = `• n! is factorial of n.`;
                break;
            }
            case 'triangle-pythagoras': {
                const a = getVal('input-num1');
                const b = getVal('input-num2');
                const c = getVal('input-num3');
                let solvedA = a, solvedB = b, solvedC = c;

                if (isNaN(a) && !isNaN(b) && !isNaN(c)) { solvedA = Math.sqrt(c*c - b*b); solvedB = b; solvedC = c; }
                else if (isNaN(b) && !isNaN(a) && !isNaN(c)) { solvedB = Math.sqrt(c*c - a*a); solvedA = a; solvedC = c; }
                else if (isNaN(c) && !isNaN(a) && !isNaN(b)) { solvedC = Math.sqrt(a*a + b*b); solvedA = a; solvedB = b; }

                if (isNaN(solvedA) || isNaN(solvedB) || isNaN(solvedC)) throw "Enter at least 2 sides.";

                const s = (solvedA + solvedB + solvedC) / 2;
                const area = Math.sqrt(s * (s - solvedA) * (s - solvedB) * (s - solvedC));

                mainVal = `Hypotenuse: ${solvedC.toFixed(2)}`;
                subVal = `Side A: ${solvedA.toFixed(2)} | Side B: ${solvedB.toFixed(2)} | Area: ${area.toFixed(2)}`;
                formula = "a² + b² = c² | Area (Heron) = √(s(s-a)(s-b)(s-c))";
                substitution = `Solved sides: A=${solvedA.toFixed(2)}, B=${solvedB.toFixed(2)}, C=${solvedC.toFixed(2)}`;
                stepsHTML = `<li>Solve sides using Pythagorean theorem, then area by Heron's formula: ${area.toFixed(2)}</li>`;
                insightsHTML = `• Complete right triangle metrics.`;
                break;
            }
            case 'volume-geometry': {
                const shape = getText('input-select1');
                const v1 = getVal('input-num1') || 0;
                const v2 = getVal('input-num2') || 0;
                const v3 = getVal('input-num3') || 0;

                let volume = 0, sa = 0, label = 'Volume';
                if (shape === 'sphere') {
                    volume = (4/3) * Math.PI * Math.pow(v1, 3); sa = 4 * Math.PI * v1 * v1;
                    formula = "V = (4/3)πr³ | SA = 4πr²";
                } else if (shape === 'cylinder') {
                    volume = Math.PI * v1 * v1 * v2; sa = 2 * Math.PI * v1 * (v1 + v2);
                    formula = "V = πr²h | SA = 2πr(r+h)";
                } else if (shape === 'cone') {
                    volume = (1/3) * Math.PI * v1 * v1 * v2; sa = Math.PI * v1 * (v1 + Math.sqrt(v2*v2 + v1*v1));
                    formula = "V = (1/3)πr²h";
                } else if (shape === 'circle') {
                    volume = Math.PI * v1 * v1; sa = 2 * Math.PI * v1; label = 'Area';
                    formula = "A = πr² | C = 2πr";
                } else {
                    volume = v1 * v2 * v3; sa = 2 * (v1*v2 + v2*v3 + v3*v1);
                    formula = "V = lwh | SA = 2(lw+wh+hl)";
                }

                mainVal = `${label}: ${volume.toFixed(2)}`;
                subVal = `Surface Area / Circumference: ${sa.toFixed(2)}`;
                substitution = `Inputs: ${v1}, ${v2}, ${v3}`;
                stepsHTML = `<li>Calculate geometry: ${label} = ${volume.toFixed(2)}, SA = ${sa.toFixed(2)}</li>`;
                insightsHTML = `• Euclidean geometry solutions.`;
                break;
            }
            case 'slope-distance': {
                const x1 = getVal('input-num1');
                const y1 = getVal('input-num2');
                const x2 = getVal('input-num3');
                const y2 = getVal('input-num4');
                if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) throw "Enter all coordinates.";

                const dx = x2 - x1;
                const dy = y2 - y1;
                const dist = Math.sqrt(dx*dx + dy*dy);
                const slope = dx !== 0 ? dy / dx : Infinity;

                mainVal = `Distance: ${dist.toFixed(4)}`;
                subVal = `Slope: ${slope === Infinity ? 'Undefined' : slope.toFixed(4)}`;
                formula = "Distance = √((x₂-x₁)² + (y₂-y₁)²) | Slope = dy/dx";
                substitution = `dx=${dx}, dy=${dy}`;
                stepsHTML = `<li>Solve coordinate differentials and Pythagorean distance: ${dist.toFixed(4)}</li>`;
                insightsHTML = `• Slope angle: ${(Math.atan(slope)*180/Math.PI).toFixed(1)}°`;
                break;
            }
            case 'health-profile': {
                const age = getVal('input-num1');
                const gender = getText('input-select1');
                const weight = getVal('input-num2');
                const height = getVal('input-num3');
                const activity = parseFloat(getText('input-select2')) || 1.375;
                if (isNaN(age) || isNaN(weight) || isNaN(height)) throw "Fill in all fields.";

                const bmi = weight / Math.pow(height / 100, 2);
                let bmr = 0;
                if (gender === 'male') bmr = 10 * weight + 6.25 * height - 5 * age + 5;
                else bmr = 10 * weight + 6.25 * height - 5 * age - 161;

                const tdee = bmr * activity;

                mainVal = `BMI: ${bmi.toFixed(1)} | TDEE: ${Math.round(tdee)} kcal`;
                subVal = `BMR: ${Math.round(bmr)} kcal/day`;
                formula = "BMI = W / H² | BMR (Mifflin) = 10W + 6.25H - 5A ± constant";
                substitution = `W=${weight}kg, H=${height}cm, A=${age}`;
                stepsHTML = `
                    <li>Calculate BMI: ${bmi.toFixed(1)}</li>
                    <li>Calculate BMR: ${Math.round(bmr)} kcal</li>
                    <li>Calculate TDEE: ${Math.round(tdee)} kcal</li>
                `;
                insightsHTML = `
                    • **To Lose Weight:** ${Math.round(tdee - 500)} kcal/day (-500 kcal deficit)<br>
                    • **To Gain Weight:** ${Math.round(tdee + 500)} kcal/day (+500 kcal surplus)
                `;
                break;
            }
            case 'pregnancy': {
                const lmpStr = getText('input-date1');
                const cycle = parseInt(getVal('input-num1')) || 28;
                if (!lmpStr) throw "Select LMP date.";

                const lmp = new Date(lmpStr);
                const due = new Date(lmp.getTime() + (280 * 24 * 60 * 60 * 1000));
                const conception = new Date(lmp.getTime() + ((cycle - 14) * 24 * 60 * 60 * 1000));

                mainVal = `Due Date: ${due.toLocaleDateString()}`;
                subVal = `Conception: ${conception.toLocaleDateString()}`;
                formula = "Due = LMP + 280 Days | Conception = LMP + cycle - 14";
                substitution = `LMP: ${lmp.toLocaleDateString()}`;
                stepsHTML = `<li>Add offset intervals to last menstrual period: ${due.toLocaleDateString()}</li>`;
                insightsHTML = `• Ovulation window: ${(new Date(conception.getTime()-2*24*60*60*1000)).toLocaleDateString()} to ${(new Date(conception.getTime()+2*24*60*60*1000)).toLocaleDateString()}`;
                break;
            }
            case 'amortization-loan': {
                const p = getVal('input-num1');
                const rate = getVal('input-num2');
                const years = getVal('input-num3');
                const freq = parseInt(getText('input-select1')) || 12;
                if (isNaN(p) || isNaN(rate) || isNaN(years) || years === 0) throw "Fill in all fields.";

                const r = rate / 100 / freq;
                const n = years * freq;
                const emi = (p * r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1);
                const totalPayment = emi * n;
                const totalInterest = totalPayment - p;

                mainVal = `EMI: ₹${emi.toFixed(2)} / period`;
                subVal = `Interest: ₹${totalInterest.toFixed(2)} | Total: ₹${totalPayment.toFixed(2)}`;
                formula = "EMI = [P × r × (1+r)ⁿ] / [(1+r)ⁿ - 1]";
                substitution = `P=${p}, r=${(rate/freq).toFixed(4)}%, n=${n}`;
                stepsHTML = `<li>Compounding installments computed for tenure period: ₹${emi.toFixed(2)}</li>`;
                insightsHTML = `• Principal: ${((p/totalPayment)*100).toFixed(1)}% | Interest: ${((totalInterest/totalPayment)*100).toFixed(1)}%`;
                break;
            }
            case 'retirement-profile': {
                const curAge = getVal('input-num1');
                const retAge = getVal('input-num2');
                const savings = getVal('input-num3');
                const contribution = getVal('input-num4');
                const rate = getVal('input-num5') / 100;
                if (isNaN(curAge) || isNaN(retAge) || isNaN(savings) || isNaN(contribution) || isNaN(rate)) throw "Fill in all fields.";

                const years = retAge - curAge;
                if (years <= 0) throw "Retirement age must be greater than current age.";

                let balance = savings;
                for (let i = 0; i < years; i++) {
                    balance = (balance + contribution) * (1 + rate);
                }

                mainVal = `Balance: ₹${balance.toFixed(2)}`;
                subVal = `Years to Retirement: ${years}`;
                formula = "Future Value compound growth";
                substitution = `Compounding over ${years} years at ${rate*100}%`;
                stepsHTML = `<li>Compound year-over-year balance growth: ₹${balance.toFixed(2)}</li>`;
                insightsHTML = `• Total contributions: ₹${(contribution * years).toLocaleString()}`;
                break;
            }
            case 'tax-salary-filing': {
                const salary = getVal('input-num1');
                const deductions = getVal('input-num2') || 0;
                const taxRate = getVal('input-num3') || 15;
                if (isNaN(salary)) throw "Gross salary required.";

                const taxableIncome = Math.max(0, salary - deductions);
                const tax = taxableIncome * (taxRate / 100);
                const takeHome = salary - tax;

                mainVal = `Take-Home: ₹${takeHome.toFixed(2)}`;
                subVal = `Tax: ₹${tax.toFixed(2)}`;
                formula = "Take-Home = Gross - Tax";
                substitution = `Gross: ${salary}, Tax: ${tax.toFixed(2)}`;
                stepsHTML = `<li>Taxable income: ₹${taxableIncome}, compute tax: ₹${tax.toFixed(2)}, subtract from gross</li>`;
                insightsHTML = `• Effective tax rate: ${((tax/salary)*100).toFixed(1)}%`;
                break;
            }
            case 'finance-irr-roi': {
                const cost = getVal('input-num1');
                const rev = getVal('input-num2');
                if (isNaN(cost) || isNaN(rev) || cost === 0) throw "Fill in cost and revenue.";

                const diff = rev - cost;
                const roi = (diff / cost) * 100;
                const margin = (diff / rev) * 100;

                mainVal = `ROI: ${roi.toFixed(2)}%`;
                subVal = `Profit: ₹${diff.toFixed(2)} | Margin: ${margin.toFixed(2)}%`;
                formula = "ROI = ((Rev - Cost) / Cost) × 100";
                substitution = `(${rev} - ${cost}) / ${cost}`;
                stepsHTML = `<li>Calculate net profit: ₹${diff.toFixed(2)}, divide by investment cost: ${roi.toFixed(2)}%</li>`;
                insightsHTML = `• For every ₹100 invested, you earn ₹${roi.toFixed(2)} profit.`;
                break;
            }
            default: {
                const v1 = getVal('input-num1');
                const v2 = getVal('input-num2');
                if (isNaN(v1)) throw "Enter at least 1 number.";

                const f = isNaN(v2) ? v1 : (v1 + v2);
                mainVal = `${f}`;
                subVal = `Evaluation`;
                formula = "Result = Value₁ + Value₂";
                substitution = `v1 = ${v1}, v2 = ${isNaN(v2) ? 0 : v2}`;
                stepsHTML = `<li>Sum inputs: ${f}</li>`;
                insightsHTML = `• Standard fallback evaluation.`;
                break;
            }
        }

        return { mainVal, subVal, formula, substitution, stepsHTML, insightsHTML };
    };
})();
