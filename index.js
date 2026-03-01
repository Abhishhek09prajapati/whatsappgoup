fetch('https://api.npoint.io/ec2ff67f87145e23f879')
    .then(res => res.json())  
    .then(data => {

        const maindiv = document.getElementById('maindiv');

        data.forEach(e => {

            const div = document.createElement("div");
            div.className = "listitmes";
            div.textContent = e.WhatsappGorupName;

            div.addEventListener("click", () => {
                window.open(e.Whatsappgrouplinks,"_blank");
            });

            maindiv.append(div);
        });
    })
    .catch(err => console.error("Error:", err)); 