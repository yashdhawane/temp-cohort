import { Client } from 'pg';

// Async function to fetch user data from the database given an email
async function getUser() {
    const client = new Client({
        host: 'ep-floral-voice-a580xzqy.us-east-2.aws.neon.tech',
        port: 5432,
        database: 'neondb',
        user: 'neondb_owner',
        password: 'NVvh7upSy9qz',
        ssl: true, // Neon requires SSL
    });
    

  try {
    await client.connect(); // Ensure client connection is established
    // const query = 'SELECT * FROM users WHERE email = $1';
    const insertQuery = "INSERT INTO users (email, password) VALUES ('user3@example.com', 'user_password');";
    // const values = [email];
    // const result = await client.query(query, values);
    const res = await client.query(insertQuery);
    
    // if (result.rows.length > 0) {
    //   console.log('User found:', result.rows[0]); // Output user data
    //   return result.rows[0]; // Return the user data
    // } else {
    //   console.log('No user found with the given email.');
    //   return null; // Return null if no user was found
    // }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUser();