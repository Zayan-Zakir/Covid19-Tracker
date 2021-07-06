import './App.css';
import axios from 'axios'
import { useEffect, useState } from "react";
import {DropdownButton, Dropdown, } from 'react-bootstrap';
import createChart from "covid-charts";


function App() {

  const [countryName, setCountryName] = useState('Search By Country')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      console.log(response.data)
      setCountries(response.data)
    })
  }, [countryName]);

   ;
  const searchCountry = (data) => {
    setCountryName(data)
     createChart(document.body, {
      country: `${data}`,
      width: 1200,
      height: 500,
    })    
  }


  return (
    <div style={{textAlign:'center'}} >
      <br />
      <DropdownButton variant="dark" id="dropdown-basic-button" title={countryName}  >
        {countries.map((data, index) => {
          return <Dropdown.Item href="#/action-1" key={index} onSelect={() => {searchCountry(data.name)}}>{data.name}</Dropdown.Item>
        })}
      </DropdownButton>
    </div >
  )
}

export default App;




























// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'
// import { useEffect, useState } from "react";
// import createChart from "covid-charts";
// // import Paper from '@material-ui/core/Paper';
// import { Button, DropdownButton, Dropdown, Item, Card } from 'react-bootstrap';


// function App() {
//   const [countryName, setCountryName] = useState('Search By Country')

//   useEffect(() => {
//     fetchData();
//   }, [countryName]);

//   // const [covid, setCovid] = useState([])
//   // const [searchbystate, setSearchbystate] = useState('Search By Country')


//   const [countries, setCountries] = useState([])

//   const fetchData = () => {
//     // axios.get("https://covidtracking.com/api/states/")
//     // axios.get("https://api.covidtracking.com/v1/states/current.json")
//     //   .then((response) => {
//     //     setCovid(response.data)
//     //     console.log(response.data)
//     //   })


//     axios.get("https://restcountries.eu/rest/v2/all")
//       .then((response) => {
//         console.log(response.data)
//         setCountries(response.data)
//       })
//   }

//   // const search = (data) => {
//   //   setSearchbystate(data.state)
//   //   console.log(data)
//   // }

//   const searchCountry = (data) => {
//     setCountryName(data)
    
//     const chart = createChart(document.body, {
//       country: `${DataTransferItemList}`,
//       width: 500,
//       height: 400

//     });
//     // console.log(chart)
//     console.log(data)
//   }


//   return (
//     <div style={{textAlign:'center'}} >
//       <br />
//       <br />
     
//       {/* <DropdownButton id="dropdown-basic-button" title={searchbystate}  >
//         {covid.map((data, index) => {
//           return <Dropdown.Item href="#/action-1" key={index} onSelect={() => { search(data) }} >{data.state}</Dropdown.Item>
//         })}
//       </DropdownButton> */}
//       {/* <div>{1==1 ? search() : null}</div> */}

//       {/* {covid.map((data, index) => {
//         return <>
//           {searchbystate == data.state ?
//             <Card body>
//               <p>STATE: {data.state}</p>
//               <p>DATE: {data.date}</p>
//               <p>POSITIVE: {data.positive}</p>
//               <p>DEATH: {data.death}</p>
//             </Card> : null
//           }</>


//       })} */}


//       <DropdownButton id="dropdown-basic-button" title={searchbystate}  >
//         {countries.map((data, index) => {
//           return <Dropdown.Item href="#/action-1" key={index} onSelect={() => {searchCountry(data.name)}}>{data.name}</Dropdown.Item>
//         })}
//       </DropdownButton>
//     </div >
//   )
// }

// export default App;