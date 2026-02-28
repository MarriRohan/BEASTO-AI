// BEASTO AI — Knowledge Domains Data
const DOMAINS = [
    {
        id: 'hypertrophy',
        name: 'Hypertrophy Science',
        icon: '🔬',
        color: '#00f5ff',
        tagline: 'The science of muscle growth — decoded.',
        sections: [
            {
                title: 'What Is Hypertrophy?',
                content: `Hypertrophy is the increase in muscle cell size through an accumulation of contractile proteins (actin and myosin). It is driven by three primary mechanisms:

**1. Mechanical Tension** — The most important driver. Heavy loads stretching and contracting muscle fibers under high force. This directly activates mTOR (mechanistic target of rapamycin), the master regulator of muscle protein synthesis.

**2. Metabolic Stress** — The "pump." Accumulation of lactate, hydrogen ions, and inorganic phosphate in the muscle. Triggers anabolic hormone release and cell swelling. Important for hypertrophy but secondary to mechanical tension.

**3. Muscle Damage** — Micro-tears in muscle fibers from eccentric loading. The repair process is anabolic. Note: Excessive muscle damage (too much soreness) can interfere with recovery — more damage ≠ more growth.`
            },
            {
                title: 'The Volume Equation',
                content: `**Volume = Sets × Reps × Load**

Research consistently shows that volume is the primary driver of hypertrophy. More specifically: *hard sets* (sets taken close to failure) are what generates adaptation.

**Optimal Volume Ranges (per muscle/week):**
- Minimum Effective Volume (MEV): ~6–8 sets
- Maximum Adaptive Volume (MAV): 12–20 sets
- Maximum Recoverable Volume (MRV): 20–30 sets (individual)

**Progressive Overload Hierarchy:**
1. Add reps (within range)
2. Add weight (when rep ceiling is hit)
3. Add sets (periodically, not every session)
4. Improve technique (more tension per rep)`
            },
            {
                title: 'Rep Ranges & Fiber Types',
                content: `**The Research Reality:** Hypertrophy occurs across a wide rep range (5–30 reps) as long as sets are taken close to failure (0–3 RIR).

| Rep Range | Load | Best For |
|-----------|------|----------|
| 1–5 | 85–100% 1RM | Strength (neurological) |
| 6–12 | 65–85% 1RM | Hypertrophy (primary) |
| 12–20 | 50–65% 1RM | Hypertrophy + Endurance |
| 20–30 | 40–50% 1RM | Hypertrophy (high fatigue) |

**Type I fibers** (slow-twitch): Endurance, fatigue-resistant, respond to higher reps.
**Type II fibers** (fast-twitch): Power, strength, size, respond to heavier loads.
Most muscles contain a mix — train across multiple rep ranges for maximum development.`
            },
            {
                title: 'Stretch-Mediated Hypertrophy',
                content: `**Emerging research (2022–2024) shows that exercises performed at long muscle lengths (stretched position) produce superior hypertrophy** compared to shortened-position training.

Examples:
- Incline dumbbell curls > preacher curls (for long head)
- Romanian deadlifts > leg curls (for hamstrings)
- Overhead tricep extensions > pushdowns (for long head)
- Deficit push-ups / deep dips > regular bench (for pecs)

**Why it works:** Titin (a giant protein inside muscle sarcomeres) acts as a mechanosensor when the muscle is stretched under load. This activates a unique anabolic signaling pathway independent of mTOR. This means stretch-position exercises and contraction-position exercises are additive — train BOTH.`
            },
            {
                title: 'Failure vs. RIR Training',
                content: `**RIR = Reps In Reserve.** Training to failure is NOT required for maximum hypertrophy.

**Optimal approach:**
- Most sets: 2–3 RIR (feeling like you could do 2–3 more reps)
- Occasional sets: 0–1 RIR or technical failure
- Avoid: Grinding failure on every set (impairs recovery, injury risk)

**Why not always fail?**
- Neural fatigue accumulates
- Technique breaks down
- Recovery demand increases disproportionately
- Research shows 0–3 RIR produces nearly identical hypertrophy to always training to failure

**Practical tip:** The last 5 reps before failure are the most anabolic. Getting close to failure is what matters.`
            },
        ]
    },

    {
        id: 'strength',
        name: 'Strength Training',
        icon: '🏋️',
        color: '#ff6b35',
        tagline: 'Get strong. Scientifically.',
        sections: [
            {
                title: 'Neural vs. Structural Strength',
                content: `Strength has two distinct components:

**Neural Adaptations (first 6–8 weeks):**
- Improved motor unit recruitment
- Better synchronization of muscle firing
- Reduced inhibition (Golgi tendon organ)
- You get "stronger" before muscles visibly grow

**Structural Adaptations (8+ weeks):**
- Muscle hypertrophy
- Tendon and connective tissue strengthening
- Bone mineral density improvements

**This is why:** beginners gain strength rapidly without visible muscle. Strength first comes from your nervous system learning to use the muscle you already have.`
            },
            {
                title: 'Progressive Overload Methods',
                content: `**Linear Progression (Beginner):** Add weight every session.
- Squats, Deadlifts: +5 kg/session
- Upper body: +2.5 kg/session
- When you can no longer add weight every session → graduate to intermediate programming

**Weekly Progression (Intermediate):**
- Add weight each week (not each session)
- Best achieved with 3–5 day training splits

**Periodization (Advanced):**
- **Linear:** Gradually increase weight over weeks
- **Undulating (DUP):** Vary volume and intensity daily or weekly
- **Block:** Accumulation → Intensification → Realization cycles`
            },
            {
                title: 'The Big 3 Lifts',
                content: `**Back Squat, Deadlift, Bench Press** — the foundation of strength training.

**Why these three?**
- Maximum muscle mass involvement
- Highest mechanical tension possible
- Best carry-over to athletic performance
- Most researched for strength adaptation

**Programming Frequency:**
| Lift | Beginner | Intermediate | Advanced |
|------|---------|-------------|---------|
| Squat | 3×/week | 2×/week | 1–2×/week |
| Deadlift | 1–2×/week | 1–2×/week | 1×/week |
| Bench | 3×/week | 2–3×/week | 2–3×/week |

**1RM Estimation (Epley Formula):**
1RM = Weight × (1 + Reps/30)`
            },
            {
                title: 'Safety: Rate of Perceived Exertion',
                content: `**Use RPE (1–10) to auto-regulate training:**
- RPE 6: Very easy, 4+ reps in reserve
- RPE 7: Moderate, 3 reps in reserve
- RPE 8: Hard, 2 reps in reserve
- RPE 9: Very hard, 1 rep in reserve
- RPE 10: Maximum — no reps left

**Safety warnings:**
⚠️ Never ego-lift. A belt injury or disc herniation can set you back months.
⚠️ Always warm up: 40% → 60% → 75% → 85% → working weight
⚠️ Deload every 4–8 weeks (50–60% volume reduction for 1 week)
⚠️ If a joint hurts (not muscle burn) — STOP the movement immediately`
            }
        ]
    },

    {
        id: 'fatloss',
        name: 'Fat Loss & Cutting',
        icon: '🔥',
        color: '#ff4757',
        tagline: 'Burn fat. Keep muscle. Do it right.',
        sections: [
            {
                title: 'Energy Balance: The Foundation',
                content: `**Fat loss requires a caloric deficit — this is thermodynamics and is non-negotiable.**

**TDEE** (Total Daily Energy Expenditure) = BMR × Activity Multiplier
- BMR: Calories burned at complete rest
- Sedentary (desk job, no exercise): ×1.2
- Lightly active (1–3 workouts/week): ×1.375
- Moderately active (3–5 workouts/week): ×1.55
- Very active (6–7 workouts/week): ×1.725
- Athlete (2× training/day): ×1.9

**Optimal Deficit:**
- **Aggressive cut:** 500–750 kcal/day deficit (lose ~0.5–0.75 kg/week)
- **Moderate cut:** 300–500 kcal/day deficit (lose ~0.3–0.5 kg/week)
- **Lean bulk body recomp:** 200–300 kcal/day deficit (beginners only)

⚠️ **Never go below 1200 kcal/day (women) or 1500 kcal/day (men)** — severe restriction triggers muscle loss, metabolic adaptation, and hormonal disruption.`
            },
            {
                title: 'Preserve Muscle While Cutting',
                content: `**The #1 mistake in cutting: losing muscle along with fat.**

**Evidence-based muscle preservation strategies:**

1. **High Protein:** 2.2–3.1 g/kg of bodyweight during cuts. Protein is thermogenic and anti-catabolic.
2. **Keep Training Heavy:** Do not switch to "light weight, high reps" — this is bro-science. Heavy compound training signals your body to keep muscle.
3. **Moderate Deficit:** Aggressive deficits (>750 kcal) cause disproportionate muscle loss.
4. **Prioritize Sleep:** Growth hormone peaks during deep sleep. Sleep deprivation increases cortisol — a muscle-wasting hormone.
5. **Minimize Cardio Overuse:** Excessive cardio (especially LISS) increases cortisol chronically. Use HIIT for fat burning efficiency.`
            },
            {
                title: 'Fat Loss Tools',
                content: `**What actually works (evidence-based):**

✅ **Caloric deficit** — non-negotiable foundation
✅ **High protein intake** — satiety + muscle preservation
✅ **Resistance training** — metabolic rate maintenance + body composition
✅ **HIIT cardio** — superior fat oxidation in less time vs. LISS
✅ **Sleep 7–9 hrs** — appetite hormone regulation (leptin/ghrelin)
✅ **High fiber intake** — satiety without excess calories
✅ **Hydration** — water suppresses appetite, supports metabolism

**What doesn't work:**
❌ Spot reduction (you cannot choose where to lose fat)
❌ Detox teas and "fat burners" (mostly caffeine + gimmicks)
❌ Extreme low carb unless total calories are in check
❌ "Starvation mode" — metabolic adaptation is real but minor`
            },
            {
                title: 'Fat Loss vs. Weight Loss',
                content: `**Body weight and body fat are not the same measurement.**

You can: Lose weight and lose muscle (bad outcome).
You can: Lose fat and gain or maintain muscle (ideal outcome).
You can: Lose fat and gain muscle simultaneously (body recomposition — primarily for beginners or returning lifters).

**Track body composition, not just scale weight:**
- Use calipers or DEXA scan
- Track measurements: waist, hips, chest, arms
- Progress photos every 2 weeks in consistent lighting
- Scale weight fluctuates ±2kg daily from food, water, and glycogen — do not panic

**Plateau Protocol:**
1. Recalculate TDEE (your metabolism adapts as you lose weight)
2. Add 1–2 cardio sessions before reducing calories further
3. Take a diet break (maintenance calories for 1–2 weeks) to restore hormones`
            }
        ]
    },

    {
        id: 'bulking',
        name: 'Bulking Strategy',
        icon: '📈',
        color: '#2ed573',
        tagline: 'Build mass without the mess.',
        sections: [
            {
                title: 'Clean Bulk vs. Dirty Bulk',
                content: `**Clean Bulk (Lean Bulk):** Modest caloric surplus (200–350 kcal above TDEE).
- Maximizes muscle gain to fat gain ratio
- Slower process (0.5–1 kg/month for naturals)
- Avoids excessive fat accumulation
- Sustainable for 16–24 week bulk phases
- **Recommended for: intermediate/advanced lifters**

**Dirty Bulk:** Large surplus (500–1000+ kcal above TDEE).
- Faster scale weight gain (mostly fat)
- Does NOT accelerate muscle growth beyond a modest surplus
- Higher body fat makes subsequent cut harder
- Elevated insulin resistance, worsened hormonal profile
- **Not recommended — no scientific advantage**

**Reality check:** Natural lifters can gain a maximum of ~0.5–1 kg of actual muscle per month. Gaining faster than this is mostly fat storage.`
            },
            {
                title: 'Nutrient Timing on a Bulk',
                content: `**Total daily intake > timing — but timing matters for optimization.**

**Pre-workout (1–2 hrs before):**
- 25–40g protein
- 40–60g carbohydrates
- Low fat (slows digestion)

**Post-workout (within 2 hrs):**
- 40–50g fast protein (whey)
- 60–80g fast carbohydrates (white rice, banana)
- Minimal fat (slows nutrient delivery)

**Before bed:**
- 30–40g slow protein (casein or cottage cheese)
- Supports overnight protein synthesis

**Key insight:** Protein distribution throughout the day matters. Eat 4–6 protein-rich meals, targeting 30–50g protein per meal to maximize muscle protein synthesis (MPS) — a single large protein meal does NOT provide the same signal as distributed smaller meals.`
            },
            {
                title: 'Optimal Foods for a Clean Bulk',
                content: `**Protein Sources (build the muscle):**
- Chicken breast / thigh
- Lean beef (90%+)
- Eggs + egg whites
- Greek yogurt
- Cottage cheese
- Salmon / tuna / cod
- Whey protein (supplement)

**Carbohydrate Sources (fuel the training):**
- White rice, oats, sweet potato
- Jasmine rice, pasta
- Fruits: banana, berries, mango
- Whole grain bread

**Fat Sources (hormones + health):**
- Avocado
- Olive oil
- Nuts and nut butters
- Whole eggs
- Fatty fish

**⚠️ Avoid junk calories:** Empty calories (chips, soda, candy) provide no muscle-building nutrients and drive fat gain — even in a "bulk."`
            }
        ]
    },

    {
        id: 'macros',
        name: 'Macro Calculation',
        icon: '🧮',
        color: '#a29bfe',
        tagline: 'Calculate your perfect macros.',
        isCalculator: true,
        calculatorType: 'macros'
    },

    {
        id: 'calories',
        name: 'Calorie Estimator',
        icon: '⚡',
        color: '#fdcb6e',
        tagline: 'Find your TDEE and calorie targets.',
        isCalculator: true,
        calculatorType: 'calories'
    },

    {
        id: 'hometraining',
        name: 'Bodyweight Training',
        icon: '🏠',
        color: '#74b9ff',
        tagline: 'No gym. No excuses. No limits.',
        sections: [
            {
                title: 'Why Bodyweight Training Works',
                content: `**The same three drivers of hypertrophy apply to bodyweight training:**
1. Mechanical tension — progressive variations increase load
2. Metabolic stress — high-rep bodyweight sets create serious pump
3. Muscle damage — eccentric component in all movements

**Limitation:** Load progression is harder. You must manually increase difficulty via:
- Leverage changes (easier → harder body angles)
- Range of motion (partial → full → deficit)
- Tempo manipulation (slow eccentrics = more tension)
- Unilateral progression (bilateral → single-limb)
- Adding load (vest, backpack)

**The Calisthenics Progression Hierarchy:**
Push-up → Archer push-up → Pseudo planche push-up → Planche push-up
Pull-up → L-sit pull-up → Ring pull-up → Muscle-up`
            },
            {
                title: 'Full Body Bodyweight Program',
                content: `**4-Day Upper/Lower Bodyweight Split:**

**Day 1 — Upper (Push Focus):**
- Push-up variation: 4×10–20
- Dips (chair): 3×10–15
- Pike push-up: 3×10
- Diamond push-up: 3×15
- Plank: 3×45s

**Day 2 — Lower:**
- Squat variation: 4×15–25
- Bulgarian split squat: 3×12 each
- Hip thrust (floor/sofa): 3×20
- Nordic curl: 3×5–8
- Calf raise (single leg): 3×20 each

**Day 3 — Upper (Pull Focus):**
- Pull-up / Negative pull-up: 4×5–10
- Australian row: 3×12
- Face pull (band): 3×15
- Bicep curl (towel/band): 3×15
- Hollow body hold: 3×30s

**Day 4 — Lower:**
- Jump squat: 4×10
- Romanian DL (single leg): 3×12 each
- Glute bridge: 3×20
- Wall sit: 3×45s
- Step-up: 3×15 each`
            },
            {
                title: 'Progression System',
                content: `**The 20-Rep Rule:** When you can perform 20+ clean reps of an exercise, progress to the next harder variation.

**Push progression:**
1. Wall push-up
2. Incline push-up (hands elevated)
3. Knee push-up
4. Standard push-up
5. Decline push-up (feet elevated)
6. Archer push-up
7. Pseudo planche push-up

**Pull progression:**
1. Dead hang (30+ seconds)
2. Scapular pull-up (just activate lats)
3. Negative pull-up (jump up, lower slowly)
4. Assisted pull-up (band or chair)
5. Full pull-up
6. Weighted pull-up
7. L-sit pull-up

**Tempo manipulation for force:**
Use 3-1-3 tempo (3s down, 1s pause, 3s up) to dramatically increase difficulty of any exercise.`
            }
        ]
    },

    {
        id: 'cardio',
        name: 'Cardio Training Zones',
        icon: '❤️',
        color: '#ff6b9d',
        tagline: 'Train your engine — not just your muscles.',
        sections: [
            {
                title: 'Heart Rate Training Zones',
                content: `**Calculate Max HR:** 220 – Your Age

| Zone | % Max HR | Training Type | Benefit |
|------|----------|---------------|---------|
| Zone 1 | 50–60% | Recovery | Active recovery, circulation |
| Zone 2 | 60–70% | Base aerobic | Fat oxidation, aerobic base |
| Zone 3 | 70–80% | Aerobic | Cardiovascular fitness |
| Zone 4 | 80–90% | Threshold | Lactate threshold, endurance |
| Zone 5 | 90–100% | Maximum | VO2 max, sprint capacity |

**Most Important Zones:**
- **Zone 2** (60–70%): The foundation of cardiovascular health. Long, easy cardio. 3–5 hrs/week of this transforms cardiovascular capacity over months.
- **Zone 4–5** (HIIT): Short bursts (20–40s) of max effort. Improves VO2 max rapidly but has high recovery cost.`
            },
            {
                title: 'HIIT vs. LISS — The Real Answer',
                content: `**HIIT (High Intensity Interval Training):**
- Protocol: 20–40s max effort / 60–120s rest × 8–15 rounds
- Duration: 15–25 minutes total
- Benefits: Superior calorie burn per minute, improves VO2 max, preserves muscle vs. chronic LISS
- Frequency: 2–3×/week maximum (high recovery cost)
- Examples: Sprint intervals, assault bike, rowing intervals

**LISS (Low Intensity Steady State):**
- Protocol: 45–90 minutes at 60–70% max HR
- Benefits: Fat oxidation, active recovery, cardiovascular base, lower cortisol
- Frequency: Can be done daily
- Examples: Brisk walking, cycling, swimming

**Verdict:** Use HIIT for maximum fat loss efficiency. Use LISS for cardiovascular health and recovery. NEVER use chronic LISS (daily 60+ min runs) if muscle preservation is your goal.`
            },
            {
                title: 'Cardio for Lifters: How Much Is Too Much?',
                content: `**Signs of too much cardio:**
- Persistent soreness that doesn't improve
- Decreased sprint or strength performance
- Elevated resting heart rate
- Poor sleep quality
- Loss of motivation

**Optimal cardio integration for strength/hypertrophy goals:**
- 2–3× HIIT sessions/week: 20–25 min
- 2–3× Zone 2 walks: 30–45 min (can be done daily — low interference)
- TIME cardio sessions away from strength training (different day or 6+ hours apart)
- Prioritize: Higher intensity strength training → lower need for cardio for body composition

**VO2 Max improvement:**
The highest predictor of longevity. Improve it with:
1. Zone 2 base building (months of work)
2. VO2 max intervals: 4 minutes hard / 4 minutes easy × 4 rounds (Norwegian 4×4 protocol)`
            }
        ]
    },

    {
        id: 'recovery',
        name: 'Recovery & Sleep',
        icon: '😴',
        color: '#6c5ce7',
        tagline: 'You grow in recovery — not in the gym.',
        sections: [
            {
                title: 'Sleep: The Ultimate Recovery Tool',
                content: `**Sleep is the single most powerful recovery intervention available.**

**During sleep (especially deep sleep / SWS):**
- Growth hormone is secreted in its largest daily pulse
- Muscle protein synthesis peaks
- Neural recovery occurs (motor patterns consolidate)
- Testosterone is produced (peaks at 5–7 hrs of sleep, drops sharply with less)
- Cortisol is cleared from the body

**Sleep deprivation effects on performance:**
- 6 hrs sleep vs 8 hrs: ~12% reduction in strength
- After 5 nights of 6 hrs sleep: cognitive function equivalent to 24 hrs without sleep
- Testosterone drops 10–15% after one week of 5 hrs/night
- Muscle protein synthesis decreases by 18–24% with insufficient sleep

**Target: 7–9 hours of quality sleep per night.**`
            },
            {
                title: 'Sleep Optimization Protocol',
                content: `**Science-backed sleep hygiene:**

1. **Consistent schedule** — same wake time 7 days/week. Anchors circadian rhythm.
2. **Temperature** — cool room (18–20°C / 65–68°F) for deeper sleep
3. **Darkness** — complete blackout. Even small light exposure disrupts melatonin.
4. **No screens 60 min before bed** — blue light delays melatonin onset by 1–3 hours
5. **No caffeine after 12–2pm** — caffeine half-life is 5–7 hours
6. **No alcohol** — disrupts REM sleep severely even if it helps you fall asleep
7. **Magnesium glycinate (200–400mg before bed)** — improves sleep quality and duration
8. **Avoid large meals 2–3 hrs before bed** — digestion disrupts deep sleep stages

**Pre-bed protocol:**
- Wind-down routine: 30–60 min of dim lighting + reading
- Cold shower → body temperature drop → sleep onset acceleration`
            },
            {
                title: 'Super-Compensation & Deload',
                content: `**Super-compensation:** After a training stress, the body recovers and adapts to a HIGHER level than baseline within 24–72 hours. This is when strength and muscle gains are actually "locked in."

**Deload every 4–8 weeks:**
- Reduce volume by 40–50%
- Maintain intensity (weight on bar)
- Prevents cumulative fatigue buildup
- Allows connective tissue recovery (tendons/ligaments are slower to adapt than muscles)

**Active Recovery Methods:**
- Light Zone 2 walk: 20–30 min
- Mobility/stretching: 15–20 min
- Cold water exposure/contrast shower
- Foam rolling (reduces subjective soreness — evidence is moderate, but it works in practice)

**Indicators you need more recovery:**
- Performance regression for 2+ consecutive sessions
- Persistent muscle soreness (>72 hrs)
- Disrupted sleep
- Mood degradation, irritability`
            }
        ]
    },

    {
        id: 'supplements',
        name: 'Supplement Science',
        icon: '💊',
        color: '#00cec9',
        tagline: 'Evidence-based only. No gimmicks.',
        sections: [
            {
                title: 'Tier 1: Strongly Supported',
                content: `These supplements have robust peer-reviewed evidence supporting their efficacy:

**Creatine Monohydrate**
- Mechanism: Replenishes phosphocreatine stores → more ATP available for high-intensity work
- Benefit: +5–10% strength, +1–3 kg lean mass over time
- Dose: 3–5g/day (no loading required)
- Timing: Anytime (consistency matters, not timing)
- Safety: Extremely well-studied over 30+ years. No kidney damage in healthy individuals.

**Caffeine**
- Mechanism: Adenosine receptor antagonist → reduces perceived effort and fatigue
- Benefit: +3–7% strength performance, improved endurance, better focus
- Dose: 3–6 mg/kg bodyweight (pre-workout)
- Timing: 30–60 min before training
- ⚠️ Avoid after 1–2pm. Cycle off periodically to restore sensitivity.

**Protein Powder (Whey/Casein)**
- Not a magic supplement — just a convenient food source
- Whey: Fast-absorbing → ideal post-workout
- Casein: Slow-absorbing → ideal pre-bed
- Use to hit protein targets, not as a meal replacement strategy`
            },
            {
                title: 'Tier 2: Good Supporting Evidence',
                content: `**Beta-Alanine**
- Mechanism: Increases muscle carnosine → buffers lactic acid accumulation
- Benefit: Improved endurance in 60–240s efforts (useful for sets of 10–20 reps)
- Dose: 3.2–6.4g/day (split to reduce tingling)
- Note: Tingling (paresthesia) is harmless, not dangerous

**Omega-3 Fatty Acids (Fish Oil)**
- Mechanism: Reduces systemic inflammation, improves muscle protein synthesis sensitivity
- Benefit: Improved recovery, joint health, muscle protein synthesis (especially in older athletes)
- Dose: 2–4g EPA+DHA per day
- Source: High-quality fish oil or algae oil (vegan)

**Vitamin D3**
- 70–80% of indoor populations are deficient
- Roles: Testosterone production, immune function, bone health, muscle protein synthesis
- Dose: 2000–5000 IU/day (with K2 for calcium regulation)
- Test blood levels annually`
            },
            {
                title: 'Tier 3: Limited or Conditional Evidence',
                content: `**Citrulline Malate**
- Mechanism: Increases nitric oxide → improved blood flow
- Evidence: Some studies show improved endurance and pump, others show minimal effect
- Dose: 6–8g pre-workout
- Verdict: Worth trying at a low cost — may help with training volume

**HMB (β-Hydroxy β-Methylbutyrate)**
- Anti-catabolic — reduces muscle breakdown
- Evidence: Benefit mainly in untrained individuals or during severe caloric restriction
- Verdict: Marginal benefit, expensive

**What to SKIP entirely:**
❌ Testosterone boosters (no proven effect on natural testosterone)
❌ Fat burners (mostly caffeine + stimulants — dangerous at high doses)
❌ BCAAs if protein intake is already adequate (redundant and expensive)
❌ Glutamine (sufficient in a protein-adequate diet)
❌ Nitric oxide pills (inferior to actual citrulline)

**The True Supplement Stack That Works:**
Creatine + Protein (food-first) + Caffeine (pre-workout) + Vitamin D3 + Omega-3`
            }
        ]
    },

    {
        id: 'anatomy',
        name: 'Muscle Anatomy',
        icon: '🫀',
        color: '#ff7f50',
        tagline: 'Know your muscles. Train them better.',
        sections: [
            {
                title: 'How Muscles Contract',
                content: `**The Sliding Filament Theory** — the mechanism behind every rep you do.

Muscles are made of fibers → fibers contain myofibrils → myofibrils contain sarcomeres → sarcomeres contain actin (thin) and myosin (thick) filaments.

**The sequence:**
1. Brain sends signal via motor neurons
2. Acetylcholine released at neuromuscular junction
3. Action potential causes calcium release in muscle
4. Calcium binds troponin → TROPOMYOSIN moves aside
5. Myosin heads attach to actin binding sites
6. Myosin pulls actin inward (POWER STROKE) — muscle shortens
7. ATP detaches myosin head → cycle repeats

**Key insight:** You cannot selectively recruit individual fibers. Motor units (groups of fibers) are recruited together, from small to large (Henneman's Size Principle). This is why heavier loads recruit more muscle fibers than light loads.`
            },
            {
                title: 'Muscle Fiber Types',
                content: `**Type I — Slow Twitch (Oxidative):**
- Fatigue-resistant, smaller, denser mitochondria
- Best for: Endurance, high reps, prolonged activity
- Training stimulus: High volume, lighter loads
- Examples: Postural muscles (soleus, lower traps), marathon runners

**Type IIa — Fast Twitch (Oxidative-Glycolytic):**
- Intermediate — can be trained toward either endurance or power
- Best for: Hypertrophy, 6–20 rep range
- Most trainable for muscle growth

**Type IIx — Fast Twitch (Glycolytic):**
- Most powerful, fatigue fastest (anaerobic)
- Best for: Sprinting, 1-rep max lifting, power sports
- Training stimulus: Heavy loads, short sets, explosive movements

**Takeaway:** Most muscles are a mix. Train across multiple rep ranges to fully stimulate all fiber types.`
            },
            {
                title: 'Major Muscle Groups Overview',
                content: `**Upper Body — Anterior:**
- Pectorals: Chest pressing → horizontal push
- Anterior deltoid: Front raise → shoulder flexion
- Biceps brachii: Elbow flexion → curling movements
- Brachialis: Deep elbow flexor (under bicep — adds thickness)

**Upper Body — Posterior:**
- Latissimus dorsi: Shoulder adduction/extension → pulling movements
- Trapezius: 3-part muscle — elevation, retraction, depression of scapula
- Rhomboids: Scapular retraction → upper back health
- Posterior deltoid: Shoulder extension → rear delt flies
- Triceps brachii: Elbow extension → all pushing movements

**Lower Body:**
- Quadriceps (4 heads): Knee extension → squat, leg press
- Hamstrings (3 heads): Knee flexion + hip extension → deadlifts, leg curl
- Gluteus maximus: Hip extension → hip thrust, squat, deadlift
- Gluteus medius: Hip abduction → lateral stability, important for running
- Calves (gastro + soleus): Plantar flexion → every step

**Core:**
- Rectus abdominis: Spinal flexion → visual "six-pack"
- Obliques: Rotation + lateral flexion
- Transverse abdominis: Deep stability → the "inner belt"
- Erector spinae: Spinal extension → handles deadlift setup posture`
            }
        ]
    },

    {
        id: 'biomechanics',
        name: 'Biomechanics',
        icon: '⚙️',
        color: '#55efc4',
        tagline: 'Move right. Lift more. Get stronger.',
        sections: [
            {
                title: 'Leverage & Moment Arms',
                content: `**A moment arm is the perpendicular distance between a joint and the line of force.**

Longer moment arm = greater torque on that joint = more muscle has to work.

**Why this matters in training:**

**Squat:** Longer femurs (longer thighs) = longer moment arm on hips and knees = harder squat, more forward lean required. This is NOT bad form — it's anatomy.

**Bench press:** A slight arch reduces the moment arm on the shoulder by bringing the chest up to the bar. This is why competitive powerlifters arch. Safe when done correctly.

**Deadlift:** Taking slack out of the bar before pulling eliminates the jerk that would otherwise overload the lumbar spine at the start.

**Key principle:** The closer a weight is to your joint center, the less moment arm force — and the easier to lift. Efficiency in biomechanics is technique.`
            },
            {
                title: 'The Kinetic Chain',
                content: `**Open Kinetic Chain:** Distal segment (hand/foot) moves freely. Example: bicep curl, leg extension.
- More isolation, less stability requirement
- Less total muscle recruitment

**Closed Kinetic Chain:** Distal segment is fixed. Example: squat, push-up, deadlift.
- Forces travel through connected joints
- More total muscle recruitment
- Better functional carry-over
- Greater joint stability development

**Practical application:**
- For strength: Prioritize closed kinetic chain (squats, deadlifts, push-ups, rows)
- For isolation: Use open chain for peak contraction work (curls, flies, leg extensions)
- Best programming: COMBINE both — compound first, isolation second`
            },
            {
                title: 'Joint Angles & Muscle Activation',
                content: `**Peak muscle tension occurs when the muscle is at or near its optimal length — approximately mid-range.**

But recent research shows greatest HYPERTROPHIC signal occurs at the LENGTHENED position.

**Bench Press angle analysis:**
- 0° (flat): Sternal pec dominant
- 30–45° (incline): Clavicular (upper) pec dominant
- >60° (steep incline): Anterior delt becomes primary mover
- Decline: Most sternal pec activation but least practical range

**Squat depth analysis:**
- Quarter squat: Quad activation ~40%
- Parallel: ~75% quad activation
- Full depth (ass to grass): ~90%+ quad and glute activation
- Deeper = more stretch-mediated hypertrophy

**Verdict:** Range of motion directly determines which muscle region is activated and how much hypertrophic stimulus is generated. Never cut depth for comfort — fix the mobility issue instead.`
            }
        ]
    },

    {
        id: 'programming',
        name: 'Bodybuilding Programming',
        icon: '📋',
        color: '#fd79a8',
        tagline: 'Structure your training. Maximize results.',
        sections: [
            {
                title: 'Training Splits Compared',
                content: `**Full Body (3×/week):**
- Best for: Beginners, high-frequency practice
- Each session: 1–2 exercises per major muscle group
- Recovery: Rest days between sessions
- Example: Mon/Wed/Fri

**Upper/Lower (4×/week):**
- Best for: Intermediate lifters
- 2 upper days (push + pull balance), 2 lower days
- 2× frequency per muscle group
- Example: Mon/Tue/Thu/Fri

**Push/Pull/Legs (PPL 6×/week):**
- Best for: Intermediate–Advanced with high recovery
- Day 1: Chest, shoulders, triceps
- Day 2: Back, biceps, rear delts
- Day 3: Quads, hamstrings, glutes, calves
- Repeat twice/week

**Bro Split (5×/week):**
- 1 muscle group per day
- Lower frequency (1×/week per muscle) — suboptimal for hypertrophy
- Each muscle only gets 1 week of recovery — poor stimulus frequency
- Best for: Advanced lifters with high volume capacity`
            },
            {
                title: 'Exercise Order Principles',
                content: `**Rules of exercise sequencing:**

1. **Compound before isolation** — Multi-joint movements first when energy is highest
2. **Heavy before light** — Max effort while fresh
3. **Primary mover before secondary** — Bench before tricep pushdown, not after
4. **Free weight before machine** — Requires most stabilization and neural demand

**Sample Sequencing (Chest Day):**
1. Barbell Bench Press (primary compound)
2. Incline Dumbbell Press (secondary compound)
3. Dumbbell Fly (isolation — stretch focus)
4. Cable Fly (isolation — constant tension)
5. Pec Deck or Push-Up finisher (pump + metabolic stress)

**Rest Periods:**
| Goal | Rest Between Sets |
|------|------------------|
| Strength (1–5 reps) | 3–5 minutes |
| Hypertrophy (6–15 reps) | 60–120 seconds |
| Endurance (15–30 reps) | 30–60 seconds |`
            },
            {
                title: 'Periodization for Naturals',
                content: `**Natural athletes must periodize more carefully than enhanced athletes** — recovery capacity is fixed by your hormonal environment.

**Linear Periodization (Beginner–Intermediate):**
Weeks 1–4: 4×12 (hypertrophy)
Weeks 5–8: 4×8 (strength)
Weeks 9–12: 5×5 (strength)
Week 13: Deload

**Block Periodization (Advanced):**
- Accumulation Block (4 weeks): High volume, moderate intensity
- Intensification Block (4 weeks): Lower volume, higher intensity
- Peaking Block (2 weeks): Low volume, max intensity
- Deload (1 week)
- Repeat

**Key principles:**
- Never increase volume AND intensity simultaneously
- Add sets before adding weight when in doubt
- Deload is not optional — it is part of the program
- Track every session (weight, reps, RPE) — data drives decisions`
            }
        ]
    },

    {
        id: 'powerlifting',
        name: 'Powerlifting Basics',
        icon: '🥇',
        color: '#e17055',
        tagline: 'Total body strength. Maximum force.',
        sections: [
            {
                title: 'The Sport of Powerlifting',
                content: `**Three lifts. Maximum effort. Objective strength measurement.**

Powerlifting competitions measure your maximum single-rep effort in:
1. **Back Squat** — must hit depth (hip crease below knee)
2. **Bench Press** — must touch the chest, wait for command to press
3. **Deadlift** — must fully lock out (hips and knees extended, shoulders back)

**Your total** (squat + bench + deadlift combined) determines your placement within your:
- Weight class (e.g. 74kg, 83kg, 93kg, 120kg+)
- Age category (sub-junior, junior, open, masters)

**Equipment classes:**
- Raw: Singlet, belt, knee sleeves only
- Equipped: Squat suit, bench shirt, knee wraps allowed`
            },
            {
                title: 'Beginner Powerlifting Programs',
                content: `**StrongLifts 5×5 (Absolute Beginner):**
- Squat, Bench, Deadlift — 5×5 or 1×5
- Add weight every session
- 3 days/week, alternating A/B workouts

**Starting Strength (Beginner):**
- Squat 3×5, Bench/Press 3×5, Deadlift 1×5
- Simple, proven, heavy
- Linear progression until stall

**Texas Method (Intermediate):**
- Monday: High volume (5×5)
- Wednesday: Recovery (3×5 light)
- Friday: Intensity day (1×5 personal record)

**Powerbuilding (Hybrid — Recommended for Aesthetics + Strength):**
- Use powerlifting movements as the foundation
- Add hypertrophy accessory work for aesthetics
- Best of both worlds: Strength + size`
            }
        ]
    },

    {
        id: 'core',
        name: 'Core & Stability',
        icon: '🎯',
        color: '#b2bec3',
        tagline: 'Build an unbreakable foundation.',
        sections: [
            {
                title: 'Core Anatomy & Function',
                content: `**The core is not just abs.** It is a 360° cylinder of muscles surrounding the spine:

**Anterior:** Rectus abdominis, transverse abdominis
**Lateral:** Internal and external obliques, quadratus lumborum
**Posterior:** Multifidus, erector spinae
**Superior:** Diaphragm
**Inferior:** Pelvic floor muscles

**The core functions as a stability system — not a movement system.**
Its primary job is to resist movement, not create it.

**Three core stability tasks:**
1. Anti-extension: Resisting the lower back from arching (plank, ab wheel)
2. Anti-rotation: Resisting rotation under load (Pallof press, single-arm row)
3. Anti-lateral flexion: Resisting side-bending (suitcase carry, side plank)`
            },
            {
                title: 'Intra-Abdominal Pressure (IAP)',
                content: `**IAP is the pressure inside your abdominal cavity — the real secret to a strong core under heavy load.**

**The Valsalva Maneuver:**
- Take a DEEP breath into your belly (360° expansion — front AND sides AND back)
- Hold the breath and brace as if about to take a punch
- This creates intra-abdominal pressure that acts as an INTERNAL SUPPORT COLUMN for the spine

**Who needs this:**
- Everyone doing heavy squats, deadlifts, overhead press, or bent rows
- Anyone with a history of lower back issues

**How to learn it:**
1. Place hands on your belly and sides
2. Breathe into your hands — feel them expand 360°
3. Hold that breath and contract every muscle in your core
4. This is the brace — hold it for the duration of the rep

**⚠️ Do NOT hold for multiple reps without breathing — breathe between reps.`
            }
        ]
    }
];
