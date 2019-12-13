const clock = document.querySelector('.clock');
const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
setInterval(updateTime, 1000);

      const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.onclick = function() {
        let Item = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = Item;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Nope';
        list.appendChild(listItem);

        listBtn.onclick = function(e) {
          list.removeChild(listItem);
        }
        input.focus();
      }