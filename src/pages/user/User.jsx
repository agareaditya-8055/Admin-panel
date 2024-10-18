import React, { useEffect } from 'react';
import Table from "../../components/table/Table"
import { fetchAllUsers } from '../../redux/api/users.api'
import { useDispatch, useSelector } from 'react-redux'

export default function User() {

    const selector = useSelector((state)=> state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selector.status === "idle") {
        dispatch(fetchAllUsers());
    }
}, [dispatch, selector.status]);

console.log(selector?.data);

const users = selector?.data;


  const userColumns = [
    // { label: '#', field: 'id' },
    { label: 'Full Name', field: 'first_name' },
    { label: 'Email', field: 'email' },
    // { label: 'Password', field: 'password' },
  ];

  const specialUserColumns = [
    { label: 'Status', field: 'status', className: 'text-green-500' },
    { label: 'Role', field: 'role', className: 'text-blue-500 text-sm'},
  ];

  return <Table data={users} columns={userColumns} specialColumns={specialUserColumns} />;
}