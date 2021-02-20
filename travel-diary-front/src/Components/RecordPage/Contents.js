import React from "react";
import { Comment, Form } from "semantic-ui-react";


class Contents extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
    };
  }

  render() {
    return (
      <Comment.Group>
        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="내용을 입력해주세요!"
            onChange={(e) =>
              this.setState({
                inputContent: e.target.value,
              })
            }
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Contents;