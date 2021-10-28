import {Background} from "./components/Generic/Background.style";
import "./reset.css";
import {SectionDivider} from "./components/Generic/SectionDivider.style";
import React, {useState} from "react";
import Launches from "./components/LaunchesInfo/Launches";
import Pagination from "./components/Pagination";
const LAUNCHES_QUERY = `
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
      site_name
    }
    links {
      article_link
    }
    rocket {
      rocket_name
      fairings {
        recovered
      }
    }
    ships {
      name
      home_port
      image
    }
    id
  }
}
`



function App() {
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState([1]);
    const [launchesPerPage] = useState([1]);

    React.useEffect(() => {
        setLoading(true);
        fetch('https://api.spacex.land/graphql/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: LAUNCHES_QUERY })
        }).then(response => response.json())
            .then(data => setLaunches(data.data.launchesPast))
        setLoading(false);
    },[]);




    // Get current post
    const indexOfLastPage = currentPage * launchesPerPage;
    const indexOfFirstPage = indexOfLastPage - launchesPerPage;
    const currentLaunches = launches.slice(indexOfFirstPage, indexOfLastPage);


    // Change page
    const nextPage = () => {
        setCurrentPage(parseFloat(currentPage) + 1);
        console.log(currentPage)
    }

    const previousPage = () => {
        setCurrentPage(parseInt(currentPage) - 1);
    }

  return (

      <Background>
          <Pagination launchesPerPage={launchesPerPage} totalLaunches={launches.length} nextPage={nextPage} previousPage={previousPage}/>
          <SectionDivider background={'#5C5C5D'}/>
          <Launches loading={loading} launches={currentLaunches}/>
      </Background>
  );
}

export default App;
