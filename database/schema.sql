-- Lead capture database schema for SaaSquatch
-- This will store leads from the pricing section and email signup

CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    business_name VARCHAR(255),
    description TEXT,
    interested_tier VARCHAR(50), -- 'business', 'ecommerce', 'custom'
    pricing_preference VARCHAR(20), -- 'monthly', 'yearly'
    source VARCHAR(50) DEFAULT 'website', -- 'pricing', 'email_signup', 'contact'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create an index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);

-- Insert some sample data (optional - remove in production)
INSERT INTO leads (name, email, phone, business_name, description, interested_tier, pricing_preference, source) 
VALUES 
    ('John Doe', 'john@example.com', '+1234567890', 'Acme Corp', 'Need a business website for my consulting firm', 'business', 'monthly', 'pricing'),
    ('Jane Smith', 'jane@example.com', '+0987654321', 'Smith Enterprises', 'Looking for e-commerce solution', 'ecommerce', 'yearly', 'email_signup')
ON CONFLICT (email) DO NOTHING;
