class Person {
    constructor(name, apellido01, apellido02) {
      this.name = name;
      this.apellido01 = apellido01;
      this.apellido02 = apellido02;
    }

// Métodos de consulta (getters)

    getName() {
      return this.name;
    }
    getApellido01() {
      return this.apellido01;
    }
    getApellido02() {
      return this.apellido02;
    }

    // Métodos de modificación (setters)

    setName(newName) {
      this.name = newName;
    }
    setApellido01(newApellido01) {
      this.apellido01 = newApellido01;
    }
    setApellido02(newApellido02) {
      this.apellido02 = newApellido02;
    }


    // Método para saludo
    greet = () => console.log(`Hola, ${this.name}`);
  
}