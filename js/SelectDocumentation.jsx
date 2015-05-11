"use strict";

import React, {Component} from 'react';
import {Card, Option, Placeholder, Select, Separator, TextInput} from 'belle';
import {map} from 'underscore';
import Code from './Code';

const fruits = [
  { value: "pineapple", content: (<span>🍍 Pineapple</span>) },
  { value: "banana", content: (<span>🍌 Banana</span>) },
  { value: "peach", content: (<span>🍑 Peach</span>) },
  { value: "pear", content: (<span>🍐 Pear</span>) },
  { value: "cherries", content: (<span>🍒 Cherries</span>) }
];

export default class SelectDocumentation extends Component {

  render() {
    return <Card>

      <h2 style={ {marginTop: 0, marginBottom: 40} }>Select</h2>

      <Select>
        <Placeholder>Choose a City</Placeholder>
        <Option value="berlin">Berlin</Option>
        <Option value="tokyo">Tokyo</Option>
        <Option value="vienna">Vienna</Option>
      </Select>

      <Code value={ basicCodeExample } style={ {marginTop: 40} } />

      <p style={{ marginTop: 40 }}>
        <i>Note</i>: The select is designed to behave exactly like the native
        select tag with the benefit that you have full control over its appearance.
        You might want to try navigating the options with your keyboard.
      </p>

      <h3>Properties</h3>

      <p>
        Documentation coming soon …
      </p>

      <h3>More Examples</h3>

      <p>Select from a dynamic data set including a defaultValue & onChange callback</p>

      <Select defaultValue={ fruits[3].value }
              onChange={ function(event) { console.log(event); } }>
        {
          fruits.map(function(fruit, index) {
            return (
              <Option value={ fruit.value }
                      key={ index }>
                { fruit.content }
              </Option>
            );
          })
        }
      </Select>

      <Code value={ dataCodeExamplePartOne } style={ {marginTop: 40} } />

      <Code value={ dataCodeExamplePartTwo } style={ {marginTop: 40} } />

      <h3>Select as part of a form with a scrollable Options area</h3>

      <div style={ { content: '',
                     display: 'table',
                     clear: 'both' } }>
        <TextInput style={ { width: 300,
                             float: 'left' } }
                   placeholder="Please fill in your address …" />
        <div style={ { width: 150,
                       float: 'left',
                       marginLeft: 16 } }>
          <Select optionsAreaStyle={ { height: 160,
                                       overflow: 'scroll' } }>
            <Option value="berlin">Berlin</Option>
            <Option value="hong-kong">Hong Kong</Option>
            <Option value="istanbul">Istanbul</Option>
            <Option value="rome">Rome</Option>
            <Option value="san-francisco">San Francisco</Option>
            <Option value="tokyo">Tokyo</Option>
            <Option value="vienna">Vienna</Option>
          </Select>
        </div>
      </div>

      <Code value={ formCodeExample } style={ {marginTop: 40} } />

      <h3>Select with Separators</h3>

      <Select>
        <Separator>Asia</Separator>
        <Option value="hong-kong">Hong Kong</Option>
        <Option value="tokyo">Tokyo</Option>
        <Separator>Europe</Separator>
        <Option value="berlin">Berlin</Option>
        <Option value="istanbul">Istanbul</Option>
      </Select>

      <Code value={ separatorCodeExample } style={ {marginTop: 40} } />

      <h3>Select with various Option styles</h3>

      <Select optionsAreaStyle={{ padding: 6 }}>
        <Placeholder>Choose your next Vacation</Placeholder>
        <Option value="santorini"
                style={{
                  padding: '15px 0 0 60px',
                  height: 50,
                  background: 'url(images/santorini_100.jpg) no-repeat',
                  backgroundSize: '50px 50px',
                  backgroundColor: '#FFEE82'
                }}
                hoverStyle={{
                  padding: '15px 0 0 60px',
                  height: 50,
                  background: 'url(images/santorini_100.jpg) no-repeat',
                  backgroundSize: '50px 50px',
                  backgroundColor: '#FFE95D'
                }} >
          Santorini (Special Deal)
        </Option>
        <Separator style={{ height: 4, padding: 0 }}></Separator>
        <Option value="yosemite"
                style={{
                  padding: '15px 0 0 60px',
                  height: 50,
                  background: 'url(images/yosemite_100.jpg) no-repeat',
                  backgroundSize: '50px 50px'
                }}
                hoverStyle={{
                  padding: '15px 0 0 60px',
                  height: 50,
                  backgroundColor: '#F5F5F5',
                  background: 'url(images/yosemite_100.jpg) no-repeat',
                  backgroundSize: '50px 50px'
                }} >
          Yosemite
        </Option>
        <Separator style={{ height: 4, padding: 0 }}></Separator>
        <Option value="croatia"
                style={{
                  padding: '15px 0 0 60px',
                  height: 50,
                  background: 'url(images/croatia_100.jpg) no-repeat',
                  backgroundSize: '50px 50px'
                }}
                hoverStyle={{
                  padding: '15px 0 0 60px',
                  height: 50,
                  backgroundColor: '#F5F5F5',
                  background: 'url(images/croatia_100.jpg) no-repeat',
                  backgroundSize: '50px 50px'
                }} >
          Croatia
        </Option>
      </Select>

      <Code value={ advancedStylingCodeExample } style={ {marginTop: 40} } />

    </Card>;
  }
}

const basicCodeExample = `<!-- basic select example -->
<Select>
  <Placeholder>Choose a City</Placeholder>
  <Option value="berlin">Berlin</Option>
  <Option value="tokyo">Tokyo</Option>
  <Option value="vienna">Vienna</Option>
</Select>`;

const dataCodeExamplePartOne = `<!-- defining the data -->
var fruits = [
  { value: "pineapple", content: (<span>🍍 Pineapple</span>) },
  { value: "banana", content: (<span>🍌 Banana</span>) },
  { value: "peach", content: (<span>🍑 Peach</span>) },
  { value: "pear", content: (<span>🍐 Pear</span>) },
  { value: "cherries", content: (<span>🍒 Cherries</span>) }
];`;

const dataCodeExamplePartTwo = `<!-- filling a select with Option  -->
<Select defaultValue={ fruits[3].value }
        onChange={ function(event) { console.log(event); } }>
  {
    fruits.map(function(fruit, index) {
      return (
        <Option value={ fruit.value }
                key={ index }>
          { fruit.content }
        </Option>
      );
    })
  }
</Select>`;

const formCodeExample = `<!-- form consiting of an input & a select  -->
<div style={ { content: '',
               display: 'table',
               clear: 'both' } }>
  <TextInput style={ { width: 300,
                       float: 'left' } }
             placeholder="Please fill in your address …" />
  <div style={ { width: 150,
                 float: 'left',
                 marginLeft: 16 } }>
    <Select optionsAreaStyle={ { height: 160,
                                 overflow: 'scroll' } }>
      <Option value="berlin">Berlin</Option>
      <Option value="hong-kong">Hong Kong</Option>
      <Option value="istanbul">Istanbul</Option>
      <Option value="rome">Rome</Option>
      <Option value="san-francisco">San Francisco</Option>
      <Option value="tokyo">Tokyo</Option>
      <Option value="vienna">Vienna</Option>
    </Select>
  </div>
</div>`;

const separatorCodeExample = `<!-- basic select example with separators -->
<Select>
  <Separator>Asia</Separator>
  <Option value="hong-kong">Hong Kong</Option>
  <Option value="tokyo">Tokyo</Option>
  <Separator>Europe</Separator>
  <Option value="berlin">Berlin</Option>
  <Option value="istanbul">Istanbul</Option>
</Select>`;

const advancedStylingCodeExample = `<!-- select example with more advanced styling -->
<Select optionsAreaStyle={{ padding: 6 }}>
  <Placeholder>Choose your next Vacation</Placeholder>
  <Option value="santorini"
          style={{
            padding: '15px 0 0 60px',
            height: 50,
            background: 'url(images/santorini_100.jpg) no-repeat',
            backgroundSize: '50px 50px',
            backgroundColor: '#FFEE82'
          }}
          hoverStyle={{
            padding: '15px 0 0 60px',
            height: 50,
            background: 'url(images/santorini_100.jpg) no-repeat',
            backgroundSize: '50px 50px',
            backgroundColor: '#FFE95D'
          }} >
    Santorini (Special Deal)
  </Option>
  <Separator style={{ height: 4, padding: 0 }}></Separator>
  <Option value="yosemite"
          style={{
            padding: '15px 0 0 60px',
            height: 50,
            background: 'url(images/yosemite_100.jpg) no-repeat',
            backgroundSize: '50px 50px'
          }}
          hoverStyle={{
            padding: '15px 0 0 60px',
            height: 50,
            backgroundColor: '#F5F5F5',
            background: 'url(images/yosemite_100.jpg) no-repeat',
            backgroundSize: '50px 50px'
          }} >
    Yosemite
  </Option>
  <Separator style={{ height: 4, padding: 0 }}></Separator>
  <Option value="croatia"
          style={{
            padding: '15px 0 0 60px',
            height: 50,
            background: 'url(images/croatia_100.jpg) no-repeat',
            backgroundSize: '50px 50px'
          }}
          hoverStyle={{
            padding: '15px 0 0 60px',
            height: 50,
            backgroundColor: '#F5F5F5',
            background: 'url(images/croatia_100.jpg) no-repeat',
            backgroundSize: '50px 50px'
          }} >
    Croatia
  </Option>
</Select>`;