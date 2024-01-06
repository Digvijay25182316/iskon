const levels = [
  {
    _id: "101",
    level_number: "Level 1",
    level_description: "Description of Level 1",
    level_preacher1: volunteers[0], // Using the first volunteer as the preacher for this level
    level_preacher2: volunteers[1], // Using the second volunteer as the second preacher for this level
    level_mentor: volunteers[2], // Using the third volunteer as the mentor for this level
    level_coordinator: volunteers[2], // Using the third volunteer as the coordinator for this level
    level_status: "active",
    number_of_attendance: "20",
    number_of_sessions: "10",
    sessions: "Session details for Level 1",
    ExpectedStartDate: "2024-02-01",
    actualStartDate: "2024-02-01",
    ExpectedEndDate: "2024-03-01",
    actualEndDate: "2024-03-01",
    created_By: "Admin",
    createdAt: "2024-01-05T10:00:00Z",
    updatedAt: "2024-01-06T11:30:00Z",
  },
  {
    _id: "102",
    level_number: "Level 2",
    level_description: "Description of Level 2",
    level_preacher1: volunteers[1], // Using the second volunteer as the preacher for this level
    level_preacher2: volunteers[2], // Using the third volunteer as the second preacher for this level
    level_mentor: volunteers[0], // Using the first volunteer as the mentor for this level
    level_coordinator: volunteers[0], // Using the first volunteer as the coordinator for this level
    level_status: "active",
    number_of_attendance: "18",
    number_of_sessions: "8",
    sessions: "Session details for Level 2",
    ExpectedStartDate: "2024-03-01",
    actualStartDate: "2024-03-01",
    ExpectedEndDate: "2024-04-01",
    actualEndDate: "2024-04-01",
    created_By: "Admin",
    createdAt: "2024-01-06T12:00:00Z",
    updatedAt: "2024-01-07T11:30:00Z",
  },
  {
    _id: "103",
    level_number: "Level 3",
    level_description: "Description of Level 3",
    level_preacher1: volunteers[2], // Using the third volunteer as the preacher for this level
    level_preacher2: volunteers[0], // Using the first volunteer as the second preacher for this level
    level_mentor: volunteers[1], // Using the second volunteer as the mentor for this level
    level_coordinator: volunteers[1], // Using the second volunteer as the coordinator for this level
    level_status: "inactive",
    number_of_attendance: "15",
    number_of_sessions: "7",
    sessions: "Session details for Level 3",
    ExpectedStartDate: "2024-04-01",
    actualStartDate: "2024-04-01",
    ExpectedEndDate: "2024-05-01",
    actualEndDate: "2024-05-01",
    created_By: "Admin",
    createdAt: "2024-01-07T13:00:00Z",
    updatedAt: "2024-01-08T11:30:00Z",
  },
  {
    _id: "104",
    level_number: "Level 4",
    level_description: "Description of Level 4",
    level_preacher1: volunteers[0], // Using the first volunteer as the preacher for this level
    level_preacher2: volunteers[2], // Using the third volunteer as the second preacher for this level
    level_mentor: volunteers[1], // Using the second volunteer as the mentor for this level
    level_coordinator: volunteers[2], // Using the third volunteer as the coordinator for this level
    level_status: "active",
    number_of_attendance: "22",
    number_of_sessions: "12",
    sessions: "Session details for Level 4",
    ExpectedStartDate: "2024-05-01",
    actualStartDate: "2024-05-01",
    ExpectedEndDate: "2024-06-01",
    actualEndDate: "2024-06-01",
    created_By: "Admin",
    createdAt: "2024-01-08T14:00:00Z",
    updatedAt: "2024-01-08T14:30:00Z",
  },
];

// You can now use the 'levels' array in your application for testing or development purposes.

export default levels;
