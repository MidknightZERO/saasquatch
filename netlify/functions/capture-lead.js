// Netlify function to capture leads
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NETLIFY_DATABASE_URL);

export default async function handler(event, context) {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    try {
        // Parse the request body
        const leadData = JSON.parse(event.body);
        
        // Validate required fields
        if (!leadData.email) {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: 'Email is required' })
            };
        }

        // Insert lead into database
        const result = await sql`
            INSERT INTO leads (
                name, 
                email, 
                phone, 
                business_name, 
                description, 
                interested_tier, 
                pricing_preference, 
                source
            ) VALUES (
                ${leadData.name || null},
                ${leadData.email},
                ${leadData.phone || null},
                ${leadData.business_name || null},
                ${leadData.description || null},
                ${leadData.interested_tier || null},
                ${leadData.pricing_preference || null},
                ${leadData.source || 'website'}
            )
            ON CONFLICT (email) DO UPDATE SET
                name = COALESCE(EXCLUDED.name, leads.name),
                phone = COALESCE(EXCLUDED.phone, leads.phone),
                business_name = COALESCE(EXCLUDED.business_name, leads.business_name),
                description = COALESCE(EXCLUDED.description, leads.description),
                interested_tier = COALESCE(EXCLUDED.interested_tier, leads.interested_tier),
                pricing_preference = COALESCE(EXCLUDED.pricing_preference, leads.pricing_preference),
                source = COALESCE(EXCLUDED.source, leads.source),
                updated_at = CURRENT_TIMESTAMP
            RETURNING id, email, created_at
        `;

        // Send success response
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                success: true, 
                message: 'Lead captured successfully',
                lead_id: result[0]?.id,
                email: result[0]?.email
            })
        };

    } catch (error) {
        console.error('Database error:', error);
        
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                error: 'Internal server error',
                message: 'Failed to capture lead'
            })
        };
    }
}
