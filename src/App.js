
import './App.css';
import CoverPage from './images/CoverPage.png'
function App() {
  return (
    <div className="App">
       <div className="leftSection">
         <img src={CoverPage} alt="main-picture"/>
         <h1  className="leftSection"> Discover new things on Superapp</h1>
       </div>
       <div className="rightSection">
        <form  className="submission">
        <input type="name" placeholder="Name" className="submission" />
        <input type="username" placeholder="UserName"  className="submission"/>
        <input type="email" placeholder="Email"  className="submission" />
        <input type="mobile" placeholder="Mobile"  className="submission"/>
        
        </form>
       </div>
    </div>
  )
    
  }
export default App;
