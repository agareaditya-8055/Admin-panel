// Mock API functions (replace with actual API calls in a real application)
export const api = {
    getMockDrives: () => Promise.resolve([
      { id: 1, companyName: 'TCS', status: 'Active', participants: 150 },
      { id: 2, companyName: 'Accenture', status: 'Inactive', participants: 100 },
    ]),
    addMockDrive: (drive) => Promise.resolve({ ...drive, id: Date.now() }),
    updateMockDrive: (drive) => Promise.resolve(drive),
    deleteMockDrive: (id) => Promise.resolve(),
    getQuizzes: () => Promise.resolve([
      { id: 1, mockDriveId: 1, type: 'Technical', title: 'TCS Technical Quiz', description: '30 questions, 60 minutes', passScore: 70 },
      { id: 2, mockDriveId: 1, type: 'Coding', title: 'TCS Coding Quiz', description: '3 coding problems, 90 minutes', passScore: 80 },
    ]),
    addQuiz: (quiz) => Promise.resolve({ ...quiz, id: Date.now() }),
    updateQuiz: (quiz) => Promise.resolve(quiz),
    deleteQuiz: (id) => Promise.resolve(),
    getUserPerformance: () => Promise.resolve([
      { id: 1, userId: 1, userName: 'John Doe', technicalQuiz: { attempts: 2, score: 75, status: 'Pass' }, codingQuiz: { attempts: 1, score: 85, status: 'Pass' } },
      { id: 2, userId: 2, userName: 'Jane Smith', technicalQuiz: { attempts: 3, score: 65, status: 'Fail' }, codingQuiz: { attempts: 0, score: 0, status: 'Not Attempted' } },
    ]),
    updateUserPerformance: (performance) => Promise.resolve(performance),
    getInterviews: () => Promise.resolve([
      { id: 1, userId: 1, userName: 'John Doe', status: 'Scheduled', date: '2023-06-15' },
    ]),
    addInterview: (interview) => Promise.resolve({ ...interview, id: Date.now() }),
    updateInterview: (interview) => Promise.resolve(interview),
  };