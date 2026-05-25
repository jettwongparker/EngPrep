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
];