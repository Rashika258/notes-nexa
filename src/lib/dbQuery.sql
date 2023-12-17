-- Enum Types
CREATE TYPE key_status AS ENUM ('expired', 'invalid', 'valid', 'default');
CREATE TYPE key_type AS ENUM ('stream_xchacha20', 'secretstream', 'secretbox', 'kdf', 'generichash', 'shorthash', 'auth', 'hmacsha256', 'hmacsha512', 'aead-det', 'aead-ietf');
CREATE TYPE pricing_type AS ENUM ('recurring', 'one_time');
-- Enum Types
CREATE TYPE pricing_plan_interval AS ENUM ('year', 'month', 'week', 'day');
-- Enum Types
CREATE TYPE subscription_status AS ENUM ('unpaid', 'past_due', 'incomplete_expired', 'incomplete', 'canceled', 'active', 'trialing');


-- ... Define other enums

-- Tables
CREATE TABLE workspaces (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT timezone('UTC'::text, now()) NOT NULL,
    workspace_owner UUID NOT NULL,
    title TEXT NOT NULL,
    icon_id TEXT NOT NULL,
    data TEXT,
    in_trash TEXT,
    logo TEXT,
    banner_url TEXT
);

CREATE TABLE folders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     created_at TIMESTAMPTZ DEFAULT timezone('UTC'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    icon_id TEXT NOT NULL,
    data TEXT,
    in_trash TEXT,
    banner_url TEXT,
    workspace_id UUID REFERENCES workspaces (id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE files (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT timezone('UTC'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    icon_id TEXT NOT NULL,
    data TEXT,
    in_trash TEXT,
    banner_url TEXT,
    workspace_id UUID REFERENCES workspaces (id) ON DELETE CASCADE NOT NULL,
    folder_id UUID REFERENCES folders (id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE users (
    id UUID PRIMARY KEY NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    billing_address JSONB,
    updated_at TIMESTAMPTZ DEFAULT timezone('UTC'::text, now()),
    payment_method JSONB,
    email TEXT
);

CREATE TABLE customers (
    id UUID PRIMARY KEY NOT NULL,
    stripe_customer_id TEXT
);

CREATE TABLE products (
    id TEXT PRIMARY KEY NOT NULL,
    active BOOLEAN,
    name TEXT,
    description TEXT,
    image TEXT,
    metadata JSONB
);

CREATE TABLE prices (
    id TEXT PRIMARY KEY NOT NULL,
    product_id TEXT REFERENCES products (id),
    active BOOLEAN,
    description TEXT,
    unit_amount BIGINT,
    currency TEXT,
    type pricing_type,
    interval pricing_plan_interval,
    interval_count INTEGER,
    trial_period_days INTEGER,
    metadata JSONB
);



CREATE TABLE subscriptions (
    id TEXT PRIMARY KEY NOT NULL,
    user_id UUID NOT NULL,
    status subscription_status,
    metadata JSONB,
    price_id TEXT REFERENCES prices (id),
    quantity INTEGER,
    cancel_at_period_end BOOLEAN,
    created TIMESTAMPTZ DEFAULT now()::timestamptz NOT NULL,
    current_period_start TIMESTAMPTZ DEFAULT now()::timestamptz NOT NULL,
    current_period_end TIMESTAMPTZ DEFAULT now()::timestamptz NOT NULL,
    ended_at TIMESTAMPTZ DEFAULT now()::timestamptz,
    cancel_at TIMESTAMPTZ DEFAULT now()::timestamptz,
    canceled_at TIMESTAMPTZ DEFAULT now()::timestamptz,
    trial_start TIMESTAMPTZ DEFAULT now()::timestamptz,
    trial_end TIMESTAMPTZ DEFAULT now()::timestamptz
);

CREATE TABLE collaborators (
    workspace_id UUID REFERENCES workspaces (id) NOT NULL,
     created_at TIMESTAMPTZ DEFAULT timezone('UTC'::text, now()) NOT NULL,
    user_id UUID REFERENCES users (id) NOT NULL,
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY NOT NULL
);

-- Relations
-- You may need to create indexes, primary and foreign key constraints for the relations
