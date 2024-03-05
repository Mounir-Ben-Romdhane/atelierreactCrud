import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import competitions from './api/competitions.json';

function CompetitionDetails() {
  const { id } = useParams();
  const [competition, setCompetition] = useState(null);

  useEffect(() => {
    const foundCompetition = competitions.find(c => c.id === id);
    setCompetition(foundCompetition);
  }, [id]);

  return (
    <div>
      <h1>Competition Details</h1>
      {competition ? (
        <div>
          <p>Competition ID: {competition.id}</p>
          <p>Competition Name: {competition.name}</p>
          <p>Competition Fees: {competition.fees}</p>
          <p>Competition Date: {competition.date}</p>
          {/* Render other details of the competition here */}
        </div>
      ) : (
        <p>Competition not found!</p>
      )}
    </div>
  );
}

export default CompetitionDetails;
