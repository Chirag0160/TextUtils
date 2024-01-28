// import React, { useState } from 'react' // for changing state internally mystylle function
import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white'
  // })

  // const toggleStyle = () => {
  //     if(myStyle.color === 'black'){
  //         setMyStyle({
  //             color: 'white',
  //             backgroundColor: 'black'
  //         })
  //     }
  //     else{
  //         setMyStyle(({
  //             color: 'black',
  //             backgroundColor: 'white',
  //             border: '2px solid white'
  //         }))
  //     }
  // }

  return (
    <div
      className="container1"
      style={{ color: props.mode === "black" ? "white" : "black" }}
    >
      <div
        className="container2"
        style={{ color: props.mode === "black" ? "white" : "black" }}
      >
        <h2 style={{ textAlign: "center" }}>About Us</h2>
        <div className="accordion my-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              {/* <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}> */}
              <button
                className="accordion-button"
                style={{
                  backgroundColor: props.mode === "black" ? "#212529" : "white",
                  color: props.mode === "black" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "black" ? "#212529" : "white",
                  color: props.mode === "black" ? "white" : "black",
                }}
              >
                {/* <strong>This is the first item's accordion body.</strong> */}
                Welcome to <strong>TextTweak Box</strong>,your go-to destination
                for powerful text manipulation and enhancement tools! We
                understand the importance buttondof efficient and effective text
                processing in today's digital age, and our Text Utility website
                is designed to empower users with a suite of essential tools to
                streamline and optimize their text-related tasks.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{
                  backgroundColor: props.mode === "black" ? "#212529" : "white",
                  color: props.mode === "black" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                About #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "black" ? "#212529" : "white",
                  color: props.mode === "black" ? "white" : "black",
                }}
              >
                {/* <strong>This is the second item's accordion body.</strong>  */}
                At <strong>TextTweak Box</strong>,we pride ourselves on
                providing a user-friendly platform that caters to a wide range
                of needs, from simple text formatting to more advanced
                manipulation. Whether you're a student working on an essay, a
                professional drafting an important document, or a developer
                handling code snippets, our Text Utility tools are here to make
                your life easier.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={{
                  backgroundColor: props.mode === "black" ? "#212529" : "white",
                  color: props.mode === "black" ? "white" : "black",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Key Feature
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "black" ? "#212529" : "white",
                  color: props.mode === "black" ? "white" : "black",
                }}
              >
                {/* <strong>This is the third item's accordion body.</strong>  */}
                <ul>
                  <li>
                    <strong>Character Count and Word Count:</strong> Keep track
                    of your text length with our character and word count tools.
                    Perfect for meeting those strict character limits.
                  </li>
                  <li>
                    <strong>Case Conversion:</strong> Quickly convert text to
                    uppercase, lowercase, title case, or sentence case. Maintain
                    consistency and readability effortlessly.
                  </li>
                  <li>
                    <strong>Remove Duplicates:</strong> Clean up your content by
                    eliminating duplicate lines or words. Save time and ensure
                    precision in your work.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleStyle} type="button" className="btn btn-black">Change Theme</button> */}
      {/* <button onClick={toggleStyle} className="theme-toggle" id="theme-toggle" title="Toggles light & black" aria-label="auto" aria-live="polite"></button> */}
    </div>
  );
}
