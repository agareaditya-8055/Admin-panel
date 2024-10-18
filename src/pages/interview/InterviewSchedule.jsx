import React from 'react';
import Table from '../../components/table/Table';

export default function InterviewSchedule() {
  const interviews = [
    {
      id: 1,
      candidateName: 'Alice Johnson',
      position: 'Frontend Developer',
      date: '2024-10-20',
      time: '10:00 AM',
      duration: '1 hour',
      interviewer: 'John Doe',
      status: 'Scheduled',
    },
    {
      id: 2,
      candidateName: 'Bob Smith',
      position: 'Backend Developer',
      date: '2024-10-22',
      time: '2:00 PM',
      duration: '1.5 hours',
      interviewer: 'Jane Smith',
      status: 'Completed',
    },
    {
      id: 3,
      candidateName: 'Carol Williams',
      position: 'Full Stack Developer',
      date: '2024-10-23',
      time: '9:00 AM',
      duration: '2 hours',
      interviewer: 'Sam Wilson',
      status: 'Rescheduled',
    },
  ];

  const columns = [
    { label: '#', field: 'id' },
    { label: 'Candidate Name', field: 'candidateName' },
    { label: 'Position', field: 'position' },
    { label: 'Date', field: 'date' },
    { label: 'Time', field: 'time' },
    { label: 'Duration', field: 'duration' },
    { label: 'Interviewer', field: 'interviewer' },
    { label: 'Status', field: 'status' },
  ];

  return <Table data={interviews} columns={columns} />;
}
