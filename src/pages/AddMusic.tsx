
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import AddSongForm from '@/components/AddSongForm';

const AddMusic: React.FC = () => {
  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-gradient-to-br from-spotify-dark to-black">
        <AddSongForm />
      </div>
    </ScrollArea>
  );
};

export default AddMusic;
