import React, { Component } from "react";
import { withAuthorization, AuthUserContext } from "./session";
import { withFirebase } from "./firebase";

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome Home</p>
    <Messages />
  </div>
);

class MessageBase extends Component {
  state = {
    loading: false,
    text: "",
    messages: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.messages().on("value", snapshot => {
      const msgObject = snapshot.val();
      if (msgObject) {
        const availMessages = Object.keys(msgObject).map(key => ({
          ...msgObject[key],
          uid: key
        }));
        this.setState({ messages: availMessages, loading: false });
      } else {
        this.setState({ messages: null, loading: false });
      }
    });
  }

  componentWillUnmount() {
    this.props.firebase.messages().off();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ ...this.state, [name]: value });
  };

  createMessage = (e, authUser) => {
    this.props.firebase.messages().push({
     text: this.state.text,
     userId: authUser.uid
    })
    this.setState({ text : "" });
    e.preventDefault();
  }

  render() {
    const { loading, text, messages } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
          {loading && <p>Loading...</p>}
          {messages ? (
            <MessageList messages={messages} />
          ) : (
            <div>No messages have been sent...</div>
          )}
          <form onSubmit={e => this.createMessage(e, authUser)}>
            <input
              name="text"
              type="text"
              onChange={this.handleChange}
              placeholder="Your message"
              value={text}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        )}
      </AuthUserContext.Consumer>
      
    );
  }
}

const MessageList = ({ messages }) => (
  <ul>
    {messages.map(item => (
      <MessageItem key={item.uid} message={item} />
    ))}
  </ul>
);

const MessageItem = ({ message }) => (
  <li>
    <strong>{message.uid}</strong> {message.text}
  </li>
);


const Messages = withFirebase(MessageBase);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);
