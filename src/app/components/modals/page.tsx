"use client";

import Link from "next/link";
import { useState } from "react";

export default function ModalsPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
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
              Modal Components
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Modal and dialog components for overlays and popups
            </p>
          </div>

          {/* Basic Modal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Basic Modal</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => openModal('basic')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Open Basic Modal
                  </button>
                  {activeModal === 'basic' && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Basic Modal</h3>
                          <button 
                            onClick={closeModal}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          This is a basic modal example with a title, content, and close button.
                        </p>
                        <div className="flex justify-end space-x-3">
                          <button 
                            onClick={closeModal}
                            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                          >
                            Cancel
                          </button>
                          <button 
                            onClick={closeModal}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Basic Modal
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Basic Modal</h3>
      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      This is a basic modal example with a title, content, and close button.
    </p>
    <div className="flex justify-end space-x-3">
      <button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
        Cancel
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
        Confirm
      </button>
    </div>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Form Modal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Form Modal</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => openModal('form')}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Open Form Modal
                  </button>
                  {activeModal === 'form' && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add New Item</h3>
                          <button 
                            onClick={closeModal}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Name
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                              placeholder="Enter name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Description
                            </label>
                            <textarea
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                              placeholder="Enter description"
                            ></textarea>
                          </div>
                          <div className="flex justify-end space-x-3">
                            <button
                              type="button"
                              onClick={closeModal}
                              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Form Modal
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Add New Item</h3>
      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Enter name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Description
        </label>
        <textarea
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
          placeholder="Enter description"
        ></textarea>
      </div>
      <div className="flex justify-end space-x-3">
        <button type="button" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
          Save
        </button>
      </div>
    </form>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Modal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Confirmation Modal</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => openModal('confirmation')}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    Open Confirmation Modal
                  </button>
                  {activeModal === 'confirmation' && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Delete Item</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Are you sure you want to delete this item?</p>
                          </div>
                        </div>
                        <div className="flex justify-end space-x-3">
                          <button 
                            onClick={closeModal}
                            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                          >
                            Cancel
                          </button>
                          <button 
                            onClick={closeModal}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Confirmation Modal
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-4">
        <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Delete Item</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Are you sure you want to delete this item?
        </p>
      </div>
    </div>
    <div className="flex justify-end space-x-3">
      <button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
        Cancel
      </button>
      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
        Delete
      </button>
    </div>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Large Modal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Large Modal</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Example</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => openModal('large')}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    Open Large Modal
                  </button>
                  {activeModal === 'large' && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Large Modal Content</h3>
                          <button 
                            onClick={closeModal}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <div className="space-y-4">
                          <p className="text-gray-600 dark:text-gray-300">
                            This is a large modal that can contain more content. It has a maximum height and scrolls when needed.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Section 1</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                This is the first section of content in the large modal.
                              </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Section 2</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                This is the second section of content in the large modal.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end space-x-3 mt-6">
                          <button 
                            onClick={closeModal}
                            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                          >
                            Cancel
                          </button>
                          <button 
                            onClick={closeModal}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Code</h3>
                <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Large Modal
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Large Modal Content</h3>
      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div className="space-y-4">
      <p className="text-gray-600 dark:text-gray-300">
        This is a large modal that can contain more content. It has a maximum height and scrolls when needed.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Section 1</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            This is the first section of content in the large modal.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Section 2</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            This is the second section of content in the large modal.
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-end space-x-3 mt-6">
      <button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
        Cancel
      </button>
      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
        Save Changes
      </button>
    </div>
  </div>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Use These Modals?</h2>
            <p className="text-xl mb-8 opacity-90">
              Copy the code examples above and start building beautiful modals!
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