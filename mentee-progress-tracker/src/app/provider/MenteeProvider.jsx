import axios from 'axios';
import { useState, useEffect, Children, cloneElement } from 'react';

export default function MenteeProvider({ children }) {
  const [mentees, setMentees] = useState([]);

  useEffect(() => {
    fetchMentees();
  }, []);

  const fetchMentees = async () => {
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
      console.error('Error fetching data:', error);
    }
  };

  const addMentee = async (newMentee) => {
    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
        {
          fields: newMentee,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setMentees([...mentees, response.data]);
    } catch (error) {
      console.error('Error adding mentee:', error);
    }
  };

  const deleteMentee = async (id) => {
    try {
      await axios.delete(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          },
        }
      );
      const updatedMentees = mentees.filter((mentee) => mentee.id !== id);
      setMentees(updatedMentees);
    } catch (error) {
      console.error('Error deleting mentee:', error);
    }
  };

  const updateMentee = async (id, updatedMentee) => {
    try {
      await axios.put(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}/${id}`,
        {
          fields: updatedMentee,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const updatedMentees = mentees.map((mentee) =>
        mentee.id === id ? { id, ...updatedMentee } : mentee
      );
      setMentees(updatedMentees);
    } catch (error) {
      console.error('Error updating mentee:', error);
    }
  };

  return (
    <>
      {Children.map(children, (child) =>
        cloneElement(child, {
          mentees,
          addMentee,
          deleteMentee,
          updateMentee,
        })
      )}
    </>
  );
}
