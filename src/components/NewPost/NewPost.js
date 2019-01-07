import React, {Component} from 'react';
import './NewPost.css';

class NewPost extends Component {

  state = {
    title: '',
    content: '',
    author: '',
  }

  render() {
    return(
      <div className="NewPost">
        <h1>Add a new post!</h1>
        <label>Title</label>
        <input type="text"
               value={this.state.title}
               placeholder="Enter the title of the post"
               onChange = {(event) => this.setState({title: event.target.value}) }/>
        <label>Content</label>
        <textarea rows='4'
               value={this.state.content}
               placeholder="Enter the body of your post"
               onChange = { event => this.setState({content: event.target.value}) }/>
        <label>Author</label>
        <select placeholder="Select the author">
               <option value="Anne">Anne</option>
               <option value="Thor">Thor</option>
               <option value="Kaye">Kaye</option>
        </select>
        <button>Add Post!</button>
      </div>
    );
  }

}

export default NewPost;
