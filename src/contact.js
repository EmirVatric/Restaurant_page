const contact = () => {
  const content = document.getElementById('content');

  const wrapper = document.createElement('DIV');
  wrapper.className = 'wrapper';
  content.appendChild(wrapper);

  const textContent = document.createElement('DIV');
  textContent.className = 'textContent';
  wrapper.appendChild(textContent);

  const contactHeading = document.createElement('H1');
  contactHeading.innerText = 'CONTACT'
  textContent.appendChild(contactHeading);

  const subText = document.createElement('H2');
  subText.innerText = 'RESTAURANT TAVOLA'
  textContent.appendChild(subText);

  const elementText = ['Maršala Tita 50', '71000 Sarajevo', 'Bosnia and Herzegovina', '+387 (0) 33 222 207', 'info@tavola.ba']

  for (let i in elementText) {
    const contactElement = document.createElement('H4');
    contactElement.innerText = elementText[i]
    textContent.appendChild(contactElement);
  }
}

export default contact