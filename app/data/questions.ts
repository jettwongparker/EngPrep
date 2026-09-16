export const questions = [
  {
    topic: "Mechanics",
    difficulty: "Easy",
    question:
      "Where does maximum bending stress occur in a cantilever beam with a point load at the free end?",
    choices: [
      "A) Free end",
      "B) Midpoint",
      "C) Fixed support",
      "D) Uniform everywhere"
    ],
    correct: "C",
    explanation:
      "Maximum bending stress occurs at the fixed support because bending moment is largest there."
  },

  {
    topic: "Aerospace",
    difficulty: "Easy",
    question:
      "Why are quaternions often preferred over Euler angles?",
    choices: [
      "A) Smaller memory",
      "B) Avoid gimbal lock",
      "C) Easier visualization",
      "D) Faster sensors"
    ],
    correct: "B",
    explanation:
      "Quaternions avoid singularities such as gimbal lock."
  },

  {
  topic: "Electrical",
  difficulty: "Easy",
  question:
    "In a series circuit, what is the same through every component?",
  choices: [
    "A) Voltage",
    "B) Current",
    "C) Resistance",
    "D) Power"
  ],
  correct: "B",
  explanation:
    "Current is the same through all components in a series circuit."
},

{
  topic: "Controls",
  difficulty: "Easy",
  question:
    "What does increasing proportional gain generally do in a feedback control system?",
  choices: [
    "A) Slows the response",
    "B) Reduces responsiveness",
    "C) Makes the system respond more aggressively",
    "D) Removes all steady-state error"
  ],
  correct: "C",
  explanation:
    "Increasing proportional gain usually makes the system respond more aggressively, but too much gain can cause overshoot or instability."
},
{
  topic: "Mechanics",
  difficulty: "Easy",
  question: "What is Hooke's Law?",
  choices: [
    "A) Stress is proportional to strain",
    "B) Force equals mass times acceleration",
    "C) Energy is conserved",
    "D) Pressure equals force per area"
  ],
  correct: "A",
  explanation:
    "Hooke's Law states that stress is proportional to strain within the elastic region."
},

{
  topic: "Mechanics",
  difficulty: "Easy",
  question: "What happens when stress exceeds yield strength?",
  choices: [
    "A) Elastic deformation continues",
    "B) Plastic deformation begins",
    "C) Material immediately fractures",
    "D) Strain becomes zero"
  ],
  correct: "B",
  explanation:
    "Exceeding yield strength causes permanent plastic deformation."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "What does a factor of safety represent?",
  choices: [
    "A) Margin between design load and failure load",
    "B) Maximum operating temperature",
    "C) Elastic modulus",
    "D) Material density"
  ],
  correct: "A",
  explanation:
    "Factor of safety provides a margin between expected loads and failure conditions."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "What is the primary purpose of a free body diagram?",
  choices: [
    "A) Determine material properties",
    "B) Show forces acting on a body",
    "C) Compute stress directly",
    "D) Measure strain"
  ],
  correct: "B",
  explanation:
    "Free body diagrams isolate components and visualize applied forces."
},

{
  topic: "Aerospace",
  difficulty: "Easy",
  question: "What generates lift on an aircraft wing?",
  choices: [
    "A) Pressure difference across the wing",
    "B) Weight",
    "C) Gravity",
    "D) Structural stiffness"
  ],
  correct: "A",
  explanation:
    "Lift primarily results from pressure differences and momentum changes in airflow."
},

{
  topic: "Aerospace",
  difficulty: "Easy",
  question: "What does increasing angle of attack generally do?",
  choices: [
    "A) Decreases lift",
    "B) Increases lift up to stall",
    "C) Removes drag",
    "D) Reduces wing area"
  ],
  correct: "B",
  explanation:
    "Lift increases with angle of attack until the wing stalls."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "What is specific impulse used to measure?",
  choices: [
    "A) Engine fuel efficiency",
    "B) Wing loading",
    "C) Aircraft stability",
    "D) Lift coefficient"
  ],
  correct: "A",
  explanation:
    "Specific impulse measures propulsion efficiency."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "Why are quaternions commonly used in spacecraft attitude control?",
  choices: [
    "A) Lower computational cost only",
    "B) Avoid gimbal lock",
    "C) Reduce mass",
    "D) Increase thrust"
  ],
  correct: "B",
  explanation:
    "Quaternions avoid singularities like gimbal lock and provide stable attitude representation."
},

{
  topic: "Electrical",
  difficulty: "Easy",
  question: "What remains constant in a series circuit?",
  choices: [
    "A) Voltage",
    "B) Current",
    "C) Resistance",
    "D) Power"
  ],
  correct: "B",
  explanation:
    "Current is identical through all components in a series circuit."
},

{
  topic: "Electrical",
  difficulty: "Easy",
  question: "What is Ohm's Law?",
  choices: [
    "A) V = IR",
    "B) P = IV²",
    "C) F = ma",
    "D) E = mc²"
  ],
  correct: "A",
  explanation:
    "Ohm's Law relates voltage, current, and resistance."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What does a capacitor resist?",
  choices: [
    "A) Voltage changes",
    "B) Current changes",
    "C) Resistance changes",
    "D) Power changes"
  ],
  correct: "A",
  explanation:
    "Capacitors oppose sudden voltage changes."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What is the purpose of an operational amplifier?",
  choices: [
    "A) Increase signal power",
    "B) Amplify voltage differences",
    "C) Store charge",
    "D) Reduce resistance"
  ],
  correct: "B",
  explanation:
    "Op-amps amplify voltage differences between inputs."
},

{
  topic: "Controls",
  difficulty: "Easy",
  question: "What is the purpose of feedback in a control system?",
  choices: [
    "A) Increase hardware cost",
    "B) Reduce error",
    "C) Increase power consumption",
    "D) Eliminate sensors"
  ],
  correct: "B",
  explanation:
    "Feedback helps reduce error between desired and actual output."
},

{
  topic: "Controls",
  difficulty: "Easy",
  question: "What does proportional gain primarily affect?",
  choices: [
    "A) System responsiveness",
    "B) Sensor accuracy",
    "C) Hardware size",
    "D) Sampling rate"
  ],
  correct: "A",
  explanation:
    "Increasing proportional gain typically increases responsiveness."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "What is steady-state error?",
  choices: [
    "A) Initial transient response",
    "B) Difference between desired and actual output after settling",
    "C) Maximum overshoot",
    "D) Measurement noise"
  ],
  correct: "B",
  explanation:
    "Steady-state error is the remaining error after the system settles."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "What does derivative gain primarily help reduce?",
  choices: [
    "A) Steady-state error",
    "B) Overshoot",
    "C) Sensor noise",
    "D) System bandwidth"
  ],
  correct: "B",
  explanation:
    "Derivative gain adds damping and typically reduces overshoot."
},
{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "According to beam theory, bending stress is highest where?",
  choices: [
    "A) Neutral axis",
    "B) Outer fibers",
    "C) Beam center",
    "D) Mid-thickness"
  ],
  correct: "B",
  explanation:
    "Bending stress is zero at the neutral axis and largest at the outermost fibers."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "What does a Mohr's Circle represent?",
  choices: [
    "A) Thermal expansion",
    "B) Stress transformation",
    "C) Beam deflection",
    "D) Fluid flow"
  ],
  correct: "B",
  explanation:
    "Mohr's Circle visualizes stress transformations and principal stresses."
},

{
  topic: "Mechanics",
  difficulty: "Hard",
  question: "What primarily causes fatigue failure?",
  choices: [
    "A) One large static load",
    "B) Repeated cyclic loading",
    "C) High temperature only",
    "D) Excessive stiffness"
  ],
  correct: "B",
  explanation:
    "Fatigue failure typically occurs due to repeated cyclic loading."
},

{
  topic: "Mechanics",
  difficulty: "Hard",
  question: "Increasing the moment of inertia of a beam generally does what?",
  choices: [
    "A) Increases deflection",
    "B) Reduces stiffness",
    "C) Reduces deflection",
    "D) Increases stress"
  ],
  correct: "C",
  explanation:
    "Beam deflection decreases as the moment of inertia increases."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "What does the center of gravity affect most directly?",
  choices: [
    "A) Aircraft stability",
    "B) Fuel consumption only",
    "C) Wing area",
    "D) Engine thrust"
  ],
  correct: "A",
  explanation:
    "Center of gravity strongly influences aircraft stability and control."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "What happens if the center of gravity shifts too far aft?",
  choices: [
    "A) Stability increases",
    "B) Aircraft becomes less stable",
    "C) Lift decreases to zero",
    "D) Drag disappears"
  ],
  correct: "B",
  explanation:
    "An aft center of gravity reduces stability and can make the aircraft difficult to control."
},

{
  topic: "Aerospace",
  difficulty: "Hard",
  question: "What is the purpose of a Hohmann transfer?",
  choices: [
    "A) Maximize lift",
    "B) Transfer efficiently between orbits",
    "C) Increase spacecraft mass",
    "D) Stabilize an aircraft"
  ],
  correct: "B",
  explanation:
    "A Hohmann transfer minimizes energy required to move between circular orbits."
},

{
  topic: "Aerospace",
  difficulty: "Hard",
  question: "What does delta-V represent?",
  choices: [
    "A) Velocity error",
    "B) Change in velocity capability",
    "C) Engine pressure",
    "D) Orbital radius"
  ],
  correct: "B",
  explanation:
    "Delta-V measures the total change in velocity available for maneuvers."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What happens to equivalent resistance in a parallel circuit?",
  choices: [
    "A) Increases",
    "B) Remains constant",
    "C) Becomes greater than largest resistor",
    "D) Decreases"
  ],
  correct: "D",
  explanation:
    "Equivalent resistance decreases when resistors are added in parallel."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What does an inductor resist?",
  choices: [
    "A) Voltage changes",
    "B) Current changes",
    "C) Resistance changes",
    "D) Frequency changes"
  ],
  correct: "B",
  explanation:
    "Inductors oppose sudden changes in current."
},

{
  topic: "Electrical",
  difficulty: "Hard",
  question: "What is aliasing in signal processing?",
  choices: [
    "A) Signal amplification",
    "B) Distortion from insufficient sampling",
    "C) Increased frequency resolution",
    "D) Voltage saturation"
  ],
  correct: "B",
  explanation:
    "Aliasing occurs when a signal is sampled below the Nyquist frequency."
},

{
  topic: "Electrical",
  difficulty: "Hard",
  question: "What is the Nyquist sampling criterion?",
  choices: [
    "A) Sample at half the signal frequency",
    "B) Sample above twice the highest frequency",
    "C) Sample once per cycle",
    "D) Sample below bandwidth"
  ],
  correct: "B",
  explanation:
    "Sampling frequency must exceed twice the highest signal frequency."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "What does integral gain primarily reduce?",
  choices: [
    "A) Overshoot",
    "B) Steady-state error",
    "C) Noise",
    "D) Bandwidth"
  ],
  correct: "B",
  explanation:
    "Integral action accumulates error and reduces steady-state error."
},

{
  topic: "Controls",
  difficulty: "Hard",
  question: "What does a pole in the right-half plane indicate?",
  choices: [
    "A) Stable behavior",
    "B) Neutral stability",
    "C) Instability",
    "D) Reduced bandwidth"
  ],
  correct: "C",
  explanation:
    "Poles in the right-half plane indicate an unstable system."
},

{
  topic: "Controls",
  difficulty: "Hard",
  question: "What is the purpose of a Bode plot?",
  choices: [
    "A) Analyze frequency response",
    "B) Measure beam stress",
    "C) Determine fuel efficiency",
    "D) Compute orbital transfers"
  ],
  correct: "A",
  explanation:
    "Bode plots characterize gain and phase versus frequency."
},

{
  topic: "Controls",
  difficulty: "Hard",
  question: "What does increasing phase margin generally improve?",
  choices: [
    "A) Instability",
    "B) System robustness",
    "C) Sensor accuracy",
    "D) Sampling rate"
  ],
  correct: "B",
  explanation:
    "Larger phase margin generally improves stability robustness."
},
{
  topic: "Mechanics",
  difficulty: "Hard",
  question: "What happens to stress concentration around a sharp corner?",
  choices: [
    "A) It decreases",
    "B) It remains unchanged",
    "C) It increases",
    "D) It becomes zero"
  ],
  correct: "C",
  explanation:
    "Sharp corners create stress concentrations which increase local stresses."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "What primarily causes an aircraft stall?",
  choices: [
    "A) Excessive speed",
    "B) Flow separation over the wing",
    "C) Insufficient thrust",
    "D) High altitude"
  ],
  correct: "B",
  explanation:
    "A stall occurs when airflow separates from the wing surface."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "What is Mach number?",
  choices: [
    "A) Aircraft mass divided by thrust",
    "B) Speed relative to the speed of sound",
    "C) Lift divided by drag",
    "D) Dynamic pressure ratio"
  ],
  correct: "B",
  explanation:
    "Mach number is the ratio of velocity to local speed of sound."
},

{
  topic: "Aerospace",
  difficulty: "Hard",
  question: "What does C3 represent in orbital mechanics?",
  choices: [
    "A) Orbital altitude",
    "B) Characteristic energy",
    "C) Specific impulse",
    "D) Transfer time"
  ],
  correct: "B",
  explanation:
    "C3 is characteristic energy and represents excess launch energy."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What is Kirchhoff's Current Law?",
  choices: [
    "A) Voltage drops equal resistance",
    "B) Sum of currents entering equals sum leaving",
    "C) Current equals voltage divided by resistance",
    "D) Power is conserved"
  ],
  correct: "B",
  explanation:
    "KCL states that current entering a node equals current leaving it."
},

{
  topic: "Electrical",
  difficulty: "Hard",
  question: "What is the purpose of a low-pass filter?",
  choices: [
    "A) Remove low frequencies",
    "B) Allow high frequencies only",
    "C) Pass low frequencies and attenuate high frequencies",
    "D) Increase signal power"
  ],
  correct: "C",
  explanation:
    "Low-pass filters allow lower frequencies while reducing higher-frequency components."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "What is overshoot in a control system?",
  choices: [
    "A) Output exceeding desired value",
    "B) Steady-state error",
    "C) Sensor delay",
    "D) Noise amplification"
  ],
  correct: "A",
  explanation:
    "Overshoot occurs when system response exceeds the desired output."
},

{
  topic: "Controls",
  difficulty: "Hard",
  question: "What is a transfer function?",
  choices: [
    "A) Ratio of output to input in Laplace domain",
    "B) Change in system energy",
    "C) Difference between signals",
    "D) System damping coefficient"
  ],
  correct: "A",
  explanation:
    "Transfer functions describe system input-output relationships in the Laplace domain."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "What property measures resistance to deformation?",
  choices: [
    "A) Density",
    "B) Elastic modulus",
    "C) Thermal conductivity",
    "D) Specific heat"
  ],
  correct: "B",
  explanation:
    "Elastic modulus measures material stiffness and resistance to deformation."
},

{
  topic: "Aerospace",
  difficulty: "Hard",
  question: "Why are reaction wheels used on spacecraft?",
  choices: [
    "A) Increase thrust",
    "B) Control attitude without propellant",
    "C) Reduce drag",
    "D) Increase orbital velocity"
  ],
  correct: "B",
  explanation:
    "Reaction wheels control spacecraft orientation using angular momentum exchange."
},

{
  topic: "Behavioral",
  difficulty: "Easy",
  question: "When answering 'Tell me about yourself,' what should you focus on?",
  choices: [
    "A) Personal hobbies only",
    "B) Chronological life story",
    "C) Relevant experiences and goals",
    "D) Family background"
  ],
  correct: "C",
  explanation:
    "Interviewers usually want a concise summary of relevant experience and direction."
},

{
  topic: "Behavioral",
  difficulty: "Medium",
  question: "When discussing a difficult project, what interview structure works best?",
  choices: [
    "A) STAR method",
    "B) Random storytelling",
    "C) Technical equations only",
    "D) Start with conclusions"
  ],
  correct: "A",
  explanation:
    "STAR (Situation, Task, Action, Result) provides clear and structured responses."
},

{
  topic: "Behavioral",
  difficulty: "Medium",
  question: "If an interviewer asks about failure, what should you emphasize?",
  choices: [
    "A) Blaming teammates",
    "B) Hiding mistakes",
    "C) Lessons learned and improvement",
    "D) Avoid answering"
  ],
  correct: "C",
  explanation:
    "Interviewers typically value growth, accountability, and reflection."
},

{
  topic: "Behavioral",
  difficulty: "Hard",
  question: "If two team members strongly disagree on an engineering approach, what is generally best?",
  choices: [
    "A) Ignore the disagreement",
    "B) Let seniority decide automatically",
    "C) Use data and technical trade studies",
    "D) Choose randomly"
  ],
  correct: "C",
  explanation:
    "Engineering decisions are usually strongest when based on objective trade studies and data."
}
,

// ==================== ADDITIONAL MECHANICS QUESTIONS ====================

{
  topic: "Mechanics",
  difficulty: "Easy",
  question: "For a rigid body to be in static equilibrium, what must be true?",
  choices: [
    "A) Only the net force must be zero",
    "B) Only the net moment must be zero",
    "C) Both the net force and net moment must be zero",
    "D) The body must have zero mass"
  ],
  correct: "C",
  explanation:
    "Static equilibrium requires both the sum of external forces and the sum of external moments to be zero."
},

{
  topic: "Mechanics",
  difficulty: "Easy",
  question: "What is the physical meaning of Young's modulus?",
  choices: [
    "A) Resistance to elastic deformation",
    "B) Resistance to heat flow",
    "C) Energy absorbed before fracture",
    "D) Resistance to corrosion"
  ],
  correct: "A",
  explanation:
    "Young's modulus is the slope of the linear elastic stress-strain curve and measures material stiffness."
},

{
  topic: "Mechanics",
  difficulty: "Easy",
  question: "Which mode of heat transfer can occur through a vacuum?",
  choices: [
    "A) Conduction only",
    "B) Convection only",
    "C) Radiation",
    "D) Conduction and convection only"
  ],
  correct: "C",
  explanation:
    "Thermal radiation is electromagnetic energy and does not require a material medium."
},

{
  topic: "Mechanics",
  difficulty: "Easy",
  question: "What does the coefficient of friction relate?",
  choices: [
    "A) Friction force to normal force",
    "B) Normal force to weight only",
    "C) Stress to strain",
    "D) Torque to angular acceleration"
  ],
  correct: "A",
  explanation:
    "In the classical dry-friction model, the limiting friction force is proportional to the normal force through the coefficient of friction."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "Why is an I-beam efficient at resisting bending about its strong axis?",
  choices: [
    "A) Most material is placed near the neutral axis",
    "B) Most material is placed far from the neutral axis",
    "C) Its cross-sectional area is always larger than a solid beam",
    "D) It eliminates shear stress"
  ],
  correct: "B",
  explanation:
    "Placing material farther from the neutral axis increases the second moment of area, improving bending stiffness and reducing bending stress for a given moment."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "For an ideal undamped single-degree-of-freedom mass-spring system, what happens to natural frequency if stiffness increases while mass remains constant?",
  choices: [
    "A) It decreases",
    "B) It remains unchanged",
    "C) It increases",
    "D) It becomes zero"
  ],
  correct: "C",
  explanation:
    "Natural frequency is proportional to the square root of stiffness divided by mass, so increasing stiffness raises the natural frequency."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "What is resonance in a mechanical system?",
  choices: [
    "A) A response caused only by static loading",
    "B) A large response when forcing frequency is near a natural frequency",
    "C) Permanent deformation after yielding",
    "D) Complete elimination of vibration"
  ],
  correct: "B",
  explanation:
    "Resonance occurs when excitation is near a natural frequency, which can produce a large vibration response, especially when damping is low."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "For steady incompressible flow through a pipe that narrows, what generally happens to flow velocity?",
  choices: [
    "A) It decreases",
    "B) It increases",
    "C) It becomes zero",
    "D) It is independent of area"
  ],
  correct: "B",
  explanation:
    "Conservation of mass requires the product of cross-sectional area and average velocity to remain constant for steady incompressible flow."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "What does Reynolds number primarily compare in a fluid flow?",
  choices: [
    "A) Pressure forces to gravity forces",
    "B) Inertial effects to viscous effects",
    "C) Thermal energy to kinetic energy",
    "D) Lift to drag"
  ],
  correct: "B",
  explanation:
    "Reynolds number measures the relative importance of inertial and viscous effects and helps characterize laminar versus turbulent behavior."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "In a simple tensile test, Poisson's ratio relates which quantities?",
  choices: [
    "A) Axial stress and axial strain",
    "B) Lateral strain and axial strain",
    "C) Shear stress and shear strain",
    "D) Yield stress and ultimate stress"
  ],
  correct: "B",
  explanation:
    "Poisson's ratio is the negative ratio of transverse strain to axial strain under uniaxial loading."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "What does the first law of thermodynamics express for a closed system?",
  choices: [
    "A) Conservation of energy",
    "B) Conservation of momentum only",
    "C) Entropy must always remain constant",
    "D) Pressure must equal temperature"
  ],
  correct: "A",
  explanation:
    "The first law is an energy balance: changes in a system's energy result from heat transfer and work interactions."
},

{
  topic: "Mechanics",
  difficulty: "Medium",
  question: "Why are fillets commonly added at geometric transitions in mechanical parts?",
  choices: [
    "A) To increase stress concentration",
    "B) To reduce local stress concentration",
    "C) To eliminate all bending",
    "D) To make Young's modulus larger"
  ],
  correct: "B",
  explanation:
    "A gradual radius reduces the severity of abrupt geometry changes and therefore lowers local stress concentration."
},

{
  topic: "Mechanics",
  difficulty: "Hard",
  question: "A slender column is susceptible to Euler buckling. Which change most directly increases its ideal critical buckling load?",
  choices: [
    "A) Increasing its effective length",
    "B) Decreasing its elastic modulus",
    "C) Increasing its second moment of area",
    "D) Increasing its thermal conductivity"
  ],
  correct: "C",
  explanation:
    "Euler critical load is proportional to EI and inversely proportional to effective length squared, so increasing the second moment of area increases buckling resistance."
},

{
  topic: "Mechanics",
  difficulty: "Hard",
  question: "At a point in plane stress, principal planes are characterized by what condition?",
  choices: [
    "A) Normal stress is always zero",
    "B) Shear stress is zero",
    "C) Von Mises stress is zero",
    "D) Hydrostatic stress is maximum"
  ],
  correct: "B",
  explanation:
    "Principal stresses act on orientations where the shear stress component is zero."
},

{
  topic: "Mechanics",
  difficulty: "Hard",
  question: "Why does adding damping near resonance reduce the peak vibration amplitude of a forced oscillator?",
  choices: [
    "A) It removes the system's mass",
    "B) It dissipates mechanical energy",
    "C) It makes stiffness infinite",
    "D) It eliminates the forcing function"
  ],
  correct: "B",
  explanation:
    "Damping dissipates energy from the oscillating system, limiting the response amplitude near resonance."
},

{
  topic: "Mechanics",
  difficulty: "Hard",
  question: "For a ductile material under multiaxial loading, what is the von Mises criterion commonly used to predict?",
  choices: [
    "A) Onset of yielding",
    "B) Thermal expansion",
    "C) Natural frequency",
    "D) Fluid cavitation"
  ],
  correct: "A",
  explanation:
    "The von Mises criterion compares the multiaxial stress state with a material's uniaxial yield strength to estimate yielding."
},

{
  topic: "Mechanics",
  difficulty: "Hard",
  question: "In fully developed laminar flow through a circular pipe, where is the fluid velocity highest?",
  choices: [
    "A) At the wall",
    "B) At the centerline",
    "C) Uniformly everywhere",
    "D) Halfway between the wall and centerline only"
  ],
  correct: "B",
  explanation:
    "The no-slip condition makes velocity zero at the wall, while the parabolic laminar velocity profile reaches its maximum at the centerline."
},

{
  topic: "Mechanics",
  difficulty: "Hard",
  question: "For a beam under pure bending, why is normal stress zero at the neutral axis?",
  choices: [
    "A) The bending moment is zero there",
    "B) Longitudinal strain is zero there",
    "C) The elastic modulus becomes zero there",
    "D) Shear force is always maximum there"
  ],
  correct: "B",
  explanation:
    "In classical beam bending, longitudinal strain varies linearly through the depth and is zero at the neutral axis, so the corresponding normal stress is zero."
},

// ==================== ADDITIONAL AEROSPACE QUESTIONS ====================

{
  topic: "Aerospace",
  difficulty: "Easy",
  question: "What does the lift-to-drag ratio indicate?",
  choices: [
    "A) Aerodynamic efficiency",
    "B) Engine temperature",
    "C) Structural stiffness",
    "D) Fuel density"
  ],
  correct: "A",
  explanation:
    "Lift-to-drag ratio measures how much useful lift is produced relative to aerodynamic drag."
},

{
  topic: "Aerospace",
  difficulty: "Easy",
  question: "Which primary flight control surface produces roll on a conventional airplane?",
  choices: [
    "A) Rudder",
    "B) Elevator",
    "C) Ailerons",
    "D) Flaps"
  ],
  correct: "C",
  explanation:
    "Differential aileron deflection changes lift on the two wings and creates a rolling moment."
},

{
  topic: "Aerospace",
  difficulty: "Easy",
  question: "What is the primary purpose of an aircraft elevator?",
  choices: [
    "A) Control pitch",
    "B) Control yaw",
    "C) Control roll",
    "D) Increase engine thrust"
  ],
  correct: "A",
  explanation:
    "The elevator changes the aircraft's pitching moment and is a primary longitudinal control surface."
},

{
  topic: "Aerospace",
  difficulty: "Easy",
  question: "What is dynamic pressure proportional to?",
  choices: [
    "A) Density times velocity squared",
    "B) Density divided by velocity",
    "C) Temperature times altitude only",
    "D) Mach number divided by pressure"
  ],
  correct: "A",
  explanation:
    "Dynamic pressure is one-half density times velocity squared, so it increases strongly with airspeed."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "Why does induced drag generally decrease as an aircraft flies faster at the same weight in steady level flight?",
  choices: [
    "A) Less lift coefficient is required",
    "B) Parasite drag becomes zero",
    "C) Air density always increases",
    "D) Wing area increases"
  ],
  correct: "A",
  explanation:
    "At higher speed, the required lift can be produced at a lower lift coefficient, reducing induced drag."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "What is the primary purpose of wing sweep on a high-speed aircraft?",
  choices: [
    "A) Delay compressibility effects associated with transonic flow",
    "B) Eliminate induced drag at all speeds",
    "C) Make the aircraft statically unstable",
    "D) Eliminate the need for a vertical tail"
  ],
  correct: "A",
  explanation:
    "Sweep reduces the airflow component normal to the leading edge and can delay important compressibility effects to higher freestream Mach numbers."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "For positive longitudinal static stability, where is the center of gravity generally located relative to the neutral point?",
  choices: [
    "A) Aft of the neutral point",
    "B) Forward of the neutral point",
    "C) Exactly at the aerodynamic center in all cases",
    "D) Its location is unrelated to stability"
  ],
  correct: "B",
  explanation:
    "A conventional aircraft has positive static margin when its center of gravity lies forward of the neutral point."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "What does the rocket equation show most directly?",
  choices: [
    "A) Delta-V depends logarithmically on mass ratio",
    "B) Lift depends only on wing area",
    "C) Orbital period is independent of radius",
    "D) Drag is independent of velocity"
  ],
  correct: "A",
  explanation:
    "The Tsiolkovsky rocket equation relates achievable delta-V to effective exhaust velocity and the logarithm of initial-to-final mass ratio."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "For a circular orbit, what happens to orbital speed as orbital radius increases?",
  choices: [
    "A) It increases",
    "B) It decreases",
    "C) It remains constant",
    "D) It becomes independent of gravity"
  ],
  correct: "B",
  explanation:
    "Circular orbital speed is proportional to the inverse square root of orbital radius, so higher circular orbits have lower orbital speed."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "What is the primary function of a spacecraft star tracker?",
  choices: [
    "A) Measure attitude using observed star patterns",
    "B) Produce propulsion",
    "C) Measure propellant mass directly",
    "D) Generate electrical power"
  ],
  correct: "A",
  explanation:
    "Star trackers compare observed star fields with a catalog to provide precise spacecraft attitude information."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "Why is a converging-diverging nozzle used in many rocket engines?",
  choices: [
    "A) To accelerate compressible exhaust to supersonic speed under appropriate conditions",
    "B) To eliminate combustion",
    "C) To reduce exhaust velocity to zero",
    "D) To make chamber pressure equal atmospheric pressure at all altitudes"
  ],
  correct: "A",
  explanation:
    "A converging-diverging nozzle chokes the flow at the throat and can expand it to supersonic velocity downstream."
},

{
  topic: "Aerospace",
  difficulty: "Medium",
  question: "What is the purpose of trim in steady aircraft flight?",
  choices: [
    "A) Establish a condition with no sustained control force or moment required from the pilot",
    "B) Maximize stall angle",
    "C) Eliminate all aerodynamic drag",
    "D) Increase structural weight"
  ],
  correct: "A",
  explanation:
    "Trim balances forces and moments for the desired steady flight condition so continuous pilot control force is minimized."
},

{
  topic: "Aerospace",
  difficulty: "Hard",
  question: "A spacecraft in a circular orbit performs a short prograde burn. Immediately after the burn, what point of the new elliptical orbit is the spacecraft near?",
  choices: [
    "A) Apoapsis",
    "B) Periapsis",
    "C) The new orbit's center",
    "D) A Lagrange point"
  ],
  correct: "B",
  explanation:
    "A prograde burn increases velocity at the burn point and raises the opposite side of the orbit, making the burn location the periapsis of the new ellipse."
},

{
  topic: "Aerospace",
  difficulty: "Hard",
  question: "Why is a plane-change maneuver generally expensive in delta-V at high orbital speed?",
  choices: [
    "A) The required velocity-vector change grows with orbital speed",
    "B) Gravity disappears at high speed",
    "C) Spacecraft mass becomes infinite",
    "D) Specific impulse becomes zero"
  ],
  correct: "A",
  explanation:
    "A plane change rotates the velocity vector; for a given change in inclination, the required delta-V increases with the magnitude of orbital velocity."
},

{
  topic: "Aerospace",
  difficulty: "Hard",
  question: "In a conventional statically stable aircraft, what pitching-moment response should a small increase in angle of attack tend to produce?",
  choices: [
    "A) A restoring nose-down moment",
    "B) A destabilizing nose-up moment",
    "C) No pitching moment under any condition",
    "D) A pure rolling moment"
  ],
  correct: "A",
  explanation:
    "Positive longitudinal static stability requires the aircraft to generate a restoring pitching tendency after a small angle-of-attack disturbance."
},

{
  topic: "Aerospace",
  difficulty: "Hard",
  question: "What is the Oberth effect?",
  choices: [
    "A) A propulsive burn produces a larger change in orbital energy when performed at high speed",
    "B) Aerodynamic lift increases linearly forever with angle of attack",
    "C) Spacecraft attitude changes without angular momentum exchange",
    "D) Rocket thrust becomes independent of exhaust velocity"
  ],
  correct: "A",
  explanation:
    "For the same impulsive delta-V, a burn made where orbital speed is high produces a larger change in specific orbital energy."
},

{
  topic: "Aerospace",
  difficulty: "Hard",
  question: "Why can a reaction wheel eventually require momentum unloading?",
  choices: [
    "A) Persistent external torques can drive the wheel toward its speed limit",
    "B) Reaction wheels continuously consume propellant",
    "C) The spacecraft loses all angular momentum after one maneuver",
    "D) The wheel cannot generate torque at low speed"
  ],
  correct: "A",
  explanation:
    "Environmental torques can accumulate angular momentum in the wheel until it approaches saturation, requiring another actuator to unload momentum."
},

{
  topic: "Aerospace",
  difficulty: "Hard",
  question: "For a subsonic aircraft at constant weight and altitude, flying substantially slower than the speed for maximum lift-to-drag ratio generally causes what?",
  choices: [
    "A) Induced drag to become increasingly important",
    "B) Induced drag to vanish",
    "C) Parasite drag to become the only drag source",
    "D) Required lift to become zero"
  ],
  correct: "A",
  explanation:
    "At lower airspeed the aircraft needs a higher lift coefficient to support its weight, which increases induced drag."
},

// ==================== ADDITIONAL ELECTRICAL QUESTIONS ====================

{
  topic: "Electrical",
  difficulty: "Easy",
  question: "What electrical quantity is measured in watts?",
  choices: [
    "A) Voltage",
    "B) Current",
    "C) Power",
    "D) Resistance"
  ],
  correct: "C",
  explanation:
    "The watt is the SI unit of power, representing energy transferred or converted per unit time."
},

{
  topic: "Electrical",
  difficulty: "Easy",
  question: "In an ideal parallel circuit, what quantity is the same across every branch?",
  choices: [
    "A) Current",
    "B) Voltage",
    "C) Resistance",
    "D) Power"
  ],
  correct: "B",
  explanation:
    "All branches connected between the same two nodes have the same voltage difference."
},

{
  topic: "Electrical",
  difficulty: "Easy",
  question: "What is the main purpose of a fuse?",
  choices: [
    "A) Increase circuit voltage",
    "B) Protect against excessive current",
    "C) Store electrical charge",
    "D) Amplify signals"
  ],
  correct: "B",
  explanation:
    "A fuse opens the circuit when current becomes high enough to melt its element, helping protect wiring and equipment."
},

{
  topic: "Electrical",
  difficulty: "Easy",
  question: "What type of current periodically reverses direction?",
  choices: [
    "A) Direct current",
    "B) Alternating current",
    "C) Leakage current only",
    "D) Static charge"
  ],
  correct: "B",
  explanation:
    "Alternating current changes direction periodically, while ideal direct current maintains one direction."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What does Kirchhoff's Voltage Law state around a closed loop?",
  choices: [
    "A) The algebraic sum of voltages is zero",
    "B) Current is identical in every branch",
    "C) Resistance must be zero",
    "D) Power must be negative"
  ],
  correct: "A",
  explanation:
    "Kirchhoff's Voltage Law follows conservation of energy: voltage rises and drops sum algebraically to zero around a closed loop."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "In sinusoidal steady state, what is the phase relationship between voltage and current for an ideal capacitor?",
  choices: [
    "A) Current leads voltage by 90 degrees",
    "B) Current lags voltage by 90 degrees",
    "C) Current and voltage are always 180 degrees apart",
    "D) Current and voltage are always in phase"
  ],
  correct: "A",
  explanation:
    "For an ideal capacitor under sinusoidal excitation, current leads voltage by 90 degrees."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "In sinusoidal steady state, what is the phase relationship between voltage and current for an ideal inductor?",
  choices: [
    "A) Current leads voltage by 90 degrees",
    "B) Current lags voltage by 90 degrees",
    "C) They are always in phase",
    "D) Voltage is always zero"
  ],
  correct: "B",
  explanation:
    "For an ideal inductor under sinusoidal excitation, current lags voltage by 90 degrees."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What is the primary function of a diode in its simplest use?",
  choices: [
    "A) Preferentially conduct current in one direction",
    "B) Store magnetic energy",
    "C) Measure frequency",
    "D) Generate mechanical torque"
  ],
  correct: "A",
  explanation:
    "A diode conducts readily when forward biased and strongly limits current when reverse biased within its operating limits."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What does RMS voltage represent for a periodic AC waveform?",
  choices: [
    "A) The DC-equivalent value for producing the same average power in a resistor",
    "B) The maximum instantaneous voltage only",
    "C) The frequency of the waveform",
    "D) The phase angle of the waveform"
  ],
  correct: "A",
  explanation:
    "RMS expresses the effective value of an AC waveform in terms of equivalent resistive heating or power."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What is the purpose of a pull-up resistor on a digital input?",
  choices: [
    "A) Define a known high logic state when no device actively drives the line",
    "B) Increase the clock frequency",
    "C) Convert AC directly to DC",
    "D) Eliminate all current in the circuit"
  ],
  correct: "A",
  explanation:
    "A pull-up resistor prevents a high-impedance input from floating by weakly biasing it toward the supply voltage."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What is the cutoff frequency of a filter commonly associated with?",
  choices: [
    "A) The transition between passband and attenuated behavior",
    "B) The maximum possible supply voltage",
    "C) The circuit's physical temperature",
    "D) The number of logic gates"
  ],
  correct: "A",
  explanation:
    "Cutoff frequency identifies a characteristic boundary between the filter's passband and attenuation region, often defined at a specified gain such as -3 dB."
},

{
  topic: "Electrical",
  difficulty: "Medium",
  question: "What does a transistor commonly enable in electronic circuits?",
  choices: [
    "A) Switching and amplification",
    "B) Mechanical energy storage only",
    "C) Elimination of all resistance",
    "D) Conversion of mass into charge"
  ],
  correct: "A",
  explanation:
    "Transistors are fundamental active devices used to switch signals and amplify electrical quantities."
},

{
  topic: "Electrical",
  difficulty: "Hard",
  question: "A first-order RC low-pass filter is driven far above its cutoff frequency. What happens to the output magnitude relative to the input?",
  choices: [
    "A) It is strongly attenuated",
    "B) It becomes infinitely large",
    "C) It is unchanged at all frequencies",
    "D) It becomes DC regardless of the input"
  ],
  correct: "A",
  explanation:
    "A low-pass filter increasingly attenuates signals above its cutoff frequency."
},

{
  topic: "Electrical",
  difficulty: "Hard",
  question: "Why is impedance matching important in high-frequency transmission lines?",
  choices: [
    "A) It reduces signal reflections",
    "B) It guarantees zero electrical resistance",
    "C) It removes all propagation delay",
    "D) It makes signal frequency irrelevant"
  ],
  correct: "A",
  explanation:
    "When load impedance differs from the transmission line's characteristic impedance, part of a traveling wave is reflected."
},

{
  topic: "Electrical",
  difficulty: "Hard",
  question: "What does a negative decibel value for a voltage gain magnitude indicate when input and output use the same reference impedance?",
  choices: [
    "A) The output magnitude is attenuated relative to the input",
    "B) The output has infinite power",
    "C) The circuit is necessarily unstable",
    "D) The signal has zero frequency"
  ],
  correct: "A",
  explanation:
    "A gain magnitude below unity corresponds to a negative value in decibels, indicating attenuation."
},

{
  topic: "Electrical",
  difficulty: "Hard",
  question: "Why is an anti-aliasing filter commonly placed before an analog-to-digital converter?",
  choices: [
    "A) To attenuate frequency content that cannot be represented at the chosen sampling rate",
    "B) To increase the signal above infinite frequency",
    "C) To eliminate quantization entirely",
    "D) To convert digital data back to analog"
  ],
  correct: "A",
  explanation:
    "The analog filter suppresses frequency components above the usable Nyquist band so they do not fold into lower frequencies after sampling."
},

{
  topic: "Electrical",
  difficulty: "Hard",
  question: "For an ideal inverting operational-amplifier circuit operating in its linear region, what primarily sets the closed-loop voltage gain?",
  choices: [
    "A) The ratio of feedback resistance to input resistance",
    "B) The op-amp package color",
    "C) Supply current alone",
    "D) The input frequency regardless of component values"
  ],
  correct: "A",
  explanation:
    "With ideal negative feedback, the inverting amplifier gain is determined by the negative ratio of feedback resistance to input resistance."
},

{
  topic: "Electrical",
  difficulty: "Hard",
  question: "What is quantization error in an analog-to-digital converter?",
  choices: [
    "A) Error caused by representing a continuous amplitude with discrete digital levels",
    "B) Error caused only by incorrect wire color",
    "C) The propagation speed of an electromagnetic wave",
    "D) The phase shift of an ideal resistor"
  ],
  correct: "A",
  explanation:
    "Finite ADC resolution maps continuous input amplitudes to discrete codes, introducing a bounded quantization difference."
},

// ==================== ADDITIONAL CONTROLS QUESTIONS ====================

{
  topic: "Controls",
  difficulty: "Easy",
  question: "What is the setpoint in a feedback control system?",
  choices: [
    "A) The desired value of the controlled output",
    "B) The sensor noise level",
    "C) The plant mass",
    "D) The sampling error only"
  ],
  correct: "A",
  explanation:
    "The setpoint or reference specifies the desired output that the controller attempts to track."
},

{
  topic: "Controls",
  difficulty: "Easy",
  question: "What is the plant in a control system?",
  choices: [
    "A) The physical process or system being controlled",
    "B) Only the user interface",
    "C) The desired reference signal",
    "D) A mathematical error in the sensor"
  ],
  correct: "A",
  explanation:
    "The plant is the physical system or process whose behavior the controller is intended to regulate."
},

{
  topic: "Controls",
  difficulty: "Easy",
  question: "What signal is commonly formed by subtracting the measured output from the reference input?",
  choices: [
    "A) Error signal",
    "B) Noise floor",
    "C) Natural frequency",
    "D) Feedforward gain"
  ],
  correct: "A",
  explanation:
    "The tracking error is commonly defined as the difference between the desired reference and measured output."
},

{
  topic: "Controls",
  difficulty: "Easy",
  question: "What is an open-loop control system missing compared with a typical closed-loop system?",
  choices: [
    "A) Output feedback used to correct error",
    "B) An input",
    "C) A physical plant",
    "D) Any form of actuation"
  ],
  correct: "A",
  explanation:
    "Open-loop control does not use measured output feedback to adjust the command based on tracking error."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "What is integral windup?",
  choices: [
    "A) Excessive accumulation of integral action while an actuator is saturated",
    "B) A method for increasing sensor bandwidth",
    "C) A type of mechanical resonance",
    "D) A way to remove all model uncertainty"
  ],
  correct: "A",
  explanation:
    "When an actuator saturates, the integral term may continue accumulating error, causing excessive control action and poor recovery unless anti-windup measures are used."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "Why can derivative action make a controller sensitive to measurement noise?",
  choices: [
    "A) Differentiation emphasizes rapid high-frequency changes",
    "B) Differentiation removes all high-frequency content",
    "C) Derivative gain integrates the error",
    "D) Measurement noise is always constant"
  ],
  correct: "A",
  explanation:
    "Derivative action responds strongly to rapid changes, so high-frequency measurement noise can be amplified."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "What does settling time measure?",
  choices: [
    "A) How long the response takes to enter and remain within a specified band around its final value",
    "B) The maximum actuator voltage only",
    "C) The steady-state gain only",
    "D) The number of system states"
  ],
  correct: "A",
  explanation:
    "Settling time characterizes how quickly the transient response decays sufficiently close to its final value."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "What is a state variable in a dynamic system?",
  choices: [
    "A) A variable that is part of a minimal set describing the system's internal condition",
    "B) Only the commanded output",
    "C) A constant that can never change",
    "D) A sensor calibration label"
  ],
  correct: "A",
  explanation:
    "State variables form a set of quantities whose current values, together with inputs, determine the system's future evolution in a state-space model."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "What does controllability describe?",
  choices: [
    "A) Whether the system state can be driven as desired using available inputs",
    "B) Whether every state is directly measured",
    "C) Whether sensor noise is zero",
    "D) Whether the plant has no dynamics"
  ],
  correct: "A",
  explanation:
    "Controllability concerns the ability of the input to move the system state through the state space."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "What does observability describe?",
  choices: [
    "A) Whether the internal state can be inferred from available outputs over time",
    "B) Whether the actuator can reach saturation",
    "C) Whether the reference is constant",
    "D) Whether all poles are exactly at zero"
  ],
  correct: "A",
  explanation:
    "An observable system contains enough output information to reconstruct its internal state over time."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "What is the main purpose of feedforward control?",
  choices: [
    "A) Anticipate known commands or disturbances without waiting for feedback error",
    "B) Eliminate the plant model",
    "C) Guarantee stability in every possible system",
    "D) Replace every sensor"
  ],
  correct: "A",
  explanation:
    "Feedforward uses known inputs or disturbances to command corrective action proactively, often complementing feedback."
},

{
  topic: "Controls",
  difficulty: "Medium",
  question: "For a standard continuous-time second-order system, increasing damping ratio generally has what effect on overshoot?",
  choices: [
    "A) It generally reduces overshoot",
    "B) It always increases overshoot",
    "C) It has no relationship to overshoot",
    "D) It makes the system nonlinear"
  ],
  correct: "A",
  explanation:
    "For the usual underdamped second-order model, greater damping ratio reduces the oscillatory character and peak overshoot."
},

{
  topic: "Controls",
  difficulty: "Hard",
  question: "For a continuous-time linear time-invariant system, what do eigenvalues of the state matrix correspond to?",
  choices: [
    "A) The system's natural modes or poles",
    "B) Only the input magnitude",
    "C) Sensor calibration constants",
    "D) The reference trajectory"
  ],
  correct: "A",
  explanation:
    "The eigenvalues of the state matrix determine the natural modal behavior and correspond to the system poles in a minimal state-space realization."
},

{
  topic: "Controls",
  difficulty: "Hard",
  question: "What is the separation principle in linear control and estimation?",
  choices: [
    "A) Under standard conditions, state-feedback controller and observer dynamics can be designed independently",
    "B) Sensors and actuators must be physically separated",
    "C) Proportional and integral gains must always be equal",
    "D) Stable poles must be separated by exactly one radian per second"
  ],
  correct: "A",
  explanation:
    "For a controllable and observable linear system, state-feedback and observer gains can be designed separately while the combined estimator-controller retains the corresponding eigenvalue sets."
},

{
  topic: "Controls",
  difficulty: "Hard",
  question: "What is the Kalman filter designed to do?",
  choices: [
    "A) Estimate system states by combining a dynamic model with noisy measurements",
    "B) Eliminate all uncertainty from any nonlinear system",
    "C) Replace actuators with sensors",
    "D) Compute only open-loop transfer functions"
  ],
  correct: "A",
  explanation:
    "The Kalman filter recursively combines model predictions with measurements while accounting for modeled process and measurement uncertainty."
},

{
  topic: "Controls",
  difficulty: "Hard",
  question: "What does gain margin indicate in frequency-domain stability analysis?",
  choices: [
    "A) How much loop gain can increase before reaching the stability boundary under the standard definition",
    "B) The amount of sensor bias",
    "C) The plant's physical mass",
    "D) The controller sampling period"
  ],
  correct: "A",
  explanation:
    "Gain margin measures relative stability by indicating the factor or decibel amount by which loop gain can increase before the closed loop reaches instability under standard assumptions."
},

{
  topic: "Controls",
  difficulty: "Hard",
  question: "Why can adding integral action reduce steady-state error but worsen transient behavior?",
  choices: [
    "A) It adds another dynamic state and phase lag that can reduce stability margins",
    "B) It removes every system pole",
    "C) It always reduces controller gain to zero",
    "D) It makes feedback unnecessary"
  ],
  correct: "A",
  explanation:
    "Integral action improves low-frequency tracking but introduces additional dynamics that can increase overshoot or reduce stability margins if not tuned carefully."
},

{
  topic: "Controls",
  difficulty: "Hard",
  question: "A stable closed-loop system has very low phase margin. What behavior is it more likely to exhibit?",
  choices: [
    "A) Oscillatory response and poor robustness to additional phase lag",
    "B) Guaranteed monotonic response",
    "C) Complete immunity to model uncertainty",
    "D) Zero steady-state error for every input"
  ],
  correct: "A",
  explanation:
    "Low phase margin generally corresponds to a more oscillatory response and less tolerance for unmodeled delays or phase lag."
},

// ==================== ADDITIONAL BEHAVIORAL QUESTIONS ====================

{
  topic: "Behavioral",
  difficulty: "Easy",
  question: "When answering a behavioral interview question, why is it useful to describe your specific contribution?",
  choices: [
    "A) It helps the interviewer understand what you personally did",
    "B) It avoids discussing results",
    "C) It makes teamwork irrelevant",
    "D) It guarantees the interviewer agrees with every decision"
  ],
  correct: "A",
  explanation:
    "Interviewers need to distinguish your actions and reasoning from the work performed by the broader team."
},

{
  topic: "Behavioral",
  difficulty: "Easy",
  question: "If you do not know the answer to a technical interview question, what is generally a strong response?",
  choices: [
    "A) Invent an answer confidently",
    "B) State what you know and reason through the problem transparently",
    "C) Refuse to discuss the problem",
    "D) Change the subject immediately"
  ],
  correct: "B",
  explanation:
    "Transparent reasoning lets the interviewer evaluate your problem-solving process even when you do not immediately know the final answer."
},

{
  topic: "Behavioral",
  difficulty: "Easy",
  question: "What should the Result portion of a STAR response ideally include?",
  choices: [
    "A) The outcome and, when possible, measurable impact",
    "B) Only background information",
    "C) A list of unrelated technical terms",
    "D) Another person's responsibilities"
  ],
  correct: "A",
  explanation:
    "The Result closes the story by explaining what happened because of your actions and what impact was achieved."
},

{
  topic: "Behavioral",
  difficulty: "Easy",
  question: "When describing teamwork in an interview, what is most useful?",
  choices: [
    "A) Explain both collaboration and your individual contribution",
    "B) Use only the word 'we' and never identify your role",
    "C) Take credit for every team accomplishment",
    "D) Avoid discussing communication"
  ],
  correct: "A",
  explanation:
    "A strong teamwork response demonstrates collaboration while making your own responsibilities and contributions clear."
},

{
  topic: "Behavioral",
  difficulty: "Medium",
  question: "You discover that your analysis contains an error shortly before a design review. What is generally the best response?",
  choices: [
    "A) Hide the error and hope it is not noticed",
    "B) Communicate the issue promptly, assess its impact, and correct it",
    "C) Delete the analysis without explanation",
    "D) Blame the software tool"
  ],
  correct: "B",
  explanation:
    "Engineering professionalism favors prompt disclosure, impact assessment, corrective action, and clear communication."
},

{
  topic: "Behavioral",
  difficulty: "Medium",
  question: "A project requirement is ambiguous. What is generally the strongest first step?",
  choices: [
    "A) Quietly choose whichever interpretation is easiest",
    "B) Clarify the requirement with the appropriate stakeholder and document assumptions",
    "C) Ignore the requirement",
    "D) Wait until final testing to discuss it"
  ],
  correct: "B",
  explanation:
    "Clarifying ambiguity early reduces rework and creates alignment about the intended requirement and any assumptions."
},

{
  topic: "Behavioral",
  difficulty: "Medium",
  question: "How should you discuss a disagreement with a former teammate during an interview?",
  choices: [
    "A) Focus on the issue, communication, and resolution rather than attacking the person",
    "B) Explain why the teammate was incompetent",
    "C) Avoid describing your own actions",
    "D) Exaggerate the conflict to make the story interesting"
  ],
  correct: "A",
  explanation:
    "Professional conflict stories emphasize how you handled the disagreement constructively and what the team learned or achieved."
},

{
  topic: "Behavioral",
  difficulty: "Medium",
  question: "You have two high-priority engineering tasks due at the same time and cannot complete both to the required quality. What should you generally do?",
  choices: [
    "A) Say nothing and miss one deadline",
    "B) Communicate the conflict early and align priorities with the relevant lead or stakeholder",
    "C) Randomly choose one task",
    "D) Lower the quality of both without telling anyone"
  ],
  correct: "B",
  explanation:
    "Early communication allows the team to make an informed priority, schedule, or resource decision before the conflict becomes a failure."
},

{
  topic: "Behavioral",
  difficulty: "Medium",
  question: "What makes an answer to 'Why do you want this role?' stronger?",
  choices: [
    "A) Connecting your skills and interests to the actual work and organization",
    "B) Giving the same generic answer to every company",
    "C) Discussing salary only",
    "D) Avoiding any mention of the role"
  ],
  correct: "A",
  explanation:
    "A specific connection between your experience, interests, and the role demonstrates preparation and genuine fit with the work."
},

{
  topic: "Behavioral",
  difficulty: "Medium",
  question: "When explaining a complex engineering concept to a nontechnical stakeholder, what is generally most effective?",
  choices: [
    "A) Start with the decision-relevant idea and use accessible language",
    "B) Use as much jargon as possible",
    "C) Present equations without context",
    "D) Assume the stakeholder has the same technical background"
  ],
  correct: "A",
  explanation:
    "Effective technical communication adapts detail and terminology to the audience while preserving the information needed for the decision."
},

{
  topic: "Behavioral",
  difficulty: "Medium",
  question: "An interviewer asks about a project listed on your resume. What should you be prepared to explain?",
  choices: [
    "A) Your decisions, technical reasoning, tradeoffs, and results",
    "B) Only the project's title",
    "C) Only what your teammates did",
    "D) Nothing beyond the bullet points"
  ],
  correct: "A",
  explanation:
    "Interviewers often probe resume projects to understand your depth of ownership, engineering reasoning, and ability to discuss tradeoffs."
},

{
  topic: "Behavioral",
  difficulty: "Medium",
  question: "What is a strong way to answer a question about receiving critical feedback?",
  choices: [
    "A) Describe how you evaluated the feedback and used it to improve",
    "B) Say you have never received critical feedback",
    "C) Explain why feedback is usually wrong",
    "D) Blame the person who provided it"
  ],
  correct: "A",
  explanation:
    "A constructive response demonstrates self-awareness, coachability, and the ability to turn feedback into improved performance."
},

{
  topic: "Behavioral",
  difficulty: "Hard",
  question: "A manager asks you to approve a design that you believe has an unresolved safety concern. What is generally the most appropriate response?",
  choices: [
    "A) Approve it because the manager is senior",
    "B) Clearly document and communicate the technical concern and use the appropriate review or escalation process",
    "C) Ignore the concern unless a failure occurs",
    "D) Change the analysis to support approval"
  ],
  correct: "B",
  explanation:
    "Engineers should communicate credible safety concerns clearly and use established technical and organizational processes rather than suppressing them."
},

{
  topic: "Behavioral",
  difficulty: "Hard",
  question: "Your preferred design performs best in one metric but is worse in cost, schedule, and manufacturability. What is the strongest engineering approach?",
  choices: [
    "A) Choose it because it is your design",
    "B) Evaluate the alternatives against agreed requirements and weighted tradeoffs",
    "C) Ignore nontechnical constraints",
    "D) Select whichever concept was proposed first"
  ],
  correct: "B",
  explanation:
    "Engineering decisions often require balancing multiple requirements and constraints rather than optimizing a single performance metric."
},

{
  topic: "Behavioral",
  difficulty: "Hard",
  question: "During testing, results disagree with your model even after you verify the test instrumentation. What is generally the best next step?",
  choices: [
    "A) Discard the test data because the model must be correct",
    "B) Investigate model assumptions, boundary conditions, and unmodeled physics",
    "C) Adjust the test data until it matches the prediction",
    "D) Report only the model results"
  ],
  correct: "B",
  explanation:
    "A model is an approximation. A persistent discrepancy should trigger systematic investigation of assumptions, inputs, boundary conditions, and missing effects."
},

{
  topic: "Behavioral",
  difficulty: "Hard",
  question: "A teammate proposes a technically plausible solution, but there is not enough data to know whether it meets a critical requirement. What is generally the strongest response?",
  choices: [
    "A) Accept it because it sounds reasonable",
    "B) Identify the uncertainty and define analysis or testing needed to close it",
    "C) Reject it without explanation",
    "D) Remove the requirement"
  ],
  correct: "B",
  explanation:
    "Good engineering decisions distinguish assumptions from evidence and identify the work needed to reduce uncertainty around critical requirements."
},

{
  topic: "Behavioral",
  difficulty: "Hard",
  question: "You are leading a project and realize the original schedule is no longer achievable. What should you generally do?",
  choices: [
    "A) Continue reporting the original date until it is missed",
    "B) Reassess the remaining work, identify drivers, and communicate a realistic recovery plan early",
    "C) Ask the team to hide incomplete work",
    "D) Remove verification activities without review"
  ],
  correct: "B",
  explanation:
    "Effective project leadership surfaces schedule risk early, identifies root causes and options, and communicates a realistic plan rather than hiding the problem."
},

{
  topic: "Behavioral",
  difficulty: "Hard",
  question: "In a technical interview, you realize halfway through your solution that an earlier assumption was wrong. What is generally the strongest response?",
  choices: [
    "A) Continue with the incorrect assumption",
    "B) Acknowledge it, explain the consequence, and revise the solution",
    "C) Pretend the interviewer made the assumption",
    "D) Stop answering entirely"
  ],
  correct: "B",
  explanation:
    "Recognizing and correcting an incorrect assumption demonstrates technical judgment, transparency, and adaptability."
}

];
