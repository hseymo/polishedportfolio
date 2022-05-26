import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './About';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';

function ChosenPage() {
  const [currentPage, setCurrentPage] = useState('About');

  const choosePage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
    // resume redirect to pdf? 
    return <About />;
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        {choosePage()}
    </div>
  )
}

export default ChosenPage;
