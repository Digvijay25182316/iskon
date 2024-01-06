const coursesNames = [
  {
    _id: "3",
    program_name: "Program C",
    course_name: "Course 301",
    course_type: ["Type E", "Type F"],
    course_location: "Location Q",
    course_description: "Description of the third course.",
    course_preacher: {
      _id: "1",
      initiated_name: "JD",
      first_name: "John",
      last_name: "Doe",
    },
    course_mentor1: {
      _id: "2",
      initiated_name: "JD2",
      first_name: "Jane",
      last_name: "Doe",
    },
    course_mentor2: {
      _id: "3",
      initiated_name: "AJ",
      first_name: "Alex",
      last_name: "Johnson",
    },
    number_of_levels: 1,
    course_Levels: [
      {
        _id: "301",
        level_number: "Level 1",
        level_description: "Description of Level 1",
      },
    ],
    createdAt: "2024-01-04T20:00:00Z",
    updatedAt: "2024-01-04T20:30:00Z",
    created_By: "Admin",
  },
  {
    _id: "2",
    program_name: "Program B",
    course_name: "Course 201",
    course_type: ["Type C", "Type D"],
    course_location: "Location Z",
    course_description: "Description of the second course.",
    course_preacher: {
      _id: "1",
      initiated_name: "JD",
      first_name: "John",
      last_name: "Doe",
    },
    course_mentor1: {
      _id: "2",
      initiated_name: "JD2",
      first_name: "Jane",
      last_name: "Doe",
    },
    course_mentor2: {
      _id: "3",
      initiated_name: "AJ",
      first_name: "Alex",
      last_name: "Johnson",
    },
    number_of_levels: 2,
    course_Levels: [
      {
        _id: "201",
        level_number: "Level 1",
        level_description: "Description of Level 1",
      },
    ],
    createdAt: "2024-01-04T17:00:00Z",
    updatedAt: "2024-01-04T17:30:00Z",
    created_By: "Admin",
  },
];

export default coursesNames;
