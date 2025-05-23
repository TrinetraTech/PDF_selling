import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">About</span>
            <span className="block text-blue-600">PDF Notes</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering students and professionals with high-quality educational resources.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-500">
                Founded in 2020, PDF Notes began as a small project to help university students share study materials. 
                What started as a simple idea has grown into a platform serving thousands of students worldwide.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our mission is to make quality education accessible to everyone, everywhere by connecting learners with 
                the best study resources.
              </p>
            </div>
            <div className="lg:col-start-2 lg:row-start-1">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team working"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Meet the passionate people behind PDF Notes
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Alex Johnson',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Sarah Williams',
                role: 'Head of Education',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Michael Chen',
                role: 'Lead Developer',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              },
            ].map((person) => (
              <div key={person.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <img
                        className="h-24 w-24 rounded-full object-cover shadow-lg"
                        src={person.image}
                        alt={person.name}
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{person.name}</h3>
                    <p className="mt-1 text-base text-gray-500 text-center">{person.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by learners worldwide
            </h2>
          </div>
          <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            {[
              { label: 'Users', value: '50,000+' },
              { label: 'Study Notes', value: '10,000+' },
              { label: 'Universities', value: '500+' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-100">
                  {stat.label}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              What drives us every day
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Quality',
                description: 'We maintain the highest standards for all our educational materials.',
                icon: (
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                name: 'Accessibility',
                description: 'Education should be available to everyone, regardless of location or background.',
                icon: (
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                name: 'Community',
                description: 'We believe in the power of students helping students through shared knowledge.',
                icon: (
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div key={value.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        {value.icon}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{value.name}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;