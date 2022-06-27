import React from 'react';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const User = () => {
  const params = useParams();
  const [games, setGames] = useState(null);
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://62b049b8b0a980a2ef4f73a7.mockapi.io/newgames' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data); //setStudents(data)
      });
  }, []);

  return (
    <>
      {student != null ? (
        <div className="container">
          <div className="panel-body inf-content">
            <div className="row">
              <div className="col-md-6">
                <strong>Information</strong>
                <br />
                <div className="table-responsive">
                  <table className="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Identificacion</strong>
                        </td>
                        <td className="text-primary">{student.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>First Name</strong>
                        </td>
                        <td className="text-primary">{student.firstName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Lastname</strong>
                        </td>
                        <td className="text-primary">{student.lastName}</td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Email</strong>
                        </td>
                        <td className="text-primary">{student.email}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Picture</strong>
                        </td>
                        <td className="text-primary">
                          <img src={student.picture} className="img-circle" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default User;
