import axios from "axios";
import About from "../Components/About";
import Card from "../Components/Card";
import Categorie from "../Components/Categorie";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Infos from "../Components/Infos";
import Project from "../Components/Project";
import Service from "../Components/Service";
import Skill from "../Components/Skill";
import { useEffect, useState } from "../lib";

export const HomePage = () => {
  const [abouts, setAbout] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/abouts")
      .then(({ data }) => setAbout(data));
    axios
      .get("http://localhost:3000/projects")
      .then(({ data }) => setProjects(data));
    axios
      .get("http://localhost:3000/contacts")
      .then(({ data }) => setContact(data));
    axios
      .get("http://localhost:3000/categories")
      .then(({ data }) => setCategories(data));
  }, []);
  const onHandleClick = (id) => {
    console.log("home ", id);
    axios
      .get(`http://localhost:3000/categories/${id}?_embed=projects`)
      .then(({ projects }) => setProjects(projects));
  };
  return `
    <div class="container">
    ${Header()}
    ${Infos(abouts)}
    ${About({ abouts: abouts })}
    ${Service()}
    ${Skill()}
    ${Categorie({ categories, onClick: onHandleClick })}
    ${Project({ projects })}
    ${Card()}
    ${Contact(contact)}
    ${Footer()}
    </div>

    
  `;
};
