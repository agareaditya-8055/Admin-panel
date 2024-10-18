import React from 'react';
import Table from '../../components/table/Table'

export default function Quiz() {
    const quizzes = [
        {
            id: 1,
            title: 'JavaScript Basics',
            description: 'A quiz covering the basics of JavaScript.',
            questions: 10,
            duration: '15 mins',
            difficulty: 'Easy',
            author: 'John Doe',
        },
        {
            id: 2,
            title: 'React Fundamentals',
            description: 'Test your knowledge on core React concepts.',
            questions: 15,
            duration: '20 mins',
            difficulty: 'Intermediate',
            author: 'Jane Smith',
        },
        {
            id: 3,
            title: 'Advanced CSS Techniques',
            description: 'A challenging quiz on advanced CSS concepts.',
            questions: 20,
            duration: '25 mins',
            difficulty: 'Hard',
            author: 'Sam Wilson',
        },
    ];

    const quizColumns = [
        { label: '#', field: 'id' },
        { label: 'Title', field: 'title' },
        { label: 'Description', field: 'description' },
        { label: 'Questions', field: 'questions' },
        { label: 'Duration', field: 'duration' },
       
        { label: 'Author', field: 'author' },
    ];

    const specialQuizColumn = [
        { label: 'Difficulty', field: 'difficulty' },
        
      ]

    return <Table data={quizzes} columns={quizColumns} specialColumns={specialQuizColumn} />;
}
