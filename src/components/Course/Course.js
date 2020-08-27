import React, { useState } from 'react';
import info from '../../fakeData/info';
import Subject from '../Subject/Subject';
import Cart from '../Cart/Cart';



const Course = () => {
    const [subjects, setSubjects]= useState(info);
    const [cart, setCart] = useState([]);
    
    
    const handleAddSubject = (subject) =>{
        const newCart = [...cart, subject];
        setCart(newCart);
    }
    
    
    return (
        <div>    
           <div className="subject-container">
               {
                   subjects.map(subject => <Subject 
                    key = {subject.key}
                    topics={subject}
                    handleAddSubject = {handleAddSubject}
                    ></Subject> )
               }

           </div>

           <div className="cart-container">
               <Cart cart={cart}></Cart>
               

           </div>
        </div>
    );
};

export default Course;