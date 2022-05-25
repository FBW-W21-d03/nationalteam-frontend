// rfc
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PlayerList.css";
import { useUser } from "../context/UserContext";

export default function PlayerList() {
  const { token } = useUser();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/players`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setPlayers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>Die deutsche Nationalmannschaft der Frauen</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Verein</th>
            <th>Geburtsjahr</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <tr key={player._id}>
                <td>{`${player.firstName} ${player.lastName}`}</td>
                <td>{player.position}</td>
                <td>{player.club}</td>
                <td>{player.yearOfBirth}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
