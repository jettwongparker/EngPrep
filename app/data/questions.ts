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
}
];