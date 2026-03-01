var catagor = '';

fetch('https://api.npoint.io/f1c1bf09eb96314477d5')
    .then(res => res.json())
    .then(data => {

        var optionSelect = document.getElementById("selectcata");
        data.catagories.forEach((item) => {
            var option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            optionSelect.appendChild(option);
        });
        // ✅ change event select pe lagao
        optionSelect.addEventListener('change', function () {
            catagor = this.value;
        });

    })
    .catch(err => console.log(err));

var catago = localStorage.getItem('Catagories')

if(!catago){
    localStorage.setItem("Catagories","love group")
}


fetch('https://api.npoint.io/ec2ff67f87145e23f879')
    .then(res => res.json())
    .then(data => {


        const result = data.filter(e =>
            e.whatsappcata.toLowerCase() === catago.toLowerCase()
        );

        const maindiv = document.getElementById('maindiv');
        result.forEach((k, i) => {
            const div = document.createElement("div");
            div.className = "listitmes";
            div.textContent = k.WhatsappGorupName;

            div.addEventListener("click", () => {
                window.open(k.Whatsappgrouplinks, "_blank");
            });
            maindiv.append(div);
        })


    })
    .catch(err => console.error("Error:", err));


let div = document.querySelector(".addgroupdiv");
function addgroup() {
    if (div.style.display === "none") {
        div.style.display = "flex";
    } else {
        div.style.display = "none";
    }
}

document.querySelector('#closeid').addEventListener('click', () => {
    div.style.display = "none";
})

function addgroupbtn() {

    var groupname = document.getElementById("groupname").value.trim();
    var grouplink = document.getElementById("grouplink").value.trim();

    // Check empty fields
    if (!groupname || !grouplink) {
        alert("Please Enter Group Name and Link");
        return;
    }

    // Validate WhatsApp group link
    if (!grouplink.includes("https://chat.whatsapp.com/")) {
        alert("Please Enter Valid WhatsApp Group Link");
        return;
    }

    // Encode message properly
    var message = `Add my group: ${groupname}\nMy link: ${grouplink} in ${catagor}`;
    var encodedMessage = encodeURIComponent(message);

    var url = `https://wa.me/916387215755?text=${encodedMessage}`;

    window.open(url, "_blank");
}

function catagories() {
    window.location.href = "/catagories/index.html"
}