import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './training.css'


class Training extends Component {
    render() {
        return (
          <React.Fragment>
              <div>
              <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="data:image/jpeg;base64,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"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJV_Avj_umKAsOXcav9beUhkStXUZXpZ0Mw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJV_Avj_umKAsOXcav9beUhkStXUZXpZ0Mw&usqp=CAU"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
</div>



<br/>
<br/>
<br/>
              
<div class= "card-group">
<div class="card bg-gray text-white">
    <img class="card-img" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F65%2F0b%2Fbc%2F650bbc13066e356ce6ae7d03cb87df2e.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F254312710198691864%2F&tbnid=O4vRtH7CUA_F8M&vet=12ahUKEwiOlq_rhuT0AhWD04UKHalhCe4QMygIegUIARDGAQ..i&docid=Of8bQQnwCasj5M&w=750&h=1000&itg=1&q=front%20end%20logo&ved=2ahUKEwiOlq_rhuT0AhWD04UKHalhCe4QMygIegUIARDGAQ" alt=""></img>
        <div class="card-img-overlay">
            <Flippy 
                    flipOnHover={false} // default false
                    flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                    style={{ width: '350px', height: '500px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide
                    style={{
                        backgroundColor: '#1B9989',
                    }}
                    >
                   <h5 class="card-title"> Front End Development</h5>
                   <p class="card-text"> Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p>
                   <p class="card-text"> READ MORE...</p>
                    </FrontSide>
                    <BackSide
                    style={{ backgroundColor: '#23BCBB'}}>
                         <ul>
                                    <li>Html</li>
                                    <li>Css</li>
                                    <li>JavaScript</li>
                                    <li>Bootstap</li>
                                    <li>Sementic UI</li>
                                    <li>Angular</li>
                                    <li>React</li>
                                    <li>VueJs</li>
                         </ul>
                            
                    </BackSide>
            </Flippy>
          </div>
        </div>
    
        
<div class="card bg-gray text-white">
    <img class="card-img" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F65%2F0b%2Fbc%2F650bbc13066e356ce6ae7d03cb87df2e.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F254312710198691864%2F&tbnid=O4vRtH7CUA_F8M&vet=12ahUKEwiOlq_rhuT0AhWD04UKHalhCe4QMygIegUIARDGAQ..i&docid=Of8bQQnwCasj5M&w=750&h=1000&itg=1&q=front%20end%20logo&ved=2ahUKEwiOlq_rhuT0AhWD04UKHalhCe4QMygIegUIARDGAQ" alt=""></img>
        <div class="card-img-overlay">
                <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="vertical" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '350px', height: '500px' }} /// these are optional style, it is not necessary
                >
                <FrontSide
                style={{
                    backgroundColor: '#1B9989',
                }}
                >
               <h5 class="card-title">Back End Development</h5> 
               <p class="card-text"> Back-end Development refers to the server-side development. It focuses on databases, scripting, website architecture. It contains behind-the-scene activities that occur when performing any action on a website. It can be an account login or making a purchase from an online store. Code written by back-end developers helps browsers to communicate with database information</p>
                   <p class="card-text"> READ MORE...</p>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#23BCBB'}}>
                        <ul>
                        
                                    <li>Java</li>
                                    <li>Spring</li>
                                    <li>Spring Boot</li>
                                    <li>MicroServices</li>
                                    <li>NodeJs</li>
                                    <li>MySql</li>
                        </ul>
                </BackSide>
                </Flippy>
                </div>
        </div>    


        <div class="card bg-gray text-white">
    <img class="card-img" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F65%2F0b%2Fbc%2F650bbc13066e356ce6ae7d03cb87df2e.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F254312710198691864%2F&tbnid=O4vRtH7CUA_F8M&vet=12ahUKEwiOlq_rhuT0AhWD04UKHalhCe4QMygIegUIARDGAQ..i&docid=Of8bQQnwCasj5M&w=750&h=1000&itg=1&q=front%20end%20logo&ved=2ahUKEwiOlq_rhuT0AhWD04UKHalhCe4QMygIegUIARDGAQ" alt=""></img>
        <div class="card-img-overlay">    
                <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '350px', height: '500px' }} /// these are optional style, it is not necessary
                >
                <FrontSide
                style={{
                    backgroundColor: '#1B9989',
                }}
                >
                <h5 class="card-title">DevOps</h5>
                <p class="card-text">DevOps is a combination of cultural philosophies, practices, and tools that enhance a company's ability to deliver applications and services at a high rate. It can scale and optimize products faster than organizations using traditional software development and infrastructure management processes. This speed allows companies to better serve their customers and gain competitiveness.</p>
                   <p class="card-text"> READ MORE...</p>
               
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#23BCBB'}}>
                        <ul>
                                    <li>Java</li>
                                    <li>Docker</li>
                                    <li>Kubernetes</li>
                                    <li>AWS</li>
                                    <li>Jenkins</li>
                                    
                        </ul>
                            
                </BackSide>
                </Flippy>
                </div>
        </div> 


       
        <div class="card bg-gray text-white">
    <img class="card-img" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F65%2F0b%2Fbc%2F650bbc13066e356ce6ae7d03cb87df2e.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F254312710198691864%2F&tbnid=O4vRtH7CUA_F8M&vet=12ahUKEwiOlq_rhuT0AhWD04UKHalhCe4QMygIegUIARDGAQ..i&docid=Of8bQQnwCasj5M&w=750&h=1000&itg=1&q=front%20end%20logo&ved=2ahUKEwiOlq_rhuT0AhWD04UKHalhCe4QMygIegUIARDGAQ" alt=""></img>
        <div class="card-img-overlay">  
                <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="vertical" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '350px', height: '500px' }} /// these are optional style, it is not necessary
                >
                <FrontSide
                style={{
                    backgroundColor: '#1B9989',
                }}
                >
                <h5 class="card-title">Testing</h5>
                <p class="card-text">In general, testing is finding out how well something works. In terms of human beings, testing tells what level of knowledge or skill has been acquired. In computer hardware and software development, testing is used at key checkpoints in the overall process to determine whether objectives are being met. For example, in software development, product objectives are sometimes tested by product user representatives. When the design is complete, coding follows and the finished code is then tested at the unit or module level by each programmer.</p>
                   <p class="card-text"> READ MORE...</p>
                
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#23BCBB'}}>
                         <ul>
                         <li>Java</li>
                                    <li>Junit</li>
                                    <li>Mockito</li>
                                    <li>Integrated Testing</li>
                                    <li>End to End Testing</li>
                                    
                        </ul>
                </BackSide>
                </Flippy>
                </div>
        </div> 
    </div>
</React.Fragment>  
         


        )
    }
}

export default Training