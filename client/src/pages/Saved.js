import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from 'axios';


function Saved() {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const {id} = useParams()
  useEffect(() => {
    API.getBooks()
      .then(res => {
        setBook(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <Container>
    <Row>
      <Col size="md-12">
        <Jumbotron />
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
        <h2>
          Saved Books
        </h2>

        {book.length ? (
                <List>
                  {book.map(book => (
                    <div className="card mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img src={book.image} className="card-img" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text"><small className="text-muted">{book.author}</small></p>
                            <p className="card-text">{book.description}</p>
                            <a href={book.link} className="btn btn-light" role="button" target="_blank">View Book</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </List>
                ) : (
                <h3>No Results to Display</h3>
              )}
      </Col>
    </Row>
  </Container>
    );
  }

export default Saved;


// function Saved() {
//   // Setting our component's initial state
//   const [books, setBooks] = useState({})
//   const [booksresults, setBookRes] = useState({})

//   // Load all books and store them with setBooks
//   useEffect(() => {
//     loadBooks()
//   }, [])

//   // Loads all books and sets them to books
//   function loadBooks() {
//     API.getBooks()
//       .then(res => 
//         setBooks(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteBook(id) {
//     API.deleteBook(id)
//       .then(res => loadBooks())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const value = event.target.value;
//     console.log(value);
//     setBooks(value);
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//       API.getBooks()
//         .then(res => {
//           setBookRes(res.data.items)
//           console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail)
//         }/*setBooks(res.data)*/)
//         .catch(err => console.log(err));
//   };

//   return (
//     <Container>
//       <Row>
//         <Col size="md-12">
//           <Jumbotron />
//         </Col>
//       </Row>
//       <Row>
//         <Col size="md-12">
//           <h2>
//             Saved Books
//           </h2>
//           <div className="card mb-3">
//             <div className="row no-gutters">
//               <div className="col-md-4">
//                 <img src="..." className="card-img" alt="..."></img>
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h5 className="card-title">Book title</h5>
//                   <p className="card-text"><small className="text-muted">Authors</small></p>
//                   <p className="card-text">Book description: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   <a href="#link" className="btn btn-light" role="button">View Book</a>
//                   <FormBtn
//                     onClick={loadBooks}
//                   >
//                   Save Book
//                   </FormBtn>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//     );
//   }
// export default Saved;


// export default class Saved extends React.Component {
//   state = {
//     filter:"",
//     employees: [],
//     filterEmployee: []
//   }

//   componentDidMount() {
//     API.getBooks().then(res => {
//         const employees = res;
//         const filterEmployee= res;
//         console.log(res);
//         this.setState({ employees,filterEmployee });
//       })
//   }

  // handleChange = event => {
    // const search = event.target.value.toLowerCase();
    // const name = event.target.name;
    // console.log("Search "+search);
    // console.log("Name "+name);

    // this.setState({ filter: event.target.value });
    // const filter= event.target.value.toLowerCase();
    //console.log("Filter "+filter)
    // const allEmployees=this.state.employees;
    // console.log("Allemployees "+allEmployees);
  // };

  // render() {
  //   const { filter, employees } = this.state;
  //   console.log("Render filter "+filter);
    // const newFilter=filter.toLocaleLowerCase();
    // console.log("New filter "+newFilter);
    // var filtered = employees.filter(c=> Object.keys(c).some(key=>c[key].includes(filter)));
    // console.log(filtered);

    // const results = employees.filter((obj)=>{
    //   return Object.keys(obj).reduce((acc, curr)=>{
    //         return acc || obj[curr].toLowerCase().includes(filter);
    //   }, false);
    // }); 

    // console.log(results);

//     return (
    //   <Container>
    //   <Row>
    //     <Col size="md-12">
    //       <Jumbotron />
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col size="md-12">
    //       <h2>
    //         Saved Books
    //       </h2>
    //       <div className="card mb-3">
    //         <div className="row no-gutters">
    //           <div className="col-md-4">
    //             <img src="..." className="card-img" alt="..."></img>
    //           </div>
    //           <div className="col-md-8">
    //             <div className="card-body">
    //               <h5 className="card-title">Book title</h5>
    //               <p className="card-text"><small className="text-muted">Authors</small></p>
    //               <p className="card-text">Book description: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //               <a href="#link" className="btn btn-light" role="button">View Book</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
//     );
//   }
// }
