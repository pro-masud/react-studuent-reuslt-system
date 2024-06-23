import { useEffect, useState } from 'react'
import axios from 'axios';

const Team = () => {
    const [team, setTeam] = useState([]);

    const getAllTeam = async () => {
        const teams = await axios.get("http://localhost:7070/students");

        setTeam(teams.data);
    }

    useEffect(() => {
        getAllTeam();
    });

  return (
    <>
      <div className="container">
        <div className="row">
            {team.map((item, index) => {
                 return (
                    <div className="col-md-4" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <img className='w-100' src={item.image} alt="" />
                            </div>
                            <div className="card-body">
                                <h2>{item.name} </h2>
                                <p>{item.age}  Years Old</p>
                                <p>Gender: {item.gender} </p>
                                <p>{item.skill} </p>
                                <p>Location: {item.location} </p>
                            </div>
                        </div>
                    </div>
                 )
            })}
        </div>
      </div>
    </>
  )
}

export default Team;
