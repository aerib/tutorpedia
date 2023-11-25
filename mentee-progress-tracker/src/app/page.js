"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import MenteeProvider from './provider/MenteeProvider';
import MenteeList from './components/MenteeList';

export default function Page() {
  const [mentees, setMentees] = useState([]);

  useEffect(() => {
    async function fetchMentees() {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            },
          }
        );
        setMentees(response.data.records);
      } catch (error) {
        console.error('Error fetching mentees:', error);
      }
    }
    fetchMentees();
  }, []);

  return (
    <MenteeProvider initialMentees={mentees}>
      <MenteeList />
    </MenteeProvider>
  );
}
