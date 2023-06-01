import React, { useRef } from 'react';
import './Blog.css'
import html2pdf from 'html2pdf.js';


const Blog = () => {

    const sectionRef = useRef(null);

    const handleDownload = () => {
        const section = sectionRef.current;
        html2pdf().from
        (section).save();
    }

    return (
        <div ref={sectionRef} className='blog-page container d-flex flex-column w-75 '>
            <p><button onClick={handleDownload} className='bg-primary text-light rounded'>Download</button></p>
            <div className='text'>
                <h4><span className='fw-bolder'>Question</span>: Tell us the differences between uncontrolled and controlled components?</h4>
                <p><span className='fw-bolder'>Answer</span>: the differences between uncontrolled and controlled components is the way they access the form data from the HTML document. In an uncontrolled component, the DOM handles the form data by itself in the component. Whereas in a controlled component, the state is used to handle the form data within the component.</p>
            </div>
            <div className='text'>
                <h4><span className='fw-bolder'>Question</span>: How to validate React props using PropTypes?</h4>
                <p><span className='fw-bolder'>Answer</span>: React provides a utility called PropTypes to help validate the types of props being passed to a component. To use PropTypes, you'll first need to import it from the prop-types package, once you import prop type package you can use it. It give you the value to use different object in different component.</p>
            </div>
            <div className='text'>
                <h4><span className='fw-bolder'>Question</span>: Tell us the difference between nodejs and express js?</h4>
                <p><span className='fw-bolder'>Answer</span>: Node.js and Express.js are both JavaScript technologies that are used for web development, but they serve different purposes. Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine that allows developers to run JavaScript code on the server-side. Express.js, on the other hand, is a web framework built on top of Node.js that provides a set of features for building web applications and APIs.</p>
            </div>
            <div className='text'>
                <h4><span className='fw-bolder'>Question</span>: What is a custom hook, and why will you create a custom hook?</h4>
                <p><span className='fw-bolder'>Answer</span>: In React, a custom hook is a function that uses other React hooks to provide a specific piece of functionality that can be reused across multiple components. It helps to ignore the repeated code and complex logic and also provide the benefits to use it to other component.</p>
            </div>

        </div>
    );
};

export default Blog;