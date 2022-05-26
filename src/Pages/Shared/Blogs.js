import React from "react";

const Blogs = () => {
  return (
    <div className=" grid grid-cols-1 gap-9  items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            1. How will you improve the performance of a React Application?
          </h2>
          <ul>
            <li>
              Memoizing React components to prevent unnecessary re-renders
            </li>
            <li>
              {" "}
              Memoizing React components to prevent unnecessary re-renders
            </li>
            <li>Code-splitting in React using dynamic import()</li>
            <li>Conditional rendering of the components</li>
            <li>Preventing wasted Renders in React with Immutable.js</li>
          </ul>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            2 What are the different ways to manage a state in a React
            application?
          </h2>
          <ul>
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ul>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            3.What is a unit test? Why should write unit tests?
          </h2>
          <p>What is a unit test?</p>
          <p>
            Unit testing is a software development process in which the smallest
            testable parts of an application. In computer programming, unit
            testing is a software testing method by which individual units of
            source code—sets of one or more computer program modules together
            with associated control data, usage procedures, and operating
            procedures—are tested to determine whether they are fit for use.
          </p>

          <p>Why should write unit tests?</p>
          <p>
            Unit testing ensures that all code meets quality standards before
            it’s deployed. This ensures a reliable engineering environment where
            quality is paramount. Over the course of the product development
            life cycle, unit testing saves time and money, and helps developers
            write better code, more efficiently.
          </p>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            5 . Why you do not set the state directly in React. For example, if
            you have const [products, setProducts] = useState([]). Why you do
            not set products = [...] instead, you use the setProducts
          </h2>
          <p>
            If you update it directly, calling the setState() afterward may just
            replace the update you made. When you directly update the state, it
            does not change this.state immediately. Instead, it creates a
            pending state transition, and accessing it after calling this method
            will only return the present value. You will lose control of the
            state across all components. When creating an object using the
            object literal, you can use the special property __proto__ to set
            the prototype of the created object.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
