import { useState, useEffect } from 'react'
import axios from 'axios'
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '399c04d403msh1e48d8b0421bcadp133280jsnbc478fa1401e',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  }

  const fetchData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await axios.request(options)
      setData(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  const newData = [
    {
      employer_name: 'Charles Schwab',
      employer_logo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/1200px-Charles_Schwab_Corporation_logo.svg.png',
      employer_website: 'http://www.schwab.com',
      employer_company_type: 'Finance',
      job_publisher: 'Schwab Jobs',
      job_id: 'G6qYxpAYyVsAAAAAAAAAAA==',
      job_employment_type: 'FULLTIME',
      job_title: 'Software Web Developer',
      job_apply_link: 'https://www.schwabjobs.com/job/austin/software-web-developer/33727/48110146896',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.8104,
      job_description: 'Your Opportunity..',
      job_is_remote: false,
      job_posted_at_timestamp: 1682726400,
      job_posted_at_datetime_utc: '2023-04-29T00:00:00.000Z',
      job_city: 'Austin',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 30.267153,
      job_longitude: -97.74306,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=G6qYxpAYyVsAAAAAAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: null,
      job_offer_expiration_timestamp: null,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 60,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: true,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: ['Job1', 'Job2'],
      },
      Responsibilities: ['Job1', 'Job2'],
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_naics_code: '523920',
      job_naics_name: 'Portfolio Management',
    },
    {
      employer_name: 'Charles Schwab',
      employer_logo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/1200px-Charles_Schwab_Corporation_logo.svg.png',
      employer_website: 'http://www.schwab.com',
      employer_company_type: 'Finance',
      job_publisher: 'Schwab Jobs',
      job_id: 'G6qYxpAYyVsAAAAAAAAAAAA==',
      job_employment_type: 'FULLTIME',
      job_title: 'Software Web Developer',
      job_apply_link: 'https://www.schwabjobs.com/job/austin/software-web-developer/33727/48110146896',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.8104,
      job_description: 'Your Opportunity..',
      job_is_remote: false,
      job_posted_at_timestamp: 1682726400,
      job_posted_at_datetime_utc: '2023-04-29T00:00:00.000Z',
      job_city: 'Austin',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 30.267153,
      job_longitude: -97.74306,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=G6qYxpAYyVsAAAAAAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: null,
      job_offer_expiration_timestamp: null,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 60,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: true,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: ['Job1', 'Job2'],
      },
      Responsibilities: ['Job1', 'Job2'],
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_naics_code: '523920',
      job_naics_name: 'Portfolio Management',
    },
  ]

  return { data: newData, isLoading, error, refetch }
}

export default useFetch
