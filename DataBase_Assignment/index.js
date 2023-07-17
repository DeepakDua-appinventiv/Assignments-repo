const express = require('express');
const { Pool } = require('pg');

// Create an instance of Express app
const app = express();
app.use(express.json());

// Create a pool for connecting to PostgreSQL
// const pool = new Pool({
//   user: 'your_postgres_user',
//   host: 'your_postgres_host',
//   database: 'your_postgres_database',
//   password: 'your_postgres_password',
//   port: 5432, // Default PostgreSQL port
// });

// Define the signup endpoint
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    const userExistsQuery = 'SELECT * FROM users WHERE username = $1';
    const userExistsValues = [username];
    const existingUser =  pool.query(userExistsQuery, userExistsValues);

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Insert the new user into the database
    const createUserQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)';
    const createUserValues = [username, password];
    const newUser =  pool.query(createUserQuery, createUserValues);

    res.status(201).json({ message: 'User created successfully', user: newUser.rows[0] });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'An error occurred during signup' });
  }
});

//login api

// Define the login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and the password matches
  try{
    const loginQuery = 'SELECT * FROM users WHERE username = $1 AND password = $2';
  const loginValues = [username, password];
  pool.query(loginQuery, loginValues)
      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = result.rows[0];
      res.status(200).json({ message: 'Login successful', user });
    }
    catch(error){
      console.error('Error during login:', error);
      res.status(500).json({ error: 'An error occurred during login' });
    };
});

//post api

// Define the route to post a photo
app.post('/posts', (req, res) => {
    const { user_id, post_id } = req.body;
    const photo = req.body.photo; // Assuming the photo is sent as a base64-encoded string
  
    // Insert the post into the "posts" table
    try{
        const insertPostQuery = 'INSERT INTO posts (user_id, post_id, photo) VALUES ($1, $2, $3) RETURNING *';
        const insertPostValues = [user_id, post_id, photo];
        pool.query(insertPostQuery, insertPostValues)
        const insertedPost = result.rows[0];
        res.status(201).json({ message: 'Post created successfully', post: insertedPost });
    }
    catch(error) {
        console.error('Error during post creation:', error);
        res.status(500).json({ error: 'An error occurred during post creation' });
      };
    });

    // Define the route to add a comment
    app.post('/comments', (req, res) => {
    const { user_id, post_id, comment } = req.body;
  
    try {
      // Insert the comment into the "comments" table
      const insertCommentQuery = 'INSERT INTO comments (user_id, post_id, comment) VALUES ($1, $2, $3) RETURNING *';
      const insertCommentValues = [user_id, post_id, comment];
      const result = pool.query(insertCommentQuery, insertCommentValues);
  
      const insertedComment = result.rows[0];
      res.status(201).json({ message: 'Comment added successfully', comment: insertedComment });
    } catch (error) {
      console.error('Error during comment creation:', error);
      res.status(500).json({ error: 'An error occurred during comment creation' });
    }
  });

  // Define the route to remove a comment
    app.delete('/comments/:commentId', async (req, res) => {
    const commentId = req.params.commentId;
  
    try {
      // Delete the comment from the "comments" table
      const deleteCommentQuery = 'DELETE FROM comments WHERE comment_id = $1 RETURNING *';
      const deleteCommentValues = [commentId];
      const result = await pool.query(deleteCommentQuery, deleteCommentValues);
  
      const deletedComment = result.rows[0];
      if (!deletedComment) {
        return res.status(404).json({ error: 'Comment not found' });
      }
  
      res.status(200).json({ message: 'Comment removed successfully', comment: deletedComment });
    } catch (error) {
      console.error('Error during comment removal:', error);
      res.status(500).json({ error: 'An error occurred during comment removal' });
    }
  });


    // Define the route to like a comment
    app.post('/comments/:commentId/likes', (req, res) => {
    const commentId = req.params.commentId;
    const userId = req.body.user_id;
  
    try {
      // Check if the comment exists
      const commentExistsQuery = 'SELECT * FROM comments WHERE comment_id = $1';
      const commentExistsValues = [commentId];
      const existingComment = pool.query(commentExistsQuery, commentExistsValues);
  
      if (existingComment.rows.length === 0) {
        return res.status(404).json({ error: 'Comment not found' });
      }
  
      // Check if the like already exists
      const likeExistsQuery = 'SELECT * FROM likes WHERE comment_id = $1 AND user_id = $2';
      const likeExistsValues = [commentId, userId];
      const existingLike = pool.query(likeExistsQuery, likeExistsValues);
  
      if (existingLike.rows.length > 0) {
        return res.status(409).json({ error: 'Like already exists' });
      }
  
      // Insert the like into the "likes" table
      const insertLikeQuery = 'INSERT INTO likes (comment_id, user_id) VALUES ($1, $2) RETURNING *';
      const insertLikeValues = [commentId, userId];
      const result = pool.query(insertLikeQuery, insertLikeValues);
  
      const insertedLike = result.rows[0];
      res.status(201).json({ message: 'Like added successfully', like: insertedLike });
    } catch (error) {
      console.error('Error during like addition:', error);
      res.status(500).json({ error: 'An error occurred during like addition' });
    }
  });

  // Define the route to list all comments with like counts
    app.get('/comments', async (req, res) => {
    try {
      // Retrieve all comments with their like counts
      const commentsQuery = `
        SELECT c.comment_id, c.comment, COUNT(l.comment_id) AS like_count
        FROM comments c
        LEFT JOIN likes l ON c.comment_id = l.comment_id
        GROUP BY c.comment_id, c.comment
      `;
      const result = await pool.query(commentsQuery);
  
      const comments = result.rows;
      res.status(200).json({ comments });
    } catch (error) {
      console.error('Error retrieving comments:', error);
      res.status(500).json({ error: 'An error occurred while retrieving comments' });
    }
  });

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
