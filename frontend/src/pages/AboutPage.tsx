import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About TechBlog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A community-driven platform for sharing knowledge and insights across engineering, science, technology, and mathematics.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We strive to create a space where professionals, academics, and enthusiasts can share their knowledge and experiences, fostering a community of continuous learning and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Sharing</h3>
                <p className="text-gray-600">Facilitating the exchange of ideas and expertise across technical disciplines.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Building</h3>
                <p className="text-gray-600">Creating connections between professionals and enthusiasts in various fields.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Promoting new ideas and approaches to technical challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="list-disc list-inside text-gray-600">
                  {category.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Publication Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Standards</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Original, well-researched content</li>
                  <li>Clear, concise, and engaging writing</li>
                  <li>Proper attribution and citations</li>
                  <li>Code examples when applicable</li>
                  <li>Practical insights and applications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Writing Tips</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Focus on practical examples</li>
                  <li>Include visual aids when possible</li>
                  <li>Structure content for readability</li>
                  <li>Engage with your audience</li>
                  <li>Keep content up-to-date</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Share your knowledge and expertise with our growing community of technical professionals and enthusiasts.
        </p>
        {/* Write feature temporarily disabled
        <a
          href="/write"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Start Writing
        </a>
        */}
      </div>
    </div>
  );
};

const categories = [
  {
    name: 'Engineering',
    description: 'Exploring practical applications and innovations in engineering.',
    topics: [
      'Software Architecture',
      'System Design',
      'Hardware Integration',
      'Performance Optimization',
      'DevOps Practices'
    ]
  },
  {
    name: 'Science',
    description: 'Diving into scientific discoveries and research.',
    topics: [
      'Quantum Computing',
      'Materials Science',
      'Data Analysis',
      'Research Methods',
      'Scientific Computing'
    ]
  },
  {
    name: 'Technology',
    description: 'Keeping up with the latest technological advances.',
    topics: [
      'Artificial Intelligence',
      'Cloud Computing',
      'Blockchain',
      'IoT',
      'Cybersecurity'
    ]
  },
  {
    name: 'Programming',
    description: 'Mastering programming languages and development practices.',
    topics: [
      'Web Development',
      'Mobile Development',
      'Systems Programming',
      'Machine Learning',
      'Database Design'
    ]
  },
  {
    name: 'Mathematics',
    description: 'Understanding mathematical concepts and applications.',
    topics: [
      'Algorithm Analysis',
      'Statistical Methods',
      'Mathematical Modeling',
      'Optimization',
      'Number Theory'
    ]
  }
];

export default AboutPage;
