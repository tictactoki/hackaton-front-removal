import React from 'react';


export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            site: null
        }
    }

    render() {
        return (
          <form>
              <input type="text" value="email"/>
          </form>
        );
    }


}
