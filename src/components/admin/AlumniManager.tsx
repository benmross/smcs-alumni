'use client';

import { useState, useEffect } from 'react';
import { FeaturedAlumni } from '@/lib/models';

interface AlumniManagerProps {
  onStatsUpdate: (count: number) => void;
}

export default function AlumniManager({ onStatsUpdate }: AlumniManagerProps) {
  const [alumni, setAlumni] = useState<FeaturedAlumni[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    graduationYear: '',
    bio: '',
    currentPosition: '',
    company: '',
    imageUrl: ''
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadAlumni();
  }, []);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showForm) {
        resetForm();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showForm]);

  const loadAlumni = async () => {
    try {
      const response = await fetch('/api/admin/alumni');
      if (response.ok) {
        const data = await response.json();
        setAlumni(data);
        onStatsUpdate(data.length);
      }
    } catch (error) {
      console.error('Failed to load alumni:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingId 
        ? `/api/admin/alumni/${editingId}`
        : '/api/admin/alumni';
      
      const method = editingId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await loadAlumni();
        resetForm();
      }
    } catch (error) {
      console.error('Failed to save alumni:', error);
    }
  };

  const handleEdit = (alum: FeaturedAlumni) => {
    setFormData({
      name: alum.name,
      graduationYear: alum.graduationYear.toString(),
      bio: alum.bio,
      currentPosition: alum.currentPosition || '',
      company: alum.company || '',
      imageUrl: alum.imageUrl || ''
    });
    setEditingId(alum._id?.toString() || '');
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this alumni profile?')) return;
    
    try {
      const response = await fetch(`/api/admin/alumni/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await loadAlumni();
      }
    } catch (error) {
      console.error('Failed to delete alumni:', error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formDataUpload = new FormData();
      formDataUpload.append('file', file);

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formDataUpload,
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(prev => ({ ...prev, imageUrl: data.imageUrl }));
      }
    } catch (error) {
      console.error('Failed to upload image:', error);
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', graduationYear: '', bio: '', currentPosition: '', company: '', imageUrl: '' });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return <div className="text-white">Loading alumni...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">Manage Featured Alumni</h3>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#ff3131] hover:bg-[#e02828] text-white px-4 py-2 rounded-lg transition-colors duration-300"
        >
          Add Alumni
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4" 
          style={{ zIndex: 9999 }}
          onClick={(e) => e.target === e.currentTarget && resetForm()}
        >
          <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-600" style={{ zIndex: 10000 }}>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold text-white">
                {editingId ? 'Edit Alumni Profile' : 'Add New Alumni'}
              </h4>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff3131]"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Graduation Year *
                </label>
                <input
                  type="number"
                  required
                  min="1900"
                  max="2030"
                  value={formData.graduationYear}
                  onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff3131]"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Bio *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff3131]"
                  placeholder="Tell us about this alumni's achievements and journey..."
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Current Position
                </label>
                <input
                  type="text"
                  value={formData.currentPosition}
                  onChange={(e) => setFormData({ ...formData, currentPosition: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff3131]"
                  placeholder="e.g., Software Engineer, CEO, etc."
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff3131]"
                  placeholder="Current company or organization"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Profile Photo
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:bg-[#ff3131] file:text-white"
                  />
                  {uploading && <p className="text-gray-400 text-sm">Uploading...</p>}
                  {formData.imageUrl && (
                    <div className="mt-2">
                      <img
                        src={formData.imageUrl}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#ff3131] hover:bg-[#e02828] text-white py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  {editingId ? 'Update' : 'Create'} Alumni Profile
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Alumni List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {alumni.length === 0 ? (
          <div className="col-span-full">
            <p className="text-gray-400 text-center py-8">No featured alumni found.</p>
          </div>
        ) : (
          alumni.map((alum) => (
            <div
              key={alum._id?.toString()}
              className="bg-gray-700/50 border border-gray-600 rounded-lg p-4 relative"
            >
              <div className="absolute top-2 right-2 flex space-x-1">
                <button
                  onClick={() => handleEdit(alum)}
                  className="text-blue-400 hover:text-blue-300 p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(alum._id?.toString() || '')}
                  className="text-red-400 hover:text-red-300 p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0016.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>

              <div className="text-center">
                {alum.imageUrl ? (
                  <img
                    src={alum.imageUrl}
                    alt={alum.name}
                    className="w-20 h-20 object-cover rounded-full mx-auto mb-3"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                
                <h4 className="text-lg font-semibold text-white mb-1">
                  {alum.name}
                </h4>
                
                <p className="text-[#ff3131] text-sm font-medium mb-2">
                  Class of {alum.graduationYear}
                </p>
                
                {(alum.currentPosition || alum.company) && (
                  <p className="text-gray-300 text-sm mb-2">
                    {alum.currentPosition}
                    {alum.currentPosition && alum.company && ' at '}
                    {alum.company}
                  </p>
                )}
                
                <p className="text-gray-400 text-sm line-clamp-3">
                  {alum.bio}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}