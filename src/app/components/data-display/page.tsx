import Link from "next/link";

export default function DataDisplayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16">
            <Link
              href="/components"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 sm:mb-8 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Components
            </Link>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Data Display Components
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Tables, charts, and data visualization components
            </p>
          </div>

          {/* Progress Bars */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Progress Bars</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Progress</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Success</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Warning</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-3 sm:p-4">
                  <pre className="text-green-400 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
{`// Progress Bar
<div>
  <div className="flex justify-between items-center mb-2">
    <span className="text-sm text-gray-600 dark:text-gray-300">Progress</span>
    <span className="text-sm font-semibold text-gray-900 dark:text-white">75%</span>
  </div>
  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
  </div>
</div>

// Success Progress Bar
<div>
  <div className="flex justify-between items-center mb-2">
    <span className="text-sm text-gray-600 dark:text-gray-300">Success</span>
    <span className="text-sm font-semibold text-gray-900 dark:text-white">90%</span>
  </div>
  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
    <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Stats Cards</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3 sm:p-6 text-white">
                    <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">1,234</div>
                    <div className="text-xs sm:text-sm text-blue-100">Total Users</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-3 sm:p-6 text-white">
                    <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">567</div>
                    <div className="text-xs sm:text-sm text-green-100">Active Users</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-3 sm:p-6 text-white">
                    <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">89%</div>
                    <div className="text-xs sm:text-sm text-purple-100">Success Rate</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-3 sm:p-6 text-white">
                    <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">$12.5K</div>
                    <div className="text-xs sm:text-sm text-orange-100">Revenue</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-3 sm:p-4">
                  <pre className="text-green-400 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
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
  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
    <div className="text-3xl font-bold mb-2">89%</div>
    <div className="text-purple-100">Success Rate</div>
  </div>
  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
    <div className="text-3xl font-bold mb-2">$12.5K</div>
    <div className="text-orange-100">Revenue</div>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Tables */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Tables</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                            John Doe
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                            john@example.com
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                            Jane Smith
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                            jane@example.com
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                              Pending
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-3 sm:p-4">
                  <pre className="text-green-400 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
{`// Table
<div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead className="bg-gray-50 dark:bg-gray-700">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
          Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
          Email
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
          Status
        </th>
      </tr>
    </thead>
    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
          John Doe
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
          john@example.com
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Active
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Simple Charts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Bar Chart</h4>
                    <div className="flex items-end space-x-1 sm:space-x-2 h-24 sm:h-32">
                      <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '60%' }}></div>
                      <div className="flex-1 bg-green-500 rounded-t" style={{ height: '80%' }}></div>
                      <div className="flex-1 bg-purple-500 rounded-t" style={{ height: '40%' }}></div>
                      <div className="flex-1 bg-orange-500 rounded-t" style={{ height: '90%' }}></div>
                      <div className="flex-1 bg-red-500 rounded-t" style={{ height: '70%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Pie Chart</h4>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        70%
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Blue (40%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Purple (30%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-3 sm:p-4">
                  <pre className="text-green-400 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
{`// Bar Chart
<div>
  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bar Chart</h4>
  <div className="flex items-end space-x-2 h-32">
    <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '60%' }}></div>
    <div className="flex-1 bg-green-500 rounded-t" style={{ height: '80%' }}></div>
    <div className="flex-1 bg-purple-500 rounded-t" style={{ height: '40%' }}></div>
    <div className="flex-1 bg-orange-500 rounded-t" style={{ height: '90%' }}></div>
    <div className="flex-1 bg-red-500 rounded-t" style={{ height: '70%' }}></div>
  </div>
  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
    <span>Jan</span>
    <span>Feb</span>
    <span>Mar</span>
    <span>Apr</span>
    <span>May</span>
  </div>
</div>

// Pie Chart
<div>
  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Pie Chart</h4>
  <div className="flex items-center space-x-4">
    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
      75%
    </div>
    <div className="space-y-2">
      <div className="flex items-center">
        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
        <span className="text-sm text-gray-600 dark:text-gray-300">Blue (40%)</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
        <span className="text-sm text-gray-600 dark:text-gray-300">Purple (35%)</span>
      </div>
    </div>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Lists */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Lists</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Examples</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="px-3 sm:px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <div>
                          <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">List Item 1</h4>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">Description for item 1</p>
                        </div>
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 self-start sm:self-auto">
                          New
                        </span>
                      </div>
                    </div>
                    <div className="px-3 sm:px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <div>
                          <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">List Item 2</h4>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">Description for item 2</p>
                        </div>
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 self-start sm:self-auto">
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="px-3 sm:px-4 py-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <div>
                          <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">List Item 3</h4>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">Description for item 3</p>
                        </div>
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 self-start sm:self-auto">
                          Default
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-3 sm:p-4">
                  <pre className="text-green-400 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
{`// List
<div className="bg-gray-50 dark:bg-gray-700 rounded-lg">
  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">List Item 1</h4>
        <p className="text-sm text-gray-500 dark:text-gray-300">Description for item 1</p>
      </div>
      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
        New
      </span>
    </div>
  </div>
  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-600">
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">List Item 2</h4>
        <p className="text-sm text-gray-500 dark:text-gray-300">Description for item 2</p>
      </div>
      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
        Active
      </span>
    </div>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Use These Data Components?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4">
              Copy the code examples above and start building beautiful data displays!
            </p>
            <Link
              href="/components"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Explore More Components
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 