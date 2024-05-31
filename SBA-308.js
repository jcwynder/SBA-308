// Information for course data
const CourseInfo = {
  id: 308,
  name: `Introduction to JavaScript`,
};

// Assignmetns for course data
const AssignmentGroup = {
  id: 803,
  name: `Fundamentals of JavaScript`,
  course_id: 308,
  group_weight: 10,
  assignments: [
    {
      id: 1,
      name: `Data Manipulation with JavaScript`,
      due_at: `2024-05-22`,
      points_possible: 100,
    },
    {
      id: 2,
      name: `Control Flow`,
      due_at: `2024-05-23`,
      points_possible: 50,
    },
    {
      id: 3,
      name: `Practical Loops`,
      due_at: `2024-05-24`,
      points_possible: 100,
    },
    {
      id: 4,
      name: `Working with Data Collections`,
      due_at: `2024-05-27`,
      points_possible: 200,
    },
    {
      id: 5,
      name: `Creating Reusable Functions`,
      due_at: `2024-05-29`,
      points_possible: 100,
    },
  ],
};

// Learner submission data
const LearnerSubmissions = [
  // First learner
  {
    learner_id: 123,
    assignment_id: 1,
    submission: {
      submitted_at: "2024-05-22",
      score: 100,
    },
  },
  {
    learner_id: 123,
    assignment_id: 2,
    submission: {
      submitted_at: "2024-05-23",
      score: 25,
    },
  },
  {
    learner_id: 123,
    assignment_id: 3,
    submission: {
      submitted_at: "2024-05-24",
      score: 100,
    },
  },
  {
    learner_id: 123,
    assignment_id: 4,
    submission: {
      submitted_at: "2024-05-29",
      score: 200,
    },
  },
  {
    learner_id: 123,
    assignment_id: 5,
    submission: {
      submitted_at: "2024-05-29",
      score: 100,
    },
  },
  // Second learner
  {
    learner_id: 321,
    assignment_id: 1,
    submission: {
      submitted_at: "2024-05-22",
      score: 100,
    },
  },
  {
    learner_id: 321,
    assignment_id: 2,
    submission: {
      submitted_at: "2024-05-23",
      score: 50,
    },
  },
  {
    learner_id: 321,
    assignment_id: 3,
    submission: {
      submitted_at: "2024-05-24",
      score: 100,
    },
  },
  {
    learner_id: 321,
    assignment_id: 4,
    submission: {
      submitted_at: "2024-05-27",
      score: 200,
    },
  },
  {
    learner_id: 321,
    assignment_id: 5,
    submission: {
      submitted_at: "2024-05-29",
      score: 100,
    },
  },
];
