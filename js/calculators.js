// BEASTO AI — Calculator Engine

function calculateBMR(weight, height, age, sex) {
    // Mifflin-St Jeor Formula
    if (sex === 'male') {
        return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
}

function calculateTDEE(bmr, activityLevel) {
    const multipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9
    };
    return Math.round(bmr * (multipliers[activityLevel] || 1.55));
}

function calculateMacros(calories, goal, weight) {
    let protein, fat, carbs;
    // Protein: always high
    if (goal === 'cut') {
        protein = Math.round(weight * 2.5);  // 2.5g/kg during cut
        fat = Math.round((calories * 0.25) / 9);
    } else if (goal === 'bulk') {
        protein = Math.round(weight * 2.0);
        fat = Math.round((calories * 0.28) / 9);
    } else {
        protein = Math.round(weight * 2.2);
        fat = Math.round((calories * 0.27) / 9);
    }
    const proteinCals = protein * 4;
    const fatCals = fat * 9;
    carbs = Math.round((calories - proteinCals - fatCals) / 4);
    if (carbs < 0) carbs = 0;
    return { protein, fat, carbs };
}

function calculateOneRepMax(weight, reps) {
    // Epley Formula
    return Math.round(weight * (1 + reps / 30));
}

function getWeightClass(weight, sex) {
    const male = [59, 66, 74, 83, 93, 105, 120];
    const female = [47, 52, 57, 63, 69, 76, 84];
    const classes = sex === 'male' ? male : female;
    for (const wc of classes) {
        if (weight <= wc) return wc;
    }
    return classes[classes.length - 1] + '+';
}

// Render macro calculator UI
function renderMacroCalculator(container) {
    container.innerHTML = `
    <div class="calculator-shell">
      <div class="calc-header">
        <div class="calc-icon">🧮</div>
        <h2>Macro Calculator</h2>
        <p>Science-based macros tailored to your goal.</p>
      </div>
      <form class="calc-form" id="macroForm" onsubmit="return false;">
        <div class="form-grid">
          <div class="form-group">
            <label>Body Weight</label>
            <div class="input-group">
              <input type="number" id="mc-weight" placeholder="75" min="30" max="300">
              <span class="input-suffix">kg</span>
            </div>
          </div>
          <div class="form-group">
            <label>Age</label>
            <div class="input-group">
              <input type="number" id="mc-age" placeholder="25" min="14" max="80">
              <span class="input-suffix">yrs</span>
            </div>
          </div>
          <div class="form-group">
            <label>Height</label>
            <div class="input-group">
              <input type="number" id="mc-height" placeholder="175" min="100" max="250">
              <span class="input-suffix">cm</span>
            </div>
          </div>
          <div class="form-group">
            <label>Sex</label>
            <select id="mc-sex">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="form-group full-width">
            <label>Activity Level</label>
            <select id="mc-activity">
              <option value="sedentary">Sedentary (desk job, no exercise)</option>
              <option value="light">Lightly Active (1–3 workouts/week)</option>
              <option value="moderate" selected>Moderately Active (3–5 workouts/week)</option>
              <option value="active">Very Active (6–7 workouts/week)</option>
              <option value="veryActive">Athlete (2× training/day)</option>
            </select>
          </div>
          <div class="form-group full-width">
            <label>Goal</label>
            <div class="goal-toggle" id="goalToggle">
              <button class="goal-btn" data-goal="cut">🔥 Cut</button>
              <button class="goal-btn active" data-goal="maintain">⚖️ Maintain</button>
              <button class="goal-btn" data-goal="bulk">📈 Bulk</button>
            </div>
          </div>
        </div>
        <button class="calc-btn" onclick="runMacroCalc()">Calculate My Macros</button>
      </form>
      <div class="calc-results" id="macroResults" style="display:none;"></div>
    </div>
  `;

    // Goal toggle logic
    document.querySelectorAll('#goalToggle .goal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#goalToggle .goal-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

window.runMacroCalc = function () {
    const weight = parseFloat(document.getElementById('mc-weight').value);
    const age = parseFloat(document.getElementById('mc-age').value);
    const height = parseFloat(document.getElementById('mc-height').value);
    const sex = document.getElementById('mc-sex').value;
    const activity = document.getElementById('mc-activity').value;
    const goal = document.querySelector('#goalToggle .goal-btn.active')?.dataset.goal || 'maintain';

    if (!weight || !age || !height) {
        showCalcError('macroResults', 'Please fill in all fields.');
        return;
    }

    const bmr = calculateBMR(weight, height, age, sex);
    const tdee = calculateTDEE(bmr, activity);

    let targetCalories = tdee;
    let calorieLabel = 'Maintenance';
    if (goal === 'cut') { targetCalories = tdee - 400; calorieLabel = 'Cutting (–400 kcal deficit)'; }
    if (goal === 'bulk') { targetCalories = tdee + 300; calorieLabel = 'Lean Bulking (+300 kcal surplus)'; }

    const macros = calculateMacros(targetCalories, goal, weight);

    const resultsEl = document.getElementById('macroResults');
    resultsEl.style.display = 'block';
    resultsEl.innerHTML = `
    <div class="results-grid">
      <div class="result-card highlight-card">
        <div class="result-label">Daily Calories</div>
        <div class="result-value">${targetCalories.toLocaleString()}</div>
        <div class="result-sub">${calorieLabel}</div>
      </div>
      <div class="result-card">
        <div class="result-label">🥩 Protein</div>
        <div class="result-value">${macros.protein}g</div>
        <div class="result-sub">${macros.protein * 4} kcal • ${Math.round(macros.protein * 4 / targetCalories * 100)}%</div>
      </div>
      <div class="result-card">
        <div class="result-label">🌾 Carbs</div>
        <div class="result-value">${macros.carbs}g</div>
        <div class="result-sub">${macros.carbs * 4} kcal • ${Math.round(macros.carbs * 4 / targetCalories * 100)}%</div>
      </div>
      <div class="result-card">
        <div class="result-label">🥑 Fat</div>
        <div class="result-value">${macros.fat}g</div>
        <div class="result-sub">${macros.fat * 9} kcal • ${Math.round(macros.fat * 9 / targetCalories * 100)}%</div>
      </div>
    </div>
    <div class="result-breakdown">
      <div class="breakdown-row"><span>BMR (Base Metabolic Rate)</span><span>${Math.round(bmr)} kcal/day</span></div>
      <div class="breakdown-row"><span>TDEE (Total Daily Expenditure)</span><span>${tdee} kcal/day</span></div>
      <div class="breakdown-row"><span>Target Calories</span><span>${targetCalories} kcal/day</span></div>
    </div>
    <div class="result-tip">
      💡 <strong>Science Tip:</strong> Protein at ${macros.protein}g/day = ${(macros.protein / weight).toFixed(1)}g/kg bodyweight — optimal for ${goal === 'cut' ? 'muscle preservation during a cut' : goal === 'bulk' ? 'maximum muscle protein synthesis' : 'maintenance and performance'}.
    </div>
  `;
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Render calorie / TDEE calculator
function renderCalorieCalculator(container) {
    container.innerHTML = `
    <div class="calculator-shell">
      <div class="calc-header">
        <div class="calc-icon">⚡</div>
        <h2>TDEE & Calorie Estimator</h2>
        <p>Find your maintenance calories + 1RM estimator.</p>
      </div>
      <form class="calc-form" id="tdeeForm" onsubmit="return false;">
        <div class="form-grid">
          <div class="form-group">
            <label>Body Weight</label>
            <div class="input-group">
              <input type="number" id="td-weight" placeholder="80" min="30" max="300">
              <span class="input-suffix">kg</span>
            </div>
          </div>
          <div class="form-group">
            <label>Age</label>
            <div class="input-group">
              <input type="number" id="td-age" placeholder="25" min="14" max="80">
              <span class="input-suffix">yrs</span>
            </div>
          </div>
          <div class="form-group">
            <label>Height</label>
            <div class="input-group">
              <input type="number" id="td-height" placeholder="178" min="100" max="250">
              <span class="input-suffix">cm</span>
            </div>
          </div>
          <div class="form-group">
            <label>Sex</label>
            <select id="td-sex">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="form-group full-width">
            <label>Activity Level</label>
            <select id="td-activity">
              <option value="sedentary">Sedentary — Desk job, no exercise</option>
              <option value="light">Lightly Active — 1–3 workouts/week</option>
              <option value="moderate" selected>Moderately Active — 3–5 workouts/week</option>
              <option value="active">Very Active — 6–7 workouts/week</option>
              <option value="veryActive">Athlete — 2× training per day</option>
            </select>
          </div>
        </div>
        <button class="calc-btn" onclick="runTDEECalc()">Calculate TDEE</button>
      </form>
      <div class="calc-results" id="tdeeResults" style="display:none;"></div>

      <div class="calc-divider"></div>

      <div class="calc-header">
        <div class="calc-icon">🏆</div>
        <h2>1-Rep Max Estimator</h2>
        <p>Estimate your max lift from a working set.</p>
      </div>
      <form class="calc-form" id="ormForm" onsubmit="return false;">
        <div class="form-grid">
          <div class="form-group">
            <label>Weight Lifted</label>
            <div class="input-group">
              <input type="number" id="orm-weight" placeholder="100" min="1" max="600">
              <span class="input-suffix">kg</span>
            </div>
          </div>
          <div class="form-group">
            <label>Reps Completed</label>
            <div class="input-group">
              <input type="number" id="orm-reps" placeholder="5" min="1" max="30">
              <span class="input-suffix">reps</span>
            </div>
          </div>
        </div>
        <button class="calc-btn" onclick="runORMCalc()">Estimate 1RM</button>
      </form>
      <div class="calc-results" id="ormResults" style="display:none;"></div>
    </div>
  `;
}

window.runTDEECalc = function () {
    const weight = parseFloat(document.getElementById('td-weight').value);
    const age = parseFloat(document.getElementById('td-age').value);
    const height = parseFloat(document.getElementById('td-height').value);
    const sex = document.getElementById('td-sex').value;
    const activity = document.getElementById('td-activity').value;

    if (!weight || !age || !height) {
        showCalcError('tdeeResults', 'Please fill in all fields.');
        return;
    }

    const bmr = calculateBMR(weight, height, age, sex);
    const tdee = calculateTDEE(bmr, activity);

    const resultsEl = document.getElementById('tdeeResults');
    resultsEl.style.display = 'block';
    resultsEl.innerHTML = `
    <div class="results-grid four-col">
      <div class="result-card highlight-card">
        <div class="result-label">BMR</div>
        <div class="result-value">${Math.round(bmr)}</div>
        <div class="result-sub">kcal/day at rest</div>
      </div>
      <div class="result-card">
        <div class="result-label">⚡ TDEE</div>
        <div class="result-value">${tdee}</div>
        <div class="result-sub">kcal/day maintenance</div>
      </div>
      <div class="result-card">
        <div class="result-label">🔥 Cutting</div>
        <div class="result-value">${tdee - 400}</div>
        <div class="result-sub">kcal/day (–400 deficit)</div>
      </div>
      <div class="result-card">
        <div class="result-label">📈 Bulking</div>
        <div class="result-value">${tdee + 300}</div>
        <div class="result-sub">kcal/day (+300 surplus)</div>
      </div>
    </div>
    <div class="result-tip">
      💡 <strong>Note:</strong> TDEE estimates are within ±10–15% accuracy. Adjust your intake based on 2-week real-world results (track weight trends, not daily fluctuations).
    </div>
  `;
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.runORMCalc = function () {
    const weight = parseFloat(document.getElementById('orm-weight').value);
    const reps = parseInt(document.getElementById('orm-reps').value);

    if (!weight || !reps) {
        showCalcError('ormResults', 'Please enter weight and reps.');
        return;
    }
    if (reps > 20) {
        showCalcError('ormResults', 'For accuracy, use a set of 10 reps or fewer.');
        return;
    }

    const orm = calculateOneRepMax(weight, reps);
    const resultsEl = document.getElementById('ormResults');
    resultsEl.style.display = 'block';
    resultsEl.innerHTML = `
    <div class="results-grid">
      <div class="result-card highlight-card">
        <div class="result-label">Estimated 1RM</div>
        <div class="result-value">${orm} kg</div>
        <div class="result-sub">Epley Formula</div>
      </div>
      <div class="result-card"><div class="result-label">90% (1–2 reps)</div><div class="result-value">${Math.round(orm * 0.9)} kg</div></div>
      <div class="result-card"><div class="result-label">80% (3–5 reps)</div><div class="result-value">${Math.round(orm * 0.8)} kg</div></div>
      <div class="result-card"><div class="result-label">70% (8–10 reps)</div><div class="result-value">${Math.round(orm * 0.7)} kg</div></div>
    </div>
    <div class="result-tip">
      💡 <strong>Training Loads:</strong> Use 65–80% 1RM for hypertrophy, 80–90% for strength, 85–95% for peaking.
    </div>
  `;
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function showCalcError(id, msg) {
    const el = document.getElementById(id);
    el.style.display = 'block';
    el.innerHTML = `<div class="calc-error">⚠️ ${msg}</div>`;
}
