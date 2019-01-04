import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import StepRangeSlider from 'react-step-range-slider';
import './Task2.css'
import Counter from './Counter';

const range = [
    { value: 0, step: 100 },
    { value: 5000 }
]
class Task2 extends Component {
    constructor() {
        super();

        
    }
    render() {
        return (
            <div>
                <Grid className="task2">
       <Row className="textTask2">
       <h4>Task2</h4>
          </Row>
        
          <Row className="">
            <Col xs={12} sm={6} className="left-section">
           
            <StepRangeSlider className='range-slider'
                    // value={20}
                    range={range}
                    onChange={value => console.log(value)}
                />
            </Col>
            <Col xs={12} sm={6} className="right-section">
              <Counter 
              step={range[0].step}
              />
            </Col>
          </Row>
          
        </Grid>
                
            </div>
        )

    }
}
export default Task2;