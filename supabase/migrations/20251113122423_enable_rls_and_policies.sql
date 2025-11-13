-- Enable Row Level Security
alter table chat_sessions enable row level security;
alter table chat_messages enable row level security;
alter table chat_sources enable row level security;
alter table chat_embeddings enable row level security;

-- Allow users to select/insert/update/delete only their own chat sessions
create policy "Users can manage their own chat sessions"
  on chat_sessions
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Messages linked to user's sessions
create policy "Users can manage messages in their sessions"
  on chat_messages
  for all
  using (
    session_id in (
      select id from chat_sessions where user_id = auth.uid()
    )
  )
  with check (
    session_id in (
      select id from chat_sessions where user_id = auth.uid()
    )
  );

-- Sources belong to user
create policy "Users can manage their own sources"
  on chat_sources
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Embeddings linked to user's sources
create policy "Users can manage their own embeddings"
  on chat_embeddings
  for all
  using (
    source_id in (
      select id from chat_sources where user_id = auth.uid()
    )
  )
  with check (
    source_id in (
      select id from chat_sources where user_id = auth.uid()
    )
  );
