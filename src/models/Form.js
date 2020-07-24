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
              <label for="email">Email</label>
              <input type="text" id="email" className="email"/>
              <label for="site">Site</label>
              <select name="Sites">
                  <option value="SeLoger">SeLoger</option>
                  <option value="SeLogerNeuf">SeLogerNeuf</option>
                  <option value="BD">Belle Demeures</option>
              </select>
          </form>
        );
    }


}
