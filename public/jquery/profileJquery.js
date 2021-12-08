function onSave() {
    let idBox = $('#IdProfile').val()
    let Name = $('#nameProfile_txt').val();
    let Password = $('#passwordProfile_txt').val();
    let Email = $('#emailProfile_txt').val();
    let TenKH = $('#tenKHProfile_txt').val();
    let DiaChi = $('#diachiProfile_txt').val();
    let SDT = $('#sdtProfile_txt').val();
    $.get(`/updateProfile/${idBox}/${Name}/${Password}/${Email}/${TenKH}/${DiaChi}/${SDT}`, (data, status) => {
        alert("Change Success! Please sign in again")
        window.location.reload("/profile.html")
    })
}

$(document).ready(() => {
    let id = JSON.parse(localStorage.getItem('user'))[0].id
    $.get(`/getProfile/${id}`, (data, status) => {
        result = `
        <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                    <a href = "./homepage"><img class="rounded-circle mt-5"src="./images/Logo 2.jpg" width="90"></a>
                    <span class="font-weight-bold">${data[0].TenKH}</span>
                    <span class="text-black-50">${data[0].Email}</span>
                    <span>${data[0].DiaChi}</span></div>
            </div>
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="text-right">Edit your profile</h6>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label class="labels">Username</label>
                            <input type="text" class="form-control" id = "nameProfile_txt" placeholder="Username" value = "${data[0].Name}">
                        </div>

                        <div class="col-md-6">
                            <label class="labels">Password</label>
                            <input type="text" class="form-control" id = "passwordProfile_txt" placeholder="Password" value = "${data[0].Password}">
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">Email</label>
                            <input type="text" class="form-control" id = "emailProfile_txt" placeholder="Email" value = "${data[0].Email}">
                        </div>

                        <div class="col-md-12">
                            <label class="labels">Ten KH</label>
                            <input type="text" class="form-control" id = "tenKHProfile_txt" placeholder="Ten KH" value = "${data[0].TenKH}">
                        </div>

                        <div class="col-md-12">
                            <label class="labels">Dia chi</label>
                            <input type="text" class="form-control" id = "diachiProfile_txt" placeholder="Dia Chi" value = "${data[0].DiaChi}">
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">SDT</label>
                            <input type="text" class="form-control" id = "sdtProfile_txt" placeholder="SDT" value = "${data[0].SDT}">
                        </div>
   
                        <input type="hidden" class="form-control" id = "IdProfile" value = "${data[0].id}">
                    </div>

                    <div class="mt-5 text-center">
                        <button class="btn btn-primary profile-button" type="button" onclick = "onSave()">Save Profile</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience">
                        <span>Contact</span>
                    </div>

                    <div class="d-flex flex-row mt-3 exp-container">
                        <img src="https://i.imgur.com/azSfBM3.png" width="45" height="45">
                        <div class="work-experience ml-1">
                            <span class="font-weight-bold d-block">Twitter</span>
                            <span class="d-block text-black-50 labels">Twitter Inc.</span>
                            <span class="d-block text-black-50 labels">March,2017 - May 2020</span>
                        </div>
                    </div>

                    <hr>

                    <div class="d-flex flex-row mt-3 exp-container">
                        <img src="https://img.icons8.com/color/100/000000/facebook.png" width="45" height="45">
                        <div class="work-experience ml-1">
                            <span class="font-weight-bold d-block">Facebook</span>
                            <span class="d-block text-black-50 labels">Facebook Inc.</span>
                            <span class="d-block text-black-50 labels">March,2017 - May 2020</span>
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex flex-row mt-3 exp-container">
                        <img src="https://img.icons8.com/color/50/000000/google-logo.png" width="45" height="45">
                        <div class="work-experience ml-1">
                            <span class="font-weight-bold d-block">Google</span>
                            <span class="d-block text-black-50 labels">Google Inc.</span>
                            <span class="d-block text-black-50 labels">March,2017 - May 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
        $('#content').html(result)
        console.log(data[0].TenKH)
    })
})

