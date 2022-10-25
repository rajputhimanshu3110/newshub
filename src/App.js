import './App.css';
import Nav from './components/Nav';
import News from './components/News';
import { useParams, BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  let apiKey = '42c2030d56304d698a37d00b145d66db';
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home apiKey = {apiKey}/>} />
        <Route exact path="/:cat" element={<Category apiKey = {apiKey}/>} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


function Home(props){
  return(
    <>
    <Nav />
    <News apikey= {props.apiKey} category='general' page='9'/>
    </>
    
  );
}
function Category(props){
  let params = useParams();
  return(
    <>
    <Nav />
    <News apikey= {props.apiKey} key={params.cat} category={params.cat} page='9'/>
    </>
    
  );
}
