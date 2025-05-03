import {useContext, useState, useEffect } from 'react';
import './ProjectList.css';

//assets
import LikedFilled from '../../assets/likefilled.svg';
import LikeOutline from '../../assets/like.svg';

//components
import Button from '../Button/Button';

// utils
import { getApiData } from '../../services/apiServices';

//context
import { AppContext } from "../../contexts/AppContext"

function ProjectList() {
    const [projects, setProjects] = useState([]); // Inicializando com um array vazio
    const [favProjects, setFavProject] = useState([])
    const appContext = useContext(AppContext);
    const handleSavedProjects = (id) => {
        setFavProject((prevFavProjects) => {// pré definindo um status inicial para que seja trocado posteriormente
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId)=>projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        }) 
    }

    //chamada na api. Função rodando e salvando dentro de setproject. Atualiza o componente e renderiza o componente para fazer o map
    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects');
                setProjects(projectsResponse);
            } catch (error) {
                console.error("Erro ao buscar projetos:", error);
                setProjects([]); // Se der erro, mantém um array vazio
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
      const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
      if (savedFavProjects){
        setFavProject(savedFavProjects)
      }
    }, [])

    
    return (
        
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>

            <div className='projects-grid'>

                
                {
                projects ? 
                    projects.map((project) => (
                        <div className='project-card d-flex jc-center al-center fd-column' key={project.id}>
                            <div
                                className='thumb tertiary-background'
                                style={{ backgroundImage: `url(${project.thumb})` }}
                            />
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <Button buttonStyle="unstyled" onClick ={() => handleSavedProjects(project.id)}>
                                <img src={favProjects.includes(project.id) ?LikedFilled : LikeOutline} height="20px" alt="Like icon" />
                            </Button>
                       
                        </div>
                    ))
                 : 
                 null 
                }
                
            </div>
        </div>
    );
}

export default ProjectList;
