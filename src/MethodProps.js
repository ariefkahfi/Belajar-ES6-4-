//Penulisan properties method di dalam objek
//di ES6

let arief = "arief"

let nasabah = {}

nasabah.sayHello = ()=>{
    console.log('hello nasabah')
}

let person = {
    nama:arief,
    write : function (){
        console.log(`${this.nama} , writing ...`)
    },
    drive(){
        console.log(this.nama + " driving...")
    },
    sleep(){
        console.log(this.nama  + " sleeping...")
    },
    code(){
        console.log(this.nama + " coding...")
    }
}


let hello = () =>({nama:"arief",alamat:"ME"})

function cat(jenis,makanan){
    this.jenis = jenis
    this.makanan=makanan

    this.setJenis = function(jenis){
        this.jenis=jenis
    }

    this.setMakanan = function (makanan){
        this.makanan=makanan
    }
    this.getMakanan = function (){
        return this.makanan
    }
}

console.log(hello())
nasabah.sayHello()

person.write()
person.drive()
person.sleep()
person.code()

//let anggora = new kucing("Anggora","Whiskas")

let hewan = new cat("Persia","Ikan")

console.log(hewan.getMakanan())

//console.log(anggora.getMakanan())
