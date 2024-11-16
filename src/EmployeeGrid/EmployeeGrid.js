import React, { useEffect, useState } from 'react';
import '../css/EmployeeGrid.css';

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const EmployeeGrid = ({ searchTerm }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch('/drivers.json')
      .then(response => response.json())
      .then(data => setDrivers(data.data));
  }, []);

  const getActivityForDay = (activities, date) => {
    return activities.some(activity => activity.date === date);
  };

  const getTotalMinutes = (traces) => {
    return traces.reduce((total, trace) => {
      return total + trace.activity.reduce((sum, activity) => sum + activity.duration, 0);
    }, 0);
  };

  const getDateForDay = (day) => {
    const startDate = new Date('2021-02-01');
    startDate.setDate(startDate.getDate() + day);
    return startDate.toISOString().split('T')[0];
  };

  const filteredDrivers = drivers.filter(driver =>
    `${driver.forename} ${driver.surname}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.vehicleRegistration.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-grid">
      <table>
        <thead>
          <tr>
            <th>Driver's Name</th>
            <th>Vehicle Reg</th>
            <th>Total Minutes</th>
            {weekdays.map((day, index) => (
              <th key={index} className="weekday">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {filteredDrivers.map((driver, index) => (
            <tr key={driver.driverID}>
              <td>{`${driver.forename} ${driver.surname}`}</td>
              <td>{driver.vehicleRegistration}</td>
              <td>{getTotalMinutes(driver.traces)}</td>
              {weekdays.map((day, index) => (
                <td key={index} className={`weekday ${getActivityForDay(driver.traces, getDateForDay(index)) ? 'active' : ''}`}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeGrid;