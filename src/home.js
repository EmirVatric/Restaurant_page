const home = () => {
  const content = document.getElementById('content');

  const wrapper = document.createElement('DIV');
  wrapper.className = 'wrapper';
  content.appendChild(wrapper);

  const main = document.createElement('DIV');
  main.className = 'main';
  wrapper.appendChild(main);

  const heading = document.createElement('H2');
  heading.innerHTML = 'WELCOME!';
  main.appendChild(heading);

  const text = ["Established in 2002 in the heart of Sarajevo, Tavola has remained at the forefront of fine Italian dining in Sarajevo.",
    "On the Tavola menu, besides the various types of pasta, there is a great variety of meat and seafood specialities, risottos, salads, with emphasis on always fresh ingredients.",
    "Restaurant Tavola is the ideal spot for a quiet business or family lunch or dinner far from the noise of town."];

  for (let i in text) {
    let element = document.createElement('P');
    element.innerHTML = text[i].toUpperCase()
    main.appendChild(element)
  }
}

export default home