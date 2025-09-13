// Test function to verify Neon database connection
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NETLIFY_DATABASE_URL);

export default async function handler(event, context) {
    try {
        // Test database connection
        const result = await sql`SELECT NOW() as current_time`;
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                success: true, 
                message: 'Database connection successful',
                current_time: result[0]?.current_time
            })
        };
    } catch (error) {
        console.error('Database test error:', error);
        
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                success: false,
                error: 'Database connection failed',
                message: error.message
            })
        };
    }
}
