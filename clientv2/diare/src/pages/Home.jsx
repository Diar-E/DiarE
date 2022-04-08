import React from 'react';

const Home = () => {
  const [state, setState] = React.useState({items: [], DataisLoaded: false});
  var first = true;
  fetch(`http://localhost:8080/api/${window.userid}/all`)
    .then((res) => res.json())
    .then((json) => {
      if(first) {
        setState({
          items: json,
          DataisLoaded: true
        });
        first = false;
      }
    })
  if (!state.DataisLoaded) 
    return <div><p> Pleses wait.... </p></div>;
  return (
    <div className="container">
      <h1>Entries</h1>
      <div id="entries">
        {
          state.items.map((item) => (
            <ol key = { item.date } >
              Date: {item.date}
            </ol>
          ))
        }
      </div>
    </div>
  )
}

export default Home;

/*
var firstTime = false;
const getAllDates = async (userid) => {
  if (!firstTime) {
      const res = await fetch(`http://localhost:8080/api/${userid}/`);
      const entries = await res.json();
      let item = {...state.item};
      item.content = entries[0].text;
      item.date = entries[0].date;
      item.userid = userid;
      setState({item});
      setValue(item.content.toString());
      setStartDate(Date.parse(item.date));
      firstTime = true;
  }
}
*/