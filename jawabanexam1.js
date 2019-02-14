//MEMPERLIHATKAN DATA DI TABEL
let arrdata = [
    {nama: "Sinka", umur: 22, job: "Artis", gender: "Wanita"},
    {nama: "Ronaldo", umur: 32, job: "Atlet", gender: "Pria"},
    {nama: "Fadli Zonk", umur: 50, job: "Politisi", gender: "Wanita"},
    {nama: "Norman", umur: 32, job: "Polisi", gender: "Pria"},
    {nama: "Tompi", umur: 35, job: "Dokter", gender: "Pria"},
    {nama: "Erik", umur: 40, job: "Teknisi", gender:"Pria"}
]

let arrjob = ["All","Artis","Atlet","Politisi","Polisi","Dokter", "Teknisi"]

let show1 = () => {
    var x = arrdata.map((val)=>
    `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        <td>${val.gender}</td>
        
    </tr>`
    )
    var y = arrjob.map((val) =>
        `<option value=${val}>${val}</option>`
    )

    document.getElementById("output").innerHTML = x.join("")
    document.getElementById("job").innerHTML = y.join("")

}
show1()

//MENAMBAH DATA
let sub = () =>{
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let job = document.getElementById("job2").value;
    let gender = document.getElementById("gen");

    arrdata.push({nama, umur, job, gender})

    var a = arrdata.map((val)=>
    `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        <td>${val.gender}</td>
    </tr>`
    )
    
    document.getElementById("output").innerHTML = a.join('')

    if (arrjob.includes(job) == false) {
        arrjob.push(job)
        }
    else{'Data not found'}

    var b = arrjob.map((val)=>
    `<option value="${val}">${val}</option>`
    )
    document.getElementById("job").innerHTML = b.join('')
}


//FILTER NAMA

var fn1 = () => {
    var filter, table, tr, td, i

    filter = document.getElementById("nam1").value.toUpperCase()
    table = document.getElementById("datasaya")
    tr = table.getElementsByTagName("tr")

    for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];

        if (td) {
            if(td.innerHTML.toUpperCase().includes(filter)){
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none"}
            
        }
    
    }

    console.log(filter);
    
}
fn1()
console.log(fn1)

//FILTER UMUR

var fn2 = () => {
    var table, tr, td, um1, um2

    table =document.getElementById("datasaya")
    tr = table.getElementsByTagName("tr")

    um1 = document.getElementById("um1").value
    um2 = document.getElementById("um2").value
    
    if(um1 == "" || um2 == ""){
        um1 = 0
        um2 = 999
    }

    for(i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[1]

        if(td){
            if(parseInt(td.innerHTML) >= um1 && parseInt(td.innerHTML) <= um2){
                tr[i].style.display = ""
            } else{
                tr[i].style.display = "none"
            }
        }
    
    }
}
fn2()

//FILTER JOB

var fn3 = () => {
    var table, td, tr, filter1

    filter1 = document.getElementById("job").value
    table = document.getElementById("datasaya")
    tr = table.getElementsByTagName("tr")

    for (i=0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[2]

        if(td){
            if (td.innerHTML.includes(filter1) || filter1 == "All"){
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none"
            }   
        }
    }
    console.log(td)
}
fn3()

// FILTER GENDER
var fn4 = () => {
    var table, td, tr, filter2

    filter2 = document.getElementById("gen1").value
    filter3 = document.getElementById("gen2").value
    table = document.getElementById("datasaya")
    tr = table.getElementsByTagName("tr")

    for (i=0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[3]

        if(td){
            if (td.innerHTML.includes(filter2)){
                tr[i].style.display = ""
            } else if (td.innerHTML.includes(filter3)){
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none"
            }
        }
    }
    console.log(td)
}
fn4()