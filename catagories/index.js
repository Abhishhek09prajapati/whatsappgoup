fetch('https://api.npoint.io/f1c1bf09eb96314477d5')
    .then(res => res.json())
    .then(data => {

        var maindiv = document.getElementById('maindiv1'); // spelling check

        data.catagories.forEach((e, i) => {
            var div = document.createElement("div");
            div.classList = "divcata"
            div.textContent = e;   // safer than innerHTML
            maindiv.append(div);
        });

    })
    .catch(err => console.log(err));