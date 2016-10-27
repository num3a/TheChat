import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, Textfield, Button} from 'react-mdl';
import moment from 'moment';

class Room extends Component {
    render() {
        const  { messages, onSubmitForm, onMessageChange, messageValue } = this.props;
        return(
            <Grid>
                <Cell col={4}>
                    <div>
                        <form onSubmit={(event) => {
                            onSubmitForm(event);
                        }}>
                            <Textfield
                                value={messageValue}
                                label="Send a new message"
                                onChange={(event) => {
                                    onMessageChange(event.target.value);
                                }}
                            />
                            <Button type="submit">Send</Button>
                        </form>
                    </div>
                </Cell>
                <Cell col={6}>
                    <div>
                        {messages.map((message) => {
                            return (
                                <Card key={message._id} shadow={0} style={{ marginTop: '30px', height: '60px'}}>
                                    <CardTitle style={{color: '#fff', backgroundColor: '#46B6AC'}}>
                                        {message.user}
                                    </CardTitle>
                                    <CardText>
                                        {message.text}
                                    </CardText>

                                    <CardText>
                                        {moment(message.date).fromNow()}
                                    </CardText>
                                </Card>
                            );
                        })}
                    </div>
                </Cell>
            </Grid>
        );
    }
}

export default Room;