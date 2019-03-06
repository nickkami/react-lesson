import React from 'react';

class Navmenu extends React.Component {

  render() {

    let lista =  this.props.menu.map((value) => {
        return(
            <li><a href={value.link}>{value.title}</a></li>
        )
    });

    return (
          <ul>
            {lista}
          </ul>
    )
  }
};

export default Navmenu;
