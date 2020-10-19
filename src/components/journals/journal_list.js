import React, { Component } from 'react';


const rawJournalData = [
  { title: 'Post one', content: 'Post content', status: 'draft'},
  { title: 'Post two', content: 'Post content', status: 'published'},
  { title: 'Post three', content: 'Post content', status: 'published'},
  { title: 'Post four', content: 'Post content', status: 'published'}
];
//Class component
export default class JournalList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        journalData: rawJournalData,
        greeting: 'Hi',
        isOpen: true
      }
    }
  render() { 
    return <div>{this.props.heading}</div>;
  }
}