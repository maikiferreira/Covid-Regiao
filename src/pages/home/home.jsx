import React, {useState, useEffect} from 'react';
import apiCovid from '../../services/covid_api';
import apiYoutube from '../../services/youtube_api';
import VideoList from '../../components/VideoList/video_list';
import CountryInfo from '../../components/CountryInfo/country_info'
import './home.css'

/*
    Componente principal do app web.
*/
function Home(){

    /*
        Esses linhas abaixo são chamadas de hooks.
        O useState é utilizado para guartar o estado.

        Destructuring javascript

    */
    const [countries, setCountries] = useState([]);
    const [summary, setSummary] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState([]);
    const [country, setCountry] = useState([]);
    const [videos, setVideos] = useState([]);

    /*
        Função que é chamada quando altera o estado de alguma variavel.
     */
    useEffect(()=>{
        loadContent();
    }, []);   

    useEffect(()=>{
        loadCountry();
        console.log("a");
    }, [selected])

    async function loadContent() {
        await loadCountries();
        await loadSummary();
        await loadCountry();
        setLoading(false);
    }

    async function loadCountries(){
        let response = await apiCovid.get('/countries');
        setCountries(response.data);
    };

    async function loadSummary(){
        let response = await apiCovid.get('/summary');
        setSummary(response.data);
    };

    async function onSearch(keyword){
        const response = await apiYoutube.get("/search", {
            params: {
                q:keyword
            }
        })
        
        setVideos(response.data.items);
    }

    function loadCountry(){
        setLoading(true);

        let filtered = (summary["Countries"] !== undefined) ? Array.from(summary["Countries"]).filter((item)=>{
            return item["Country"] === selected
        }) : [];
        if(filtered[0]) onSearch(`covid-19 cases on ${filtered[0]["Country"]} last news`);
        setCountry(filtered[0]);
        setLoading(false);
    }

    /**
     * Seleciona o pais
     */
    function handleSelect(event){
        let nameCountry = event.target.value;
        setSelected(nameCountry);
    }

    let dados = countries;
    dados.sort((a,b) => (a["Country"] > b["Country"]) ? 1 : ((b["Country"] > a["Country"]) ? -1 : 0))

    if(!loading){
        return (
         
            <div className="content" id="teste">
                <div className="cabecalho">
                    <p className="titulo">COVID REGIÃO</p>
                </div>
                <div id="combo-box">
                    <select className="cboPais" onChange={handleSelect}>
                        {dados.map(item=>(                               
                            <option value = {item['Country']} key = {item['Country']}>
                                {item['Country']}
                            </option>
                        ))}
                    </select>
                </div>
                
                <CountryInfo country={country} />
                <VideoList videoList={videos} />
            </div>
        );
    }
    else{
        return (
            <p>Carregando...</p>
        );
    }
}

export default Home;