-- Create a table for storing video generation requests
create table public.videos (
  id uuid default gen_random_uuid() primary key,
  user_id text not null, -- References the Clerk User ID stored in your public.users table
  niche text,

  language text,
  voice text,
  music text,
  video_style text,
  caption_style text,
  series_name text,
  duration text,
  platform text,
  schedule_time timestamptz,
  status text default 'pending', -- pending, processing, completed, failed
  video_url text, -- To store the final generated video URL
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table public.videos enable row level security;

-- Create policies (Adjust based on your specific auth setup, assuming the 'user_id' column matches the authenticated user)
-- Policy to allow users to insert their own videos
create policy "Users can insert their own videos"
on public.videos for insert
with check (auth.uid()::text = user_id);

-- Policy to allow users to view their own videos
create policy "Users can view their own videos"
on public.videos for select
using (auth.uid()::text = user_id);

-- Policy to allow users to update their own videos
create policy "Users can update their own videos"
on public.videos for update
using (auth.uid()::text = user_id);

-- Optional: Create an index on user_id for faster lookups
create index videos_user_id_idx on public.videos (user_id);
