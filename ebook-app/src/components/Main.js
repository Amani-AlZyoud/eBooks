import React from 'react'
import { useContext, useState } from 'react'
import { BookContext } from '../useContext/Context';


const Main = () => {

    const { books } = useContext(BookContext);
    // console.log(books);

    const [search, setSearch] = useState(true);
    const [words, setWords] = useState();
    const [selectedBooks, setSelectedBooks] = useState()
    const onSearch = (words) =>{

        setSearch(false);
       const filteredBooks =  books.filter( (book) =>{
            if(book.language.toLowerCase() === words || book.language === words){
                return book;
            }
        })

        setSelectedBooks(filteredBooks)

        
        
    }

    return (
    
      search ? ( <div class="container">
       <form className="d-flex my-5" role="search">
        <input className="form-control me-2" type="search" value={words} onChange={(e) => setWords(e.target.value)} placeholder="Search for Books.." aria-label="Search"/>
        <button className="btn btn-dark" type="submit" onClick={() => {onSearch(words)}}>Search</button>
       </form>
            
            <h1 className='text-center mt-5 text-dark'>E-BOOKS</h1>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  g-3 justify-content-center mb-5">
    
        
        {books?.map( (book) =>  
       
            ( 
                <div className="card  mx-2" id='cards' style={{width: "20rem", display: "inline-block", backgroundColor:"black"}}>
                <img src='https://cdn.dribbble.com/users/2552947/screenshots/6269272/illust2_thumbnail.png'  className="img-fluid rounded mt-2" alt="..."/>
                <div className="card-body">
                <h5 className="card-title fw-bold text-white text-uppercase">{book.language}</h5>
                <h6 className="card-title fw-bold text-secondary text-capitalize">Edition: {book.edition}</h6>
                <h6 className="card-title fw-bold text-secondary text-capitalize">Price: {book.price}$</h6>
                </div>
                </div>
            )
    
            )}
            </div>
            </div>

    ) : <>
                <div class="container my-5">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  g-3 justify-content-center mb-5">
    {selectedBooks?.map( (book) =>  
       
            ( 
                
                <div className="card  mx-2" id='cards' style={{width: "18rem", display: "inline-block", backgroundColor:"black"}}>
                <img src='https://cdn.dribbble.com/users/2552947/screenshots/6269272/illust2_thumbnail.png'  className="img-fluid rounded mt-2" alt="..."/>
                <div className="card-body">
                <h5 className="card-title fw-bold text-white text-uppercase">{book.language}</h5>
                <h6 className="card-title fw-bold text-secondary text-capitalize">Edition {book.edition}</h6>
                <h6 className="card-title fw-bold text-secondary text-capitalize">Price {book.price}$</h6>
              
                </div>
                </div>
                
                  
            )
    
            )
           
           
            }
             </div>
              <div className='row'>
              <a href='#' className='text-dark text-center fs-4' onClick={() => setSearch(true)} >Back</a></div>
            </div>
       </>

   
        )
}

export default Main