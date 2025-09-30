import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "student_id": 1,
    "name": "Ayesha",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "student_id": 2,
    "name": "Rahim",
    "physics": 74,
    "chemistry": 69,
    "math": 80
  },
  {
    "student_id": 3,
    "name": "Sneha",
    "physics": 90,
    "chemistry": 88,
    "math": 94
  },
  {
    "student_id": 4,
    "name": "Kamal",
    "physics": 65,
    "chemistry": 70,
    "math": 68
  },
  {
    "student_id": 5,
    "name": "Fatima",
    "physics": 82,
    "chemistry": 76,
    "math": 85
  },
  {
    "student_id": 6,
    "name": "Arjun",
    "physics": 95,
    "chemistry": 89,
    "math": 97
  },
  {
    "student_id": 7,
    "name": "Nadia",
    "physics": 79,
    "chemistry": 83,
    "math": 88
  },
  {
    "student_id": 8,
    "name": "Hasan",
    "physics": 60,
    "chemistry": 65,
    "math": 72
  },
  {
    "student_id": 9,
    "name": "Meera",
    "physics": 88,
    "chemistry": 90,
    "math": 86
  },
  {
    "student_id": 10,
    "name": "Samiul",
    "physics": 72,
    "chemistry": 68,
    "math": 75
  }
]


const ResultsChart = () => {
   return (
      <div>
         <LineChart width={800} height={500} data={resultData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis ></YAxis>
            <Line dataKey="math"></Line>
            <Line dataKey={'chemistry'} stroke='red'></Line>
         </LineChart>
      </div>
   );
};

export default ResultsChart;