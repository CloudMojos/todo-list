import './styles.css'
import nav from './nav'


const content = document.querySelector('#content')

content.appendChild(nav)


function changeTabHandler() {
    let tabs = document.querySelectorAll('.links > *');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) { return; }
            else {
                // remove the classlist from the others, remove the element that is not it
                tabs.forEach(tab => {
                    if (tab.classList.contains('active')) {
                        tab.classList.remove('active')
                    }
                })
            }
        })
    })
}

changeTabHandler()