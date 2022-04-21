import React, { useState, useEffect } from "react";
import Layout from "./../layout/Layout";
import Carrousel from "./../components/Carrousel";
import axios from "axios";
import { Container } from "react-bootstrap";
export default function Home() {
  const [proyectos, setProyectos] = useState([]);

  const myFunction = async () => {
    try {
      const response = await axios
        .get("https://6089c66f8c8043001757f5c4.mockapi.io/proyectos")
        .then((response) => {
          console.log(response);
          setProyectos(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myFunction();
  }, []);

  return (
    <Layout>
      <div>
        <Carrousel />
        <Container className="my-4">
          <h1>Mis proyectos</h1>
          {proyectos.length > 0 &&
            proyectos.map((proyecto, index) => (
              <p key={index}>{proyecto.name}</p>
            ))}
        </Container>
      </div>
    </Layout>
  );
}
