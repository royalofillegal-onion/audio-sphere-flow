
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  artist: z.string().min(1, 'Artist is required'),
  album: z.string().min(1, 'Album is required'),
  audioUrl: z.string().url('Must be a valid URL'),
  imageUrl: z.string().url('Must be a valid URL'),
  duration: z.string().min(1, 'Duration is required'),
});

const AddSongForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      artist: '',
      album: '',
      audioUrl: '',
      imageUrl: '',
      duration: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Here you would typically save the song to your database
    // For now, we'll just show a success message
    console.log('New song:', values);
    toast.success('Song added successfully!');
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Add New Song</h2>
        
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter song title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="artist"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Artist</FormLabel>
              <FormControl>
                <Input placeholder="Enter artist name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="album"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Album</FormLabel>
              <FormControl>
                <Input placeholder="Enter album name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="audioUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Audio URL</FormLabel>
              <FormControl>
                <Input placeholder="Enter audio file URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Enter album cover URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration (in seconds)</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  placeholder="Enter duration in seconds" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Add Song</Button>
      </form>
    </Form>
  );
};

export default AddSongForm;
