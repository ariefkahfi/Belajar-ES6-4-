"use strict";

//Penulisan properties method di dalam objek
//di ES6

var arief = "arief";

var nasabah = {};

nasabah.sayHello = function () {
    console.log('hello nasabah');
};

var person = {
    nama: arief,
    write: function write() {
        console.log(this.nama + " , writing ...");
    },
    drive: function drive() {
        console.log(this.nama + " driving...");
    },
    sleep: function sleep() {
        console.log(this.nama + " sleeping...");
    },
    code: function code() {
        console.log(this.nama + " coding...");
    }
};

var hello = function hello() {
    return { nama: "arief", alamat: "ME" };
};

function cat(jenis, makanan) {
    this.jenis = jenis;
    this.makanan = makanan;

    this.setJenis = function (jenis) {
        this.jenis = jenis;
    };

    this.setMakanan = function (makanan) {
        this.makanan = makanan;
    };
    this.getMakanan = function () {
        return this.makanan;
    };
}

console.log(hello());
nasabah.sayHello();

person.write();
person.drive();
person.sleep();
person.code();

//let anggora = new kucing("Anggora","Whiskas")

var hewan = new cat("Persia", "Ikan");

console.log(hewan.getMakanan());

//console.log(anggora.getMakanan())