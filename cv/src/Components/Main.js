import React from 'react'

const Main = () => {
  return (
    <div className='Main'>
      <div className='aboutme'>
        <h4>ABOUT ME</h4>
        <p>with over 1 year of experience in fullstack development and 2 year experience in front-end
          development, I have successfully completed complex projects and continuously expanded my skills. In just 1 year, I have gained proficiency in Mern Stack and delivered impressive
          results as a Developer.
        </p>
      </div>
      <div className='aboutme'>
        <h4>EDUCATION</h4>
        <h6>Bachelor of Science, Institute of space technology,
          Islamabad, 2024</h6>
        <ul>
          <li>Initiated my career in technology as a web developer, gaining a foundational
            understanding of web development.
          </li>
          <li>
            Simultaneously pursued 2 internships one as a front end developer and one as a Mern stack
            developer.
          </li>
          <li>
            Managed and executed various projects including my final year project.
          </li>
          <li>
            his early blend of education and hands-on experience in web development laid the
            groundwork for my career in the tech industry.
          </li>
        </ul>
      </div>
      <div className='aboutme'>
        <h4>WORK EXPERIENCE</h4>
        <h6>Front end Developer(internship) . NextSalution, Islamabad</h6>
        <p>Aug 2022</p>
        <ul>
          <li>Learned and implemented the basic and advance concepts of React.js.</li>
          <li>
            Developed front end for a web Application.</li>
          <li>
            Implemented forms and tables for dynamic data entry.</li>
          <li>
            Developed login and signup pages with jwt tokens.</li>
        </ul>
        <h6>Mern stack developer(internship), Eziline Software House, Islamabad</h6>
        <p>Sep 2023</p>
        <ul>
          <li>Learned and implemented concepts of full stack development..</li>
          <li>Starting with a front end project build a portfolio website front end..</li>
          <li>Then a front end for e-commerce website..</li>
          <li>Build a role base AUTH system..</li>
          <li>Build a full stack point of sale application with functionality of multirole access and
            inventory management.</li>
        </ul>
      </div>
      <div className='aboutme'>
        <h4>PROJECTS</h4>
        <h6>Point of sale</h6>
        <p>lication a point of sale system developed for retail stores with Inventory Management and sales tracking. Role based user accesses with multiple store management
          through single system. can be used for used for stores with multiple branches and employee
          access will be based on the id which will be linked to the store they work in.
        </p>
        <h6>E-commerce store</h6>
        <p>An React.js project involve building a complete frontend for an online Electronic store. which
          includes a home page, product page with functionality of pagination implemented in it. it has
          a completely responsive front end suitable for all type of devices</p>
        <h6>Crypto Analyzer</h6>
        <p>A  simple web application build using coingecko api where user can get the latest price get
          historical price data and compare charts and price of any 2 coins. search can be done my
          entering the symbols of crypto tokens and also my entering their name</p>
        <h6>Daraz Data Scraper</h6>
        <p>This data scraper is build using python and it utilizes Selenium and MongoDB to scrape
          product data from a Daraz.pk. It navigates through multiple pages, extracts initial product
          details, then further scrapes individual product pages for additional information, updating or
          inserting the data into a MongoDB database.
        </p>
        <h6>SearchX</h6>
        <p>This web application is a product hunting tool for daraz.pk. it used data scraped using it very
          own data scraper and MongoDB as a database. it help user get the details of individual
          products when user provides its URL and it also help find product base on user criteriaF</p>
      </div>

    </div>
  )
}

export default Main