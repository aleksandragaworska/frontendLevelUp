export default function() {

  function* generator(start, stop) {
    while (true) {
      if (start == stop) {
        yield start;
        start = 0;
      } else {
        yield start++;
      }
    }
  }

  var today = new Date();
  const seconds = generator(today.getSeconds(), 59);
  const minutes = generator(today.getMinutes(), 59);
  const hours = generator(today.getHours(), 23);

  var s = seconds.next().value;
  var m = minutes.next().value;
  var h = hours.next().value;

  const { body } = document;
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  div.appendChild(h1);
  body.appendChild(div);
  
  function updateClock() {
    s = seconds.next().value;
    if(s === 0) {
      m = minutes.next().value;
      if(m === 0) {
        h = hours.next().value;
      }
    }
    let s_str = s.toString().padStart(2, '0');
    let m_str = m.toString().padStart(2, '0');
    let h_str = h.toString().padStart(2, '0');
    h1.innerText = `${h_str}:${m_str}:${s_str}`;
  }

  setInterval(updateClock, 1000);
};
