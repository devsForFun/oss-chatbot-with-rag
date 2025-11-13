create extension if not exists vector;

create table chat_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  title text,
  created_at timestamp default now()
);

create table chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references chat_sessions (id) on delete cascade,
  role text check (role in ('user', 'assistant')),
  content text,
  created_at timestamp default now()
);

create table chat_sources (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  name text,
  content text,
  created_at timestamp default now()
);

create table chat_embeddings (
  id uuid primary key default gen_random_uuid(),
  source_id uuid references chat_sources (id) on delete cascade,
  embedding vector(1536),
  metadata jsonb,
  created_at timestamp default now()
);
