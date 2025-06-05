// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const button = document.querySelector("button");

form.addEventListener("submit", event => {
    event.preventDefault();
    const formSubmit = event.currentTarget;
    const delay = parseInt(form.elements.delay.value);
    const state = form.elements.state.value;

    const promise = new Promise((resolve, reject) => { 
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise.then(delay => {
        console.log(`✅ Fulfilled promise in ${delay}ms`);
        iziToast.success({
            title: 'OK',
            message: `✅ Fulfilled promise in ${delay}ms`,
        });
        
      })
      .catch(delay => {
          console.log(`❌ Rejected promise in ${delay}ms`);
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
            });
      });
    
});



