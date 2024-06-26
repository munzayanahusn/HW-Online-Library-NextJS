import { instance } from '../axios/index';

// Function for register user endpoint
async function registerUser(name, email, password) {
  try {
    const response = await instance.post('/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error || 'Something went wrong');
  }
}

// Function for login user endpoint
async function loginUser(email, password) {
  try {
    const response = await instance.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error || 'Something went wrong');
  }
}

// Function for create book endpoint
async function createBook(formData) {
  try {
    const response = await instance.post('/books', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw new Error(error || 'Something went wrong');
  }
}

// Function for get all books endpoint
async function getAllBooks() {
  console.log("FETCH GET ALL BOOKS");
  try {
    const response = await instance.get('/books');
    console.log("RESULT FETCH GET ALL BOOKS", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error || 'Something went wrong');
  }
}

// Function for edit book endpoint
async function editBook(id, title, author, publisher, year, pages) {
  try {
    const response = await instance.put(`/books/${id}`, { title, author, publisher, year, pages });
    return response.data;
  } catch (error) {
    throw new Error(error || 'Something went wrong');
  }
}

// Function for delete book endpoint
async function deleteBook(id) {
  try {
    const response = await instance.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error || 'Something went wrong');
  }
}

async function getBookDetailById(id) {
  console.log("FETCH A BOOK");
  try {
    const response = await instance.get(`/books/${id}`);
    console.log("RESULT FETCH A BOOK", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error || 'Something went wrong');
  }
}

export { registerUser, loginUser, createBook, getAllBooks, editBook, deleteBook,getBookDetailById };
