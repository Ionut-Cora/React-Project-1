import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function About() {
    return(
        <div id="about-div">
            <Layout>
                <h3>Functionalitati app:</h3>
                <ul>
                    <li>
                        <strong>Preluare useri din API</strong> - 
                        userii nostri/postarile noastre sunt aduse in urma unui 
                        request asincron catre JSON Placeholder
                    </li>
                    <li>
                        <strong>Listare useri/postari existente</strong> - 
                        userii/postarile pe care le-am preluat din API sunt 
                        afisate pe ecran
                    </li>
                    <li>
                        <strong>Adaugare user nou</strong> - 
                        completand campurile din formular, 
                        la submitere userul nou introdus este listat pe ecran
                    </li>
                    <li>
                        <strong>Schimbare culoare fundal/text</strong> -
                        dand click pe butoanele 'background/text color', 
                        putem schimba culoare fundalului paginii sau a textului
                    </li>
                    <li>
                        <strong>Afisare useri/postari</strong> - 
                        dand click pe butoanele din josul paginii,
                        putem sa afisam pe ecran doar userii sau doar postarile
                    </li>
                    <li>
                        <strong>Sterge userul</strong> - 
                        dand click pe butonul 'Delete User', pe care
                        fiecare user il are, putem sa stergem orice user
                    </li>
                </ul>

                <div id="home">
                    <h4>Catre pagina principala<span className="material-icons">arrow_right_alt</span></h4>
                    <Link id="home-link" to="/">Home</Link>
                </div>
                
            </Layout>
            
        </div>
    );
}

export default About;