import React from 'react';
import './index.css';

class MyQuotes extends React.Component {
  constructor(props){
    super(props);
    this.getQuotes = this.getQuotes.bind(this);
  this.state = {
     author: ['Socrates',
              'Steve Jobs',
              'Buddha',
              'Pablo Picasso',
              'Mark Twain',
              'Charles Swindoll',
              'Henry Ford',
              'Jesus',
              'Confucius',
              'Dalai Lama'
    ],
    
    citation: ['An unexamined life is not worth living.',
     'Your time is limited, so don’t waste it living someone else’s life.',
    'The mind is everything. What you think you become.',
    'Every child is an artist.  The problem is how to remain an artist once he grows up.',
    'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.',
    'Life is 10% what happens to me and 90% of how I react to it.',
    'Whether you think you can or you think you can’t, you’re right.',
    'Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.',
    'Everything has beauty, but not everyone can see.',
    'Happiness is not something readymade.  It comes from your own actions.'
  ],
  
    }
 
  }

 getQuotes() {
   this.setState(state => ({
    index : Math.floor(Math.random() * this.state.author.length)
   }));
  }
  componentWillMount() {
this.getQuotes()
}
  render(){
   
    return (
     <div>
       <h4 id='title' className='text-center'>Random Quotes App</h4>
  <div id="quote-box" class='col-md-6'>
  <div id="text" >
    <i class="fa fa-quote-left"> </i>
      <span>{this.state.citation[this.state.index]}</span></div>
  <div id="author">
    - {this.state.author[this.state.index]}
  </div>
  <div class='quotes'>
       <a href="twitter.com/intent/tweet" id='tweet-quote' class='btn btn-primary' target="_blank">
    <i class="fa fa-twitter"></i>
  </a>

  <button id='new-quote' type='button' class='btn btn-outline-primary' onClick={this.getQuotes}>New quote
  </button>
  </div>
</div>
<div class="footer text-center">
  by <a href="mailto:enockhamuli@gmail.com">enockham</a>
</div> 
        </div>
    )
  }
}

export default MyQuotes;
