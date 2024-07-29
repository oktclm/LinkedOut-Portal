import {useEffect, useState} from 'react';
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const[jobs, setJobs] = useState([]);

    useEffect(() => {
      fetch("jobs.json").then(res => res.json()).then(data => {
        setJobs(data)
      })
    }, [])

    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
      setQuery(event.target.value)
    }

    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    const handleChange = (event) => {
      setSelectedCategory(event.target.value)
    }

    const handleClick = (event) => {
      setSelectedCategory(event.target.value)
    }

    const filteredData = (jobs, selected, query) => {
      let filteredJobs = jobs;

      if(query){
        filteredJobs = filteredItems;
      }

      if(selected){
        filteredData = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => (
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
        ));
        console.log(filteredJobs);
      }
      return filteredJobs.map((data, i) => <Card key={i} data={data}/>)
    }

    const result = filteredData(jobs, selectedCategory, query);
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>

      {/* main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:pg-24 px-4 py-12'>
        <div className='bg-white p-4 rounded'>Left</div>
        <div className='col-span-2 bg-white p-4 rounded-sm'> <Jobs result={result}/></div>
        <div className='bg-white p-4 rounded'>Right</div>
      </div>
    </div>
  )
}

export default Home