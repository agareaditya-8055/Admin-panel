import React, { useState } from 'react';

export function QuizManagement({ driveId, onSubmit, onClose }) {
  const [quizType, setQuizType] = useState('Technical');
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [passScore, setPassScore] = useState(70);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: '', difficulty: 'Easy', points: 1 }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value ;
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      mockDriveId: driveId,
      type: quizType,
      title,
      description,
      passScore,
      questions
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Add Quiz</h3>
      <div className="mb-4">
        <label htmlFor="quizType" className="block text-sm font-medium text-gray-700">Quiz Type</label>
        <select
          id="quizType"
          value={quizType}
          onChange={(e) => setQuizType(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Technical">Technical</option>
          <option value="Coding">Coding</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="passScore" className="block text-sm font-medium text-gray-700">Pass Score</label>
        <input
          type="number"
          id="passScore"
          value={passScore}
          onChange={(e) => setPassScore(parseInt(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
          min="0"
          max="100"
        />
      </div>
      {questions.map((question, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-200 rounded">
          <input
            type="text"
            value={question.question}
            onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
            placeholder="Question"
            className="mb-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          {question.options.map((option, optionIndex) => (
            <input
              key={optionIndex}
              type="text"
              value={option}
              onChange={(e) => {
                const newOptions = [...question.options];
                newOptions[optionIndex] = e.target.value;
                handleQuestionChange(index, 'options', newOptions);
              }}
              placeholder={`Option ${optionIndex + 1}`}
              className="mb-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          ))}
          <input
            type="text"
            value={question.correctAnswer}
            onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
            placeholder="Correct Answer"
            className="mb-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <select
            value={question.difficulty}
            onChange={(e) => handleQuestionChange(index, 'difficulty', e.target.value)}
            className="mb-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <input
            type="number"
            value={question.points}
            onChange={(e) => handleQuestionChange(index, 'points', parseInt(e.target.value))}
            placeholder="Points"
            className="mb-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            min="1"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddQuestion}
        className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Question
      </button>
      <div className="mt-5 sm:mt-6">
        <button
          type="submit"
          className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 sm:text-sm"
        >
          Submit Quiz
        </button>
      </div>
    </form>
  );
}