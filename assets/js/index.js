const propiedades_venta = [
  {
  nombre: 'Apartamento de lujo en zona exclusiva',
  src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
  descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
  ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
  habitaciones: 4,
  banos: 4,
  costo: "5.000",
  smoke: false,
  pets: false,
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: "1.200",
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: "4.500",
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Apartamento moderno en el centro',
    src: 'https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Moderno apartamento con fácil acceso a todas las comodidades del centro.',
    ubicacion: '123 Main Street, Metropolis, NY 54321',
    habitaciones: 1,
    banos: 1,
    costo: "1.800",
    smoke: false,
    pets: false,
  },
  {
    nombre: 'Apartamento con vistas al mar',
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Apartamento de lujo con vistas impresionantes al mar y balcón amplio.',
    ubicacion: '456 Ocean Drive, Beach Town, FL 12345',
    habitaciones: 3,
    banos: 2,
    costo: "3.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Apartamento rústico en el campo',
    src: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Encantador apartamento rústico con vistas al campo y a la playa.',
    ubicacion: '789 Country Lane, Ruralville, TX 67890',
    habitaciones: 2,
    banos: 1,
    costo: "1.000",
    smoke: false,
    pets: true,
  }
]

const propiedades_alquiler = [
  {
  nombre: 'Apartamento en el centro de la ciudad',
  src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
  descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
  ubicacion: '123 Main Street, Anytown, CA 91234',
  habitaciones: 2,
  banos: 1,
  costo: "2.000",
  smoke: false,
  pets: true,
  },
  {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    banos: 1,
    costo: "2.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 1,
    costo: "2.200",
    smoke: false,
    pets: false,
  },
  {
    nombre: 'Apartamento céntrico con jardín',
    src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Apartamento de 2 habitaciones con jardín privado en el centro.',
    ubicacion: '321 City Park, Urbania, WA 23456',
    habitaciones: 2,
    banos: 1,
    costo: "2.200",
    smoke: true,
    pets: false,
  },
  {
    nombre: 'Apartamento en el distrito financiero',
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Apartamento de lujo con todas las comodidades modernas.',
    ubicacion: '654 Financial St, Business City, IL 78901',
    habitaciones: 3,
    banos: 2,
    costo: "4.500",
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Apartamento minimalista',
    src: 'https://plus.unsplash.com/premium_photo-1683769252575-e986af039184?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Apartamento de 1 habitación con diseño minimalista y vistas a la ciudad.',
    ubicacion: '123 Minimalist Ave, Simple City, NJ 34567',
    habitaciones: 1,
    banos: 1,
    costo: "1.400",
    smoke: true,
    pets: false,
  },
  {
    nombre: 'Apartamento en edificio histórico',
    src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Apartamento de 3 habitaciones en un edificio histórico renovado.',
    ubicacion: '987 Old Town Rd, Historic City, NY 56789',
    habitaciones: 3,
    banos: 2,
    costo: "2.900",
    smoke: false,
    pets: true,
  }
]

const ventas=document.querySelector("#venta")
const rentas=document.querySelector("#alquiler")
const contenedorVenta=document.querySelector("#contenedor_ventas")
const contenedorAlquiler=document.querySelector("#contenedor_alquiler")

if (ventas!==null){
  let html=""
  let fumar=""
  let mascotas=""
  let colorFumar=""
  let colorMascotas=""
  let smokeBan=""
  let petsBan=""

  for (let venta of propiedades_venta){
    if (venta.smoke===true){
      fumar="Se permite fumar"
      colorFumar="text-success"
      smokeBan='"fas fa-smoking"'
    } else{
      fumar="No se permite fumar"
      colorFumar="text-danger"
      smokeBan='"fas fa-smoking-ban"'
    }

    if (venta.pets===true){
      mascotas="Mascotas permitidas"
      colorMascotas="text-success"
      petsBan= '"fas fa-paw"'
    } else{
      mascotas="No se permiten mascotas"
      colorMascotas="text-danger"
      petsBan='"fas fa-ban"'
    }

    html+=`
      <div class="d-flex col-md-4 col-sm-12 mt-4 justify-content-center">
      <div class="mb-4">
        <div class="card">
          <img
            src="${venta.src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title"> ${venta.nombre}</h5>
            <p class="card-text"> ${venta.descripcion}</p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${venta.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
            
            <p class=${colorFumar}>
            <i class=${smokeBan}></i> ${fumar}</p>

            <p class=${colorMascotas}>
              <i class=${petsBan}></i> ${mascotas}</p>
          </div>
        </div>
        </div>
      </div>
    `

  }
  contenedorVenta.innerHTML=html
}

if (rentas!==null){
  let html=""
  let fumar=""
  let mascotas=""
  let colorFumar=""
  let colorMascotas=""
  let smokeBan=""
  let petsBan=""

  for (let alquiler of propiedades_alquiler){
    if (alquiler.smoke===true){
      fumar="Se permite fumar"
      colorFumar="text-success"
      smokeBan='"fas fa-smoking"'
    } else{
      fumar="No se permite fumar"
      colorFumar="text-danger"
      smokeBan='"fas fa-smoking-ban"'
    }

    if (alquiler.pets===true){
      mascotas="Mascotas permitidas"
      colorMascotas="text-success"
      petsBan= '"fas fa-paw"'
    } else{
      mascotas="No se permiten mascotas"
      colorMascotas="text-danger"
      petsBan='"fas fa-ban"'
    }

    html+=`
      <div class="d-flex col-md-4 col-sm-12 mt-4 justify-content-center">
        <div class="mb-4">
          <div class="card">
            <img
              src="${alquiler.src}"
              class="card-img-top"
              alt="Imagen del departamento"
            />
            <div class="card-body">
              <h5 class="card-title"> ${alquiler.nombre}</h5>
              <p class="card-text">${alquiler.descripcion}</p>
              <p>
                <i class="fas fa-map-marker-alt"></i>${alquiler.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i>${alquiler.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${alquiler.banos} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i>${alquiler.costo}</p>
              
              <p class=${colorFumar}>
              <i class=${smokeBan}></i>${fumar}</p>

              <p class=${colorMascotas}>
                <i class=${petsBan}></i>${mascotas}</p>
            </div>
          </div>
        </div>
      </div>
    `

  }
  contenedorAlquiler.innerHTML=html 
}