import React, { useState } from 'react';

function App() {
  // State to manage the visibility of each person
  const [showPerson1, setShowPerson1] = useState(false);
  const [showPerson2, setShowPerson2] = useState(false);
  const [showPerson3, setShowPerson3] = useState(false);

  // Sample person data
  const persons = [
    {
      name: "John Doe",
      age: 30,
      profession: "Engineer"
    },
    {
      name: "Jane Smith",
      age: 25,
      profession: "Doctor"
    },
    {
      name: "Alex Johnson",
      age: 40,
      profession: "Teacher"
    }
  ];

  return (
    <div>
      <h1>Conditional Display About Persons</h1>
      {/* Buttons to toggle visibility of each person */}
      <div>
        <button onClick={() => setShowPerson1(!showPerson1)}>
          {showPerson1 ? 'Hide Person 1' : 'Show Person 1'}
        </button>
        {showPerson1 && (
          <div>
            <h2>Person 1 Details</h2>
            <p>Name: {persons[0].name}</p>
            <p>Age: {persons[0].age}</p>
            <p>Profession: {persons[0].profession}</p>
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setShowPerson2(!showPerson2)}>
          {showPerson2 ? 'Hide Person 2' : 'Show Person 2'}
        </button>
        {showPerson2 && (
          <div>
            <h2>Person 2 Details</h2>
            <p>Name: {persons[1].name}</p>
            <p>Age: {persons[1].age}</p>
            <p>Profession: {persons[1].profession}</p>
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setShowPerson3(!showPerson3)}>
          {showPerson3 ? 'Hide Person 3' : 'Show Person 3'}
        </button>
        {showPerson3 && (
          <div>
            <h2>Person 3 Details</h2>
            <p>Name: {persons[2].name}</p>
            <p>Age: {persons[2].age}</p>
            <p>Profession: {persons[2].profession}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
