import Link from "next/link";

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Link
              href="/components"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Components
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Card Components
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Flexible card components for displaying content in organized layouts
            </p>
          </div>

          {/* Basic Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Basic Cards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Basic Card</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      This is a simple card component with basic styling and content.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Border</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      This card has a border for better visual separation.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Basic Card
<div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Basic Card</h3>
  <p className="text-gray-600 dark:text-gray-300">
    This is a simple card component with basic styling and content.
  </p>
</div>

// Card with Border
<div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-600">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Border</h3>
  <p className="text-gray-600 dark:text-gray-300">
    This card has a border for better visual separation.
  </p>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Image Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Image Cards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Image</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This card features an image placeholder and content below.
                      </p>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Card with Image
<div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
  <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card with Image</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      This card features an image placeholder and content below.
    </p>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
      Read More
    </button>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Feature Cards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Feature Card</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      This card includes an icon and hover effects for better interactivity.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Feature Card with Icon
<div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Feature Card</h3>
  <p className="text-gray-600 dark:text-gray-300">
    This card includes an icon and hover effects for better interactivity.
  </p>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Stats Cards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                    <div className="text-3xl font-bold mb-2">1,234</div>
                    <div className="text-blue-100">Total Users</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                    <div className="text-3xl font-bold mb-2">567</div>
                    <div className="text-green-100">Active Users</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Stats Cards
<div className="grid grid-cols-2 gap-4">
  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
    <div className="text-3xl font-bold mb-2">1,234</div>
    <div className="text-blue-100">Total Users</div>
  </div>
  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
    <div className="text-3xl font-bold mb-2">567</div>
    <div className="text-green-100">Active Users</div>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Testimonial Cards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">John Doe</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">CEO, Company</div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                      "This is an amazing product that has transformed our workflow completely."
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Testimonial Card
<div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
  <div className="flex items-center mb-4">
    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
    <div>
      <div className="font-semibold text-gray-900 dark:text-white">John Doe</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">CEO, Company</div>
    </div>
  </div>
  <p className="text-gray-600 dark:text-gray-300 italic">
    "This is an amazing product that has transformed our workflow completely."
  </p>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Use These Cards?</h2>
            <p className="text-xl mb-8 opacity-90">
              Copy the code examples above and start building beautiful card layouts!
            </p>
            <Link
              href="/components"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore More Components
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 