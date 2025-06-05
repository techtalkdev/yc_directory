import SearchForm from '@/components/SearchForm'
import StartupCard from '@/components/StartupCard';
import React from 'react'

const Home = async ({ searchParams }:{ searchParams: Promise<{ query?: string}>}) => {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'John Doe' },
      _id: 1,
      description: 'This is a post about Robots',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ib3RzfGVufDB8fDB8fHww',
      category: 'Robotics',
      title: 'We Robots',
    }
  ];

  return (
    <>
    <section className='pink_container'>
      <h1 className='heading'>Pitch Your Startup, 
        <br /> Connect with Entrepreneurs</h1>
        <p className='sub-heading !max-w-3xl'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
        <SearchForm query={query} />
    </section>

    <section className='section_container'>
      <p className='text-30-semibold'>
        {query ? `Search Results for "${query}"` : 'All Startups'}
      </p>
      <ul className='mt-7 card_grid'>
        {posts?.length > 0 ? (
          posts.map((post: StartupCardType, index: number ) => (
            <StartupCard key={post?._id} post={post} />
          ))
        ): (
          <p className='no-results'>No Startups Found</p>
        )}
      </ul>
    </section>
    </>
  )
}

export default Home 