import React from 'react';
import Navbar from '../components/navbar';
import ResultCard from '../components/ResultCard';
import { Center, Grid, Container, SimpleGrid } from '@mantine/core';

const SearchResults = () => {
  return (

    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Navbar />
        <Center>
          <h1 className='sub_head_text'>
            Search Results for:<br className='max-md:hidden' />
          </h1>
        </Center>
        <Container>
          <Center maw={1100} mx="auto" pt={30}>
            <SimpleGrid cols={3}>
              <ResultCard />  
              <ResultCard />  
              <ResultCard />
              <ResultCard />
              <ResultCard />
            </SimpleGrid>
          </Center>
        </Container>
      </div>
    </main>



  )
}

export default SearchResults