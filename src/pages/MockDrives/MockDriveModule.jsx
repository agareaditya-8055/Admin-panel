// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrash, FaPlus, FaEye } from 'react-icons/fa';

// // Mock API functions (replace with actual API calls in a real application)
// const api = {
//   getMockDrives: () => Promise.resolve([
//     { id: 1, companyName: 'TCS', status: 'Active', participants: 150 },
//     { id: 2, companyName: 'Accenture', status: 'Inactive', participants: 100 },
//   ]),
//   addMockDrive: (drive) => Promise.resolve({ ...drive, id: Date.now() }),
//   updateMockDrive: (drive) => Promise.resolve(drive),
//   deleteMockDrive: (id) => Promise.resolve(),
//   getQuizzes: () => Promise.resolve([
//     { id: 1, mockDriveId: 1, type: 'Technical', title: 'TCS Technical Quiz', description: '30 questions, 60 minutes', passScore: 70 },
//     { id: 2, mockDriveId: 1, type: 'Coding', title: 'TCS Coding Quiz', description: '3 coding problems, 90 minutes', passScore: 80 },
//   ]),
//   addQuiz: (quiz) => Promise.resolve({ ...quiz, id: Date.now() }),
//   updateQuiz: (quiz) => Promise.resolve(quiz),
//   deleteQuiz: (id) => Promise.resolve(),
//   getUserPerformance: () => Promise.resolve([
//     { id: 1, userId: 1, userName: 'John Doe', technicalQuiz: { attempts: 2, score: 75, status: 'Pass' }, codingQuiz: { attempts: 1, score: 85, status: 'Pass' } },
//     { id: 2, userId: 2, userName: 'Jane Smith', technicalQuiz: { attempts: 3, score: 65, status: 'Fail' }, codingQuiz: { attempts: 0, score: 0, status: 'Not Attempted' } },
//   ]),
//   updateUserPerformance: (performance) => Promise.resolve(performance),
//   getInterviews: () => Promise.resolve([
//     { id: 1, userId: 1, userName: 'John Doe', status: 'Scheduled', date: '2023-06-15' },
//   ]),
//   addInterview: (interview) => Promise.resolve({ ...interview, id: Date.now() }),
//   updateInterview: (interview) => Promise.resolve(interview),
// };

// export default function MockDriveModule() {
//   const [activeTab, setActiveTab] = useState('mockDrives');
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState(null);
//   const [mockDrives, setMockDrives] = useState([]);
//   const [quizzes, setQuizzes] = useState([]);
//   const [userPerformance, setUserPerformance] = useState([]);
//   const [interviews, setInterviews] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, [activeTab]);

//   const fetchData = async () => {
//     try {
//       setError(null);
//       switch (activeTab) {
//         case 'mockDrives':
//           const drives = await api.getMockDrives();
//           setMockDrives(drives);
//           break;
//         case 'quizzes':
//           const fetchedQuizzes = await api.getQuizzes();
//           setQuizzes(fetchedQuizzes);
//           break;
//         case 'userPerformance':
//           const performance = await api.getUserPerformance();
//           setUserPerformance(performance);
//           break;
//         case 'interviews':
//           const fetchedInterviews = await api.getInterviews();
//           setInterviews(fetchedInterviews);
//           break;
//       }
//     } catch (err) {
//       setError('Failed to fetch data. Please try again.');
//     }
//   };

//   const openModal = (content) => {
//     setModalContent(content);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setModalContent(null);
//   };

//   const handleAddMockDrive = async (drive) => {
//     try {
//       const newDrive = await api.addMockDrive(drive);
//       setMockDrives([...mockDrives, newDrive]);
//       closeModal();
//     } catch (err) {
//       setError('Failed to add mock drive. Please try again.');
//     }
//   };

//   const handleUpdateMockDrive = async (updatedDrive) => {
//     try {
//       await api.updateMockDrive(updatedDrive);
//       setMockDrives(mockDrives.map(drive => drive.id === updatedDrive.id ? updatedDrive : drive));
//       closeModal();
//     } catch (err) {
//       setError('Failed to update mock drive. Please try again.');
//     }
//   };

//   const handleDeleteMockDrive = async (id) => {
//     if (window.confirm('Are you sure you want to delete this mock drive?')) {
//       try {
//         await api.deleteMockDrive(id);
//         setMockDrives(mockDrives.filter(drive => drive.id !== id));
//       } catch (err) {
//         setError('Failed to delete mock drive. Please try again.');
//       }
//     }
//   };

//   const handleAddQuiz = async (quiz) => {
//     try {
//       const newQuiz = await api.addQuiz(quiz);
//       setQuizzes([...quizzes, newQuiz]);
//       closeModal();
//     } catch (err) {
//       setError('Failed to add quiz. Please try again.');
//     }
//   };

//   const handleUpdateQuiz = async (updatedQuiz) => {
//     try {
//       await api.updateQuiz(updatedQuiz);
//       setQuizzes(quizzes.map(quiz => quiz.id === updatedQuiz.id ? updatedQuiz : quiz));
//       closeModal();
//     } catch (err) {
//       setError('Failed to update quiz. Please try again.');
//     }
//   };

//   const handleDeleteQuiz = async (id) => {
//     if (window.confirm('Are you sure you want to delete this quiz?')) {
//       try {
//         await api.deleteQuiz(id);
//         setQuizzes(quizzes.filter(quiz => quiz.id !== id));
//       } catch (err) {
//         setError('Failed to delete quiz. Please try again.');
//       }
//     }
//   };

//   const handleUpdateUserPerformance = async (updatedPerformance) => {
//     try {
//       await api.updateUserPerformance(updatedPerformance);
//       setUserPerformance(userPerformance.map(perf => perf.id === updatedPerformance.id ? updatedPerformance : perf));
//       closeModal();
//     } catch (err) {
//       setError('Failed to update user performance. Please try again.');
//     }
//   };

//   const handleAddInterview = async (interview) => {
//     try {
//       const newInterview = await api.addInterview(interview);
//       setInterviews([...interviews, newInterview]);
//       closeModal();
//     } catch (err) {
//       setError('Failed to schedule interview. Please try again.');
//     }
//   };

//   const handleUpdateInterview = async (updatedInterview) => {
//     try {
//       await api.updateInterview(updatedInterview);
//       setInterviews(interviews.map(interview => interview.id === updatedInterview.id ? updatedInterview : interview));
//       closeModal();
//     } catch (err) {
//       setError('Failed to update interview. Please try again.');
//     }
//   };

//   const renderMockDrives = () => (
//     <div>
//       <h3 className="text-xl font-semibold mb-4">Mock Drives</h3>
//       <button
//         onClick={() => openModal(<AddEditMockDriveForm onSubmit={handleAddMockDrive} onClose={closeModal} />)}
//         className="mb-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2 px-4 rounded"
//       >
//         Add Mock Drive
//       </button>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {mockDrives.map((drive) => (
//             <tr key={drive.id}>
//               <td className="px-6 text-xs py-4 whitespace-nowrap">{drive.companyName}</td>
//               <td className="px-6 py-4 text-xs whitespace-nowrap">
//                 <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                   drive.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                 }`}>
//                   {drive.status}
//                 </span>
//               </td>
//               <td className="px-6 py-4 text-xs whitespace-nowrap">{drive.participants}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                 <button onClick={() => openModal(<AddEditMockDriveForm drive={drive} onSubmit={handleUpdateMockDrive} onClose={closeModal} />)} className="text-indigo-600 hover:text-indigo-900 mr-2">
//                   <FaEdit />
//                 </button>
//                 <button onClick={() => handleDeleteMockDrive(drive.id)} className="text-red-600 hover:text-red-900 mr-2">
//                   <FaTrash />
//                 </button>
//                 <button onClick={() => openModal(<QuizManagement driveId={drive.id} onSubmit={handleAddQuiz} onClose={closeModal} />)} className="text-green-600 hover:text-green-900 mr-2">
//                   <FaPlus />
//                 </button>
//                 <button onClick={() => openModal(<UserPerformance driveId={drive.id} onClose={closeModal} />)} className="text-red-600 hover:text-red-900">
//                   <FaEye />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderQuizzes = () => (
//     <div>
//       <h3 className="text-xl font-semibold mb-4">Quizzes</h3>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pass Score</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {quizzes.map((quiz) => (
//             <tr className='text-xs' key={quiz.id}>
//               <td className="px-6 py-4 whitespace-nowrap">{quiz.title}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{quiz.type}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{quiz.description}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{quiz.passScore}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                 <button onClick={() => openModal(<AddEditQuizForm quiz={quiz} onSubmit={handleUpdateQuiz} onClose={closeModal} />)} className="text-indigo-600 hover:text-indigo-900 mr-2">
//                   <FaEdit />
//                 </button>
//                 <button onClick={() => handleDeleteQuiz(quiz.id)} className="text-red-600 hover:text-red-900">
//                   <FaTrash />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderUserPerformance = () => (
//     <div>
//       <h3 className="text-xl font-semibold mb-4">User Performance</h3>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technical Quiz</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coding Quiz</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {userPerformance.map((performance) => (
//             <tr className='text-xs' key={performance.id}>
//               <td className="px-6 py-4 whitespace-nowrap">{performance.userName}</td>
//               <td className="px-6 py-4 whitespace-nowrap">
//                 Attempts: {performance.technicalQuiz.attempts}, Score: {performance.technicalQuiz.score}, Status: {performance.technicalQuiz.status}
//               </td>
//               <td className="px-6  py-4 whitespace-nowrap">
//                 Attempts: {performance.codingQuiz.attempts}, Score: {performance.codingQuiz.score}, Status: {performance.codingQuiz.status}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                 <button onClick={() => openModal(<EditUserPerformance performance={performance} onSubmit={handleUpdateUserPerformance} onClose={closeModal} />)} className="text-indigo-600 hover:text-indigo-900">
//                   <FaEdit />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderInterviews = () => (
//     <div>
//       <h3 className="text-xl font-semibold mb-4">Interviews</h3>
//       <button
//         onClick={() => openModal(<ScheduleInterviewForm onSubmit={handleAddInterview} onClose={closeModal} />)}
//         className="mb-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2 px-4 rounded"
//       >
//         Schedule Interview
//       </button>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {interviews.map((interview) => (
//             <tr className='text-xs' key={interview.id}>
//               <td className="px-6 py-4 whitespace-nowrap">{interview.userName}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{interview.status}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{interview.date}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                 <button onClick={() => openModal(<EditInterviewForm interview={interview} onSubmit={handleUpdateInterview} onClose={closeModal} />)} className="text-indigo-600 hover:text-indigo-900">
//                   <FaEdit />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mock Drive Module</h2>
//       {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}
//       <div className="mb-4">
//         <button
//           onClick={() => setActiveTab('mockDrives')}
//           className={`mr-2 ${activeTab === 'mockDrives' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold text-sm  py-2 px-4 rounded`}
//         >
//           Mock Drives
//         </button>
//         <button
//           onClick={() => setActiveTab('quizzes')}
//           className={`mr-2 ${activeTab === 'quizzes' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold text-sm py-2 px-4 rounded`}
//         >
//           Quizzes
//         </button>
//         <button
//           onClick={() => setActiveTab('userPerformance')}
//           className={`mr-2 ${activeTab === 'userPerformance' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold text-sm py-2 px-4 rounded`}
//         >
//           User Performance
//         </button>
//         <button
//           onClick={() => setActiveTab('interviews')}
//           className={`${activeTab === 'interviews' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'} font-semibold text-sm py-2 px-4 rounded`}
//         >
//           Interviews
//         </button>
//       </div>
//       {activeTab === 'mockDrives' && renderMockDrives()}
//       {activeTab === 'quizzes' && renderQuizzes()}
//       {activeTab === 'userPerformance' && renderUserPerformance()}
//       {activeTab === 'interviews' && renderInterviews()}
      
//       {showModal && (
//         <div className="fixed z-10 inset-0 overflow-y-auto">
//           <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               {modalContent}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function AddEditMockDriveForm({ drive, onSubmit, onClose }) {
//   const [formData, setFormData] = useState(drive || { companyName: '', description: '', status: 'Active', participants: 0 });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6">
//       <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">{drive ? 'Edit Mock Drive' : 'Add Mock Drive'}</h3>
//       <div className="mb-4">
//         <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
//         <input
//           type="text"
//           id="companyName"
//           value={formData.companyName}
//           onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea
//           id="description"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//         ></textarea>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
//         <select
//           id="status"
//           value={formData.status}
//           onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         >
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="participants" className="block text-sm font-medium text-gray-700">Participants</label>
//         <input
//           type="number"
//           id="participants"
//           value={formData.participants}
//           onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//           min="0"
//         />
//       </div>
//       <div className="mt-5 sm:mt-6">
//         <button
//           type="submit"
//           className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 sm:text-sm"
//         >
//           {drive ? 'Update Mock Drive' : 'Add Mock Drive'}
//         </button>
//       </div>
//     </form>
//   );
// }

// function QuizManagement({ driveId, onSubmit, onClose }) {
//   const [quizType, setQuizType] = useState('Technical');
//   const [questions, setQuestions] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [passScore, setPassScore] = useState(70);

//   const handleAddQuestion = () => {
//     setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: '', difficulty: 'Easy', points: 1 }]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const newQuestions = [...questions];
//     newQuestions[index][field] = value;
//     setQuestions(newQuestions);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({
//       mockDriveId: driveId,
//       type: quizType,
//       title,
//       description,
//       passScore,
//       questions
//     });
//   };

  

//   return (
//     <form onSubmit={handleSubmit} className="p-6">
//       <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Add Quiz</h3>
//       <div className="mb-4">
//         <label htmlFor="quizType" className="block text-sm font-medium text-gray-700">Quiz Type</label>
//         <select
//           id="quizType"
//           value={quizType}
//           onChange={(e) => setQuizType(e.target.value)}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         >
//           <option value="Technical">Technical</option>
//           <option value="Coding">Coding</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//         ></textarea>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="passScore" className="block text-sm font-medium text-gray-700">Pass Score</label>
//         <input
//           type="number"
//           id="passScore"
//           value={passScore}
//           onChange={(e) => setPassScore(parseInt(e.target.value))}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//           min="0"
//           max="100"
//         />
//       </div>
//       {questions.map((question, index) => (
//         <div key={index} className="mb-4 p-4 border border-gray-200 rounded">
//           <input
//             type="text"
//             value={question.question}
//             onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
//             placeholder="Question"
//             className="mb-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//           {question.options.map((option, optionIndex) => (
//             <input
//               key={optionIndex}
//               type="text"
//               value={option}
//               onChange={(e) => {
//                 const newOptions = [...question.options];
//                 newOptions[optionIndex] = e.target.value;
//                 handleQuestionChange(index, 'options', newOptions);
//               }}
//               placeholder={`Option ${optionIndex + 1}`}
//               className="mb-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           ))}
//           <input
//             type="text"
//             value={question.correctAnswer}
//             onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
//             placeholder="Correct Answer"
//             className="mb-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//           <select
//             value={question.difficulty}
//             onChange={(e) => handleQuestionChange(index, 'difficulty', e.target.value)}
//             className="mb-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           >
//             <option value="Easy">Easy</option>
//             <option value="Medium">Medium</option>
//             <option value="Hard">Hard</option>
//           </select>
//           <input
//             type="number"
//             value={question.points}
//             onChange={(e) => handleQuestionChange(index, 'points', parseInt(e.target.value))}
//             placeholder="Points"
//             className="mb-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//             min="1"
//           />
//         </div>
//       ))}
//       <button
//         type="button"
//         onClick={handleAddQuestion}
//         className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Add Question
//       </button>
//       <div className="mt-5 sm:mt-6">
//         <button
//           type="submit"
//           className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 sm:text-sm"
//         >
//           Submit Quiz
//         </button>
//       </div>
//     </form>
//   );
// }

// function UserPerformance({ driveId, onClose }) {
//   return (
//     <div className="p-6">
//       <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">User Performance for Drive {driveId}</h3>
//       {/* Add user performance details here */}
//       <button onClick={onClose} className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//         Close
//       </button>
//     </div>
//   );
// }

// function EditUserPerformance({ performance, onSubmit, onClose }) {
//   const [formData, setFormData] = useState(performance);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6">
//       <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Edit User Performance</h3>
//       <div className="mb-4">
//         <label htmlFor="technicalAttempts" className="block text-sm font-medium text-gray-700">Technical Quiz Attempts</label>
//         <input
//           type="number"
//           id="technicalAttempts"
//           value={formData.technicalQuiz.attempts}
//           onChange={(e) => setFormData({ ...formData, technicalQuiz: { ...formData.technicalQuiz, attempts: parseInt(e.target.value) } })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//           min="0"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="technicalScore" className="block text-sm font-medium text-gray-700">Technical Quiz Score</label>
//         <input
//           type="number"
//           id="technicalScore"
//           value={formData.technicalQuiz.score}
//           onChange={(e) => setFormData({ ...formData, technicalQuiz: { ...formData.technicalQuiz, score: parseInt(e.target.value) } })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//           min="0"
//           max="100"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="technicalStatus" className="block text-sm font-medium text-gray-700">Technical Quiz Status</label>
//         <select
//           id="technicalStatus"
//           value={formData.technicalQuiz.status}
//           onChange={(e) => setFormData({ ...formData, technicalQuiz: { ...formData.technicalQuiz, status: e.target.value } })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         >
//           <option value="Pass">Pass</option>
//           <option value="Fail">Fail</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="codingAttempts" className="block text-sm font-medium text-gray-700">Coding Quiz Attempts</label>
//         <input
//           type="number"
//           id="codingAttempts"
//           value={formData.codingQuiz.attempts}
//           onChange={(e) => setFormData({ ...formData, codingQuiz: { ...formData.codingQuiz, attempts: parseInt(e.target.value) } })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//           min="0"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="codingScore" className="block text-sm font-medium text-gray-700">Coding Quiz Score</label>
//         <input
//           type="number"
//           id="codingScore"
//           value={formData.codingQuiz.score}
//           onChange={(e) => setFormData({ ...formData, codingQuiz: { ...formData.codingQuiz, score: parseInt(e.target.value) } })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//           min="0"
//           max="100"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="codingStatus" className="block text-sm font-medium text-gray-700">Coding Quiz Status</label>
//         <select
//           id="codingStatus"
//           value={formData.codingQuiz.status}
//           onChange={(e) => setFormData({ ...formData, codingQuiz: { ...formData.codingQuiz, status: e.target.value } })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         >
//           <option value="Pass">Pass</option>
//           <option value="Fail">Fail</option>
//           <option value="Not Attempted">Not Attempted</option>
//         </select>
//       </div>
//       <div className="mt-5 sm:mt-6">
//         <button
//           type="submit"
//           className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 sm:text-sm"
//         >
//           Update Performance
//         </button>
//       </div>
//     </form>
//   );
// }

// function ScheduleInterviewForm({ onSubmit, onClose }) {
//   const [formData, setFormData] = useState({ userId: '', userName: '', date: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6">
//       <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Schedule Interview</h3>
//       <div className="mb-4">
//         <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
//         <input
//           type="text"
//           id="userId"
//           value={formData.userId}
//           onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
//         <input
//           type="text"
//           id="userName"
//           value={formData.userName}
//           onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="date" className="block text-sm font-medium text-gray-700">Interview Date</label>
//         <input
//           type="date"
//           id="date"
//           value={formData.date}
//           onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//         />
//       </div>
//       <div className="mt-5 sm:mt-6">
//         <button
//           type="submit"
//           className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 sm:text-sm"
//         >
//           Schedule Interview
//         </button>
//       </div>
//     </form>
//   );
// }

// function EditInterviewForm({ interview, onSubmit, onClose }) {
//   const [formData, setFormData] = useState(interview);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6">
//       <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Edit Interview</h3>
//       <div className="mb-4">
//         <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
//         <select
//           id="status"
//           value={formData.status}
//           onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         >
//           <option value="Scheduled">Scheduled</option>
//           <option value="Completed">Completed</option>
//           <option value="Cancelled">Cancelled</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="date" className="block text-sm font-medium text-gray-700">Interview Date</label>
//         <input
//           type="date"
//           id="date"
//           value={formData.date}
//           onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           required
//         />
//       </div>
//       <div className="mt-5 sm:mt-6">
//         <button
//           type="submit"
//           className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 sm:text-sm"
//         >
//           Update Interview
//         </button>
//       </div>
//     </form>
//   );
// }




import React, { useState, useEffect } from 'react';
import { api } from './api';
import { TabButton } from './components/TabButton';
import { MockDrivesTable } from './components/MockDrivesTable';
import { QuizzesTable } from './components/QuizzesTable';
import { UserPerformanceTable } from './components/UserPerformanceTable';
import { InterviewsTable } from './components/InterviewsTable';
import { Modal } from './components/Modal';
import { AddEditMockDriveForm } from './components/AddEditMockDriveForm';
import { QuizManagement } from './components/QuizManagement';
import { UserPerformance } from './components/UserPerformance';
import { EditUserPerformance } from './components/EditUserPerformance';
import { ScheduleInterviewForm } from './components/ScheduleInterviewForm';
import { EditInterviewForm } from './components/EditInterviewForm';

export default function MockDriveModule() {
  const [activeTab, setActiveTab] = useState('mockDrives');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [mockDrives, setMockDrives] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      setError(null);
      switch (activeTab) {
        case 'mockDrives':
          const drives = await api.getMockDrives();
          setMockDrives(drives);
          break;
        case 'quizzes':
          const fetchedQuizzes = await api.getQuizzes();
          setQuizzes(fetchedQuizzes);
          break;
        case 'userPerformance':
          const performance = await api.getUserPerformance();
          setUserPerformance(performance);
          break;
        case 'interviews':
          const fetchedInterviews = await api.getInterviews();
          setInterviews(fetchedInterviews);
          break;
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    }
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const handleAddMockDrive = async (drive) => {
    try {
      const newDrive = await api.addMockDrive(drive);
      setMockDrives([...mockDrives, newDrive]);
      closeModal();
    } catch (err) {
      setError('Failed to add mock drive. Please try again.');
    }
  };

  const handleUpdateMockDrive = async (updatedDrive) => {
    try {
      await api.updateMockDrive(updatedDrive);
      setMockDrives(mockDrives.map(drive => drive.id === updatedDrive.id ? updatedDrive : drive));
      closeModal();
    } catch (err) {
      setError('Failed to update mock drive. Please try again.');
    }
  };

  const handleDeleteMockDrive = async (id) => {
    if (window.confirm('Are you sure you want to delete this mock drive?')) {
      try {
        await api.deleteMockDrive(id);
        setMockDrives(mockDrives.filter(drive => drive.id !== id));
      } catch (err) {
        setError('Failed to delete mock drive. Please try again.');
      }
    }
  };

  const handleAddQuiz = async (quiz) => {
    try {
      const newQuiz = await api.addQuiz(quiz);
      setQuizzes([...quizzes, newQuiz]);
      closeModal();
    } catch (err) {
      setError('Failed to add quiz. Please try again.');
    }
  };

  const handleUpdateQuiz = async (updatedQuiz) => {
    try {
      await api.updateQuiz(updatedQuiz);
      setQuizzes(quizzes.map(quiz => quiz.id === updatedQuiz.id ? updatedQuiz : quiz));
      closeModal();
    } catch (err) {
      setError('Failed to update quiz. Please try again.');
    }
  };

  const handleDeleteQuiz = async (id) => {
    if (window.confirm('Are you sure you want to delete this quiz?')) {
      try {
        await api.deleteQuiz(id);
        setQuizzes(quizzes.filter(quiz => quiz.id !== id));
      } catch (err) {
        setError('Failed to delete quiz. Please try again.');
      }
    }
  };

  const handleUpdateUserPerformance = async (updatedPerformance) => {
    try {
      await api.updateUserPerformance(updatedPerformance);
      setUserPerformance(userPerformance.map(perf => perf.id === updatedPerformance.id ? updatedPerformance : perf));
      closeModal();
    } catch (err) {
      setError('Failed to update user performance. Please try again.');
    }
  };

  const handleAddInterview = async (interview) => {
    try {
      const newInterview = await api.addInterview(interview);
      setInterviews([...interviews, newInterview]);
      closeModal();
    } catch (err) {
      setError('Failed to schedule interview. Please try again.');
    }
  };

  const handleUpdateInterview = async (updatedInterview) => {
    try {
      await api.updateInterview(updatedInterview);
      setInterviews(interviews.map(interview => interview.id === updatedInterview.id ? updatedInterview : interview));
      closeModal();
    } catch (err) {
      setError('Failed to update interview. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mock Drive Module</h2>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}
      <div className="mb-4">
        <TabButton active={activeTab === 'mockDrives'} onClick={() => setActiveTab('mockDrives')}>Mock Drives</TabButton>
        <TabButton active={activeTab === 'quizzes'} onClick={() => setActiveTab('quizzes')}>Quizzes</TabButton>
        <TabButton active={activeTab === 'userPerformance'} onClick={() => setActiveTab('userPerformance')}>User Performance</TabButton>
        <TabButton active={activeTab === 'interviews'} onClick={() => setActiveTab('interviews')}>Interviews</TabButton>
      </div>
      {activeTab === 'mockDrives' && (
        <MockDrivesTable
          mockDrives={mockDrives}
          onAdd={() => openModal(<AddEditMockDriveForm onSubmit={handleAddMockDrive} onClose={closeModal} />)}
          onEdit={(drive) => openModal(<AddEditMockDriveForm drive={drive} onSubmit={handleUpdateMockDrive} onClose={closeModal} />)}
          onDelete={handleDeleteMockDrive}
          onAddQuiz={(driveId) => openModal(<QuizManagement driveId={driveId} onSubmit={handleAddQuiz} onClose={closeModal} />)}
          onViewPerformance={(driveId) => openModal(<UserPerformance driveId={driveId} onClose={closeModal} />)}
        />
      )}
      {activeTab === 'quizzes' && (
        <QuizzesTable
          quizzes={quizzes}
          onEdit={(quiz) => openModal(<AddEditMockDriveForm quiz={quiz} onSubmit={handleUpdateQuiz} onClose={closeModal} />)}
          onDelete={handleDeleteQuiz}
        />
      )}
      {activeTab === 'userPerformance' && (
        <UserPerformanceTable
          userPerformance={userPerformance}
          onEdit={(performance) => openModal(<EditUserPerformance performance={performance} onSubmit={handleUpdateUserPerformance} onClose={closeModal} />)}
        />
      )}
      {activeTab === 'interviews' && (
        <InterviewsTable
          interviews={interviews}
          onAdd={() => openModal(<ScheduleInterviewForm onSubmit={handleAddInterview} onClose={closeModal} />)}
          onEdit={(interview) => openModal(<EditInterviewForm interview={interview} onSubmit={handleUpdateInterview} onClose={closeModal} />)}
        />
      )}
      
      {showModal && (
        <Modal onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
}