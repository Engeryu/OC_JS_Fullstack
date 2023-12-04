// let products = [];
// function postForm() {
//     const order = document.getElementById('order');
//     order.addEventListener('click', (event) => {
//         event.preventDefault();

//         const contact = {
//             firstName: document.getElementById('firstName').value,
//             lastName: document.getElementById('lastName').value,
//             address: document.getElementById('address').value,
//             city: document.getElementById('city').value,
//             email: document.getElementById('email').value
//         }

//         function controlFirstName() {
//             const validFirstName = contact.firstName;
//             if (/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/.test(validFirstName)) {
//                 return true;
//             } else {
//                 let firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
//                 firstNameErrorMsg.innerText = "Merci de vérifier le prénom, 3 caractères minimum";
//             }
//         }

//         function controlName() {
//             const validName = contact.lastName;
//             if (/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/.test(validName)) {
//                 return true;
//             } else {
//                 let lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
//                 lastNameErrorMsg.innerText = "Merci de vérifier le nom, 3 caractères minimum, avec des lettres uniquement";
//             }
//         }

//         function controlAddress() {
//             const validAddress = contact.address;
//             if (/^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+$/.test(validAddress)) {
//                 return true;
//             } else {
//                 let addressErrorMsg = document.getElementById('addressErrorMsg');
//                 addressErrorMsg.innerText = "Merci de vérifier l'adresse, alphanumérique et sans caractères spéciaux";
//             }
//         }

//         function controlCity() {
//             const validAddress = contact.city;
//             if (/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,10}$/.test(validAddress)) {
//                 return true;
//             } else {
//                 let cityErrorMsg = document.getElementById('cityErrorMsg');
//                 cityErrorMsg.innerText = "Merci de vérifier le nom de la ville, 3 caractères minimum, avec des lettres uniquement";
//             }
//         }

//         function controlEmail() {
//             const validEmail = contact.email;
//             if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validEmail)) {
//                 return true;
//             } else {
//                 let emailErrorMsg = document.getElementById('emailErrorMsg');
//                 emailErrorMsg.innerText = "Erreur ! Email non valide";
//             }
//         }

//         function validControl() {
//             if (controlFirstName() && controlName() && controlAddress() && controlCity() && controlEmail()) {
//                 localStorage.setItem('contact', JSON.stringify(contact));
//                 return true;
//             } else {
//                 alert('Merci de revérifier les données du formulaire')
//             }
//         }
//         validControl()

//         const sendFormData = {
//             contact,
//             products,
//         }

//         const options = {
//             method: 'POST',
//             body: JSON.stringify(sendFormData),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         };

//         fetch("http://localhost:3000/api/products/order", options)
//             .then(response => response.json())
//             .then(data => {
//                 localStorage.setItem('orderId', data.orderId);
//                 if (validControl()) {
//                     document.location.href = 'confirmation.html?id=' + data.orderId;
//                 }
//             });
//     })
// }
// postForm();

function postForm() {
    const order = document.getElementById('order');
    order.addEventListener('click', (event) => {
        event.preventDefault();
        const contact = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            email: document.getElementById('email').value
        }

        function controlFirstName() {
            const validFirstName = contact.firstName;
            if (/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/.test(validFirstName)) {
                return true;
            } else {
                let firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
                firstNameErrorMsg.innerText = "Merci de vérifier le prénom, 3 caractères minimum";
            }
        }

        function controlName() {
            const validName = contact.lastName;
            if (/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/.test(validName)) {
                return true;
            } else {
                let lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
                lastNameErrorMsg.innerText = "Merci de vérifier le nom, 3 caractères minimum, avec des lettres uniquement";
            }
        }

        function controlAddress() {
            const validAddress = contact.address;
            if (/^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+$/.test(validAddress)) {
                return true;
            } else {
                let addressErrorMsg = document.getElementById('addressErrorMsg');
                addressErrorMsg.innerText = "Merci de vérifier l'adresse, alphanumérique et sans caractères spéciaux";
            }
        }

        function controlCity() {
            const validAddress = contact.city;
            if (/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,10}$/.test(validAddress)) {
                return true;
            } else {
                let cityErrorMsg = document.getElementById('cityErrorMsg');
                cityErrorMsg.innerText = "Merci de vérifier le nom de la ville, 3 caractères minimum, avec des lettres uniquement";
            }
        }

        function controlEmail() {
            const validEmail = contact.email;
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validEmail)) {
                return true;
            } else {
                let emailErrorMsg = document.getElementById('emailErrorMsg');
                emailErrorMsg.innerText = "Erreur ! Email non valide";
            }
        }

        function validControl() {
            if (controlFirstName() && controlName() && controlAddress() && controlCity() && controlEmail()) {
                localStorage.setItem('contact', JSON.stringify(contact));
                return true;
            } else {
                alert('Merci de revérifier les données du formulaire')
            }
        }
        validControl()

        const sendFormData = {
            contact,
            produit,
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(sendFormData),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        fetch("http://localhost:3000/api/products/order", options)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('orderId', data.orderId);
                if (validControl()) {
                    document.location.href = 'confirmation.html?id=' + data.orderId;
                }
            });
    })
}
postForm();
