import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Award, Loader2 } from 'lucide-react';
import { useUsers } from '../../hooks/useSupabase';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';

export const Members = () => {
  const { users, loading } = useUsers();
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  const getRoleBadgeColor = (role: string) => {
    // All members get the same styling - no special highlighting
    return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/50 text-cyan-400';
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation in aerospace engineering.
          </p>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              onClick={() => setSelectedMember(user)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className="relative backdrop-blur-sm bg-[#0f172a]/60 border border-blue-500/30 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={user.profile_image_url || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'}
                    alt={user.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                  
                  {/* Role Badge */}
                  <div className="absolute top-3 right-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getRoleBadgeColor(user.role)}`}>
                      {user.role === 'admin' ? 'Admin' : 'Member'}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{user.role === 'admin' ? 'Administrator' : 'Club Member'}</p>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">{user.bio || 'Member of Aero Club TGP'}</p>
                  
                  <div className="flex items-center text-xs text-cyan-400">
                    <Mail className="h-3 w-3 mr-1" />
                    <span className="truncate">{user.email}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Detail Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="bg-[#0f172a]/95 border-blue-500/30 text-white max-w-2xl backdrop-blur-xl">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Member Profile
                </DialogTitle>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-48 h-48 rounded-xl overflow-hidden border-2 border-blue-500/30">
                      <img
                        src={selectedMember.profile_image_url || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop'}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${getRoleBadgeColor(selectedMember.role)}`}>
                      {selectedMember.role === 'admin' ? 'Admin' : 'Member'}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{selectedMember.name}</h3>
                      <p className="text-cyan-400">{selectedMember.role === 'admin' ? 'Administrator' : 'Club Member'}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start">
                        <Mail className="h-4 w-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{selectedMember.email}</span>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-4 w-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Member since {new Date(selectedMember.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                      </div>
                    </div>

                    {selectedMember.bio && (
                      <div className="pt-4 border-t border-blue-500/30">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Bio</h4>
                        <p className="text-gray-300">{selectedMember.bio}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};