const menu = () => {
  const content = document.getElementById('content');

  const menuHeading = document.createElement('H1');
  menuHeading.className = 'menuHeading';
  menuHeading.innerText = 'MENU';
  content.appendChild(menuHeading);

  const menuWrapper = document.createElement('DIV');
  menuWrapper.className = 'menuWrapper';
  content.appendChild(menuWrapper);

  for (let i = 0; i < 10; i += 1) {
    const description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi excepturi quod harum ipsa deserunt quam?';

    const product = document.createElement('DIV');
    product.className = 'product';
    menuWrapper.appendChild(product);

    const img = document.createElement('IMG');
    img.setAttribute('src', '../dist/images/4sira.jpeg');
    product.appendChild(img);

    const descr = document.createElement('P');
    descr.className = 'descr';
    descr.innerText = description;
    product.appendChild(descr);
  }
};

export default menu;
