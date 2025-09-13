# SaaSquatch Lead Capture System

## Database Setup

### 1. Neon Database Configuration

Your Neon database is already configured with Netlify. The connection details are:

- **Database Name**: `young-union-38591523`
- **Production URL**: `postgresql://neondb_owner:npg_7ZnWRoaIs9fw@ep-cool-silence-ae6pg94m.c-2.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require`

### 2. Environment Variables

Make sure your Netlify site has the following environment variable set:

```
NETLIFY_DATABASE_URL=postgresql://neondb_owner:npg_7ZnWRoaIs9fw@ep-cool-silence-ae6pg94m.c-2.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require
```

### 3. Database Schema

Run the SQL commands in `database/schema.sql` to create the leads table:

```sql
-- This creates the leads table with all necessary fields
-- Run this in your Neon database console
```

### 4. Lead Capture Features

The system now captures leads from:

1. **Pricing Section**: When users click "Get Started" or "Get Quote" on any pricing tier
2. **Email Signup**: When users subscribe to the newsletter in the "Join the Herd" section

### 5. Lead Data Captured

For each lead, we capture:
- **Name** (required for pricing forms)
- **Email** (required)
- **Phone** (optional)
- **Business Name** (optional)
- **Description** (project details)
- **Interested Tier** (business/ecommerce/custom/newsletter)
- **Pricing Preference** (monthly/yearly)
- **Source** (pricing/email_signup)
- **Timestamps** (created_at, updated_at)

### 6. Netlify Functions

The lead capture is handled by:
- `netlify/functions/capture-lead.js` - Main function for capturing leads
- `netlify/functions/test-db.js` - Test function to verify database connection
- Uses `@neondatabase/serverless` package for database connectivity (NOT `@netlify/neon`)
- Handles duplicate emails (updates existing records)
- Returns success/error responses
- Includes CORS headers for frontend integration

**Important:** The correct package is `@neondatabase/serverless`, not `@netlify/neon` which doesn't exist.

### 7. Frontend Integration

The lead capture forms are integrated into:
- `components/LeadCaptureForm.js` - Reusable form component
- `components/Pricing.js` - Modal forms for each pricing tier
- `components/JoinTheHerd.js` - Email signup form

### 8. Testing

To test the lead capture:

1. Deploy to Netlify
2. Fill out a pricing form
3. Check your Neon database for new leads
4. Test email signup in "Join the Herd" section

### 9. Analytics

You can query your leads database to see:
- Lead sources and conversion rates
- Popular pricing tiers
- Monthly vs yearly preferences
- Lead quality and descriptions

Example queries:
```sql
-- Total leads by source
SELECT source, COUNT(*) FROM leads GROUP BY source;

-- Leads by pricing tier
SELECT interested_tier, COUNT(*) FROM leads GROUP BY interested_tier;

-- Recent leads
SELECT * FROM leads ORDER BY created_at DESC LIMIT 10;
```
