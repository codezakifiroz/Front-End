

const audi = {400,"Audi","A1",2012,"4/5","Yes","Manual","Gasoline");
const vw_1 = new Car(300,"Golf 6","Volkswagen",2008,"4/5","Yes","Manual","Diesel")
const toyota = new Car(450,"Camry","Toyota",2006,"4/5","Yes","Automatic","Hybrid")
const bmw = new Car(560,320,"BMW",2012,"4/5","Yes","Manual","Diesel")
const mercedes = new Car(430,"Benz GLK","Mercedes",2006,"4/5","Yes","Manual","Diesel")
const vw_2 = new Car(340,"Passat CC","Volkswagen",2008,"4/5","Yes","Automatic","Gasoline")


var val = document.getElementsByClassName("field-input");
val[0]. = audi.ac;

const input_val = (obj)=>{
    // val[0].innerHTML = audi.price;
    val[1] = obj.model;
    val[2] = obj.mark;
    val[3] = obj.year;
    val[4] = obj.doors;
    val[5] = obj.ac;
    val[6] = obj.transmission;
    val[7] = obj.fuel;
    
}

input_val(audi);
